**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 12 June 2026 (Session 32)*

*For the full project backstory (Sessions 1–22), see EVENTRY-HISTORY.md — the narrative archive. This document is the working handover: current state, live to-do queue, active outreach.*

---

# Session 32 Summary (12 June 2026)

Big dev + events + notes capture session. Four bugs fixed and deployed (band labels, series venue autocomplete, reg_link fallback, partner website button). Three H Events listings added (Island Tri Festival, Haze Sunrise Run, Lake Mac Tri 2027). Tom Scott / PB Running outreach email sent. Massive notes backlog from 1 Notes chat processed — 16 new events queued. Notes system moving to Google Doc going forward.

## Code Shipped This Session ✅

- **index.html**: 75km band labels on Nearest first sort — dividers between distance rings
- **index.html**: Partner Learn more button fixed — was reading wrong field (p.org_website vs p.website)
- **submit.html**: Series round venue field — Google Places autocomplete + lat/lng coord capture added
- **submit.html**: reg_link fallback — discipline reg_link now falls back to Section 2 event URL when blank
- **submit.html**: Aquabike added as triathlon subtype
- **submit.html**: Conditional Bike/Run fields for Aquabike (no run), Aquathlon/SwimRun (no bike)
- **submit.html**: dist_display builder updated to exclude hidden fields based on subtype
- **Apps Script doPost**: Series, weekly, monthly, one-off rowSpecs all updated with spec.lat/spec.lng — coords now write correctly per round for series events
- **Apps Script doGet**: Partner object now returns event_image_enabled, event_image_url, event_logo_enabled, event_logo_url — partner card images now work

## Events Added This Session ✅

### Island Triathlon Festival (27 Sep 2026)
- Organiser: H Events (admin@hevents.com.au) — go-live auto-sent ✅
- Location: Stockton Foreshore, Newcastle NSW | Coords: -32.916123, 151.784389
- Disciplines: Standard / Sprint / Super Sprint / Aquabike / Aquathlon
- reg_link: hevents.com.au/events/island-triathlon
- event_image_enabled: TRUE ✅

### Haze Stockton Sunrise Run (26 Sep 2026)
- Organiser: H Events (admin@hevents.com.au) — go-live auto-sent ✅
- Location: Stockton Foreshore, Newcastle NSW | Coords: -32.916123, 151.784389
- Disciplines: 21km / 14km / 7km / 2km road running
- reg_link: hevents.com.au/events/island-triathlon
- event_image_enabled: TRUE ✅

### Lake Macquarie Triathlon 2027 (7 Feb 2027)
- Organiser: H Events — org_email set to eventry.au@gmail.com (suppress go-live)
- Location: Speers Point Park, Lake Macquarie NSW | Coords: -32.962277, 151.61752
- Disciplines: Standard / Sprint / Super Sprint / Aquabike / Aquathlon
- event_image_enabled: TRUE ✅
- Note in col AE: "Entries open 1 Jul 2026 — populate admin@hevents.com.au + send personal intro then"

## H Events — Full Status
- Winery Run 19 Jul ✅ listed
- Fernleigh 15 19 Oct ✅ listed
- Maitland River Run — past ✅
- Island Tri Festival 27 Sep ✅ listed this session
- Haze Stockton Sunrise Run 26 Sep ✅ listed this session
- Lake Mac Tri 7 Feb 2027 ✅ listed this session — entries open 1 Jul
- Newcastle City Triathlon — NOT listed (confirmed 32-year run ended after 2025)
- Status: Converted ✅ — follow-up 1 Jul when entries open

## Outreach Actions This Session
- **Tom Scott / PB Running** — cold outreach email sent 12 Jun (coach@pbrunning.com.au) → follow-up 26 Jun
- **H Events** — auto go-live fired to admin@hevents.com.au for Island Tri + Haze (12 Jun)

## Partner Images Applied This Session
- **FlowiTri** — event_image_url set to hosted OG image ✅
- **Warners Bay Physio** — reverted (favicon too small, clean card better until Jeandre responds)
- **CFN / Tailwind / Mauro** — pending partner confirmation

