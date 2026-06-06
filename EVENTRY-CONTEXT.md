**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 5 June 2026 (Session 24)*

*For the full project backstory (Sessions 1–22), see EVENTRY-HISTORY.md — the narrative archive. This document is the working handover: current state, live to-do queue, active outreach.*

---

# Session 24 Summary (5 June 2026)

Urgent fixes, price bug, card images, Kokoda + Bloody Long Walk events added, outreach corrections.

## Fixes deployed this session

- **doGet date guard** — `event_date` and `event_end_date` now use `instanceof Date` guard in doGet. Deployed. Fixes `#########` on cards.
- **"Varies" price bug** — `price: parseFloat(d.price) || 0` in `loadLiveEvents` was converting `"varies"` to `0` → showing as "Free". Fixed in two places: doGet (`price: isNaN(parseFloat(obj.price)) ? (obj.price || '') : parseFloat(obj.price)`) and index.html (`loadLiveEvents` mapping + `hasVaries` check in `renderEvents`). All three deployed.
- **Event card images** — 43 approved events had `event_image_enabled = FALSE`. All set to `TRUE` in sheet. Every card now has a background image.
- **`cycling_road` sport type** — maps to `'Cycling'` via `normaliseSport()`, which already has a background in `SPORT_BACKGROUNDS`. No code change needed.

## Events added this session

**Kokoda Challenge (3 new — Gold Coast already existed):**
- EVT-KOKODA-SC-2026 — Sunshine Coast — past (9 May, Kenilworth QLD, Imbil State Forest)
- EVT-KOKODA-BNE-2026 — Brisbane — approved (13 Jun, Brookfield Reserve QLD)
- EVT-KOKODA-SYD-2026 — Sydney — approved (19–20 Sep, Helensburgh NSW, Royal & Heathcote NPs)

**The Bloody Long Walk (9 events, Mito Foundation):**
- EVT-BLW-MEL-2026 — Melbourne — past (17 May, Yarra Bend → St Kilda)
- EVT-BLW-SC-2026 — Sunshine Coast — past (31 May, Coolum → Mooloolaba)
- EVT-BLW-BNE-2026 — Brisbane — approved (21 Jun, Sandgate → Brisbane Botanic Gardens)
- EVT-BLW-SYDNORTH-2026 — Sydney North — approved (2 Aug, Palm Beach → Manly)
- EVT-BLW-NEWCASTLE-2026 — Newcastle — approved (23 Aug, Barton Field Maitland → Newcastle Foreshore)
- EVT-BLW-PERTH-2026 — Perth — approved (13 Sep, South Perth → Cottesloe)
- EVT-BLW-ADL-2026 — Adelaide — approved (18 Oct, Carrick Hill → Glenelg)
- EVT-BLW-MORNINGTON-2026 — Mornington Peninsula — approved (25 Oct, Point Nepean → Martha Cove)
- EVT-BLW-SYDEAST-2026 — Sydney East — approved (15 Nov, Malabar → The Rocks)

## Decisions made this session

- **Ten Trails of Garigal** — Instagram "postponed" note was unverified. Registration is open at $120 for 6 Sep 2026. Left as approved/active. ✅
- **Coast to Kosciuszko** — ballot/invitational note added to sheet notes column. ✅
- **Charity/fundraising listing policy** — formalised:
  - **List** participatory events with open entry + fundraising requirement (Kokoda, Bloody Long Walk). Flag in notes.
  - **Skip** invite-only/corporate/high-barrier events (ARA Ride for Good — 50 places, $10K commitment). ✅

## Outreach this session

