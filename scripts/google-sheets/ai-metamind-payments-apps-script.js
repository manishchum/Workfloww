const SHEET_NAME = 'Payments';
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
      const sheet = getSheet();

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
        record.code || '',
        record.description || record.payment?.description || '',
        record.source || '',
        record.step || '',
        record.reason || '',
        JSON.stringify(record),
      ];

      sheet.appendRow(row.map(safeCell));
      return jsonResponse({ ok: true });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return jsonResponse({ ok: false, error: 'Unable to store payment record' });
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

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