## Top 20 Events — Image/Logo Research Completed
See full table in Session 32 notes. Sheet updates needed (apply next session):
- Melbourne Marathon: AS = melbournemarathon.com.au/wp-content/uploads/2025/06/Melbourne_Marathon_Logo.png
- City2Surf: AS = city2surf.com.au/assets/Uploads/Gallery/City2Surf-start-crowd-hero-content.jpg
- Noosa Tri: AS = noosatri.com.au/assets/Uploads/Noosa-Tri-FB.jpg
- Perth City to Surf: AS = perthcitytosurf.com/wp-content/uploads/2026/01/CTS-Logo-RGB-Reverse-4.png
- Run Melbourne: AS = runmelbourne.com.au/wp-content/uploads/2022/01/RM22-HalfMarathon-1.jpg
- Cape to Cape MTB: AS = capetocapemtb.com/assets/Uploads/C2C-FB.jpg
- Blackall 100: AS = static.wixstatic.com/media/d9e3e8_ceb8957e01784f7a81fdeafa13bc6490~mv2_d_3000_2000_s_2.jpg/v1/fill/w_2500,h_1666,al_c/d9e3e8_ceb8957e01784f7a81fdeafa13bc6490~mv2_d_3000_2000_s_2.jpg
- Sea Otter Australia: AS = seaotter.au/wp-content/uploads/2026/03/2025_Expo_HangingRock_2-e1774395262726-1024x370.png | AU = seaotter.au/wp-content/uploads/2024/02/cropped-sea-otter-icon-full-sold-bg-300x300.png
- Surf Coast Trail Marathon: AS = files.manuscdn.com/user_upload_by_module/session_file/310419663031276848/mzIdlHROyMQbmPJV.png
- Coast to Kosciuszko: AU (logo only) = coasttokosci.com/wp-content/uploads/2021/07/cropped-coast-to-kosci-favicon-270x270.png
- Six Inch Trail Marathon: AU (logo only) = runningforbeginners.com/6inch/wp-content/uploads/2015/11/6-Inch-Trail-Marathon-Event-Logo-300.jpg
- All others (Sydney Marathon, GC Marathon, Cairns, Perth RF, Barossa, BTU, Noosa Enduro, Grampians, Bowral): AR=TRUE, no image URL — sport bg will show

---

# Immediate To-Do Queue (Session 33)

## 🔴 Do First

- **Max Adventure Race** — update org_email on ALL rows: info@maxadventurerace.com.au → **info@maxadventure.com.au** (confirmed correct address found this session)
- **Run Port Douglas** — update org_email to info@runportdouglas.com.au if blank
- **Cooks River Fun Run** — verify reg_link = raceroster.com/events/2026/111812/cooks-river-fun-run-2026
- **Apply top 20 event images** — see table above, set cols AR/AS/AT/AU per event
- **Puffing Billy Running Festival** — LIST BEFORE 18 JUN (entries open Thursday) — race@pbr.org.au
- **AMBC XCM 8Hr/4Hr** — LIST BEFORE 21 JUN (9 days away) — committee@ambc.asn.au

## 🟡 Follow-ups Due

| Contact | Due | Status |
|---|---|---|
| FlowiTri (Lucas) | 16 Jun | Hot — personal SMS 11 Jun |
| Warners Bay Physio (Jeandre) | 16 Jun | Hot — personal SMS 11 Jun |
| Mauro Swim Team (Peter) | 16 Jun | Hot — called Liz 11 Jun |
| Sole Motive / Run Melbourne | 16 Jun | HOT — 2 opens |
| Cycle Fitness Nutrition (Glen) | 15 Jun | Opened — no reply |
| Super Elliotts Cycles | 15 Jun | No response |
| SARRC (Lindsay Gunn) | 15 Jun | No response |
| Tailwind Nutrition | 16 Jun | No response |
| Lake Mac Penguins (Spot) | 16 Jun | No response |
| Vert Nutrition (Ben) | 16 Jun | No response |
| Find Race Pace (Ido) | 16 Jun | No response |
| Pace Athletic | 16 Jun | No response |
| Bourkes Bicycles | 18 Jun | No response |
| Newcastle Orienteering | 18 Jun | Resent to enquiry@ 11 Jun |
| Kowen Winter Trails | ~18 Jun | Opened 11 Jun |
| Tom Scott / PB Running | 26 Jun | Cold email sent 12 Jun |