- **Mito Foundation** — go-live emails bounced (info@bloodylongwalk.com.au dead). Correct address: **bloodylongwalk@mito.org.au**. Sheet updated. Manual intro sent 5 June. Auto-reply received. Follow up ~19 June.
- **SingleTrack Events** (hello@singletrack.com.au) — intro sent 5 June (drafted 4 June, not sent until today). Follow up ~19 June.
- **Race Hub Australia** (sara@racehubaustralia.com) — intro sent 5 June (drafted 4 June). Follow up ~19 June.
- **Pedalheads Inc** (info@pedalheads.org.au) — intro sent 5 June post-Icarus race. Follow up ~19 June.

## Apps Script quota note

On 4 June, `onApprovalEdit` hit Google's 100 emails/day quota during a large batch approval. No action needed — quota resets at midnight. **For future large batch approvals (>80 rows with org_email): spread across two days.**

## Sheet state at end of Session 24

- **~149 approved events** (136 + 12 new Kokoda/BLW + 1 past adjustment)
- **13 past events**
- **7 partners** (5 approved + 2 pending: Hunter Physio, Vertigo MTB)
- **2 newsletter subscribers**
- Sheet still two tabs only: Sheet1 + Newsletter Subscribers.

---

# 1. Purpose & Concept

Eventry (eventry.au) is Australia's sports events directory — a side project rooted in the experience of finishing a sporting event and wondering "what's next?" The name blends "Event" and "Entry." The platform serves both participants (discovering and entering events) and organisers (free listings with optional paid features). Monetisation is on hold pending legal advice regarding work conditions.

# 2. Infrastructure & Stack

- Domain: eventry.au via Crazy Domains (DNS A records to 75.2.60.5)
- Hosting: GitHub Pages (migrated from Netlify to avoid deploy limits); repo at github.com/eventry-au/eventry
- Database: Google Sheets (Eventry_Events.xlsx); API layer: Google Apps Script (doGet/doPost)
- Stack: Pure HTML/CSS/JavaScript, no frameworks
- Analytics: Google Analytics G-FM7R4KLD57
- Contact: eventry.au@gmail.com

## Google Sheet structure

**Eventry_Events.xlsx has exactly two tabs:**
- **Sheet1** — all events and partners (EVT- and PTR- prefixed rows)
- **Newsletter Subscribers** — people who signed up for the newsletter (SUB- prefixed rows)

When auditing the sheet, only reference these two tabs. All old backup tabs were deleted in Session 22. Sheet1 has 48 columns (AV = `recurring_end_date`).

**Sheet1 key column indices:** B=status(1), I=event_name(8), J=event_date(9), Q=sport(16), R=disc_subtype(17), S=disc_name(18), AB=recurring(27), AC=event_type(28), AV=recurring_end_date(47)

**Current sheet counts (as of 5 June 2026, end of Session 24):**
- ~149 approved events + 13 past events
- 5 approved partners (FlowiTri, Mauro Swim Team, Cycle Fitness Nutrition, Tailwind Nutrition, Warners Bay Physio)
- 2 pending partners (Hunter Physio Sports Clinic, Vertigo MTB)
- 2 newsletter subscribers

# 3. Pages Live

index.html, event.html, organiser.html, about.html, submit.html, pricing.html, guide.html, how-it-works.html

# 4. Partner Network

*Local-first strategy — Northern Beaches & Newcastle/Lake Macquarie focus, now expanding to SA and TAS. All partner data held at pending status until outreach is complete.*

## Current Partners — Approved (live on site)

- **FlowiTri** — Lucas McBeath (hello@flowitri.com.au) — card upgrade pitch sent 29 May. Follow up ~12 June.
- **Mauro Swim Team** — Peter Mauro (coach@mauroswimteam.com) — card upgrade pitch sent 29 May. Follow up ~12 June.
- **Warners Bay Physiotherapy** — Jeandre Theunissen (reception@warnersbayphysiotherapy.com.au) — card upgrade pitch sent 29 May. 3 touches total. Follow up ~12 June. **Primary physio relationship — activate Hunter Physio only if Warners Bay doesn't respond after 12 June.**
- **Tailwind Nutrition** — retail@tailwindnutrition.com.au — card upgrade email sent 1 June. Follow up ~16 June.
- **Cycle Fitness Nutrition** (PTR-CFN) — Glen, info@cyclefitnessnutrition.com — card upgrade email sent 1 June, opened within 24hrs. Follow up ~15 June.

