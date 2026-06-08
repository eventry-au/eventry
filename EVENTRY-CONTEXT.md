**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 8 June 2026 (Session 27)*

*For the full project backstory (Sessions 1–22), see EVENTRY-HISTORY.md — the narrative archive. This document is the working handover: current state, live to-do queue, active outreach.*

---

# Session 27 Summary (8 June 2026)

Data quality audit, outreach to three new organisers, and Eventry social media accounts created.

## Data quality fixes — all done

7 fixes applied directly in the live sheet:

1. **Hunter Valley Triathlon** (`EVT-HVTRIATHLON-2026`) — `org_website` hvtc.com.au → hevents.com.au
2. **Noosa Enduro Trail Runs duplicate** — `EVT-NOOSAENDURO-TRAIL` set to `duplicate`; `EVT-NOOSAENDURO-TRAIL-2026` (with `/trail-run-2/` URL) kept as the live listing
3. **Great North Walk Trail Running Festival** (`EVT-GNW-TRAIL-2026`) — both `org_website` and `event_url` terrigaltrotters.org.au → gnwtrailraces.com.au
4. **Loxford Maitland River Run** (`EVT-MAITLANDRUN-2026`) — `org_website` → hevents.com.au; `event_url` → hevents.com.au/events/maitland-running-festival. Note: event was 7 June, now past.
5. **Brisbane Trail Ultra** (`EVT-BTU-2026`) — `org_website` btu.org.au → spartantrail.com; `event_url` → spartantrail.com/brisbane-trail-ultra
6. **Southern Athletic Club 6 Hour** (`EVT-SAC-6HOUR-2026`) — `event_url` changed from Facebook page → raceroster.com/events/2026/112437/knox-park-6-hour-ultra-and-relay; `org_website` → southernac.org.au; `org_email` → info@southernac.org.au
7. **Mighty Jarrah Trail Run** (`EVT-MIGHTYJARRAH-2026`) — `org_website` dwellingup100.com.au → theeventteam.com.au; `event_url` → theeventteam.com.au/mjtr

Also fixed by Adriaan separately: `gnw@terrigaltrotters.com.au` added as `org_email` for **both** `EVT-GNW-TRAIL-2026` and `EVT-BAY2BAY-2026` (Terrigal Trotters runs both events).

Perth City to Surf and Bay to Bay were already partially corrected before this session (raisely.com and qualitycounts.com.au gone); confirmed clean.

**Still outstanding — Kuitpo Forest Trail Run** (`EVT-TRSA-KUITPO-2026`):
- `org_website` = trailrunningsa.com ✅ correct, keep it
- `event_url` needs updating: trailrunningsa.com/event/kuitpo-forest/ → `raceroster.com/events/2026/111281/race-number-1-kuitpo-forest/page/race-briefing1`
Quick live sheet fix — change `event_url` only.

## Outreach sent this session

- **Southern Athletic Club** (`info@southernac.org.au`) — Knox Park 6 Hour Track Ultra (14 June). Sent 8 June. No follow-up needed before event date.
- **Brisbane Trail Ultra / Shona Stephenson** (`shonastephenson@icloud.com`) — Brisbane Trail Ultra (28–30 June). Sent 8 June. Follow up ~22 June if no reply.
- **Terrigal Trotters / GNW Trail Races** (`gnw@terrigaltrotters.com.au`) — GNW Trail Running Festival (20 Sep) + Bay to Bay Running Festival. Single email covering both events. Sent 8 June. Follow up ~22 June if no reply.

## Social media created

- **Facebook Page** — Eventry page live. Profile photo (orange "e" circle) + cover photo (wordmark + tagline) uploaded. Category: Sports Event. Email: eventry.au@gmail.com. URL: eventry.au.
- **Instagram** — @eventry.au live and linked to Facebook page. Bio: "Australia's sports events directory 🏃🚴🏊‍♀️ Find your next run, ride or tri". Link: eventry.au. First post published (profile photo).
- Brand assets on file: eventry-profile-photo.png (1000×1000), eventry-facebook-cover.png (820×312).
- **Note:** Outreach from social accounts must come from the Eventry page/account, not Adriaan's personal profile.

## Sri Chinmoy Portfolio — researched, not yet listed

City-specific email contacts confirmed:
- **Sydney:** sydney@srichinmoyraces.org
- **Canberra:** canberra@srichinmoyraces.org
- **Melbourne:** melbourne@srichinmoyraces.org
- **Brisbane:** brisbane@srichinmoyraces.org (no upcoming events — all showing as cancelled)

**Upcoming Sydney events (sydney@):**
- Sri Chinmoy Dolls Point Half-Marathon, 10km & 5km — 12 Jul 2026
- Sri Chinmoy Mara-Fun Relays — 18 Oct 2026
- Sri Chinmoy Royal National Park Marathon, HM, 10km & 5km (trail) — 1 Nov 2026