## 🟡 Organiser Follow-ups Due

| Organisation | Due | Status |
|---|---|---|
| H Events | 1 Jul | Converted — entries open 1 Jul for Lake Mac Tri |
| Coffs Trail Runners | 19 Jun | HOT — opened+clicked <1 min |
| SingleTrack Events (Colin) | 19 Jun | HOT — clicked submit link |
| Tour De Trails (Peri) | 19 Jun | Chris OOO Japan — escalate to simon@ if nothing |
| H Events (other) | 19 Jun | Intro sent |
| Kokoda Youth Foundation | 19 Jun | Intro sent |
| Run Queensland | 19 Jun | Intro sent |
| The Event Team WA | 19 Jun | Intro sent |
| Rapid Ascent | 19 Jun | Intro sent |
| Race Hub (Sara) | 19 Jun | Intro sent |
| Pedalheads Inc | 19 Jun | Intro sent |
| Brisbane Trail Ultra | 22 Jun | Intro sent |
| Terrigal Trotters / GNW | 22 Jun | Intro sent |
| Outer Limits Adventure | 24 Jun | 3 events live + logos |
| Cycling Classics (Bowral) | 24 Jun | Bowral Classic live |

## 🟢 Events to Add (Queued from Notes)

Priority order — urgent ones first:

| Event | Date | Location | Contact | Notes |
|---|---|---|---|---|
| Puffing Billy Running Festival | 12–13 Sep 2026 | Belgrave VIC | race@pbr.org.au | ⚠️ Entries open 18 Jun — list NOW |
| AMBC XCM 8Hr/4Hr | 21 Jun 2026 | Adelaide Hills SA | committee@ambc.asn.au | ⚠️ 9 days away |
| Jetty 2 Jetty Marathon | 19 Jul 2026 | Clontarf QLD | info@j2j.com.au | 40th anniversary. 42.2/21.1/10/5km |
| Run Echuca Moama | 2 Aug 2026 | Moama NSW | clrs.org.au | Charity event. 21.1/10/5km |
| TAC Great Victorian Bike Ride | 23–27 Nov 2026 | Goldfields VIC | bicyclenetwork.com.au | Multi-day tour. Social/Mixed type |
| United Energy Around the Bay | 18 Oct 2026 | Melbourne VIC | bicyclenetwork.com.au | 6 ride options incl 220km |
| Mt Coot-tha Trail Festival | 22–23 Aug 2026 | Brisbane QLD | hello@runvault.com.au | Run Vault — organiser + partner |
| Lake Mac Run | 13 Sep 2026 | Warners Bay NSW | enquiries@lakemacrunning.com | Footmotion naming sponsor — warm angle |
| City-Bay Fun Run | 20 Sep 2026 | Adelaide SA | city-bay.org.au | Flagship SA event. 21.1/12/6/3km |
| Run Prix | 20 Sep 2026 | Albert Park VIC | runprix.com.au | F1 GP circuit, $12k prize money |
| Geelong Running Festival | 20 Sep 2026 | Geelong VIC | geelongrunningfestival.com.au | 42.2/21.1/6.5km |
| Swimrun Australia Sydney North | 10 Oct 2026 | Sydney NSW | swimrun.com.au | New sport type — list under triathlon for now |
| Sue Bell Memorial Triathlon | 9 Aug 2026 | Townsville QLD | townsvilletriclub.com.au | Pool + river swim options |
| AMBC Multirace | 18–20 Sep 2026 | Adelaide Hills SA | committee@ambc.asn.au | 3-day MTB event |
| AMBC XCO | 18 Oct 2026 | Adelaide Hills SA | committee@ambc.asn.au | Venue TBA |
| AMBC XCO State Champs | 8 Nov 2026 | Adelaide Hills SA | committee@ambc.asn.au | Venue TBA |
| Tour De Trails (6 events) | Various | VIC | peri@tourdetrails.com | hut2hut, warburtontrailfest, goldrushrun, beerrun, greatoceanultra, afterglowtrailrun |
| Outer Limits standalones | TBC | NSW | sam@outerlimitsadventure.com.au | Wait for Sam or list after 24 Jun follow-up |

