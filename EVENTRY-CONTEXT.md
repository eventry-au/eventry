**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 1 June 2026 (Session 19)*

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

## Sheet status as of 1 June 2026 (Session 19)

- **~93 events showing** on live site (7 new events added this session)
- **4 approved partners** live (FlowiTri, Mauro Swim Team, Tailwind Nutrition, Warners Bay Physio)
- **3 pending partners** in sheet (Cycle Fitness Nutrition, Hunter Physio Sports Clinic, Vertigo MTB)
- **Sheet1: 47 columns** (AR–AU are image/logo fields). Key indices: B=status(1), I=event_name(8), J=event_date(9), N=venue(13), O=event_url(14), E=org_email(4), H=contact_name(7), AF=timestamp(31)
- **Test row "scocial tester"** still in sheet — delete it (it's showing live on the site)

## Events added Session 19 (1 June 2026)

| Submission ID | Event | Date | State |
|---|---|---|---|
| EVT-BAROSSAMARATHON-2026 | Barossa Marathon Festival | 23 Aug | SA |
| EVT-YURREBILLA-2026 | Yurrebilla 56K Ultra | 27 Sep | SA |
| EVT-RUNFORREST-2026 | Run Forrest Trail Run | 6 Jun | VIC |
| EVT-NOOSAENDURO-TRAIL-2026 | Noosa Enduro Trail Runs | 20 Jun | QLD |
| EVT-KIMARATHON-2026 | Kangaroo Island Marathon | 23 Aug | SA |
| EVT-WONDERLAND-2026 | Wonderland Run | 29–30 Aug | VIC |
| EVT-BARECREEK-2026 | Bare Creek Trail Run | 8 Nov | NSW |

## Key decisions / notes from Session 19

- **Views/clicks columns in sheet are NOT auto-populated from GA.** GA tracks independently. Build GA→Sheets sync later when monetisation is live — not now.
- **Social run cards** — `Social — fun, community or non-competitive` event type already exists in submit.html with its own card banner. No code changes needed. Use for Footmotion and Pace Athletic weekly run listings.
- **Non-responsive partner strategy** — partners who don't engage after multiple touches should move to pending at 12 June review. Partner section needs to be curated and meaningful.
- **SA coverage** — was zero SA events before this session. Now 3 SA events (Barossa Marathon, Yurrebilla, KI Marathon) + Super Elliotts as first SA partner candidate.
- **RunDais** (rundais.org) — direct Eventry competitor. Has surfaced twice now. Add to research/monitor list.
- **Pace Athletic owns Blue Mountains Running Co** — same business. Approach via Pace Athletic head office.

# 6. Immediate To-Do Queue (Priority Order)

## This week:
1. **Delete "scocial tester" test row** from live Google Sheet — it's showing on the site
2. **Reach out to Footmotion / Jody** — warm personal contact, call or DM. Partner listing + weekly social run event. HIGH PRIORITY.
3. **Reach out to Vertigo MTB** (bookings@vertigomtb.com.au) — after Icarus race dust settles post 7 June
4. **Reach out to Pedal Heads** (info@pedalheads.org.au) — early next week after 7 June race
5. **Find Pace Athletic contact email** — paceathletic.com — then draft partner + social run pitch

## 12 June follow-ups:
6. FlowiTri (Lucas McBeath) — 3 touches, opened, no reply
7. Warners Bay Physio (Jeandre Theunissen) — 3 touches, opened, no reply. **Decision point: if no response, move to pending and activate Hunter Physio**
8. Mauro Swim Team (Peter Mauro) — 2 touches
9. Newcastle Orienteering Club (Justin Stafford) — 1 touch

## ~15 June:
10. SARRC (Lindsay Gunn) — follow up if no response

## Events still to add:
11. Riverina Trail Series Round 5 (Fed Hill) — date TBC, check riverinatrails.com.au
12. CTTR events (Trails & Tails Coopernook Aug + Deep Creek Backyard Ultra Oct/Nov) — await response
13. Those Guys Events bulk add — await response
14. Newcastle Orienteering Club bulk add — await response
15. Barossa Run (13 Sep, SARRC, Lyndoch SA) — add when SARRC responds
16. Five Peaks Running Festival (SA, Yurrebilla trail) — check trailrunningsa.com
17. Bare Events portfolio — check bareevents.com.au for other Sydney trail events beyond Bare Creek

## Admin:
18. Update outreach tracker — downloaded and reloaded this session ✅
19. RunThrough Australia — find correct contact via site form or social DM

# 7. NEXT BUILD SESSION — Recurring Events Overhaul (HIGH PRIORITY)

**This is the priority build for the next dev session. Full spec below.**

## Problem with current recurring behaviour

When a weekly recurring event is submitted without an end date, doPost generates 10 rows and all 10 show as active cards simultaneously. This clutters the feed, inflates the event count, and is wrong UX.

## New behaviour spec

**What the organiser sees (submit.html):**
- When recurring = weekly or monthly is selected, an end date field becomes **required** (not optional)
- Guiding text: "We'll show one upcoming card at a time and auto-generate the next one as each date passes"

**What the system does (doPost):**
- Write only the **first upcoming occurrence** as a single row
- Store the recurrence frequency (weekly/monthly) and end date on that row (already have `recurring` column for frequency; may need to store end date somewhere — options: new col AV, or encode in notes as `[RECUR_END:YYYY-MM-DD]`)

**What happens when an occurrence passes (markPastEvents + new logic):**
- When a recurring row flips to `past`, check if next occurrence date ≤ end date
- If yes: write a new row for the next occurrence (copy all fields from the past row, update date only)
- If no: it was the last occurrence — trigger end-of-listing email (see below)
- **Second-to-last occurrence:** when the penultimate occurrence goes live (i.e. one more after this), send a **renewal warning email** to the organiser: "Your last [Event Name] is coming up on [date] — want to extend your listing?"
- **Last occurrence flips to past:** send **stats + relist email**: "Your [Event Name] listing has ended. Here's how it performed: X views, Y clicks. Want to relist?"

**Dedup guard:** Before writing a new row, check Script Properties for key `recur_next:<submission_id>:<date>` — only write if not already written. Prevents double-generation if trigger fires twice.

**Email dependency note:** The stats email (views/clicks) requires those columns to be populated. Currently they're 0. GA→Sheets sync is a future build. For now, the email can say "check your organiser page for stats" or omit stats until the sync is built.

## Files to change

- **submit.html** — add end date required validation when recurring selected
- **Apps Script doPost** — change recurring logic: write 1 row not N rows; store end date
- **Apps Script markPastEvents** — add auto-generation logic for next occurrence; add second-to-last detection; trigger emails
- **Apps Script** — add `sendRecurringRenewalEmail()` and `sendRecurringEndEmail()` functions

## Test recipe

1. Submit a weekly recurring event with start date = next Saturday, end date = 4 weeks later
2. Verify only 1 row written to sheet
3. Manually flip status to `past` on that row
4. Verify markPastEvents (or manual run) writes a new row for the following week
5. Repeat until second-to-last — verify renewal email fires once
6. Flip last row to past — verify end email fires

## Cleanup after build

- Delete Speers Point parkrun row and resubmit via new system
- Delete any existing test recurring rows

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
- St Helens MTB Icarus Race — entries closed for June 2026. Watch for future Pedal Heads series rounds.

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

- **Recurring events overhaul** — see Section 7 for full spec. **Next build session priority.**
- **GA → Sheets sync** — Apps Script + GA Data API to populate views/clicks columns. Dependency for stats emails. Build when monetisation is live.
- **Past events toggle** — "View past events" filter on index.html. Low priority.
- **submit.html update** — add event_image_url and event_logo_url fields to organiser submission form
- **Location-based sorting** — show events closest to user's state first. Implement as auto-selected state filter pill (not hard geo-sort). Build when per-state event count is high enough to matter. SA currently has 3 events.
- **Member pricing** — optional member_price per discipline. Plan: new col 48. Card shows non-member price; detail page shows member note. Designed, not built.
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
- **Event format standard:** 47 columns matching Sheet1. Dates in YYYY-MM-DD. Leave image/logo cols (AR–AU) empty unless enabling immediately. **Always add events via xlsx file rather than tab-separated rows** — tab-separated causes column alignment errors.
- **Domain cross-checks:** Always verify event URLs.
- **Auto go-live email fires on any approval** — including events Adriaan added manually. Generally fine, be ready to explain if organiser is surprised.
- **Social event cards** already work — event type 'Social' shows 🎉 SOCIAL badge, plain white card. No code change needed for run club listings.
- **Pace Athletic owns Blue Mountains Running Co** — same business (Trasa Holdings Pty Ltd). Approach via Pace Athletic head office only.

# 14. Tools & Resources

- Claude in Chrome MCP — browser automation
- Mailtrack / Mailsuite — installed on eventry.au@gmail.com for open tracking
- Debugging globals: window._allPartners, window._allEvents, window._apiDebug
- Mobile preview: Navigate to about:blank, document.write() to create 390px phone-frame iframe
- Cache-busting: ctrl+shift+r; iframe cache-bust via ? + Date.now(); ?nocache=1
- GitHub file operations: navigate into file before three-dot delete menu appears
- GitHub folder upload: github.com/eventry-au/eventry/upload/main/path/to/folder
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
