**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 2 June 2026 (Session 20)*

# 1. Purpose & Concept

Eventry (eventry.au) is Australia's sports events directory — a side project rooted in the experience of finishing a sporting event and wondering "what's next?" The name blends "Event" and "Entry." The platform serves both participants (discovering and entering events) and organisers (free listings with optional paid features). Monetisation is on hold pending legal advice regarding work conditions.

# 2. Infrastructure & Stack

- Domain: eventry.au via Crazy Domains (DNS A records to 75.2.60.5)
- Hosting: GitHub Pages (migrated from Netlify to avoid deploy limits); repo at github.com/eventry-au/eventry
- Database: Google Sheets; API layer: Google Apps Script (doGet/doPost)
- Stack: Pure HTML/CSS/JavaScript, no frameworks
- Analytics: Google Analytics G-FM7R4KLD57
- Contact: eventry.au@gmail.com

# 3. Pages Live

index.html, event.html, organiser.html, about.html, submit.html, pricing.html, guide.html, how-it-works.html

# 4. Partner Network

*Local-first strategy — Northern Beaches & Newcastle/Lake Macquarie focus, now expanding to SA and TAS. All partner data held at pending status until outreach is complete.*

## Current Partners — Approved (live on site)

- FlowiTri — Lucas McBeath (hello@flowitri.com.au) — card upgrade pitch sent 29 May. Follow up ~12 June.
- Mauro Swim Team — Peter Mauro (coach@mauroswimteam.com) — card upgrade pitch sent 29 May. Follow up ~12 June.
- Warners Bay Physiotherapy — Jeandre Theunissen (reception@warnersbayphysiotherapy.com.au) — card upgrade pitch sent 29 May, opened same day, no reply. 3rd touch total. Follow up ~12 June. **Primary physio relationship — activate Hunter Physio only if Warners Bay doesn't respond after 12 June.**
- Tailwind Nutrition — retail@tailwindnutrition.com.au — card upgrade email sent 1 June (web form blocked, used retail@ instead). Awaiting response.

## Current Partners — Pending (in sheet, outreach sent)

- Cycle Fitness Nutrition (PTR-CFN) — Glen, info@cyclefitnessnutrition.com — card upgrade email sent 1 June. First contact. Awaiting response.
- Hunter Physio Sports Clinic (PTR-HUNTERPHYSIO) — office@hunterphysio.com.au — **ON HOLD.** Activate after 12 June if Warners Bay Physio still no response.
- Vertigo MTB (PTR-VERTIGOMTB) — bookings@vertigomtb.com.au — **NOT CONTACTED YET.** Reach out after Icarus race dust settles (post 7 June). TAS MTB hire + shuttles, St Helens. First TAS partner.

## Partner Outreach Pipeline

**Warm contacts (approach first):**
- **Footmotion Newcastle — Jody** (personal connection, previously Pure Run Newcastle) — NOT YET CONTACTED. Call or DM directly. Running shoe store + weekly social run. Multiple Footmotion stores each with own weekly runs. Each weekly run = recurring social event listing on Eventry. HIGH PRIORITY.
- **Super Elliotts Cycles** — bikes@superelliotts.com.au — email sent 1 June. Awaiting response. 200 Rundle St Adelaide SA. In-person visit same day. First SA partner.

**Research leads (Tier A):**
- **Pace Athletic** — 7 Sydney running stores + own Blue Mountains Running Co in Glenbrook (same business). Weekly run clubs at Manly (Tue), Rozelle (Wed), Castle Hill (Thu), Crows Nest + more. Find contact email at paceathletic.com. Tier A partner + social run event listings.
- **Blue Mountains Running Co** — OWNED BY PACE ATHLETIC. Approach via Pace Athletic head office, not separately.
- **Lake Mac Penguins** — Coach Spot Anderson (hello@lakemacpenguins.com). Swim/tri coaching + monthly Swim Runs around Lake Mac. Dual partner + event source.

**Research leads (Tier B):**
- Vert Nutrition (vertnutrition.com.au)
- Neopro Cycling (neoprocycling.com.au)
- Activate Muscle Therapy — check Instagram first (no website found)
- Endu (endu1.com) — endurance fuel, surfaced as Run Forrest sponsor

**Partner review at 12 June:** Assess FlowiTri, Warners Bay, Mauro — if still no response after multiple touches, consider moving to pending and redirecting energy to new partners.

