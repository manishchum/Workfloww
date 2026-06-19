const SHEET_NAME = '';
const SECRET_PROPERTY = 'PAYMENT_SHEET_WEBHOOK_SECRET';

// Add SECRET_PROPERTY in Apps Script Project Settings > Script Properties.

const HEADERS = [
  'created_at',
  'event_type',
  'razorpay_order_id',
  'razorpay_payment_id',
  'verified',
  'amount',
  'currency',
  'status',
  'method',
  'email',
  'contact',
  'fee',
  'tax',
  'captured',
  'receipt',
  'customer_name',
  'customer_email',
  'customer_phone',
  'designation',
  'company_name',
  'code',
  'description',
  'source',
  'step',
  'reason',
  'raw_json',
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const sharedSecret = PropertiesService
      .getScriptProperties()
      .getProperty(SECRET_PROPERTY);

    if (!sharedSecret || body.secret !== sharedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const record = body.record || {};
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const source = record.source || '';
      let targetSheetName = '';
      if (source.indexOf('beg_') === 0) {
        targetSheetName = 'Payments_Beginner';
      } else if (source.indexOf('hr_') === 0) {
        targetSheetName = 'Payments_HR';
      } else {
        // Fallback: Check description/receipt to determine sheet when source prefix is missing
        const desc = (record.description || record.payment?.description || '').toLowerCase();
        const receipt = (record.receipt || '').toLowerCase();
        if (desc.indexOf('hr') !== -1 || receipt.indexOf('hr') !== -1) {
          targetSheetName = 'Payments_HR';
        } else if (desc.indexOf('beg') !== -1 || desc.indexOf('essential') !== -1 || receipt.indexOf('beg') !== -1) {
          targetSheetName = 'Payments_Beginner';
        } else {
          // Default fallback sheet name
          targetSheetName = 'Payments_HR';
        }
      }

      const sheet = getSheet(targetSheetName);

      if (
        record.event_type === 'payment_verified' &&
        record.razorpay_payment_id &&
        hasPaymentId(sheet, record.razorpay_payment_id)
      ) {
        return jsonResponse({ ok: true, duplicate: true });
      }

      const row = [
        record.created_at || '',
        record.event_type || '',
        record.razorpay_order_id || '',
        record.razorpay_payment_id || '',
        valueOrBlank(record.verified),
        record.amount || record.payment?.amount || '',
        record.currency || record.payment?.currency || '',
        record.status || record.payment?.status || '',
        record.payment?.method || '',
        record.payment?.email || '',
        record.payment?.contact || '',
        valueOrBlank(record.payment?.fee),
        valueOrBlank(record.payment?.tax),
        valueOrBlank(record.payment?.captured),
        record.receipt || '',
        record.customer?.name || '',
        record.customer?.email || '',
        record.customer?.phone || '',
        record.customer?.designation || '',
        record.customer?.company_name || '',
        record.code || '',
        record.description || record.payment?.description || '',
        record.source || '',
        record.step || '',
        record.reason || '',
        JSON.stringify(record),
      ];

      let activeSheet = sheet;
      let existingRowIndex = findRowByOrderId(activeSheet, record.razorpay_order_id);

      // If not found in the designated sheet, check the other sheets as fallback
      if (existingRowIndex === -1 && record.razorpay_order_id) {
        const sheetsToCheck = ['Payments_HR', 'Payments_Beginner'];
        for (const name of sheetsToCheck) {
          if (name !== targetSheetName) {
            const checkSheet = getSheet(name);
            const foundIndex = findRowByOrderId(checkSheet, record.razorpay_order_id);
            if (foundIndex !== -1) {
              activeSheet = checkSheet;
              existingRowIndex = foundIndex;
              break;
            }
          }
        }
      }

      if (existingRowIndex !== -1) {
        const range = activeSheet.getRange(existingRowIndex, 1, 1, HEADERS.length);
        const existingValues = range.getValues()[0];

        // Preserve original metadata (customer details, source) if they are missing in the new event payload
        const columnsToMerge = [
          'customer_name',
          'customer_email',
          'customer_phone',
          'designation',
          'company_name',
          'source'
        ];

        for (const colName of columnsToMerge) {
          const idx = HEADERS.indexOf(colName);
          if (idx !== -1 && (!row[idx] || row[idx] === '')) {
            row[idx] = existingValues[idx] || '';
          }
        }

        range.setValues([row.map(safeCell)]);
      } else {
        activeSheet.appendRow(row.map(safeCell));
      }
      return jsonResponse({ ok: true });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return jsonResponse({ ok: false, error: 'Unable to store payment record' });
  }
}

function getSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function valueOrBlank(value) {
  return value === undefined || value === null ? '' : value;
}

function hasPaymentId(sheet, paymentId) {
  if (sheet.getLastRow() < 2) {
    return false;
  }

  const paymentIdColumn = HEADERS.indexOf('razorpay_payment_id') + 1;
  return sheet
    .getRange(2, paymentIdColumn, sheet.getLastRow() - 1, 1)
    .getValues()
    .some(([value]) => value === paymentId);
}

function safeCell(value) {
  if (typeof value === 'string' && /^[=+\-@]/.test(value)) {
    return `'${value}`;
  }

  return value;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function findRowByOrderId(sheet, orderId) {
  if (!orderId || sheet.getLastRow() < 2) {
    return -1;
  }

  const orderIdColumn = HEADERS.indexOf('razorpay_order_id') + 1;
  const values = sheet
    .getRange(2, orderIdColumn, sheet.getLastRow() - 1, 1)
    .getValues();

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === orderId) {
      return i + 2; // 1-based index (2 is the first data row)
    }
  }

  return -1;
}