## 🟢 New Organiser Outreach Targets

| Organisation | Type | Contact | Notes |
|---|---|---|---|
| Bicycle Network | Organiser | bicyclenetwork.com.au | 2 events listed — Around the Bay + Great Vic Bike Ride |
| Run Vault (Jamie Hunter) | Organiser + Partner | hello@runvault.com.au | Events + running store — dual pitch |
| Adelaide Mountain Bike Club | Organiser | committee@ambc.asn.au | 4 upcoming SA events, warm via Andre Potgieter |
| Jetty 2 Jetty | Organiser | info@j2j.com.au | List then reach out |
| Puffing Billy Railway | Organiser | race@pbr.org.au | List then reach out |

## 🟢 Data Fixes Needed in Sheet

- **Max Adventure Race** — org_email ALL rows → info@maxadventure.com.au (was bouncing on info@maxadventurerace.com.au)
- **Run Port Douglas** — org_email → info@runportdouglas.com.au if blank
- **Cooks River Fun Run** — verify reg_link = raceroster.com/events/2026/111812/cooks-river-fun-run-2026

## 🟢 Social Media
- Post upcoming events to Facebook + Instagram — carried since Session 30

## 🔧 Dev / Platform

### Bugs Still Open
- **Series round venue** — autocomplete + coord capture ✅ FIXED this session (deployed)
- **reg_link fallback** ✅ FIXED this session (deployed)
- **Partner website button** ✅ FIXED this session (deployed)
- **Triathlon conditional fields (Aquabike/Aquathlon)** ✅ FIXED this session (deployed)

### Near-term Builds
- **submit.html image/logo URL fields** — sheet cols exist; form doesn't expose them
- **CrossFit & HYROX as sport types** — add to normaliseSport() + pills
- **Swimrun as sport type** — add to normaliseSport() (currently list under triathlon as workaround)
- **Partner cards: half-size, two-across**
- **GCP cleanup** — delete "My First Project" + Maps Platform API Key
- **Top 5 sport pills + "More sports ▾" dropdown**
- **Admin dashboard**
- **Report a problem link**

---

# Platform State

## Sheet Structure
- File: Eventry_Events.xlsx (live Google Sheet, direct editing)
- Two tabs: Sheet1 (events + partners) | Newsletter Subscribers (SUB- prefix)
- 48 columns total
- Key cols: submission_id (A/0), status (B/1), org_website (G), listing_type (index 38), event_image_enabled (col AR/index 43), event_image_url (col AS), event_logo_enabled (col AT), event_logo_url (col AU), lat (col AW), lng (col AX), series_name (col AG)
- Deprecated: partner_website (col AP) — do not use

## Column Reference (image/logo)
- AR = event_image_enabled (TRUE/FALSE)
- AS = event_image_url
- AT = event_logo_enabled (TRUE/FALSE)
- AU = event_logo_url
- AG = series_name

## Submission ID Formats
- Manual (historical): EVT-[NAME]-[YEAR] e.g. EVT-ROCKNREEF-2026
- Form-generated: EVT-[timestamp]-[event_index] e.g. EVT-1780987215389-0
- All discipline rows of same event share same submission_id

## GCP Setup
- Project: "Eventry" (ID eventry-498605, number 244352788914)
- Owner: adriaanmoore@gmail.com | Editor: eventry.au@gmail.com
- Frontend Key: restricted to eventry.au referrers (Maps JS + Places API)
- Server Key: restricted to Geocoding API only
- Note: prior key accidentally committed to GitHub and revoked. GitHub/GitGuardian security alert fired 6 Jun — confirmed old key, current key is correct.

## Apps Script Triggers
- markPastEvents — Time-driven, Day timer, Midnight–1am AEST. Live 28 May 2026.
  - Also fires daily 📍 COORD CHECK email for approved events missing valid coords
- onApprovalEdit — installable On-edit. Live 31 May 2026. Dedup key = 'live:' + id

## GitHub
- Repo: eventry.au (GitHub Pages, index.html frontend)
- For large files (>500 lines): use GitHub upload/replace, NOT web editor paste

