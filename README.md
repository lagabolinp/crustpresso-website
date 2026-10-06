# Crustpresso

Complete static website for the Crustpresso Café as a Service concept.

## Local use

Open `Crustpresso_Preview.html` directly for a self-contained snapshot. For editing, use Node 20+ and run `npm run dev`, then open http://localhost:5173. There are no dependencies to install.

- `public/index.html`: all website copy and page structure
- `public/styles.css`: responsive brand design
- `public/app.js`: café and pizza scroll stages, menu and operator journey
- `public/assets/`: bundled brand and generated concept imagery
- `scripts/`: local server, build and structural checks
- `CURSOR_PROMPT.md`: project instructions for Cursor Agent
- `DEPLOYMENT.md`: GitHub/Cloudflare handoff

Run `npm run check` and `npm run build`. Publish only `dist/`.

## Experience

Hero → café assembly → pizza making → food → neighbourhood vision → Café as a Service → operator pathway → participation principles → Crustpresso Zero → FAQs → WhatsApp.

Cafe animation uses six image stages; pizza uses eight. Both follow native scroll and have stage buttons. Cafe travel is about two viewports; pizza is also about two. Reduced-motion users see the pizza story without pinned animation with the finished cafe shown. No JavaScript still leaves all page content readable, with the finished cafe shown.

## Brand and content

The latest square-pizza emblem and generated café sequence are included. The café drawings are concept imagery; exact 50/50 spatial compliance and safe operational fit need final layout validation. There is no live menu, payment, order submission or operator application database. Contact is through WhatsApp.

## Hosting

Static-only; no framework service, database, API key or paid plugin. Use an eligible free hosting plan subject to provider limits. The existing domain's registration/renewal is separate. No hosting or DNS changes have been made by generating this package.

## Asset provenance

Logo, food photograph, pizza sequence and café assembly imagery were generated for the Crustpresso project. All are bundled; no external image hotlinks. Production HTML/CSS references reusable assets rather than embedding duplicate image bytes.