## Current Partners — Pending (in sheet, not yet live)

- **Hunter Physio Sports Clinic** (PTR-HUNTERPHYSIO) — ON HOLD. Activate after 12 June if Warners Bay still no response.
- **Vertigo MTB** (PTR-VERTIGOMTB) — bookings@vertigomtb.com.au — NOT CONTACTED YET. Reach out now (post-Icarus 7 June). TAS MTB hire + shuttles, St Helens.

## Partner Outreach Pipeline

**Warm contacts (approach first):**
- **Footmotion Newcastle — Jody** — NOT YET CONTACTED. Call or DM directly. HIGH PRIORITY. Running shoe store + weekly social run. Multiple stores each with own weekly runs = recurring social event listings.
- **Bourkes Bicycles** — info@bourkesbicycles.com.au — email sent 4 June. Follow up ~18 June.
- **Super Elliotts Cycles** — bikes@superelliotts.com.au — email + in-person visit 1 June. Follow up ~15 June.

**Research leads (Tier A):**
- **Pace Athletic** — rosebery@paceathletic.com — email sent 2 June. 7 Sydney stores + Blue Mountains Running Co (same business, Trasa Holdings). Follow up ~16 June, then individual stores if no reply.
- **Lake Mac Penguins** — Coach Spot Anderson (hello@lakemacpenguins.com) — email sent 2 June. Follow up ~16 June.

**Research leads (Tier B):**
- **Vert Nutrition** (ben@vertnutrition.com.au) — email sent 2 June. Follow up ~16 June.
- **Neopro Cycling** (neoprocycling.com.au) — not yet contacted.
- **Activate Muscle Therapy** — check Instagram first.
- **Endu** (endu1.com) — endurance fuel. Not yet contacted.

**Research leads (Tier C):**
- **Supplement Co**, **Hennika Health**, **MaraThongs**, **Marty Smith / Ten Lifestyles** — verify fit before reaching out.

**Watch list:**
- **Runly** (runly.com.au) — assess before approaching.
- **MSA / Multisport Australia / Sportsplits** — strategic results integration, not partner-card listing.

## Organiser Outreach — Active

- **Sydney Striders** (Bruce Inglis) — CONVERTED. 10K Series 6 rounds live.
- **Destination Sport Experiences** (Tessa Tumen-ulzii) — CONVERTED inbound 2 June. HYROX AU, Tri Travel, Sportive Breaks. Follow up ~16 June: logo + full 2026/27 AU calendar.
- **Sport 3 / Adam Goodger** — CONVERTED 3 June. GC50 live. Research full Sport 3 portfolio.
- **Coffs Trail Runners** (admin@coffstrailrunners.com) — opened + clicked within 1 min of 4 June intro. HOT lead. Follow up ~19 June.
- **Race Hub Australia** (sara@racehubaustralia.com) — intro sent 5 June. Follow up ~19 June.
- **SingleTrack Events** (hello@singletrack.com.au) — intro sent 5 June. Follow up ~19 June. Partnerships contact: colin@singletrack.com.au.
- **Pedalheads Inc** (info@pedalheads.org.au) — intro sent 5 June post-Icarus. Follow up ~19 June.
- **Mito Foundation / Bloody Long Walk** (bloodylongwalk@mito.org.au) — intro sent 5 June. Auto-reply received. Follow up ~19 June.
- **Kokoda Youth Foundation** (info@kokodachallenge.com) — intro sent 4 June. Now have 4 events listed. Follow up ~19 June.
- **Run Queensland** (info@runqueensland.com) — intro sent 4 June. 5 events listed. Follow up ~19 June.
- **The Event Team WA** (info@theeventteam.com.au) — intro sent 4 June. 4 events listed. Follow up ~19 June.
- **H Events** (admin@hevents.com.au) — intro sent 4 June. Local Newcastle. Follow up ~19 June.
- **Rapid Ascent** (info@rapidascent.com.au) — intro sent 4 June. Multi-discipline. Gravel Muster + Surf Coast Century still to add. Follow up ~19 June.