## Organiser Outreach Sent

- Those Guys Events — web form 28 May. Awaiting response.
- Coastal Track and Trail Runners (CTTR) — web form 28 May. Awaiting response.
- EventMatrix Pty Ltd (events@eventmatrix.com.au) — web form 28 May. Awaiting response.
- Quad Events Australia — web form 28 May. Awaiting response.
- RunThrough Australia — hello@runthroughaustralia.com — **BOUNCED.** Find correct contact via runthroughaustralia.com contact form or social DM.
- Terrigal Trotters (admin@terrigaltrotters.com.au) — email 28 May. Automated response received.
- Western Districts Joggers & Harriers (festivalofthefeet@westiesjoggers.com) — email 28 May. Opened, no reply.
- Sydney Striders — **CONVERTED.** Bruce Inglis self-submitted 10K Series (6 rounds live). Go-live + thank-you + logo request email sent Session 18.
- Newcastle Orienteering Club — Justin Stafford (president@newcastleorienteering.asn.au) — email 29 May. Follow up ~12 June.
- SARRC / Lindsay Gunn (office@sarrc.asn.au) — email 1 June. Barossa Marathon + Yurrebilla listed. Follow up ~15 June.
- Southern Exposure / Run Forrest — auto go-live email fired on approval 1 June. First contact via system trigger.

## Organiser Outreach Pending

- **Pedal Heads Inc** (info@pedalheads.org.au) — NOT YET. Reach out early next week after 7 June Icarus race. Congratulate on comeback, ask about future series rounds. Could be 4-6 events/year at St Helens TAS.
- **Wonderland Run / Adelaide Trail Runners** — no email found publicly. Contact via adelaidetrailrunners.com.au. Event now live on site.
- PB Events / Justin (justin@pbevents.com.au) — You Yangs / Werribee / Great Rail Run. Not yet contacted.

# 5. Current State

## Sheet status as of 2 June 2026 (Session 20)

