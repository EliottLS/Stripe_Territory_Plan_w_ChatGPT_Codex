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

The forecast assumes starting pipeline can close within 90 days. Newly generated pipeline ramps at 40%, 70%, and 100% over successive 30-day phases. The model evaluates daily pipeline creation and includes expected revenue only where the sales cycle fits inside the 90-day horizon. Scenario factors are 0.8 / 1 / 1.2. Deal values and revenue targets must use the same annual revenue basis; payment volume is not Stripe revenue. Imported score components are provisional allocations.

## Publish on GitHub Pages

The included GitHub Actions workflow tests, builds, and deploys every push to `main`.

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open **Actions → Deploy website to GitHub Pages** and select **Run workflow** on `main` if a deployment has not already started.
4. Wait for the build and deployment jobs to pass. The deployment job provides the public URL.

Expected project URL: `https://eliottls.github.io/Website_Creation_w_ChatGPT_Codex/` (available only after successful deployment). Public repositories can use GitHub Pages on GitHub Free; private repositories require an eligible plan. The deployed site is public, so do not commit confidential territory data. Imports and notes remain local to each visitor's browser.

For a local interview backup, run `npm run build` followed by `npm run preview -- --port 5173`. Keep the local server running during the presentation; opening `dist/index.html` directly is not supported.


## Quarterly tracking and ramp planning

The Overview includes independent calendar-quarter actuals (revenue, target, calls, closed won/lost, as-of date). Q4 2026 starts with labelled illustrative values; other quarters start empty. Actuals are manually entered and browser-local. Actual win rate excludes open opportunities. Pacing compares achievement to elapsed calendar days and is not a deal forecast.

The book strategy defaults to 300 planned customers (50 big bets, 50 quick wins, 100 develop, 100 nurture). This is a planning allocation separate from the loaded account population. Loaded accounts are assigned by explicit mutually exclusive rules. All three ramp phases cover product, collaboration, admin/AI, territory intelligence, outreach, and pipeline/revenue.

Account Explorer includes keyboard-accessible hover explanations, expandable fit and opportunity rationale, and colour-coded product adoption. Fit component allocations remain illustrative; the app does not independently research scores.

Account briefs let users save verified LinkedIn or Sales Navigator profile URLs and contact names per suggested buying role. The outreach modal drafts InMail or connection notes, supports copying, and opens the verified profile. It does not send messages or connection requests, scrape LinkedIn, or invent people. Users complete actions on LinkedIn using their own account and subscription. Contact information, drafts and quarterly metrics are not synced across browsers.


## Resonate call coaching demo

The separate call coaching app lives in `resonate/`. Run `npm run dev:resonate` for development. `npm run build` produces Territory at the original site root and Resonate at `/resonate/`, preserving the existing Territory URL. Run `CHROMIUM_PATH=/usr/bin/chromium npm run test:resonate` for its browser checks. See `resonate/README.md` for demo capabilities and limitations.
