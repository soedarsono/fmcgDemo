# fmcgDemo

[Open the public demo](https://soedarsono.github.io/fmcgDemo/)

An interactive, static layout preview of the customized FMCG Workspace based on Odoo. It recreates the main navigation, hover menus, workflow diagram, purple active tabs, lists, forms, settings, import previews and financial report layouts. Indonesian and English are available from the top bar.

## Try it

- Hover an application icon or diagram card, then choose a function.
- Open **Database → Addresses** to search 320 fictional stores across 38 Indonesian provinces.
- Click a record, edit its fields and save. Changes stay in your browser.
- Try Inventory's recent-activity period filter, price groups, promotions and address review.
- Open Accounting for illustrative profit and loss, balance sheet and cash flow reports, CSV export, and print/PDF.
- Drag a CSV/TXT/TSV file anywhere to preview it locally, or use the included sample bank statement.

This is a layout and interaction demonstration, **not a running Odoo deployment**. No PostgreSQL, Odoo backend, login or bank connection is present. There are no real customer exports or credentials. Record examples are fictional; posted accounting, tax compliance, reconciliation and linked transaction processing are not implemented here. Financial reports use a fixed balanced illustrative ledger and do not recalculate when operational examples are edited. Imported files are only previewed in the browser and are never uploaded by this application.

Use the **DEMO** button for details or to reset sample records. Profile preferences and edits are stored in this browser's local storage, not shared with other visitors. GitHub Pages serves the static files; normal hosting access logs may apply.

## Development

No build or package installation is needed. Serve this directory using any static HTTP server. For example, if Python is already installed:

```sh
python -m http.server 8080
```

Then visit `http://localhost:8080/`. Use an HTTP server, rather than opening `index.html` directly, because the application uses JavaScript modules. GitHub Pages publishes the `main` branch root. Hash routes allow refreshes and shared links to work without server rewrites.

Files: `app.js` handles views and browser interactions; `app.css` provides presentation; `routes.js` defines screens and menus; `flow-data.js` defines the diagram; `i18n.js` provides the bilingual UI catalog; `data.js` contains synthetic records and fixed example reports. `assets/` contains application icons.

## License and attribution

The demo code is distributed under LGPL-3.0-or-later; see `LICENSE.txt`. Sales, Inventory and Purchase icons originate from Odoo Community, copyright Odoo S.A. and contributors. Custom Accounting and Database icons, workflow definitions and translations are adapted from this project's Odoo customization. See `NOTICE.md` and `ODOO-COPYRIGHT.txt`. This independent demo is not an official Odoo, BCA, Mandiri or ND6 service.

[Baca README Bahasa Indonesia](README-ID.md)