**12 June follow-ups:**
- FlowiTri (Lucas McBeath) — 3 touches, opened, no reply
- Warners Bay Physio (Jeandre Theunissen) — 3 touches, no reply. **Decision point: activate Hunter Physio if still no response.**
- Mauro Swim Team (Peter Mauro) — 2 touches
- Newcastle Orienteering Club (Justin Stafford) — 1 touch

**~15–16 June follow-ups:**
- SARRC (Lindsay Gunn), Cycle Fitness Nutrition (Glen), Tailwind Nutrition, Super Elliotts Cycles, Pace Athletic (then individual stores), Lake Mac Penguins (Spot Anderson), Vert Nutrition (Ben), MVCC, NHCC, TRSA, Sole Motive, 180 Cadence, Running Wild NSW, Destination Sport

**~18 June:**
- Bourkes Bicycles

**~19 June:**
- All intros sent 4–5 June (Race Hub, SingleTrack, Pedalheads, Mito Foundation, Kokoda, Run QLD, Event Team WA, H Events, Rapid Ascent, Coffs Trail Runners, and all ~30 incident-recovery intros from 4 June)

## Organiser Outreach Pending (not yet contacted)

- **Vertigo MTB** (bookings@vertigomtb.com.au) — reach out now post-Icarus
- **Footmotion / Jody** — HIGH PRIORITY warm personal contact, call or DM
- **Cycling Classics / Yaffa Media** (cyclingclassics.com.au/contact-us) — Bowral Classic ready to list
- **PB Events / Justin** (justin@pbevents.com.au) — You Yangs, Werribee, Great Rail Run
- **AAA Racing** (aaaracing.com.au) — D'Aguilar Two 'Ups' + Wildhorse (QLD)
- **SingleTrack Events** — Mt Buller SkyRun still to list
- **Mito Foundation** — follow-up due ~19 June (already contacted)
- **The Event Team WA** — Rottnest Channel Swim, HBF Run for a Reason, Busselton Jetty Swim still to list

# 5. Current State

## Sheet status as of 5 June 2026 (end of Session 24)

- **~149 approved events** on live site
- **13 past events**
- **5 approved partners** live
- **2 pending partners** in sheet
- **2 newsletter subscribers**

# 6. Immediate To-Do Queue (Priority Order)

## This week:
1. **Contact Footmotion / Jody** — warm personal contact, call or DM. HIGH PRIORITY.
2. **Reach out to Vertigo MTB** (bookings@vertigomtb.com.au) — post-Icarus, reach out now.
3. **Add Shimano Gravel Muster** (20–23 Aug, Alice Springs NT) — Rapid Ascent.
4. **Add Surf Coast Century** (12 Sep, Anglesea VIC) — Rapid Ascent.
5. **Add Mt Buller SkyRun** (6 Dec) — SingleTrack.
6. **Add remaining Race Hub portfolio** (9+ events).
7. **Nordic Kayaks Beach to Beach Ocean Paddle** (13 Jun, Mooloolaba QLD, ~16km) — from side chat. Reg closes 10 June — decide whether to add. Organisers: Mooloolaba Paddlers Inc / Nordic Kayaks. Website: oceanpaddle.com.au.

## 12 June follow-ups:
8. FlowiTri, Warners Bay Physio (decision point — Hunter Physio), Mauro, Newcastle Orienteering