- **~93 events showing** on live site
- **4 approved partners** live (FlowiTri, Mauro Swim Team, Tailwind Nutrition, Warners Bay Physio)
- **3 pending partners** in sheet (Cycle Fitness Nutrition, Hunter Physio Sports Clinic, Vertigo MTB)
- **Sheet1: 48 columns** (AV added this session = `recurring_end_date`). Key indices: B=status(1), I=event_name(8), J=event_date(9), AB=recurring(27), AV=recurring_end_date(47)
- **Test row "scocial tester"** still in sheet — delete it (it's showing live on the site)

## Key decisions / notes from Session 20

- **Recurring events overhaul complete** — see Section 7 for full design. Fully tested and live.
- **Monthly recurring uses multi-date picker** (not start+end dates) — organiser enters each date individually because monthly events don't always fall on the same day of the week. Last date entered = implicit end date.
- **GitHub web editor large file paste** can silently produce 0-byte files — always use the upload/replace method for large files (submit.html is ~1200 lines). Confirmed bug this session.
- **Google Sheets auto-converts bare date strings to Date objects** when read back via Apps Script — `row[idx].toString()` produces a full datetime string. Fixed with `instanceof Date` check → `.toISOString().split('T')[0]`.
- **Script Properties dedup keys persist between test runs** — use `clearRecurringProps()` helper or delete via Project Settings when retesting markPastEvents.

# 6. Immediate To-Do Queue (Priority Order)

## This week:
1. **Delete "scocial tester" test row** from live Google Sheet — it's showing on the site
2. **Delete Speers Point parkrun row** and resubmit via new submit.html (weekly recurring, proper end date)
3. **Reach out to Footmotion / Jody** — warm personal contact, call or DM. Partner listing + weekly social run event. HIGH PRIORITY.
4. **Reach out to Vertigo MTB** (bookings@vertigomtb.com.au) — after Icarus race dust settles post 7 June
5. **Reach out to Pedal Heads** (info@pedalheads.org.au) — early next week after 7 June race
6. **Find Pace Athletic contact email** — paceathletic.com — then draft partner + social run pitch

## 12 June follow-ups:
7. FlowiTri (Lucas McBeath) — 3 touches, opened, no reply
8. Warners Bay Physio (Jeandre Theunissen) — 3 touches, opened, no reply. **Decision point: if no response, move to pending and activate Hunter Physio**
9. Mauro Swim Team (Peter Mauro) — 2 touches
10. Newcastle Orienteering Club (Justin Stafford) — 1 touch

## ~15 June:
11. SARRC (Lindsay Gunn) — follow up if no response

## Events still to add:
12. Riverina Trail Series Round 5 (Fed Hill) — date TBC, check riverinatrails.com.au
13. CTTR events (Trails & Tails Coopernook Aug + Deep Creek Backyard Ultra Oct/Nov) — await response
14. Those Guys Events bulk add — await response
15. Newcastle Orienteering Club bulk add — await response
16. Barossa Run (13 Sep, SARRC, Lyndoch SA) — add when SARRC responds
17. Five Peaks Running Festival (SA, Yurrebilla trail) — check trailrunningsa.com
18. Bare Events portfolio — check bareevents.com.au for other Sydney trail events beyond Bare Creek
19. RunThrough Australia — Albert Park Melbourne, 12 July 2026, VIC, running, 5K/10K/HM. Add once contact resolved.
20. Townsville Running Festival — QLD, marathon + distances. Check dates and add.

## Admin:
21. RunThrough Australia — find correct contact via site form or social DM (email bounced)
22. Sri Chinmoy Marathon Team Australia — add to top-tier organiser outreach list alongside Race Hub Australia, Atlas Events, SingleTrack, H Events

# 7. Recurring Events — Design & Logic (Session 20)

**Status: BUILT, DEPLOYED, FULLY TESTED ✅**

## Architecture

**Col AV = `recurring_end_date`** — dual-use field:
- **Weekly:** stores a plain date string `YYYY-MM-DD` (the last date after which no new occurrences are generated)
- **Monthly:** stores a JSON array of remaining upcoming dates e.g. `["2026-08-02","2026-09-06"]`
- **Series mode / one-off / annual:** col AV left empty

## submit.html behaviour

- **Weekly:** Shows `First event date` (required) + `Last event date` (required). Hint: "We'll show one upcoming card at a time and auto-generate the next as each date passes."
- **Monthly:** Shows multi-date picker (up to 12 dates, `+Add another date` button). Hint: "Add each date individually — we'll show one card at a time and auto-generate the next as each date passes. The last date you enter is treated as the end of the listing."
- **Series mode:** Completely untouched — still writes one row per round.
- `toggleDateFields()` enforces `required` attribute dynamically on weekly end date.

## doPost behaviour

- **Weekly:** `getFirstFutureDate(weekly_start, 7)` advances start date to first occurrence on or after today. Writes 1 row. Col AV = `recurring_end_date` (date string).
- **Monthly:** Sorts `monthly_dates` array. Writes 1 row for `monthly_dates[0]`. Col AV = `JSON.stringify(monthly_dates.slice(1))` (remaining dates as JSON array).
- **Series:** Unchanged — writes one row per round, col AV empty.

## markPastEvents recurring logic

Runs daily (Midnight–1am AEST trigger). When a row with status `approved` has an event date in the past:
1. Marks row as `past`
2. Reads `recurring` (col AB) and col AV
3. **Weekly branch:** Parses col AV as date string (with `instanceof Date` guard for Sheets auto-conversion). Computes `nextDate = eventDate + 7 days`. If `nextDate > recurringEnd` → fire end email. Else → write new row, carry col AV forward. If occurrence after next > end → fire renewal email.
4. **Monthly branch:** Parses col AV as JSON array. Pops first item as `nextDate`, remainder = `stillRemaining`. If array was empty → fire end email. Else → write new row with `stillRemaining` in col AV. If `stillRemaining.length === 0` → fire renewal email (next row being written is the last one).
5. **Dedup guard:** Script Properties key `recur_next:<submission_id>:<date>` — prevents double-generation if trigger fires twice.
6. Auto-generated rows get status `approved` (not pending) — no manual review needed.

## Email triggers

- **Renewal email** (`sendRecurringRenewalEmail`): fires when the last occurrence row is written. Subject: "⏳ Your last [event] is coming up — want to extend?" BCC eventry.au@gmail.com.
- **End email** (`sendRecurringEndEmail`): fires when the last occurrence flips to past. Subject: "🏁 Your [event] listing has ended — want to relist?" BCC eventry.au@gmail.com.

## Key bug fixed this session

Google Sheets reads a bare date string from col AV back as a JavaScript `Date` object, not a string. `.toString()` then produces `"Sat Jun 27 2026 10:00:00 GMT+1000..."` which breaks the `new Date(colAvRaw)` comparison. Fix: `instanceof Date` check before processing.

```javascript
let colAvRaw = row[COL_RECURRING_END];
if (colAvRaw instanceof Date) {
  colAvRaw = colAvRaw.toISOString().split('T')[0];
} else {
  colAvRaw = (colAvRaw || '').toString().trim();
}
```

## Test results (Session 20) ✅

| Test | Result |
|---|---|
| Weekly form fields — required end date, correct labels | ✅ |
| Monthly form fields — multi-date picker, hint text | ✅ |
| Weekly payload — `recurring_end_date` as date string, 1 row written | ✅ |
| Monthly payload — `monthly_dates` sorted array, first date as active row | ✅ |
| Weekly sheet row col AV = plain date string | ✅ |
| Monthly sheet row col AV = JSON array of remaining dates | ✅ |
| markPastEvents weekly — new row +7 days, col AV carried forward as plain string | ✅ |
| markPastEvents monthly — new row from array, col AV shrunk | ✅ |
| Date object bug fix — col AV no longer stores full datetime string | ✅ |

## Cleanup still needed

- Delete Speers Point parkrun row and resubmit via new form (weekly recurring with proper end date)
- `clearRecurringProps()` helper remains in Code.gs — safe to leave, remove when convenient

# 8. Card Image Feature — Design & Logic

## Card states

- **Base card** (default): plain white card, no background
- **Background on** (`event_image_enabled = TRUE`): sport-type generic background for events; partner-supplied image only for partners
- **Supplied background** (`event_image_url` populated + enabled): organiser/partner's own photo
- **Logo** (`event_logo_enabled = TRUE` + `event_logo_url` populated): logo shown centre-right over background

## Event type card banners (already built)

submit.html event type options with card badges:
- 🏁 Race — competitive, with results/timing
- 🏋 Training — structured training session
- 🎉 Social — fun, community or non-competitive ← **use this for weekly run clubs**
- 🥇 Mixed — competitive and social combined

Social event cards show plain white (no background image) with the 🎉 SOCIAL badge. Correct and working.

## Sport background image map

```javascript
const SPORT_BACKGROUNDS = {
  'Running': '/assets/images/sports/running.jpg',
  'Adventure Racing': '/assets/images/sports/adventure_racing.jpg',
  'Cycling MTB': '/assets/images/sports/cycling_mtb.jpg',
  'Open Water Swimming': '/assets/images/sports/openwater.jpg',
  'Triathlon': '/assets/images/sports/triathlon.jpg',
  'Cycling': '/assets/images/sports/cycling.jpg',
  'Hiking': '/assets/images/sports/hiking.jpg',
  'Paddling': '/assets/images/sports/paddling.jpg',
};
```

# 9. Series & Go-Live Email — Design & Logic (Session 17)

## Series submission (rotating events)

- **Recurring** = same event, same place, repeating dates (parkrun). Vary date only, single venue/URL.
- **Series** = rotating venues, each round its own date/venue/URL (Sydney Striders, Newcastle OC).
- submit.html series toggle drives rotating mode. Payload: `series_mode: true` + `rounds: [{date, venue, event_url}]`
- doPost builds `rowSpecs`; one row per round. Top-level event_date/venue/url mirror round 1.

## Go-live-on-approval email

- `onApprovalEdit(e)` — installable On-edit trigger. Fires when col B → `approved`.
- Dedup key: `live:<timestamp>:<org_email>` in Script Properties. One email per submission.
- **Must be installable trigger, not simple onEdit** — simple triggers can't send email.
- Won't fire on markPastEvents (only acts on 'approved'; installable triggers don't fire on script-made edits).