**Upcoming Canberra events (canberra@):**
- Sri Chinmoy Canberra Trail Series — Ainslie Amble (2km, 8.3km, 16.4km) — 28 Jun 2026 ⚡
- Sri Chinmoy Canberra Trail Series — Aranda Meander (3.6km, 10.6km, 21.1km) — 19 Jul 2026
- Sri Chinmoy Canberra Trail 100 — 2 Aug 2026
- Sri Chinmoy Triple-Triathlon — 8 Nov 2026

**Upcoming Melbourne events (melbourne@):**
- Sri Chinmoy Princes Park Winter Running Festival (Marathon, 30km, HM, 10km, 5km) — 9 Aug 2026
- Sri Chinmoy Yarra Boulevard Half Marathon, 10km & 5km — 13 Sep 2026
- Sri Chinmoy Tan Team Relays — 8 Nov 2026

Strategy: Add all events to the sheet with correct city org_email → auto go-live fires → send personal intro per city. Process in next session.

## Events fully researched, ready to add next session

**Brooks Surf Coast Trail Marathon** (submission_id: `EVT-SCTM-2026`, 3 rows)
- Date: 20 Jun 2026 | Location: Torquay VIC | State: VIC
- Venue: Salty Dog Kiosk, The Esplanade, Torquay VIC 3228
- Org: Tour De Trails | org_email: chris@tourdetrails.com | org_website: tourdetrails.com
- event_url: surfcoasttrailmarathon.com | reg_link: raceroster.com/events/2026/107662/brooks-surf-coast-trail-marathon-2026
- Sport: running / trail | Price: varies | Coords: -38.3320, 144.3236
- Disciplines: Marathon 42.2km / Half Marathon 22km / 8km "Urquhart's Bluff Blast"

**Sri Chinmoy Canberra Trail Series — Ainslie Amble** (submission_id: `EVT-SRICHINAINSLIE-2026`, 3 rows)
- Date: 28 Jun 2026 | Location: Hackett ACT | State: ACT
- Venue: Corner of Kellaway St and Phillip Ave, Hackett ACT 2602
- Org: Sri Chinmoy Marathon Team Australia | org_email: canberra@srichinmoyraces.org | org_website: au.srichinmoyraces.org
- event_url: au.srichinmoyraces.org/canberratrailruns | series_name: Sri Chinmoy Canberra Trail Series
- Sport: running / trail | Price: varies | Coords: -35.2780, 149.1620
- Disciplines: 16.4km / 8.3km / 2km

---

# Session 26 Summary (7 June 2026)

Location sort debugged end to end — the "0 events / not sorting by distance" problem traced to coords never reaching the frontend, plus data issues in the sheet. All fixed.

## The core bug

From Fernbay (Newcastle area), the site showed "0 events" / wrong sort order. Root cause was a chain:
1. **doGet never exposed coords** — the event object built in `doGet` had no `event_lat`/`event_lng` fields at all, so index.html's `e.event_lat` was always `undefined` → every event fell back to state-capital coords → 50km radius from Fernbay measured to Sydney CBD (~160km) → everything filtered out.
2. **index.html wasn't reading coords** — the deployed `loadLiveEvents()` mapped no lat/lng either; both radius filter and nearest sort used `STATE_COORDS` only.

## Fixes deployed this session

- **doGet patch (Apps Script, deployed new version):** added `event_lat`/`event_lng` to the event object, plus a coalesce block (`if (!events[id].event_lat && obj.event_lat) ...`) that pulls coords from a later discipline row when the first row is blank. Fixed the 5 Max Adventure events whose coords sat on the last discipline row.
- **index.html (3 fixes, deployed to GitHub via upload/replace):**
  1. `loadLiveEvents()` now maps `lat: e.event_lat ? parseFloat(e.event_lat) : null` and same for lng.
  2. Radius filter uses real `e.lat`/`e.lng` with `!isNaN` guard, falls back to `STATE_COORDS`.
  3. Nearest sort same pattern.
- **Distance-banded sort:** changed nearest sort from pure-distance to **75km bands, soonest-first within each band**. `const BAND_KM = 75;` — one-line tunable. Confirmed working from Fernbay.
- **Radius filter now opt-in:** defaults to "Any distance"; granting GPS sorts but does not filter.

## Sheet data fixes

- **HEZ coordinate corruption:** both `EVT-NHCC-HEZ-2026` (past) and `EVT-1780755377352-R` (live recurring row) corrected to `-32.902916, 151.472208`.
- **Multi-row coord consistency:** ran one-off `fixMultiRowCoords()` — propagated coords across all discipline rows. Filled 9 blank rows.

## Coord monitor added (markPastEvents)

- Daily safety net: flags any approved event where NONE of its rows has valid numeric coords. Sends summary email with subject **`📍 COORD CHECK — N event(s) missing coordinates`**.
- Standalone `checkCoordsNow()` added for manual testing.

---

# Session 25 Summary (6 June 2026)

Location-based sorting, Google Places autocomplete, coord backfill for all existing events, GCP setup and API key security.

## Built & Shipped This Session