## ~15–16 June follow-ups:
9. SARRC, Cycle Fitness Nutrition, Tailwind, Super Elliotts, Pace Athletic, Lake Mac Penguins, Vert Nutrition, MVCC, NHCC, TRSA, Sole Motive, 180 Cadence, Running Wild NSW, Destination Sport

## ~18–19 June follow-ups:
10. Bourkes Bicycles + all ~34 intros sent 4–5 June

## Events still to add:
11. Transcend Trails (22 Aug, Avon Valley WA) — find organiser contact first
12. Brooks Surf Coast Trail Marathon (20 Jun, Torquay VIC) — find contact first
13. Bowral Classic (18 Oct NSW) — Cycling Classics / Yaffa Media (not yet contacted)
14. Sole Motive: Brighton Beach Marathon (30 Aug VIC), Carmans Fun Run Sydney (20 Sep), Canberra Times Fun Run
15. 180 Cadence: Sydney Trail Marathon, STHM Night + Summer + Autumn, Parramatta HM
16. Running Wild NSW: Narrowneck, Megalong, Fairmont, Wentworth Falls (dates TBC)
17. Destination Sport: HYROX AU dates + full Tri Travel / Sportive Breaks AU calendar
18. The Event Team WA: Rottnest Channel Swim, HBF Run for a Reason, Perth Kilt Run (already listed), Busselton Jetty Swim
19. Race Hub Australia: full remaining portfolio (~9 events)
20. Kokoda Challenge: Brisbane (listed), Sydney (listed) — check if Sunshine Coast 2027 dates announced
21. AAA Racing: D'Aguilar Two 'Ups' Marathon + Wildhorse (QLD)

## Admin:
22. RunThrough Australia — forward to info@runthrough.co.uk (AU email permanently dead)
23. Newsletter strategy + Instagram setup (still outstanding)
24. Update EVENTRY-CONTEXT.md next session ✅ (done this session)

# 7. Recurring Events — Design & Logic (Session 20)

**Status: BUILT, DEPLOYED, FULLY TESTED ✅**

## Architecture

**Col AV = `recurring_end_date`** — dual-use field:
- **Weekly:** stores a plain date string `YYYY-MM-DD`
- **Monthly:** stores a JSON array of remaining upcoming dates e.g. `["2026-08-02","2026-09-06"]`
- **Series mode / one-off / annual:** col AV left empty

## submit.html behaviour

- **Weekly:** Shows `First event date` + `Last event date` (both required).
- **Monthly:** Shows multi-date picker (up to 12 dates).
- **Series mode:** Unchanged — writes one row per round.

## doPost behaviour

- **Weekly:** `getFirstFutureDate(weekly_start, 7)` advances start date. Writes 1 row. Col AV = date string.
- **Monthly:** Sorts `monthly_dates`. Writes 1 row for first date. Col AV = JSON of remaining dates.
- **Series:** One row per round, col AV empty.

## markPastEvents recurring logic

Runs daily (Midnight–1am AEST). When approved row has past event date:
1. Marks row as `past`
2. **Weekly:** nextDate = eventDate + 7 days. If > recurringEnd → fire end email. Else → write new row.
3. **Monthly:** Pop first item from JSON array. If empty → fire end email. Else → write new row.
4. **Dedup guard:** Script Properties key `recur_next:<submission_id>:<date>`
5. Auto-generated rows get status `approved`.

# 8. Card Image Feature — Design & Logic

## Card states

- **Base card** (default): plain white card, no background
- **Background on** (`event_image_enabled = TRUE`): sport-type generic background
- **Supplied background** (`event_image_url` populated + enabled): organiser/partner's own photo
- **Logo** (`event_logo_enabled = TRUE` + `event_logo_url` populated): logo shown centre-right over background

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

Note: `cycling_road` maps to `'Cycling'` via `normaliseSport()` — no separate entry needed.

# 9. Series & Go-Live Email — Design & Logic

## Go-live-on-approval email