---

# Converted ✅
- Sydney Striders (Bruce Inglis) — self-submitted 10K Series
- Destination Sport Experiences (Tessa) — inbound
- Sport 3 (Adam Goodger) — GC50 live
- Mito Foundation / Bloody Long Walk (Perry Slater) — confirmed 9 listings correct. Images + logos applied. 11 Jun.
- H Events (Paul Humphreys) — auto go-live fired Island Tri + Haze Sunrise Run. 12 Jun. Lake Mac Tri 2027 listed, follow-up 1 Jul.

---

# Key Learnings & Principles

- **"List it, then reach out"** — add with org_email populated (fires auto go-live), send personal intro same day or next day
- **Logo trick** — find publicly hosted badge/logo URL, set event_logo_enabled TRUE + event_logo_url. Proactive, no permission needed. Mention in personal email as done thing.
- **event_image_enabled (col AR) must be set manually TRUE** after every form submission
- **reg_link (col Z) must be set manually** — form does NOT auto-populate from Section 2 URL when discipline reg_link left blank (FIXED in submit.html Session 32 but manual fallback still good practice)
- **Series form bug** — venue field in series rounds has no Places autocomplete and no coord capture. Submit as standalone one-off, manually set col AG (series_name) after. (FIXED in submit.html Session 32 ✅)
- **Contact name field is mandatory** on submit form — use "Team" or org name if no individual contact
- **Go-live dedup key**: 'live:' + submission_id — multi-discipline rows fire only once per event
- **Go-live email quota**: 100/day Apps Script limit — spread large batches across days
- **Multi-discipline events**: coords auto-capture per row from Places autocomplete on standalone submissions
- **Google Places autocomplete**: small/informal venues may not appear — use street address
- **API key typo note**: Frontend Key = AIzaSyBPQjamKqe5yV-sP_AkuN_jeK1YJJLJmBM (AkuN not AkaN)
- **Numbers pasted into time-formatted cells** get reinterpreted as 1899/1900 dates — set AW/AX to Number format first
- **Charity/fundraising policy**: Kokoda + Bloody Long Walk = list with fundraising flag
- **Social outreach** must come from Eventry Facebook/Instagram, not Adriaan's personal accounts
- **Sri Chinmoy city emails**: sydney@, canberra@, melbourne@, brisbane@srichinmoyraces.org
- **Tour De Trails escalation**: peri@ → simon@ → andy@ → chris@ (OOO Japan until mid-June)
- **Outer Limits Adventure** runs Trail Run Series (6 events) + standalone events
- **Cycling Classics**: Snowy Classic cancelled 2026, Noosa on hold, Mudgee past (May), Clare TBC — only Bowral active
- **BLW correct email**: bloodylongwalk@mito.org.au (NOT info@bloodylongwalk.com.au — bounces)
- **Max Adventure Race correct email**: info@maxadventure.com.au (NOT info@maxadventurerace.com.au — bounces)
- **Wheels & Wattle** — Rotary Club of Maryborough VIC. secretary@rotarymaryboroughvic.org is placeholder only — find real contact.
- **Personal SMS/call outreach** very effective for warm local contacts (Lucas/FlowiTri, Jeandre/Warners Bay, Liz/Mauro)
- **DNS issues**: restart Starlink router; permanent fix: Cloudflare 1.1.1.1 on desktop adapter
- **Aquabike** = swim + bike only (no run). **Aquathlon/SwimRun** = swim + run only (no bike). Conditional fields now implemented in submit.html.
- **Partner cards need image enabled in doGet** — event_image_enabled/url/logo_enabled/logo_url now returned for partners (FIXED Session 32 ✅)
- **Swimrun** is not yet a sport type in normaliseSport() — list under triathlon for now, add in next dev sprint
- **Outreach email sign-off**: always "Adriaan" (not "Adriaaan")
- **Partner pricing**: use "free to join right now" not "it's free" — avoids implying permanent free tier
- **Notes between sessions**: moving to Google Doc in Drive (set up Session 33) — more reliable than 1 Notes chat which has summary lag

---

# Tools & Resources

