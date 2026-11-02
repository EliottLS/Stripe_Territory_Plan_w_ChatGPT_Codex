# Resonate — sales call coaching demo

An independent interview demonstration for an account executive call-coaching platform. All call participants, commercial signals, and performance metrics are fictional. Not affiliated with LinkedIn, Stripe, Salesforce, or Gong.

## Develop

Requires Node.js 22+ and npm (CI uses Node 24).

```sh
npm ci
npm run dev:resonate
```

## Validate

```sh
npm test
npm run build
CHROMIUM_PATH=/usr/bin/chromium npm run test:resonate
```

`npm test` retains the repository's original model utility tests. The browser suite exercises the Resonate user journeys. Browser tests require Chromium and start Vite on port 4174.

## Demo workflows

- **The call:** illustrative call visual, searchable sample transcript, notes, local rule-based copilot, takeaways, and follow-up actions.
- **Coaching:** sample score and metrics, BANT / MEDDPPIC / value selling evidence checklists, strengths, and growth opportunities.
- **Performance:** fictional call history, period/account/industry filters, chart, and CSV export.
- **Learning:** expandable frameworks, YouTube and LinkedIn Learning search links, and a downloadable practice reminder.

Recording uploads support browser-local playback. TXT, VTT, and SRT uploads replace the transcript and update a clearly labelled keyword-based coaching estimate. This is not speech transcription, a live language model, speaker diarisation, or a validated performance assessment. Recording-only uploads retain sample coaching. Uploaded files, notes, and chat are session-only; no server receives them.

Email actions open a reviewed draft in the user's email app. CRM actions export draft JSON and calendar actions download a proposed ICS event. No messages are sent, CRM records changed, or attendees invited by this demo. A production implementation needs authenticated AI/transcription services, consent and retention controls, and OAuth integrations with the selected email, CRM, and calendar providers.

## Deployment

The included GitHub Pages workflow runs model tests, builds, and deploys pushes to main. Enable GitHub Actions as the Pages source in repository settings. For a local production preview, run `npm run build` then `npm run preview`.

Public path after deployment: https://eliottls.github.io/Website_Creation_w_ChatGPT_Codex/resonate/
The Territory application remains at the original root URL.