- `onApprovalEdit(e)` — installable On-edit trigger. Fires when col B → `approved`.
- Dedup key: `'live:' + id` (submission_id). Changed Session 23.
- **Must be installable trigger** — simple triggers can't send email.
- Won't fire on markPastEvents (installable triggers don't fire on script-made edits).
- **Fires on manually-added events too** — leave org_email blank when adding on an organiser's behalf to suppress it.
- **Daily email quota: 100 emails/day.** Large batch approvals (>80 rows) can hit the limit — spread across two days.

# 10. Outreach Strategy Notes

## Email deliverability rules
- No "free" in subject lines
- No hyperlinks in body — plain text only
- Single clear CTA per email
- Web forms bypass spam filters — use where available
- Don't follow up before 14-day mark
- Mailtrack/Mailsuite installed on eventry.au@gmail.com for open tracking

## "List it, then reach out" — standard organiser acquisition play
Add events with org_email populated (go-live email fires automatically), then send a personal intro 1 day later naming their other events. If no reply in ~7 days, list remaining events anyway.

## Charity/fundraising event listing policy
- **List** participatory fundraising events with open entry (Kokoda Challenge, The Bloody Long Walk) — flag the fundraising requirement clearly in listing notes.
- **Skip** invite-only / high-barrier corporate rides (ARA Ride for Good — 50 places, $10K commitment).

## Social runs — listing approach
- Event type: `Social`, Recurring: weekly, Price: free/0
- No registration link required
- Each store location = its own listing

# 11. Research URL Audit — Status

## Already in sheet ✅
hevents.com.au, in2adventure.com.au, adventurejunkie.com.au, coasttokosci.com, parkrun.com.au, Rocky Trail Entertainment, Coffs Running Festival, Rumble in the Jungle, Maitland River Run, Raffertys Coastal Run, Bouddi Coastal Run, Elephant Trail Race, Hounslow Classic, Pub to Pelican, Brisbane Trail Ultra, Blackall 100, Cairns Marathon Festival, The Guzzler Ultra, Cape to Cape MTB, Geo Bay Swim, The Black Pearl, Festival of the Feet, RunThrough AU (SIRC + Olympic Park + Albert Park), Riverina Trail Series Rounds 3–5, Barossa Marathon Festival, Yurrebilla 56K Ultra, Run Forrest Trail Run, Noosa Enduro (Trail + MTB + Gravel), Kangaroo Island Run Festival, Wonderland Run, Bare Creek Trail Run, ASICS Run Melbourne, Townsville Running Festival, Manly Dam Trail Run, Ten Trails of Garigal, SUM 30/50/100, Southern Sydney Track Ultra, STHM Winter, Burralow Bush Run, Wooton Classic, Coopernook Gravel, NHCC HEZ Road Race, MVCC Criterium + Road Race, Five Peaks Running Festival, TRSA On The Trails series (5 rounds), SAC 6 Hour Track, GNW Trail Running Festival, Sydney's Backyard Ultra, Run Port Douglas, Shepparton Running Festival, Kowen Winter Trails, Stromlo Running Festival, GC50, Six Inch Trail, Perth Running Festival, Brisbane Marathon, Kunanyi Trail Series (4 rounds), Rapid Ascent Trail Running Series (3 rounds), Run Larapinta, Sydney Marathon, Gold Coast Marathon, Melbourne Marathon, Perth City to Surf, City2Surf, Noosa Triathlon, Hunter Valley Triathlon, RunFest Central Coast, Bay to Bay, Hawkesbury Canoe Classic, Kokoda Challenge (Gold Coast + Sunshine Coast + Brisbane + Sydney), The Bloody Long Walk (9 events national series), Roller Coaster Run, GPT100, Yandina Five O, Rainbow Beach Trail Festival, Beerwah@Daybreak, Cobb and Co Backyard Ultra, Backroads Gravel, Dwellingup 100 MTB, Mighty Jarrah Trail Run, Perth Kilt Run, Wollongong RF, Parklands RF, Icarus MTB Race

