# Territory — ANZ revenue workspace

An independent Stripe Account Executive interview demonstration. All included companies and commercial signals are fictional scenarios, not actual company intelligence or Stripe customer information.

## Develop

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm test
npm run build
CHROMIUM_PATH=/usr/bin/chromium npx playwright test
```

Browser tests require Chromium: `npx playwright install chromium`. The Playwright configuration starts its own Vite server on port 4173.

## Features

- Territory overview with segment opportunity chart, relationship mix, and priority accounts
- Searchable and filterable account explorer
- Account briefs with maturity, opportunity hypotheses, score components, provenance, editable next actions, and Markdown exports
- Adjustable 30/60/90-day strategy, weekly activity inputs, and scenario modelling
- CSV and Excel (.xlsx, first worksheet) imports with column mapping, preview, duplicate detection, and numeric validation
- CSV exports and a downloadable import template
- Browser-local persistence for accounts, next actions, and targets

Imports replace the territory after explicit review. Export current data first to retain a copy. Uploaded data stays in the browser; this demo has no backend, authentication, external enrichment, or actual Stripe product telemetry. Browser storage is device-specific and can be cleared by the browser.

The forecast assumes starting pipeline can close within 90 days. Newly generated pipeline is discounted by the fraction of the planning period remaining after the stated sales cycle. Scenario factors are 0.8 / 1 / 1.2. Deal values and revenue targets must use the same annual revenue basis; payment volume is not Stripe revenue. Imported score components are provisional allocations.

## Publish on GitHub Pages

The included GitHub Actions workflow tests, builds, and deploys every push to `main`.

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open **Actions → Deploy website to GitHub Pages** and select **Run workflow** on `main` if a deployment has not already started.
4. Wait for the build and deployment jobs to pass. The deployment job provides the public URL.

Expected project URL: `https://eliottls.github.io/Website_Creation_w_ChatGPT_Codex/` (available only after successful deployment). Public repositories can use GitHub Pages on GitHub Free; private repositories require an eligible plan. The deployed site is public, so do not commit confidential territory data. Imports and notes remain local to each visitor's browser.

For a local interview backup, run `npm run build` followed by `npm run preview -- --port 5173`. Keep the local server running during the presentation; opening `dist/index.html` directly is not supported.
