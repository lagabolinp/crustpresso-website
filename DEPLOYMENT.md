# GitHub → Cloudflare → crustpresso.com

The ZIP contains the complete source. No accounts or DNS records were changed.

## 1. Open and review in Cursor

Extract the ZIP and open `crustpresso-website` as the project folder. Read `START_HERE.txt`. Open `Crustpresso_Preview.html` for an immediate preview, or run `npm run dev` for the editable version. Run `npm run check` and `npm run build` before publishing.

## 2. Create the GitHub repository

Recommended repository name: `crustpresso-website`. A private repository is fine. Create an empty repository without starter files if publishing this existing folder. In Cursor Source Control, initialize the project, commit the files, then publish/connect to your repository. Keep secrets out of the repository. The `.gitignore` excludes generated output and environment files.

Push the CONTENTS of the project folder so `package.json` is at the repository root. Do not push the ZIP itself as the website.

## 3. Connect Cloudflare Pages

Use the Pages Git integration workflow under Workers & Pages. Connect GitHub and grant access to this repository. If Cloudflare opens a Workers-specific form asking for a deploy command, return to the Pages creation flow for these settings.

| Setting | Value |
| --- | --- |
| Project name | crustpresso |
| Production branch | main |
| Framework preset | None |
| Root directory | repository root / blank |
| Build command | npm run build |
| Build output directory | dist |

No environment secrets, Functions, paid plugins or database are needed. Choose the free plan for this static site, subject to provider limits. Review the generated pages.dev address before attaching the domain. Git pushes to the production branch will trigger new builds through the Git integration.

## 4. Connect both domain names

Add `crustpresso.com` and `www.crustpresso.com` through the Pages project's Custom domains workflow. Follow the DNS records Cloudflare supplies; do not invent the pages.dev hostname. For the apex domain, Cloudflare requires the domain to be a zone on the same account and its assigned nameservers to be active. Preserve existing mail and other unrelated DNS records if importing or changing the zone.

Check both hostnames resolve and have valid HTTPS. Only then choose a permanent redirect from www to https://crustpresso.com, preserving path and query string, through Cloudflare's redirect controls. The site canonical URL is the apex domain. Check http/https and www/apex independently so both versions open reliably.

## Launch checks

- Desktop and mobile: hero, café stages, pizza stages and menu.
- Keyboard: navigation, stage buttons and FAQ.
- Reduced-motion setting: content remains readable without pinned pizza animation.
- WhatsApp opens +9779849272620 with the enquiry text.
- No opening date, location, price or passive-investment promise is implied.
- Both domain names load through HTTPS, including links opened from messaging apps.

Official references checked when preparing this package:
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
