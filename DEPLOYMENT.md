# GitHub → Cloudflare Workers → crustpresso.com

Static site. The build copies `public/` to `dist/`. Cloudflare Workers serves those files as static assets. There is no Worker script and no server-side runtime.

The existing Cloudflare Pages project is left in place. This configuration does not attach `crustpresso.com` and does not change DNS. Attach the domain only after the Worker is verified on its `workers.dev` URL.

## Build

| Setting | Value |
| --- | --- |
| Worker name | `crustpresso-web` |
| Framework | None. Static HTML, CSS and JavaScript |
| Production branch | main |
| Root directory | repository root |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Asset directory | `dist` (set in `wrangler.jsonc`, not as a separate Pages output field) |
| Missing routes | nearest `404.html` |
| Environment variables | none |

`npm run deploy` builds, then runs `wrangler deploy`. Use that from a machine that is already logged in with Wrangler. In Workers Builds, keep build and deploy as two steps: `npm run build`, then `npx wrangler deploy`.

The Worker name is `crustpresso-web` so it can exist beside the current Pages project. The name in the Cloudflare dashboard must match `name` in `wrangler.jsonc`.

## Connect GitHub

1. In the Cloudflare dashboard, go to **Workers & Pages**.
2. Select **Create application**.
3. Select **Get started** next to **Import a repository**.
4. Choose the GitHub account and the `crustpresso-website` repository.
5. Set the production branch to `main`, the root directory to the repository root, the build command to `npm run build`, and leave the deploy command as `npx wrangler deploy`.
6. Set the project name to `crustpresso-web`.
7. Select **Save and Deploy**.
8. Open the `workers.dev` URL and review the site before changing any domain.

Do not delete the Pages project. Do not add a custom domain in this step.

## Connect crustpresso.com later

Do this only after the `workers.dev` site looks right. Adding the hostname creates DNS records and will start sending that hostname to the Worker. A hostname already attached to Pages has to be removed there first, or the dashboard will refuse the new record.

1. In **Workers & Pages**, open the existing Pages project and remove `crustpresso.com` and `www.crustpresso.com` from its custom domains. Leave the Pages project itself.
2. Open the `crustpresso-web` Worker.
3. Go to **Settings** → **Domains & Routes** → **Add** → **Custom Domain**.
4. Enter `crustpresso.com` and select **Add Custom Domain**.
5. Repeat for `www.crustpresso.com` only if that hostname should also hit the Worker. Otherwise keep the existing www-to-apex redirect.
6. Confirm both HTTPS and the apex/www behavior, then retire the Pages deployment.

`_headers` in `public/` is copied into `dist/` and is honored by Workers static assets.