- **Mailsuite** — installed on eventry.au@gmail.com for open/click tracking
- **Debugging globals**: window._allEvents, window._allPartners, window._apiDebug
- **Cache-busting**: Ctrl+Shift+R
- **GitHub**: large files (>500 lines) → upload/replace, not web editor
- **Local geocoder tool**: geocoder_corrections.html on OneDrive Desktop
- **Social media**: Facebook Page + Instagram @eventry.au — live Session 27
- **Notes system**: moving to Google Doc in Drive (Session 33). Previous: "1 Notes" chat (has summary lag — unreliable for same-day notes)
- **Outreach Tracker**: Outreach_Tracker_v2.xlsx (updated Session 32) — Drive file ID: 1OJcTkIcD8ahp1Z8SidE4JNuKLefltdGz
- **Claude account**: adriaanmoore@gmail.com with Gmail MCP (eventry.au@gmail.com) + Google Drive MCP

---

# About Page — Locked Copy

*Committed to GitHub 25 May 2026.*

Eyebrow: OUR STORY | Headline: Built by athletes, for athletes.
Subtext: Eventry started with a simple question — what's next? Searching for that answer shouldn't be this hard. So we built the place we always wished existed.
Pull Quote: "What's next? We built the answer."
Roadmap: NOW: Australia's sports events directory. SOON: Featured listings and partner network. FUTURE: Athlete profiles, What's Next feed, fitness platform integration.

---

# Development Roadmap

## ✅ Built & Live

| Feature | Session |
|---|---|
| Skeleton cards + localStorage cache (10-min expiry) | 3 |
| Sport pills filter + normaliseSport() | 3–4 |
| Partner cards — injected every 6 events, sport + state filtered | 2–3 |
| Duplicate detection — flags col B as duplicate, orange formatting | 4 |
| Organiser confirmation email on submission | 4 |
| Adventure Racing + Obstacle Racing as distinct sport types | 4 |
| Recurring field (col AB) | 4 |
| Cancellation/postponed event display | 8 |
| Event type classification — Race/Training/Social/Mixed badge | 8 |
| Series + championship ribbons | 5–6 |
| Recurring event badge on cards | 6 |
| Go-live email on approval — installable trigger, deduped per submission_id | ~9 |
| markPastEvents — daily trigger, midnight AEST | ~9 |
| Card image/logo feature — cols AR–AU | ~9 |
| Enter key triggers search on index.html | 21 |
| Recurring events overhaul — single row, auto-generation | 20 |
| Location-based "Nearest first" sorting | 25 |
| Google Places autocomplete on venue field (submit.html) | 25 |
| Real lat/lng captured on new submissions → sheet cols AW/AX | 25 |
| Distance sort: 75km bands, soonest-first within band | 26 |
| Facebook Page + Instagram @eventry.au created | 27 |
| 75km band labels on Nearest first sort | 32 |
| Series round venue — Places autocomplete + coord capture | 32 |
| reg_link fallback to Section 2 URL | 32 |
| Aquabike subtype + conditional Bike/Run fields for Aquabike/Aquathlon/SwimRun | 32 |
| Partner cards return image/logo fields from doGet | 32 |
| Partner Learn more button fixed (p.website mapping) | 32 |

## ❌ Not Yet Built

### Near-term
- **submit.html image/logo URL fields** — sheet cols exist; form doesn't expose them
- **CrossFit & HYROX as sport types**
- **Swimrun as sport type** — currently workaround: list under triathlon
- **Partner cards: half-size, two-across**
- **GCP cleanup** — delete "My First Project" + Maps Platform API Key
- **Top 5 sport pills + "More sports ▾" dropdown**
- **Admin dashboard**
- **Report a problem link**

### Blocked on monetisation
- **Stripe payments** — Featured listings $49 AUD
- **GA reporting for organisers**

### Blocked on user accounts
- **User accounts, Organiser self-service portal, QR check-in**
- **Strava / Garmin / Apple Fitness integration**
- **"What's Next?" personalised discovery**

### Infrastructure
- **Database migration** — Google Sheets → Supabase at 500+ events
- **Mailchimp migration** — at 100+ newsletter subscribers
- **hello@eventry.au branded email** — deferred