# 10. Outreach Strategy Notes

## Email deliverability rules
- No "free" in subject lines
- No hyperlinks in body — plain text only
- Single clear CTA per email
- Web forms bypass spam filters entirely — use where available
- Opens without replies are normal — don't follow up before 14-day mark
- Mailtrack/Mailsuite installed on eventry.au@gmail.com for open tracking

## Social runs — listing approach
- Use event type `Social` in submit.html
- Recurring: weekly
- Price: free / 0
- No registration link required
- Each store location = its own listing (e.g. Footmotion Newcastle, Footmotion Maitland etc)
- These are good for community building and attracting run club partners

## Partner card upgrade pitch
- Visual approach: screenshot showing bland partner card between image-backed event cards
- Ask: send logo (PNG, transparent bg preferred) + background photo
- Subject line: "Your Eventry listing — wanted to show you something"

## Auto go-live email caveat
- Events added manually by Adriaan (not via submit.html) will trigger the go-live email when approved
- This is generally fine — organisers are happy to hear their event is live
- Be ready for occasional "we didn't submit this" response — have a friendly explanation ready

# 11. Research URL Audit — Status

## Already in sheet ✅
hevents.com.au, in2adventure.com.au, adventurejunkie.com.au, coasttokosci.com, parkrun.com.au, Rocky Trail Entertainment, eventlist.com.au, Coffs Running Festival, Rumble in the Jungle, Maitland River Run, Raffertys Coastal Run, Bouddi Coastal Run, Elephant Trail Race, Hounslow Classic, Pub to Pelican, Brisbane Trail Ultra, Blackall 100, Cairns Marathon Festival, The Guzzler Ultra, Cape to Cape MTB, Geo Bay Swim, The Black Pearl, Festival of the Feet, RunThrough AU (Sydney IRC + Olympic Park), Riverina Trail Series Rounds 3–4, Barossa Marathon Festival, Yurrebilla 56K Ultra, Run Forrest Trail Run, Noosa Enduro Trail Runs, Kangaroo Island Marathon, Wonderland Run, Bare Creek Trail Run

