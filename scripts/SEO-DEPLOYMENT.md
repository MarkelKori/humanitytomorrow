# Legacy Immortalism URL

The old HTML article has been replaced with a minimal browser redirect and a canonical URL. This removes the duplicate article after the files are uploaded, but HTML cannot send HTTP 301.

Deploy the rule in `immortalism-redirect.cloudflare.json` as a Cloudflare Single Redirect for the proxied domain. Add it to the existing redirect rules; do not replace other rules.

In Cloudflare: Rules → Redirect Rules → Create rule → Custom filter expression. Copy the expression from the JSON, select a static destination `https://humanitytomorrow.site/en/immortalism/`, status **301**, and enable **Preserve query string**. Deploy the rule.

Verify `/immortalism`, `/immortalism/`, and `/immortalism/index.html` return HTTP 301 with `Location: https://humanitytomorrow.site/en/immortalism/` (plus any original query string), and that the destination returns 200. The HTML fallback alone is not sufficient to pass this check.

# Language annotations

All localized public pages use reciprocal `en`, `ru`, `uk`, and `x-default` links. The Ukrainian URL folder stays `/ua/`; the language code is `uk`. Canonical URLs point to the page's own language. The sitemap includes only the localized canonical URLs.

# Future card

Each home page (`index.html`, `en/index.html`, `ru/index.html`, `ua/index.html`) retains its translated Future card inside `<template id="futureCardTemplate">`. It is inactive and does not occupy a grid cell.

To restore it, move the card out of the template and change the desktop `.topic-grid` rule from `repeat(2, minmax(0, 1fr))` to `repeat(3, minmax(0, 1fr))` in all four files. Keep the mobile single-column override. Existing translations, colors, and styles are preserved.