## From side chat — to evaluate
- **Nordic Kayaks Beach to Beach Ocean Paddle** (13 Jun 2026, Mooloolaba QLD, ~16km ocean paddle) — Mooloolaba Paddlers Inc / Nordic Kayaks. Website: oceanpaddle.com.au. Reg closes 10 June. Decide whether to add.

## Pending — confirm details before adding
- CTTR — Trails & Tails Coopernook (Aug) + Deep Creek Backyard Ultra (Oct/Nov) — await CTTR response
- Those Guys Events remaining events — await response
- Newcastle Orienteering Club — await Justin Stafford response
- Barossa Run (13 Sep 2026, Lyndoch SA, SARRC) — add when SARRC responds
- Bare Events portfolio — check for additional Sydney trail events

## Categorised — not events to add
- runningcalendar.com.au, rundais.org — competitors/aggregators (monitor)
- ironman.com — too large/commercial for now
- rowingnsw.asn.au — governing body, future rowing event source
- oceanswims.com — competitor + open water event source
- ARA Ride for Good — corporate charity ride, poor fit (skip per policy)

# 12. On the Horizon

- **Newsletter** — platform (Mailchimp), content strategy, cadence. Currently 2 subscribers.
- **Social media** — Instagram account (minimum). Content plan, posting cadence.
- **GA → Sheets sync** — Apps Script + GA Data API. Build when monetisation is live.
- **Past events toggle** — "View past events" filter on index.html. Low priority.
- **submit.html image/logo URL fields** — expose event_image_url and event_logo_url to organisers.
- **Location-based sorting** — auto-selected state filter pill. Build when per-state count is high enough.
- **Member pricing** — optional member_price per discipline. New col planned.
- **Recurring events feature** — weekly/monthly submit.html option, automated reminders. Built ✅
- **Event cancellation detection** — feasibility research
- **Athlete profiles, What's Next feed, fitness platform integration** — future roadmap

# 13. Key Learnings & Principles

- **Sheet structure is fixed:** Eventry_Events.xlsx has exactly two tabs — Sheet1 and Newsletter Subscribers.
- **Add events via the xlsx file** — tab-separated rows cause column alignment errors.
- **Strip blank trailing rows before appending** — the reference sheet accumulates empty rows.
- **Column alignment discipline:** Removing a sheet column requires a placeholder in Apps Script.
- **Cross-session continuity via EVENTRY-CONTEXT.md:** Regenerate at end of every session.
- **Batch changes before uploading:** Adriaan prefers to batch code changes before GitHub upload.
- **Partner data discipline:** Keep records at pending until outreach is complete.
- **Duplicate the sheet tab** before structural changes as a backup.
- **no-cors masks all server failures:** Always verify via sheet, notification email, or Apps Script Executions log.
- **Apps Script Executions log is source of truth.**
- **Installable vs simple triggers:** Function named `onEdit` runs as simple trigger and CANNOT send email.
- **Leave org_email blank when adding events on an organiser's behalf** — otherwise the auto go-live email fires.
- **GitHub large file paste (web editor) can silently produce 0-byte files** — use upload/replace for files over ~500 lines.
- **Google Sheets Date object auto-conversion:** Use `instanceof Date` guard before `.toString()` on any date cell — applies in BOTH doGet and markPastEvents.
- **Script Properties dedup keys persist across test runs** — clear with `clearRecurringProps()` when retesting.
- **Pace Athletic owns Blue Mountains Running Co** — same business (Trasa Holdings Pty Ltd). Approach via Pace Athletic only.
- **Social event cards** work — event type 'Social' shows 🎉 SOCIAL badge, plain white card.
- **`price: varies` must survive the full pipeline** — doGet must preserve the string (not `parseFloat || 0`), and `hasVaries` check must use `isNaN(parseFloat(p))` not `isNaN(p)`.
- **Google Apps Script email quota: 100/day.** Large batch approvals can hit this. Spread big batches across two days.
- **Pasting corrected rows as NEW rows re-fires go-live emails** — blank org_email or pre-seed dedup keys before approving re-pasted rows.
- **"List it, then reach out" is the standard play** — add with org_email populated, send personal intro next day.
- **Charity/fundraising policy:** Kokoda + Bloody Long Walk = list with fundraising flag. ARA Ride for Good = skip.
- **Bounced emails need immediate address correction** — check the sheet org_email and update before any follow-up (e.g. Mito Foundation: info@bloodylongwalk.com.au dead → bloodylongwalk@mito.org.au correct).
- **Multi-discipline events** (same submission_id, multiple rows) count as ONE event on the site. 136 sheet rows = 127 unique events because of multi-discipline events.