## Pending — confirm dates/details before adding
- Riverina Trail Series Round 5 (Fed Hill) — date TBC, check riverinatrails.com.au
- CTTR — Trails and Tails Coopernook (Aug 2026) + Deep Creek Backyard Ultra (Oct/Nov) — await CTTR response
- Sprint Series Lane Cove NSW + Anglesea VIC — 2026 dates not yet published on adventuresprint.com.au
- Those Guys Events remaining events — await response
- Newcastle Orienteering Club — await Justin Stafford response
- Barossa Run (13 Sep 2026, Lyndoch SA, SARRC) — add when SARRC responds
- Five Peaks Running Festival (SA, Yurrebilla trail) — trailrunningsa.com
- Bare Events portfolio — check bareevents.com.au for additional Sydney trail events
- RunThrough Australia — Albert Park Melbourne, 12 July 2026, VIC, 5K/10K/HM — add once contact resolved
- Townsville Running Festival — QLD, marathon + distances — check dates

## Categorised — not events to add
- runningcalendar.com.au — competitor/aggregator
- rundais.org — direct competitor (surfaced twice — monitor)
- ironman.com — too large/commercial for now
- rowingnsw.asn.au — governing body, source for future rowing events
- tenpin.org.au, bowlsnsw.com.au, swimming.org.au — out of scope
- oceanswims.com — competitor + open water event source
- First Light Marathon — New Zealand, out of scope
- activelocals.com.au — competitor (app-based)

# 12. On the Horizon

- **GA → Sheets sync** — Apps Script + GA Data API to populate views/clicks columns. Dependency for stats emails. Build when monetisation is live.
- **Past events toggle** — "View past events" filter on index.html. Low priority.
- **submit.html update** — add event_image_url and event_logo_url fields to organiser submission form
- **Location-based sorting** — show events closest to user's state first. Implement as auto-selected state filter pill. Build when per-state event count is high enough to matter.
- **Member pricing** — optional member_price per discipline. Plan: new col 48. Designed, not built.
- **"Show all recurring events" toggle** — index.html filter to show all occurrences of a recurring event rather than just the next one. Deferred — do after recurring overhaul is stable.
- Event cancellation detection — feasibility research
- Athlete profiles, What's Next feed, fitness platform integration — future roadmap

# 13. Key Learnings & Principles