- **Location-based "Nearest first" sorting** — auto-detects GPS on page load. Falls back gracefully if denied.
- **Manual location picker** — dropdown of 50+ Australian cities/regions grouped by state.
- **Google Places autocomplete on venue field (submit.html)** — real lat/lng captured in hidden fields `event_lat` and `event_lng`.
- **Sheet columns AW (event_lat) and AX (event_lng) added** — doPost writes coords on every new submission. doGet now reads 50 columns.
- **Coord backfill for all 136 existing events** — geocoded via browser-based tool.
- **Google Cloud Platform setup** — Eventry project created, three APIs enabled.

## API Keys

- **Eventry Frontend Key** — `AIzaSyBPQjamKqe5yV-sP_AkuN_jeK1YJJLJmBM` — Maps JS + Places + Geocoding APIs, restricted to eventry.au/*, www.eventry.au/*, localhost/*
- **Eventry Server Key** — `AIzaSyD-g71pC_V6W68XI3Yubn0Wxk16L2hJI38` — Geocoding API only
- **Maps Platform API Key** — still exists with 33 APIs — **DELETE next session (GCP cleanup)**
- Keys are in the **Eventry GCP project** (project number: 244352788914, ID: eventry-498605)
- Personal Google account (adriaanmoore@gmail.com) is Owner; eventry.au@gmail.com is Editor
- **My First Project** still exists with old keys — **DELETE next session (GCP cleanup)**

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
- Google Cloud: Eventry project (eventry-498605), owned by adriaanmoore@gmail.com, eventry.au@gmail.com as Editor
- **Social media:** Facebook Page (Eventry) + Instagram (@eventry.au) — both live as of Session 27

## Google Sheet structure

**Eventry_Events.xlsx has exactly two tabs:**
- **Sheet1** — all events and partners (EVT- and PTR- prefixed rows)
- **Newsletter Subscribers** — people who signed up for the newsletter (SUB- prefixed rows)

Sheet1 now has **50 columns** (AW = `event_lat`, AX = `event_lng` added Session 25).

**Sheet1 key column indices (0-based):** B=status(1), G=org_website(6), H=contact_name(7), I=event_name(8), J=event_date(9), O=event_url(14), Q=sport(16), R=disc_subtype(17), S=disc_name(18), AB=recurring(27), AC=event_type(28), AV=recurring_end_date(47), AW=event_lat(48), AX=event_lng(49)

**Current sheet counts (as of 8 June 2026, end of Session 27):**
- ~129 unique approved events (137 approved rows including partner rows + multi-discipline rows)
- ~28 past events (markPastEvents running daily)
- 5 approved partners (FlowiTri, Mauro Swim Team, Cycle Fitness Nutrition, Tailwind Nutrition, Warners Bay Physio)
- 2 pending partners (Hunter Physio Sports Clinic, Vertigo MTB)
- 2 newsletter subscribers
- No new events added this session

# 3. Pages Live

index.html, event.html, organiser.html, about.html, submit.html, pricing.html, guide.html, how-it-works.html

# 4. Partner Network

*Local-first strategy — Northern Beaches & Newcastle/Lake Macquarie focus, now expanding to SA and TAS. All partner data held at pending status until outreach is complete.*

## Current Partners — Approved (live on site)

- **FlowiTri** — Lucas McBeath (hello@flowitri.com.au) — card upgrade pitch sent 29 May. Follow up **12 June**.
- **Mauro Swim Team** — Peter Mauro (coach@mauroswimteam.com) — card upgrade pitch sent 29 May. Follow up **12 June**.
- **Warners Bay Physiotherapy** — Jeandre Theunissen (reception@warnersbayphysiotherapy.com.au) — card upgrade pitch sent 29 May. 3 touches total. Follow up **12 June**. **Primary physio relationship — activate Hunter Physio only if Warners Bay doesn't respond after 12 June.**
- **Tailwind Nutrition** — retail@tailwindnutrition.com.au — card upgrade email sent 1 June. Follow up ~16 June.
- **Cycle Fitness Nutrition** (PTR-CFN) — Glen, info@cyclefitnessnutrition.com — card upgrade email sent 1 June, opened within 24hrs. Follow up ~15 June.

## Current Partners — Pending (in sheet, not yet live)

- **Hunter Physio Sports Clinic** (PTR-HUNTERPHYSIO) — ON HOLD. Activate after 12 June if Warners Bay still no response.
- **Vertigo MTB** (PTR-VERTIGOMTB) — bookings@vertigomtb.com.au — NOT CONTACTED YET. Reach out now (post-Icarus 7 June). TAS MTB hire + shuttles, St Helens.

## Partner Outreach Pipeline

**Warm contacts (approach first):**
- **Footmotion Newcastle — Jody** — NOT YET CONTACTED. Call or DM directly. HIGH PRIORITY. Running shoe store + weekly social run.

**Research leads (Tier A):**
- **Pace Athletic** — rosebery@paceathletic.com — email sent 2 June. 7 Sydney stores + Blue Mountains Running Co (same business, Trasa Holdings). Follow up ~16 June, then individual stores if no reply.
- **Lake Mac Penguins** — Coach Spot Anderson (hello@lakemacpenguins.com) — email sent 2 June. Follow up ~16 June.

**Research leads (Tier B):**
- **Vert Nutrition** (ben@vertnutrition.com.au) — email sent 2 June. Follow up ~16 June.
- **Neopro Cycling** (neoprocycling.com.au) — not yet contacted.
- **Endu** (endu1.com) — endurance fuel. Not yet contacted.

**Research leads (Tier C):**
- **Supplement Co**, **Hennika Health**, **MaraThongs**, **Marty Smith / Ten Lifestyles** — verify fit before reaching out.

## Organiser Outreach — Active

- **Sydney Striders** (Bruce Inglis) — CONVERTED. 10K Series 6 rounds live.
- **Destination Sport Experiences** (Tessa Tumen-ulzii) — CONVERTED inbound 2 June. HYROX AU, Tri Travel, Sportive Breaks. Follow up ~16 June: logo + full 2026/27 AU calendar.
- **Sport 3 / Adam Goodger** — CONVERTED 3 June. GC50 live. Research full Sport 3 portfolio.
- **Coffs Trail Runners** (admin@coffstrailrunners.com) — opened + clicked within 1 min of 4 June intro. HOT lead. Follow up ~19 June.
- **Race Hub Australia** (sara@racehubaustralia.com) — intro sent 5 June. Follow up ~19 June.
- **SingleTrack Events** (hello@singletrack.com.au) — intro sent 5 June. Follow up ~19 June. Partnerships contact: colin@singletrack.com.au. Colin clicked submit link 23 min after email — high intent.
- **Pedalheads Inc** (info@pedalheads.org.au) — intro sent 5 June post-Icarus. Follow up ~19 June.
- **Mito Foundation / Bloody Long Walk** (bloodylongwalk@mito.org.au) — intro sent 5 June. Auto-reply received. Follow up ~19 June.
- **Kokoda Youth Foundation** (info@kokodachallenge.com) — intro sent 4 June. 4 events listed. Follow up ~19 June.
- **Run Queensland** (info@runqueensland.com) — intro sent 4 June. 5 events listed. Follow up ~19 June.
- **The Event Team WA** (info@theeventteam.com.au) — intro sent 4 June. 4 events listed. Follow up ~19 June. Websites fixed this session (Mighty Jarrah + Backroads).
- **H Events** (admin@hevents.com.au) — intro sent 4 June. Local Newcastle. Follow up ~19 June. Note: Hunter Valley Triathlon auto-email went to info@hvtc.com.au (club), not H Events — mention HVT in follow-up.
- **Rapid Ascent** (info@rapidascent.com.au) — intro sent 4 June. Multi-discipline. Gravel Muster + Surf Coast Century still to add. Follow up ~19 June.
- **Sole Motive / Run Melbourne** (runmelbourne@solemotive.com) — email sent 2 June, multiple opens/forwards (HOT). Follow up ~16 June. Hooks: Brighton Beach Marathon (30 Aug), Carmans Fun Run Sydney (20 Sep), Canberra Times Fun Run.
- **Brisbane Trail Ultra / Shona Stephenson** (shonastephenson@icloud.com) — email sent 8 June. Event 28–30 June. Follow up ~22 June if no reply.
- **Terrigal Trotters / GNW Trail Races** (gnw@terrigaltrotters.com.au) — email sent 8 June covering GNW Trail Running Festival (20 Sep) + Bay to Bay. org_email added to both rows in live sheet. Follow up ~22 June.
- **Southern Athletic Club** (info@southernac.org.au) — email sent 8 June. Knox Park 6 Hour (14 June). org_email + org_website updated in live sheet. No follow-up needed before event.

**12 June follow-ups:**
- FlowiTri (Lucas McBeath) — 3 touches, opened, no reply
- Warners Bay Physio (Jeandre Theunissen) — 3 touches, no reply. **Decision point: activate Hunter Physio if still no response.**
- Mauro Swim Team (Peter Mauro) — 2 touches
- Newcastle Orienteering Club (Justin Stafford) — 1 touch

**~15–16 June follow-ups:**
- SARRC (Lindsay Gunn), Cycle Fitness Nutrition (Glen), Tailwind Nutrition, Super Elliotts Cycles, Pace Athletic (then individual stores), Lake Mac Penguins (Spot Anderson), Vert Nutrition (Ben), MVCC, NHCC, TRSA, Sole Motive, 180 Cadence, Running Wild NSW, Destination Sport

**~18 June:**
- Bourkes Bicycles (info@bourkesbicycles.com.au)

**~19 June:**
- All intros sent 4–5 June (Race Hub, SingleTrack, Pedalheads, Mito Foundation, Kokoda, Run QLD, Event Team WA, H Events, Rapid Ascent, Coffs Trail Runners, and all ~30 incident-recovery intros from 4 June)

**~22 June:**
- Brisbane Trail Ultra (Shona Stephenson)
- Terrigal Trotters / GNW Trail Races

## Organiser Outreach Pending (not yet contacted)

- **Sri Chinmoy — Sydney** (sydney@srichinmoyraces.org) — contact after listing Dolls Point + Royal NP
- **Sri Chinmoy — Canberra** (canberra@srichinmoyraces.org) — contact after listing Ainslie Amble (already in org_email for that row)
- **Sri Chinmoy — Melbourne** (melbourne@srichinmoyraces.org) — contact after listing Melbourne events
- **Tour De Trails / SCTM** (chris@tourdetrails.com) — contact after listing Surf Coast Trail Marathon
- **Cycling Classics** (`info@cyclingclassics.com.au`) — **5 national cycling events under one contact**: Bowral Classic (18 Oct NSW), Noosa Classic, Mudgee Classic, Snowy Classic, Clare Classic. HIGH PRIORITY — one email = 5 premium gran fondo events. Early bird closes 21 June for Bowral.
- **Everyday Lions Events** (`coastalpathwayultra@gmail.com`) — Coastal Pathway Ultra (4 Oct, Latrobe TAS) + Light Night Glow Run (22 Aug, Devonport) + Triple Top Mountain Run (Nov, Sheffield TAS). Contact after listing Coastal Pathway Ultra.
- **More Often / Jodie Coall** — Newcastle local, community rides + social events (Fernleigh Track rides etc.). Outreach channel: Facebook Messenger. Pitch angle: "building Eventry for exactly this kind of community event in Newcastle — would love to feature More Often's rides." Goal: get her listing on Eventry + she promotes it to her 43-member community. Good candidate for self-serve listing pitch.
- **Outer Limits Adventure** (outerlimitsadventure.com.au) — Rock 'N Reef + Paluma Push confirmed. Also claim to run Australia's biggest trail running series — worth researching full 2026 series calendar. Find email before outreach.
- **Vertigo MTB** (bookings@vertigomtb.com.au) — reach out now post-Icarus
- **Footmotion / Jody** — HIGH PRIORITY warm personal contact, call or DM
- **Cycling Classics / Yaffa Media** (cyclingclassics.com.au/contact-us) — Bowral Classic ready to list
- **PB Events / Justin** (justin@pbevents.com.au) — You Yangs, Werribee, Great Rail Run
- **AAA Racing** (aaaracing.com.au) — D'Aguilar Two 'Ups' + Wildhorse (QLD)
- **Everyday Lions Events** — Coastal Pathway Ultra (Latrobe TAS, 4 Oct) — find contact
- **Townsville Triathlon Club** — Sue Bell Memorial Riverway Triathlon (9 Aug) — find email
- **Zombie Run Australia** — Zombie Run 10K & 5K (24 Oct, Dolls Point NSW, info@zombierun.com)

# 5. Current State

## Sheet status as of 8 June 2026 (end of Session 27)

- **~129 unique approved events** (137 approved rows; 8 multi-discipline events account for the difference)
- **~28 past events**
- **5 approved partners** live
- **2 pending partners** in sheet
- **2 newsletter subscribers**
- **50 columns** in Sheet1 (AW=event_lat, AX=event_lng)
- **No new events added this session** — all new event research is queued for Session 28

# 6. Immediate To-Do Queue (Priority Order)

## Next session — events first (all fully researched):

1. **Brooks Surf Coast Trail Marathon** (20 Jun — 12 DAYS ⚡) — `EVT-SCTM-2026`, 3 discipline rows. All details in Session 27 Summary above. Add then email chris@tourdetrails.com.

2. **Sri Chinmoy Ainslie Amble** (28 Jun — 20 days ⚡) — `EVT-SRICHINAINSLIE-2026`, 3 rows. All details in Session 27 Summary. org_email = canberra@srichinmoyraces.org.

3. **Sri Chinmoy Dolls Point** (12 Jul) — HM/10km/5km, Sydney. org_email = sydney@srichinmoyraces.org. event_url = au.srichinmoyraces.org/sydneyraces.

4. **Sri Chinmoy Aranda Meander** (19 Jul, Canberra) — 3.6km/10.6km/21.1km. org_email = canberra@srichinmoyraces.org. Venue: Chapman Oval, Chapman ACT (approx -35.3513, 149.0344). series_name = Sri Chinmoy Canberra Trail Series.

5. **Sri Chinmoy Princes Park** (9 Aug, Melbourne) — Marathon/30km/HM/10km/5km. org_email = melbourne@srichinmoyraces.org. Venue: Princes Park, Royal Parade, Carlton North VIC.

6. **All remaining Sri Chinmoy events** — Yarra Boulevard (13 Sep), Mara-Fun Relays (18 Oct), Royal NP (1 Nov), Trail 100 (2 Aug), Tan Team Relays (8 Nov), Triple-Tri (8 Nov).

## Additional events still to add (from Side Chat queue):

7. Rock 'N Reef Trail Run — 28 Jun, Bowen QLD (Outer Limits Adventure)
8. Paluma Push MTB — 18 Jul, Paluma Village QLD (Outer Limits Adventure)
9. Sue Bell Memorial Riverway Triathlon — 9 Aug, Townsville QLD
10. Zombie Run 10K & 5K — 24 Oct, Dolls Point NSW (info@zombierun.com)
11. Cadbury Marathon 2027 — 3 Jan 2027, Hobart TAS (find organiser contact first)
12. MS Gong Ride — Sydney→Wollongong, 2026 date TBC (events@ms.org.au)
13. Bowral Classic — 18 Oct NSW (Cycling Classics / Yaffa Media)
14. Coastal Pathway Ultra — 4 Oct, Latrobe TAS (Everyday Lions Events)
15. Transcend Trails — 22 Aug, Avon Valley WA (find organiser contact)
16. Shimano Gravel Muster — 20–23 Aug, Alice Springs NT (Rapid Ascent)
17. Surf Coast Century — 12 Sep, Anglesea VIC (Rapid Ascent)
18. Mt Buller SkyRun — 6 Dec (SingleTrack Events)
19. Brooks Surf Coast Trail Marathon already researched ✅ (see item 1 above)
20. Sole Motive: Brighton Beach Marathon (30 Aug VIC), Carmans Fun Run Sydney (20 Sep), Canberra Times Fun Run
21. 180 Cadence: Sydney Trail Marathon, STHM Night + Summer + Autumn, Parramatta HM
22. Running Wild NSW: Narrowneck, Megalong, Fairmont, Wentworth Falls (dates TBC)
23. Destination Sport: HYROX AU dates + full Tri Travel / Sportive Breaks AU calendar
24. The Event Team WA: Rottnest Channel Swim, HBF Run for a Reason, Busselton Jetty Swim
25. Race Hub Australia: full remaining portfolio (~9 events)
26. AAA Racing: D'Aguilar Two 'Ups' Marathon + Wildhorse (QLD)
27. **Cooks River Fun Run** — 28 Jun 2026, Strathfield NSW (Freshwater Park, Ada Avenue). Race Hub Australia. Distances: 10km, 5km, 2km Family Dash. Price: $28–$75. event_url: racehubaustralia.com/cooksriverfunrun/. Note: 5km + 2km already sold out — strong demand. Mention in Race Hub ~19 June follow-up.
28. **Backroads Gravel — Running variant** — 8 Aug 2026, Nabawa WA. Cycling rows already in sheet; running variant (Marathon 42.2km, HM, 14km trail, 5km) still to add as separate rows under a new submission_id. Organiser: The Event Team (info@theeventteam.com.au).
29. **Light Night Glow Run** — 22 Aug 2026, Devonport TAS. Everyday Lions Events (coastalpathwayultra@gmail.com).
30. **Triple Top Mountain Run** — Nov 2026, Sheffield TAS. Everyday Lions Events.

## 12 June follow-ups:
27. FlowiTri, Warners Bay Physio (decision point — Hunter Physio), Mauro, Newcastle Orienteering

## ~15–16 June follow-ups:
28. SARRC, Cycle Fitness Nutrition, Tailwind, Super Elliotts, Pace Athletic, Lake Mac Penguins, Vert Nutrition, MVCC, NHCC, TRSA, Sole Motive, 180 Cadence, Running Wild NSW, Destination Sport

## ~18–19 June follow-ups:
29. Bourkes Bicycles + all ~34 intros sent 4–5 June

## ~22 June follow-ups:
30. Brisbane Trail Ultra (Shona Stephenson), Terrigal Trotters/GNW

## Admin:
31. **GCP cleanup** — delete "My First Project" and its keys; delete "Maps Platform API Key" (33 APIs) from Eventry project
32. **Newsletter strategy** — platform (Mailchimp), content, cadence. Currently 2 subscribers.
33. **Footmotion / Jody** — HIGH PRIORITY warm contact, call or DM. Still outstanding.
34. Update EVENTRY-CONTEXT.md next session ✅ (done this session)

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
- **Social outreach** (Facebook/Instagram DMs) must come from the Eventry page, not Adriaan's personal account

## "List it, then reach out" — standard organiser acquisition play
Add events with org_email populated (go-live email fires automatically), then send a personal intro 1 day later naming their other events. If no reply in ~7 days, list remaining events anyway.

## Sri Chinmoy outreach approach
City-specific emails: sydney@, canberra@, melbourne@, brisbane@srichinmoyraces.org. Add all city events with correct org_email → auto emails fire → send one personal intro per city naming all listed events and inviting them to submit more.

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

## Researched, ready to add (next session) ⏳
- Brooks Surf Coast Trail Marathon (20 Jun, Torquay VIC) — all details in Session 27 Summary
- Sri Chinmoy Ainslie Amble (28 Jun, Hackett ACT) — all details in Session 27 Summary
- Cooks River Fun Run (28 Jun, Strathfield NSW) — Race Hub Australia, racehubaustralia.com/cooksriverfunrun/, 10km/5km/2km, $28-$75
- Sri Chinmoy Dolls Point (12 Jul, Sydney) — details from au.srichinmoyraces.org/sydneyraces
- Sri Chinmoy Aranda Meander (19 Jul, Canberra) — details from au.srichinmoyraces.org/canberratrailruns
- Sri Chinmoy Princes Park (9 Aug, Melbourne) — details from au.srichinmoyraces.org/events/melbourne
- Sri Chinmoy Yarra Boulevard (13 Sep, Melbourne)
- Sri Chinmoy Mara-Fun Relays (18 Oct, Sydney)
- Sri Chinmoy Royal National Park (1 Nov, Sydney)
- Sri Chinmoy Canberra Trail 100 (2 Aug)
- Sri Chinmoy Tan Team Relays (8 Nov, Melbourne)
- Sri Chinmoy Triple-Triathlon (8 Nov, Canberra)
- Rock 'N Reef Trail Run (28 Jun, Case Park Horseshoe Bay Rd, Bowen QLD — Outer Limits Adventure) — 6km/10km/18km, outerlimitsadventure.com.au/event/rock-n-reef-trail-run/
- Paluma Push MTB (18 Jul, Paluma Village QLD — Outer Limits Adventure) — 42/53/70/100km + E-Bike, palumapush.com.au
- Transcend Trails (22 Aug, Walyunga NP WA) — 65km/40km/28km/12km/6km, transcendtrails.com. Find organiser contact email.
- Backroads Gravel — running variant (8 Aug, Nabawa WA) — Marathon/HM/14km/5km — separate rows from the cycling event already in sheet
- Sue Bell Memorial Riverway Triathlon (9 Aug, Townsville QLD) — Townsville Triathlon Club, my.raceresult.com/387264. Find org_website (likely townsvilletriclub.com.au).
- Zombie Run 10K & 5K (24 Oct, Dolls Point NSW) — info@zombierun.com
- Cadbury Marathon 2027 (3 Jan 2027, Hobart TAS — verify organiser contact first)
- MS Gong Ride (2026 date TBC, events@ms.org.au)
- Coastal Pathway Ultra (4 Oct, Latrobe TAS) — Everyday Lions Events, coastalpathwayultra@gmail.com
- Light Night Glow Run (22 Aug, Devonport TAS) — Everyday Lions Events
- Triple Top Mountain Run (Nov, Sheffield TAS) — Everyday Lions Events
- Bowral Classic (18 Oct, Bowral NSW) — Cycling Classics, info@cyclingclassics.com.au. Also add: Noosa Classic, Mudgee Classic, Snowy Classic, Clare Classic (all same organiser).

## Pending — confirm details before adding
- CTTR — Trails & Tails Coopernook (Aug) + Deep Creek Backyard Ultra (Oct/Nov) — await CTTR response
- Those Guys Events remaining events — await response
- Newcastle Orienteering Club — await Justin Stafford response
- Barossa Run (13 Sep 2026, Lyndoch SA, SARRC) — add when SARRC responds
- Nordic Kayaks Beach to Beach Ocean Paddle (13 Jun 2026, Mooloolaba QLD) — event past, decide if worth adding for future editions

## Categorised — not events to add
- runningcalendar.com.au, rundais.org — competitors/aggregators (monitor)
- ironman.com — too large/commercial for now
- rowingnsw.asn.au — governing body, future rowing event source
- oceanswims.com — competitor + open water event source
- ARA Ride for Good — corporate charity ride, poor fit (skip per policy)

# 12. On the Horizon

- **Newsletter** — platform (Mailchimp), content strategy, cadence. Currently 2 subscribers.
- **Social media content** — Facebook + Instagram live (Session 27). Content plan and posting cadence still needed.
- **GA → Sheets sync** — Apps Script + GA Data API. Build when monetisation is live.
- **Past events toggle** — "View past events" filter on index.html. Low priority.
- **submit.html image/logo URL fields** — expose event_image_url and event_logo_url to organisers.
- **Member pricing** — optional member_price per discipline. New col planned.
- **Event cancellation detection** — feasibility research
- **Athlete profiles, What's Next feed, fitness platform integration** — future roadmap
- **Report a problem link** — a visible "Report a problem" link on event cards or the site footer. Build as lightweight modal or dedicated page. Key for data quality at scale.

# 13. Key Learnings & Principles

- **Sheet structure is fixed:** Eventry_Events.xlsx has exactly two tabs — Sheet1 and Newsletter Subscribers.
- **Add events directly in the live sheet** — Adriaan edits the live Google Sheet directly, not via xlsx upload.
- **Strip blank trailing rows before appending** — the reference sheet accumulates empty rows.
- **Column alignment discipline:** Removing a sheet column requires a placeholder in Apps Script.
- **Cross-session continuity via EVENTRY-CONTEXT.md:** Regenerate at end of every session.
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
- **Bounced emails need immediate address correction** — check the sheet org_email and update before any follow-up.
- **Multi-discipline events** (same submission_id, multiple rows) count as ONE event on the site.
- **Google Places autocomplete key must be exact** — `AIzaSyBPQjamKqe5yV-sP_AkuN_jeK1YJJLJmBM` note the `AkuN` not `AkaN`. One character typo caused hours of debugging.
- **UrlFetchApp in Apps Script needs GCP project linkage** — Apps Script must be linked to the same GCP project as the API key, and OAuth consent screen must be configured.
- **API keys created under personal account, used via eventry account** — add eventry.au@gmail.com as Editor on the GCP project.
- **Geocoder HTML tool** — `geocoder_corrections.html` and `geocoder.html` stored locally (OneDrive/Desktop). Run via `cd "C:\Users\amoore\OneDrive - Strata Worldwide\Desktop" && py -m http.server 8080`.
- **doGet only copies top-level fields on first sighting of a submission_id** — anything that can live on a non-first discipline row (like coords) needs an explicit coalesce block.
- **Numbers pasted into time-formatted cells get reinterpreted as 1899/1900 dates** — always set AW/AX to Number format before entering coords.
- **Coords are for distance sorting/filtering, not for showing the exact event start point** — for multi-discipline point-to-point events, use the event hub/main venue as the coord location.
- **Don't use the pending→approved trick to re-fire go-live emails** — unreliable; dedup key may already exist. Send manually instead.
- **H Events** (admin@hevents.com.au, Paul Humphreys) organises Winery Run, Fernleigh 15, Maitland River Run, and supports Hunter Valley Triathlon (which has its own HVTC email). Treat as separate orgs.
- **Terrigal Trotters** runs BOTH GNW Trail Running Festival AND Bay to Bay Running Festival — one contact (gnw@terrigaltrotters.com.au) covers both.
- **Sri Chinmoy Marathon Team Australia** uses city-specific emails: sydney@, canberra@, melbourne@, brisbane@srichinmoyraces.org. Brisbane has no current upcoming events.
- **Social outreach** must come from Eventry Facebook/Instagram page, not Adriaan's personal accounts.
- **Free social/community events ARE listable** (same as Footmotion social runs) — event type: Social, recurring: weekly/as needed, price: free. Don't filter these out.
- **Cycling Classics** runs 5 national gran fondo events — Bowral, Noosa, Mudgee, Snowy, Clare. One contact (info@cyclingclassics.com.au) covers all five.
- **Everyday Lions Events** (coastalpathwayultra@gmail.com) runs multiple TAS events — Coastal Pathway Ultra + Light Night Glow Run + Triple Top Mountain Run.
- **Outer Limits Adventure** runs both trail running (Rock 'N Reef) and MTB (Paluma Push) and claims Australia's biggest trail running series — full portfolio worth researching.
- **Backroads Gravel** has both cycling and running disciplines — add as separate rows with different sport types but same event_date and location.

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
- **Local geocoder tool** — `geocoder_corrections.html` on OneDrive Desktop. Run via Python HTTP server (see learnings above).
- **Social media:** Facebook Page + Instagram @eventry.au — both live Session 27. Brand assets: eventry-profile-photo.png + eventry-facebook-cover.png on file.

# 15. About Page — Locked Copy

*Committed to GitHub 25 May 2026.*

Eyebrow: OUR STORY | Headline: Built by athletes, for athletes.
Subtext: Eventry started with a simple question — what's next? Searching for that answer shouldn't be this hard. So we built the place we always wished existed.

Pull Quote: "What's next? We built the answer."

Roadmap: NOW: Australia's sports events directory. SOON: Featured listings and partner network. FUTURE: Athlete profiles, What's Next feed, fitness platform integration.

# 16. Development Roadmap (reconciled to Session 27)

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
| Location-based "Nearest first" sorting — auto GPS + manual city picker | 25 |
| Google Places autocomplete on venue field (submit.html) | 25 |
| Real lat/lng captured on new submissions → sheet cols AW/AX | 25 |
| Coord backfill for all 136 existing events | 25 |
| doGet exposes real coords with multi-row coalesce; index.html reads them | 26 |
| Distance sort: 75km bands, soonest-first within band; radius opt-in default | 26 |
| Daily coord monitor in markPastEvents (📍 COORD CHECK email) | 26 |
| Facebook Page + Instagram @eventry.au created | 27 |

## ⏳ Designed, Not Yet Built

- **Member pricing** — optional `member_price` per discipline.
- **GA → Sheets sync** — Apps Script + GA Data API. Build when monetisation is live.
- **submit.html image/logo URL fields** — sheet cols exist; form doesn't expose them yet.
- **Newsletter** — platform, content, cadence. Not started.
- **Social media content plan** — accounts created; posting cadence not established.

## ❌ Not Yet Started

### Near-term (no blockers)
- **Report a problem link** — visible feedback link on cards/footer. Simple form or mailto.
- **Top 5 sport pills + "More sports ▾" dropdown**
- **75km band label** — surface "Events within 75km shown first" subtly near the sort dropdown. Not a filter, just sets expectations without cluttering UI.
- **Partner cards: half-size, two-across** — compact layout: logo, name, one-liner, View button. Two columns on desktop, one column on mobile. Reduces screen real estate used relative to current full-width cards.
- **Admin dashboard** (password protected)
- **Suburb/state cross-validation on submit form**
- **GCP cleanup** — delete "My First Project" + Maps Platform API Key (33 APIs)

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