# 14. Tools & Resources

- Mailtrack / Mailsuite — installed on eventry.au@gmail.com for open tracking
- Debugging globals: window._allEvents, window._allPartners, window._apiDebug
- Cache-busting: ctrl+shift+r
- GitHub file operations: navigate into file before three-dot delete menu appears
- **For large files (>500 lines): use GitHub upload/replace, NOT the web editor paste**
- DNS issues: Restart Starlink router to clear DNS cache (permanent fix: Cloudflare 1.1.1.1 on desktop adapter)
- **Apps Script triggers:**
  - markPastEvents — Time-driven, Day timer, Midnight–1am AEST. Live 28 May 2026.
  - onApprovalEdit — installable On-edit. Live 31 May 2026. Dedup key = `'live:' + id`.

# 15. About Page — Locked Copy

*Committed to GitHub 25 May 2026.*

Eyebrow: OUR STORY | Headline: Built by athletes, for athletes.
Subtext: Eventry started with a simple question — what's next? Searching for that answer shouldn't be this hard. So we built the place we always wished existed.

Pull Quote: "What's next? We built the answer."

Roadmap: NOW: Australia's sports events directory. SOON: Featured listings and partner network. FUTURE: Athlete profiles, What's Next feed, fitness platform integration.

# 16. Development Roadmap (reconciled to Session 24)

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
| Recurring events overhaul — single row, auto-generation, renewal + end emails, col AV | 20 |
| doGet date guard — instanceof Date fix for event_date + event_end_date | 24 |
| "Varies" price fix — preserved through doGet → loadLiveEvents → renderEvents | 24 |
| All 149 event cards have background images | 24 |

## ⏳ Designed, Not Yet Built

- **Member pricing** — optional `member_price` per discipline.
- **GA → Sheets sync** — Apps Script + GA Data API. Build when monetisation is live.
- **submit.html image/logo URL fields** — sheet cols exist; form doesn't expose them yet.
- **Newsletter** — platform, content, cadence. Not started.
- **Social media (Instagram)** — not started.

## ❌ Not Yet Started

### Near-term (no blockers)
- **Top 5 sport pills + "More sports ▾" dropdown**
- **Admin dashboard** (password protected)
- **Suburb/state cross-validation on submit form**
- **Google Places autocomplete on venue field**

### Blocked on monetisation legal clearance
- **Stripe payments** — Featured listings $49 AUD per event
- **GA reporting for organisers** — monthly stats email

### Blocked on user accounts
- **User accounts**, **Organiser self-service portal**, **QR event check-in**
- **Strava / Garmin / Apple Fitness integration**
- **"What's Next?" personalised discovery** — product north star

### Infrastructure (trigger-based)
- **Database migration** — Google Sheets → Supabase when hitting 500+ events
- **Mailchimp migration** — at 100+ newsletter subscribers
- **hello@eventry.au branded email** — Google Workspace ~$8 AUD/month. Deferred.