- **Column alignment discipline:** Removing a sheet column requires adding a placeholder in Apps Script. Missing this caused `combinedNotes` to land in wrong column.
- **Cross-session continuity via EVENTRY-CONTEXT.md:** Regenerate at end of every session.
- **Batch changes before uploading:** Adriaan prefers to batch code changes before GitHub upload.
- **Partner data discipline:** Keep all partner records at pending until outreach is complete.
- **Duplicate the sheet tab** before structural changes as a backup.
- **no-cors masks all server failures:** submit.html posts with `mode: 'no-cors'`, so fetch resolves and success screen shows even when server never ran. Always verify via sheet, notification email, or Apps Script Executions log.
- **Apps Script Executions log is source of truth:** Executions panel (real-time toggle) shows every run + status.
- **Installable vs simple triggers:** Function literally named `onEdit` runs as simple trigger and CANNOT send email. Name it something else and add via Triggers panel as installable.
- **Series rows aren't grouped by submission_id:** Reliable same-submission key is `timestamp` col (AF, idx 31) + org_email.
- **GitHub image rename caveat:** Renaming on case-insensitive OS may produce corrupt file on Linux server. Re-upload the actual file after case-change rename.
- **Event format standard:** 48 columns matching Sheet1 (AV added Session 20). Dates in YYYY-MM-DD. Leave image/logo cols (AR–AU) empty unless enabling immediately. **Always add events via xlsx file rather than tab-separated rows** — tab-separated causes column alignment errors.
- **Domain cross-checks:** Always verify event URLs.
- **Auto go-live email fires on any approval** — including events Adriaan added manually. Generally fine, be ready to explain if organiser is surprised.
- **Social event cards** already work — event type 'Social' shows 🎉 SOCIAL badge, plain white card. No code change needed for run club listings.
- **Pace Athletic owns Blue Mountains Running Co** — same business (Trasa Holdings Pty Ltd). Approach via Pace Athletic head office only.
- **Google Sheets Date object auto-conversion:** When Apps Script reads a date-looking string from a cell, it returns a JS `Date` object, not a string. Always use `instanceof Date` guard before calling `.toString()` on any date cell value.
- **GitHub large file paste (web editor) can silently produce 0-byte files** — use the upload/replace method for files over ~500 lines. Confirmed with submit.html this session.
- **Script Properties dedup keys persist across test runs** — clear with `clearRecurringProps()` or via Project Settings when retesting markPastEvents.

# 14. Tools & Resources

- Claude in Chrome MCP — browser automation
- Mailtrack / Mailsuite — installed on eventry.au@gmail.com for open tracking
- Debugging globals: window._allPartners, window._allEvents, window._apiDebug
- Mobile preview: Navigate to about:blank, document.write() to create 390px phone-frame iframe
- Cache-busting: ctrl+shift+r; iframe cache-bust via ? + Date.now(); ?nocache=1
- GitHub file operations: navigate into file before three-dot delete menu appears
- GitHub folder upload: github.com/eventry-au/eventry/upload/main/path/to/folder
- **For large files (>500 lines): use GitHub upload/replace, NOT the web editor paste**
- DNS issues: Restart Starlink router to clear DNS cache
- **Apps Script triggers:**
  - markPastEvents — Time-driven, Day timer, Midnight–1am AEST. Live 28 May 2026.
  - onApprovalEdit — installable On-edit. Live 31 May 2026. Sends go-live email on status→approved, deduped per submission.

# 15. About Page — Locked Copy

*Committed to GitHub 25 May 2026.*

Eyebrow: OUR STORY | Headline: Built by athletes, for athletes.
Subtext: Eventry started with a simple question — what's next? Searching for that answer shouldn't be this hard. So we built the place we always wished existed.

Pull Quote: "What's next? We built the answer."

Roadmap: NOW: Australia's sports events directory. SOON: Featured listings and partner network. FUTURE: Athlete profiles, What's Next feed, fitness platform integration.

# 16. Development Roadmap (reconciled to Session 20)

## ✅ Built & Live

| Feature | Session |
|---|---|
| Skeleton cards + localStorage cache (10-min expiry) | 3 |
| Sport pills filter + normaliseSport() | 3–4 |
| Partner cards — injected every 6 events, sport + state filtered | 2–3 |
| Duplicate detection — flags col B as `duplicate`, orange formatting | 4 |
| Organiser confirmation email on submission | 4 |
| Adventure Racing + Obstacle Racing as distinct sport types | 4 |
| Recurring field (col AB) — weekly/monthly/annual | 4 |
| Cancellation/postponed event display — greyed card + status banner | 8 |
| Event type classification — Race/Training/Social/Mixed badge on cards | 8 |
| Series + championship ribbons — blue/amber, editorial control via col AI | 5–6 |
| Recurring event badge on cards | 6 |
| Go-live email on approval — installable trigger, deduped per submission | ~9 |
| markPastEvents — daily trigger, midnight AEST | ~9 |
| Card image/logo feature — event_image_enabled, event_logo_enabled cols AR–AU | ~9 |
| Enter key triggers search on index.html | 21 |
| Recurring events overhaul — single row written, auto-generation via markPastEvents, renewal + end emails, col AV | 20 |

