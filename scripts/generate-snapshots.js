import fs from "fs";
import path from "path";

const root = process.cwd();
const contentPath = path.join(root, "content", "pages.json");
const outDir = path.join(root, "public", "snapshots");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function buildJsonLd(pageKey, page) {
  return {
    "@context": "https://schema.org",
    organization: {
      "@type": "Organization",
      name: page.title,
      url: page.og?.url || undefined,
    },
    webpage: {
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: page.og?.url || undefined,
    },
  };
}

async function main() {
  const raw = fs.readFileSync(contentPath, "utf-8");
  const parsed = JSON.parse(raw);
  ensureDir(outDir);

  const pages = parsed.pages || {};

  // Write index file
  const index = { version: parsed.version || "1", pages: {} };
  for (const [k, v] of Object.entries(pages)) {
    index.pages[k] = { title: v.title, description: v.description, url: v.og?.url };
  }
  fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));

  for (const [key, page] of Object.entries(pages)) {
    const jsonOut = {
      version: parsed.version || "1",
      page: key,
      title: page.title,
      description: page.description,
      og: page.og || {},
      content: page.content || {},
      jsonld: buildJsonLd(key, page),
    };
    fs.writeFileSync(path.join(outDir, `${key}.json`), JSON.stringify(jsonOut, null, 2));

    // Build simple HTML snapshot
    const parts = [];
    parts.push("<!doctype html>");
    parts.push('<html lang="en">');
    parts.push("<head>");
    parts.push(`<meta charset=\"utf-8\">`);
    parts.push(`<title>${escapeHtml(page.title)}</title>`);
    parts.push(`<meta name=\"description\" content=\"${escapeHtml(page.description)}\">`);
    if (page.og?.image) parts.push(`<meta property=\"og:image\" content=\"${escapeHtml(page.og.image)}\">`);
    if (page.og?.title) parts.push(`<meta property=\"og:title\" content=\"${escapeHtml(page.og.title)}\">`);
    if (page.og?.description) parts.push(`<meta property=\"og:description\" content=\"${escapeHtml(page.og.description)}\">`);
    if (page.og?.url) parts.push(`<meta property=\"og:url\" content=\"${escapeHtml(page.og.url)}\">`);
    parts.push('<script type="application/ld+json">');
    parts.push(JSON.stringify(buildJsonLd(key, page)));
    parts.push('</script>');
    parts.push("</head>");
    parts.push("<body>");
    parts.push(`<h1>${escapeHtml(page.title)}</h1>`);
    parts.push(`<p>${escapeHtml(page.description)}</p>`);

    const content = page.content || {};
    for (const [section, sec] of Object.entries(content)) {
      parts.push(`<section><h2>${escapeHtml(section)}</h2>`);
      if (typeof sec === "object" && !Array.isArray(sec)) {
        for (const [k, v] of Object.entries(sec)) {
          if (Array.isArray(v)) {
            parts.push("<ul>");
            for (const item of v) {
              const title = item.title || item.heading || "";
              const desc = item.desc || item.description || "";
              parts.push(`<li><strong>${escapeHtml(title)}</strong>: ${escapeHtml(desc)}</li>`);
            }
            parts.push("</ul>");
          } else {
            parts.push(`<p>${escapeHtml(String(v))}</p>`);
          }
        }
      } else {
        parts.push(`<p>${escapeHtml(String(sec))}</p>`);
      }
      parts.push("</section>");
    }

    parts.push("</body>");
    parts.push("</html>");

    fs.writeFileSync(path.join(outDir, `${key}.html`), parts.join("\n"));
  }

  console.log(`Wrote ${Object.keys(pages).length} snapshots to ${outDir}`);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
