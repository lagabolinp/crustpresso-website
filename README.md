# Crustpresso

Complete static website for the Crustpresso Café as a Service concept.

## Local use

Open `Crustpresso_Preview.html` directly for a self-contained snapshot. For editing, use Node 20+ and run `npm run dev`, then open http://localhost:5173. The local server has no dependencies. Install packages before `npm run preview` or `npm run deploy`, which use Wrangler.

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

Static-only; no framework service, database, API key or paid plugin. Production is a Cloudflare Worker serving the `dist/` assets. There is no server-side runtime. `npm run build` copies `public/` to `dist/`. `npm run preview` serves that build locally with Wrangler. `npm run deploy` publishes the Worker. The Worker name is `crustpresso-web`, separate from the existing Pages project, and `wrangler.jsonc` does not attach `crustpresso.com`. See `DEPLOYMENT.md`.

## Asset provenance

Logo, food photograph, pizza sequence and café assembly imagery were generated for the Crustpresso project. All are bundled; no external image hotlinks. Production HTML/CSS references reusable assets rather than embedding duplicate image bytes.