## ⏳ Designed, Not Yet Built

- **Member pricing** — optional `member_price` per discipline. New col planned. Card shows public price; detail page shows member note. Designed, not built.
- **"Show all recurring events" toggle** — index.html filter to show all occurrences of a recurring event rather than just the next one. Deferred until recurring overhaul is stable.
- **GA → Sheets sync** — Apps Script + GA Data API to populate views/clicks columns (AK, AL). Dependency for organiser stats emails. Build when monetisation is live.
- **submit.html image/logo URL fields** — add event_image_url and event_logo_url fields to organiser submission form so organisers can self-serve card images. Sheet cols exist; form doesn't expose them yet.

## ❌ Not Yet Started

### Near-term (no blockers)

- **Top 5 sport pills + "More sports ▾" dropdown** — show 5 most-clicked sports by default, reveal full list on click. Dynamic based on GA click counts once GA→Sheets sync is live. Can be built statically first.
- **Admin dashboard** (password protected) — approve/reject events without opening Google Sheet, view pending submissions, quick featured toggle, basic analytics view. Removes dependency on sheet for daily ops.
- **Suburb/state cross-validation on submit form** — soft warning if suburb doesn't match state. Not a hard block.
- **Google Places autocomplete on venue field** — type venue, suggestions appear, validates existence, saves coordinates for future map display.

### Blocked on monetisation legal clearance

- **Stripe payments** — Featured listings $49 AUD per event. Payment flow in submit form, auto status → `featured` on confirmation.
- **GA reporting for organisers** — monthly stats email (views, clicks, register button clicks). Justifies Featured listing fee. Needs GA→Sheets sync first.

### Blocked on user accounts

- **User accounts** — email + password or Google SSO. Profile stores: name, state, sports, event history. Unlocks everything below.
- **Organiser self-service portal** — organisers manage own listings, edit events, upload logos, see stats. Currently all manual via Google Sheet.
- **QR event check-in** — one QR code per event (`eventry.au/checkin/EVT-xxx`). Participant scans → logs completion against Eventry profile.
- **Strava / Garmin / Apple Fitness integration** — link race activity to event entry, verified result via MSA/Sportsplits.
- **"What's Next?" personalised discovery** — the product north star. Based on athlete's history, location, sport preferences. Build fully before launching — don't release as half-built.

### Infrastructure (trigger-based)

- **Database migration** — Google Sheets → Supabase or similar when hitting 500+ events or performance issues.
- **Mailchimp migration** — newsletter subscribers currently in Google Sheet tab. Migrate at 100+ subscribers (Mailchimp free tier: 500 contacts, 1,000 emails/month).
- **hello@eventry.au branded email** — Google Workspace ~$8 AUD/month. Deferred, still using eventry.au@gmail.com.

# 17. Side Chat — Outstanding Items (as of Session 20)

Items surfaced in the side chat that haven't yet been actioned or fully captured in the main context doc. To be processed each session start.

## Events to add (enough info to proceed)

- **Campbell's Shepparton Running Festival** — 15–16 Aug 2026, Shepparton VIC. 27th annual. Marathon/HM/10K/5K/2K family fun run. AIMS-certified, Goulburn River course. Entry via RaceRoster. **NOTE: All distances SOLD OUT for 2026** — still worth listing for discovery + 2027 awareness. Organiser: Fit City Events (+61 430 472 975, contact via shepparton.run/contact). Add sold-out note in description.
- **Sole Motive remaining events** — Brighton Beach Marathon (30 Aug, VIC), Carmans Fun Run Sydney (20 Sep, NSW), Canberra Times Fun Run (date TBC). Follow up: name these events specifically in next Sole Motive contact.
- **180 Cadence remaining events** — Sydney's Backyard Ultra, Sydney Trail Marathon, STHM Night + Summer + Autumn editions, Parramatta HM. Follow up: name these in next 180 Cadence contact.
- **GNW Trail Running Festival** — 20 Sep 2026, 10K/30K/50K, Six Foot Track qualifier, NSW. Ready to add.
- **Sydney Backyard Ultra at St Ives** — 19 Sep 2026. Ready to add.
- **Lizard Log Trail Run** — Western Sydney Parklands. Research dates before adding.
- **Run Port Douglas** — 5 Sep 2026, QLD. Contact: info@runportdouglas.com.au. Entry via RaceRoster. Ready to add.

## Organiser outreach — new contacts surfaced

- **Fit City Events** — organiser behind Shepparton Running Festival. Check if they run other events beyond Shepparton. Contact: +61 430 472 975, shepparton.run/contact.
- **Fit City Tours** (fitcitytours.com.au) — appeared as Shepparton sponsor AND in Sydney Marathon Runners Facebook marketplace post (running tours of Sydney, Brisbane, Melbourne). May be same business as Fit City Events — worth checking. Potential warm connection.
- **SingleTrack Events** — top priority organiser. 11+ VIC trail events including Buffalo Stampede, Roller Coaster Run, Mt Buller SkyRun, Snow Gum Run, Razorback Run, Alpine Challenge, Wilsons Prom Running Festival, Kilcunda. One contact reaches 11 events.
- **The Event Team (WA)** — 6+ WA events including Dwellingup 100, Rottnest Channel Swim, HBF Run for a Reason, Perth Kilt Run, Backroads Gravel, Busselton Jetty Swim.
- **Cycling Classics / Yaffa Media** — Bowral Classic (18 Oct 2026, NSW). Ready to list. Not yet contacted.
- **AAA Racing** — D'Aguilar Two 'Ups' Marathon + Wildhorse event. QLD.
- **PB Events / Justin** (justin@pbevents.com.au) — You Yangs, Werribee, Great Rail Run. Not yet contacted.

## Partner outreach — new contacts surfaced

- **Bourkes Bicycles** — bikes@bourkesbicycles.com.au. Draft ready. Send 4 June (may already be sent — check tracker).
- **Pace Athletic** — if no reply by 16 June, email individual stores directly rather than head office.
- **Supplement Co** — Tier C partner. Not contacted.
- **Hennika Health** — Tier C partner. Not contacted.
- **MaraThongs** — Tier C partner. Not contacted.

## Events still to confirm/research

- **Runaway Noosa Marathon** — dates TBC. Research before adding.
- **Launceston Running Festival** — dates TBC. Research before adding.
- **Balmoral Burn** — dates TBC. Research before adding.
- **Washpool World Heritage Trail** — NSW. Research before adding.
- **Rainbow Beach Trail Run** — QLD. Research before adding.
- **Two Bays Trail, Kowen Trail Run, Stromlo Running Festival, UTA** — all confirmed events, not yet in sheet.
- **Brisbane Marathon, GC50** — confirmed events, not yet in sheet.
- **Six Inch Trail (WA), Perth Marathon** — confirmed events, not yet in sheet.

## RunThrough Australia — status

hello@runthroughaustralia.com is PERMANENTLY DEAD (bounced twice). Forward original email to info@runthrough.co.uk (UK head office) next session. 3 AU events already in sheet (Albert Park Melbourne 12 Jul, SIRC + Olympic Park Sydney).

## Destination Sport Experiences — new inbound (2 June)

Tessa Tumen-Ulzii (tsesun.tumen-ulzii@destinationsport.com) — CONVERTED inbound. Manages HYROX AU, Tri Travel, Sportive Breaks. KI Run Festival corrected (name + price updated). Logo + other events requested. CC list: Tessa, Jenna-belle, Shannon, Ashleigh. Follow up: logo (PNG transparent bg) + full 2026/27 AU event calendar.

## Outreach — follow-up timing reminders

- **Sole Motive** — follow up: name Brighton Beach Marathon, Carmans Fun Run Sydney, Canberra Times Fun Run specifically
- **180 Cadence** — follow up: name Backyard Ultra, Sydney Trail Marathon, STHM Night + Summer, Parramatta HM
- **TRSA** — follow up: ask about Twilight event
- **Pace Athletic** — if no reply by 16 June, email individual stores directly
- **Bourkes Bicycles** — send/sent 4 June (check tracker)
