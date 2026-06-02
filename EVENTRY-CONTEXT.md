**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 3 June 2026 (Session 22)*

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

When auditing the sheet, only reference these two tabs. Do not reference backup tabs — old backup tabs have been deleted as of Session 22. Sheet1 has 48 columns (AV = `recurring_end_date`).

**Sheet1 key column indices:** B=status(1), I=event_name(8), J=event_date(9), AB=recurring(27), AV=recurring_end_date(47)

**Current sheet counts (as of 3 June 2026):**
- 105 approved events + 9 past events
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
- **Warners Bay Physiotherapy** — Jeandre Theunissen (reception@warnersbayphysiotherapy.com.au) — card upgrade pitch sent 29 May, opened same day, no reply. 3rd touch total. Follow up ~12 June. **Primary physio relationship — activate Hunter Physio only if Warners Bay doesn't respond after 12 June.**
- **Tailwind Nutrition** — retail@tailwindnutrition.com.au — card upgrade email sent 1 June (web form blocked, used retail@). Awaiting response. Follow up ~16 June.
- **Cycle Fitness Nutrition** (PTR-CFN) — Glen, info@cyclefitnessnutrition.com — card upgrade email sent 1 June. Opened within 24hrs (Mailsuite). No reply. Follow up ~15 June.

## Current Partners — Pending (in sheet, not yet live)

- **Hunter Physio Sports Clinic** (PTR-HUNTERPHYSIO) — office@hunterphysio.com.au — **ON HOLD.** Activate after 12 June if Warners Bay Physio still no response.
- **Vertigo MTB** (PTR-VERTIGOMTB) — bookings@vertigomtb.com.au — **NOT CONTACTED YET.** Reach out after Icarus race dust settles (post 7 June). TAS MTB hire + shuttles, St Helens. First TAS partner.

## Partner Outreach Pipeline

**Warm contacts (approach first):**
- **Footmotion Newcastle — Jody** (personal connection, previously Pure Run Newcastle) — NOT YET CONTACTED. Call or DM directly. Running shoe store + weekly social run. Multiple Footmotion stores each with own weekly runs. Each weekly run = recurring social event listing on Eventry. HIGH PRIORITY.
- **Super Elliotts Cycles** — bikes@superelliotts.com.au — email sent 1 June. In-person visit same day (200 Rundle St Adelaide SA). Awaiting response. First SA partner.
- **Bourkes Bicycles** — info@bourkesbicycles.com.au — email sent/to send 4 June. Owner-operated est. 1979, Taree NSW. Co-organises Coopernook Gravel + Bourkes Bikes Road Race with MVCC.

**Research leads (Tier A):**
- **Pace Athletic** — rosebery@paceathletic.com — email sent 2 June. 7 Sydney stores + Blue Mountains Running Co (same business). If no reply by ~16 June, email individual stores: castlehill@, manly@, rozelle@, crowsnest@, mosman@, waverley@paceathletic.com + info@bluemtnsrunningco.com.au
- **Blue Mountains Running Co** — OWNED BY PACE ATHLETIC (Trasa Holdings Pty Ltd). Approach via Pace Athletic head office only.
- **Lake Mac Penguins** — Coach Spot Anderson (hello@lakemacpenguins.com) — email sent 2 June. Swim/tri coaching + monthly Swim Runs around Lake Mac. Dual partner + event source. Follow up ~16 June.

**Research leads (Tier B):**
- **Vert Nutrition** (ben@vertnutrition.com.au) — email sent 2 June. Follow up ~16 June.
- **Neopro Cycling** (neoprocycling.com.au) — not yet contacted. Could also be event source if they run rides.
- **Activate Muscle Therapy** — check Instagram first (no website found)
- **Endu** (endu1.com) — endurance fuel, surfaced as Run Forrest sponsor. Not yet contacted.

**Research leads (Tier C — verify fit before reaching out):**
- **Supplement Co** (supplementco.com.au) — Noosa sports-nutrition retailer. Find contact name.
- **Hennika Health** (hennikahealth.com) — pain-relief spray for runners. Confirm fit.
- **MaraThongs** (marathongs.com.au) — running recovery footwear. Confirm fit.
- **Marty Smith / Ten Lifestyles** — running coach (posture/injury). Find contact details.

**Watch list — partner OR competitor:**
- **Runly** (runly.com.au) — running app/coaching platform. Assess before approaching.
- **MSA / Multisport Australia / Sportsplits** (multisportaustralia.com.au) — times most AU events. Strategic partnership (results integration), not a partner-card listing. Separate track.

**Partner review at 12 June:** Assess FlowiTri, Warners Bay, Mauro — if still no response after multiple touches, consider moving to pending and redirecting energy to new partners.

## Organiser Outreach Sent

- Those Guys Events — web form 28 May. Awaiting response.
- Coastal Track and Trail Runners (CTTR) — web form 28 May. Awaiting response.
- EventMatrix Pty Ltd (events@eventmatrix.com.au) — web form 28 May. Awaiting response.
- Quad Events Australia — web form 28 May. Awaiting response.
- RunThrough Australia — hello@runthroughaustralia.com — **BOUNCED TWICE. PERMANENTLY DEAD.** Fallback: info@runthrough.co.uk (UK head office). 3 AU events already in sheet.
- Terrigal Trotters (admin@terrigaltrotters.com.au) — email 28 May. Automated response received.
- Western Districts Joggers & Harriers (festivalofthefeet@westiesjoggers.com) — email 28 May. Opened, no reply.
- Sydney Striders — **CONVERTED.** Bruce Inglis self-submitted 10K Series (6 rounds live). Go-live + thank-you + logo request email sent Session 18.
- Newcastle Orienteering Club — Justin Stafford (president@newcastleorienteering.asn.au) — email 29 May. Follow up ~12 June.
- SARRC / Lindsay Gunn (office@sarrc.asn.au) — email 1 June. Barossa Marathon + Yurrebilla listed. Follow up ~15 June.
- Southern Exposure / Run Forrest — auto go-live email fired on approval 1 June.
- MVCC (mvcc.clubsec@hotmail.com) — email 2 June. Wooton Classic + Coopernook Gravel + Port Mac Road Series. Follow up ~16 June.
- NHCC (info@newcastlehuntercc.com.au) — email 2 June. HEZ Road Race listed. Auto go-live fired (error — org_email was populated). Human follow-up sent same day. Follow up ~16 June.
- TRSA (events@trailrunningsa.com) — email 2 June. Full 2026 SA trail calendar listed. Ask about Twilight event in follow-up. Follow up ~16 June.
- Sole Motive (runmelbourne@solemotive.com) — email 2 June. ASICS Run Melbourne listed. Follow up: name Brighton Beach Marathon (30 Aug), Carmans Fun Run Sydney (20 Sep), Canberra Times Fun Run specifically. Follow up ~16 June.
- 180 Cadence (alex@180cadence.au) — email 2 June. STHM Winter + SUM 30/50/100 listed. Follow up: name Backyard Ultra, Sydney Trail Marathon, STHM Night + Summer, Parramatta HM. Follow up ~16 June.
- Running Wild NSW (info@runningwildnsw.com) — email 2 June. Burralow Bush Run listed. Ask about TBC 2026 dates for Narrowneck, Megalong, Fairmont, Wentworth Falls. Follow up ~16 June.
- Destination Sport Experiences — Tessa Tumen-Ulzii (tsesun.tumen-ulzii@destinationsport.com) — **CONVERTED inbound 2 June.** Manages HYROX AU, Tri Travel, Sportive Breaks. KI Run Festival corrected. CC: Jenna-belle, Shannon, Ashleigh. Follow up ~16 June: logo (PNG transparent bg) + full 2026/27 AU event calendar.

## Organiser Outreach Pending

- **Pedal Heads Inc** (info@pedalheads.org.au) — NOT YET. Reach out early next week after 7 June Icarus race. Congratulate on comeback, ask about future series rounds. Could be 4–6 events/year at St Helens TAS.
- **Wonderland Run / Adelaide Trail Runners** — no email found publicly. Contact via adelaidetrailrunners.com.au. Event now live on site.
- **PB Events / Justin** (justin@pbevents.com.au) — You Yangs / Werribee / Great Rail Run. Not yet contacted.
- **SingleTrack Events** (singletrack.com.au/contact) — **TOP PRIORITY.** 11 VIC trail events: GPT100, Buffalo Stampede, Roller Coaster Run, Mt Buller SkyRun, Snow Gum Run, Razorback Run, Alpine Challenge, Wilsons Prom Running Festival, Kilcunda + more. One contact = many listings. Note: Six Foot page links Wonderland to adelaidetrailrunners.com.au and Buffalo Stampede to buffalostampede.com.au — verify current organiser URL before listing.
- **The Event Team (WA)** (info@theeventteam.com.au) — 6+ WA events: Dwellingup 100, Rottnest Channel Swim, HBF Run for a Reason, Perth Kilt Run, Backroads Gravel, Busselton Jetty Swim. Not yet contacted.
- **Cycling Classics / Yaffa Media** (cyclingclassics.com.au/contact-us) — Bowral Classic (18 Oct 2026, NSW) ready to list. Not yet contacted.
- **AAA Racing** (aaaracing.com.au) — D'Aguilar Two 'Ups' Marathon + Wildhorse event. QLD. Not yet contacted.
- **Coffs Trail Runners** (coffstrailrunners.com) — Washpool World Heritage Trail + Rumble in the Jungle (Rumble in sheet). Not yet contacted.
- **Run QLD** (runqld.com.au) — Rainbow Beach Trail Run + Blackall 100 (Blackall in sheet). Not yet contacted.
- **Fit City Events** (+61 430 472 975, shepparton.run/contact) — Shepparton Running Festival organiser. Check if they run other events. May be same business as Fit City Tours (fitcitytours.com.au).
- **Sri Chinmoy Marathon Team Australia** — add to top-tier outreach list alongside Race Hub Australia, Atlas Events, H Events.

# 5. Current State

## Sheet status as of 3 June 2026 (Session 22)

- **105 approved events** on live site
- **5 approved partners** live (FlowiTri, Mauro Swim Team, Cycle Fitness Nutrition, Tailwind Nutrition, Warners Bay Physio)
- **2 pending partners** in sheet (Hunter Physio Sports Clinic, Vertigo MTB)
- **2 newsletter subscribers** (Newsletter Subscribers tab)
- Sheet cleaned up Session 22: all test rows deleted, all backup tabs deleted, duplicate RunThrough rows (EVT-RUNTHRU-*) removed
- parkrun Speers Point (EVT-PARKRUN-SPEERSPOINT) deleted — needs resubmission via new recurring form

## Key decisions / notes from Session 22

- **Sheet is now clean** — only Sheet1 and Newsletter Subscribers tabs remain. No backup tabs.
- **SUB- rows live in Newsletter Subscribers tab** — these are newsletter signups, not events or partners. Do not flag as test rows.
- **Always add events via xlsx file** — tab-separated rows cause column alignment errors.
- **Eventry_Events.xlsx in project files is the reference sheet** — always read this file for audits, not memory or prior sessions.

## Key decisions / notes from Session 20–21

- **Recurring events overhaul complete** — see Section 7 for full design. Fully tested and live.
- **Monthly recurring uses multi-date picker** — organiser enters each date individually. Last date = implicit end date.
- **GitHub web editor large file paste can silently produce 0-byte files** — use upload/replace for files over ~500 lines.
- **Google Sheets auto-converts bare date strings to Date objects** — use `instanceof Date` guard → `.toISOString().split('T')[0]`.
- **Script Properties dedup keys persist between test runs** — use `clearRecurringProps()` or delete via Project Settings.

# 6. Immediate To-Do Queue (Priority Order)

## Urgent (this week):

1. **Resubmit Speers Point parkrun** — deleted in Session 22. Resubmit via submit.html as weekly recurring with proper end date.
2. **Contact Footmotion / Jody** — warm personal contact, call or DM. Partner listing + weekly social run events. HIGH PRIORITY.
3. **Send Bourkes Bicycles email** — info@bourkesbicycles.com.au — draft ready, send 4 June if not already sent. Check outreach tracker.
4. **Reach out to Vertigo MTB** (bookings@vertigomtb.com.au) — after Icarus race settles post 7 June.
5. **Reach out to Pedal Heads** (info@pedalheads.org.au) — early next week after 7 June race.
6. **Contact SingleTrack Events** (singletrack.com.au/contact) — TOP PRIORITY organiser. 11 VIC trail events.

## 12 June follow-ups:
7. FlowiTri (Lucas McBeath) — 3 touches, opened, no reply
8. Warners Bay Physio (Jeandre Theunissen) — 3 touches, opened, no reply. **Decision point: if no response, activate Hunter Physio**
9. Mauro Swim Team (Peter Mauro) — 2 touches
10. Newcastle Orienteering Club (Justin Stafford) — 1 touch

## ~15–16 June follow-ups:
11. SARRC (Lindsay Gunn)
12. Cycle Fitness Nutrition (Glen)
13. Tailwind Nutrition
14. Super Elliotts Cycles
15. Pace Athletic — if no reply, email individual stores directly
16. Lake Mac Penguins (Spot Anderson)
17. Vert Nutrition (Ben Paris)
18. MVCC, NHCC, TRSA, Sole Motive, 180 Cadence, Running Wild NSW
19. Destination Sport Experiences (Tessa) — logo + full event calendar

## Events still to add:
20. **Campbell's Shepparton Running Festival** — 15–16 Aug 2026, Shepparton VIC. **SOLD OUT for 2026** — still worth listing for discovery + 2027 awareness. Organiser: Fit City Events.
21. **GNW Trail Running Festival** — 20 Sep 2026, 10K/30K/50K, NSW. Ready to add.
22. **Sydney Backyard Ultra at St Ives** — 19 Sep 2026. Ready to add.
23. **Run Port Douglas** — 5 Sep 2026, QLD. info@runportdouglas.com.au. Ready to add.
24. **Bowral Classic** — 18 Oct 2026, NSW. Ready to list once Cycling Classics contacted.
25. **Two Bays Trail, Kowen Trail Run, Stromlo Running Festival, UTA** — confirmed events, not yet in sheet.
26. **Brisbane Marathon, GC50** — confirmed events, not yet in sheet.
27. **Six Inch Trail (WA), Perth Marathon** — confirmed events, not yet in sheet.
28. CTTR events (Trails & Tails Coopernook Aug + Deep Creek Backyard Ultra Oct/Nov) — await CTTR response.
29. Those Guys Events bulk add — await response.
30. Newcastle Orienteering Club bulk add — await Justin Stafford response.
31. Riverina Trail Series Round 5 (Fed Hill) — in sheet as EVT-RTRS-FEDHILL-2026, date TBC — verify date at riverinatrails.com.au
32. Sole Motive: Brighton Beach Marathon (30 Aug VIC), Carmans Fun Run Sydney (20 Sep NSW), Canberra Times Fun Run
33. 180 Cadence: Backyard Ultra, Sydney Trail Marathon, STHM Night + Summer + Autumn editions, Parramatta HM
34. Running Wild NSW: Narrowneck, Megalong, Fairmont, Wentworth Falls — dates TBC
35. Destination Sport: HYROX AU dates + full Tri Travel / Sportive Breaks AU calendar

## Events to research before adding:
36. Runaway Noosa Marathon (runawaynoosa.com.au) — QLD, dates TBC
37. Launceston Running Festival — TAS, dates TBC
38. Balmoral Burn (Balmoral Run Club) — NSW hill run, confirm it's a standalone listable event
39. Washpool World Heritage Trail — NSW
40. Rainbow Beach Trail Run — QLD
41. Lizard Log Trail Run — Western Sydney Parklands, dates TBC
42. D'Aguilar Two 'Ups' Marathon + Wildhorse — QLD (AAA Racing)
43. Dwellingup 100, Rottnest Channel Swim, HBF Run for a Reason, Perth Kilt Run, Backroads Gravel, Busselton Jetty Swim (The Event Team WA)
44. GPT100, Buffalo Stampede, Roller Coaster Run, Mt Buller SkyRun, Snow Gum Run, Razorback Run, Alpine Challenge, Wilsons Prom, Kilcunda (SingleTrack Events)
45. GYG Coffs Harbour Triathlon Festival — past (9–10 May 2026); note for 2027

## Newsletter & Socials (outstanding — not being tracked elsewhere):
46. **Newsletter strategy** — plan content, cadence, and platform (Mailchimp free tier: 500 contacts, 1,000 emails/month). Currently 2 subscribers in sheet.
47. **Social media accounts** — set up Instagram (minimum). Strategy and content plan needed.
48. **Newsletter content pipeline** — what goes in it (new events, partner spotlights, race recaps?), how often, who writes it.

## Admin:
49. RunThrough Australia — forward to info@runthrough.co.uk (UK head office). hello@runthroughaustralia.com permanently dead.
50. NHCC — monitor for "we didn't submit this" reply; have friendly explanation ready.

# 7. Recurring Events — Design & Logic (Session 20)

**Status: BUILT, DEPLOYED, FULLY TESTED ✅**

## Architecture

**Col AV = `recurring_end_date`** — dual-use field:
- **Weekly:** stores a plain date string `YYYY-MM-DD`
- **Monthly:** stores a JSON array of remaining upcoming dates e.g. `["2026-08-02","2026-09-06"]`
- **Series mode / one-off / annual:** col AV left empty

## submit.html behaviour

- **Weekly:** Shows `First event date` + `Last event date` (both required). Hint: "We'll show one upcoming card at a time and auto-generate the next as each date passes."
- **Monthly:** Shows multi-date picker (up to 12 dates, `+Add another date` button). Last date = implicit end date.
- **Series mode:** Unchanged — writes one row per round.
- `toggleDateFields()` enforces `required` attribute dynamically on weekly end date.

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

## Email triggers

- **Renewal email:** fires when last occurrence row is written. Subject: "⏳ Your last [event] is coming up — want to extend?"
- **End email:** fires when last occurrence flips to past. Subject: "🏁 Your [event] listing has ended — want to relist?"
- Both BCC eventry.au@gmail.com.

## Key bug fixed (Session 20)

Google Sheets returns date cells as JS `Date` objects. Fix:
```javascript
let colAvRaw = row[COL_RECURRING_END];
if (colAvRaw instanceof Date) {
  colAvRaw = colAvRaw.toISOString().split('T')[0];
} else {
  colAvRaw = (colAvRaw || '').toString().trim();
}
```

## Cleanup still needed
- `clearRecurringProps()` helper remains in Code.gs — safe to leave, remove when convenient.

# 8. Card Image Feature — Design & Logic

## Card states

- **Base card** (default): plain white card, no background
- **Background on** (`event_image_enabled = TRUE`): sport-type generic background
- **Supplied background** (`event_image_url` populated + enabled): organiser/partner's own photo
- **Logo** (`event_logo_enabled = TRUE` + `event_logo_url` populated): logo shown centre-right over background

## Event type card banners

- 🏁 Race — competitive, with results/timing
- 🏋 Training — structured training session
- 🎉 Social — fun, community or non-competitive ← **use this for weekly run clubs**
- 🥇 Mixed — competitive and social combined

Social event cards show plain white with 🎉 SOCIAL badge. Working correctly.

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

# 9. Series & Go-Live Email — Design & Logic

## Series submission

- **Recurring** = same event, same place, repeating dates (parkrun).
- **Series** = rotating venues, each round its own date/venue/URL (Sydney Striders, Newcastle OC).
- Payload: `series_mode: true` + `rounds: [{date, venue, event_url}]`. doPost writes one row per round.

## Go-live-on-approval email

- `onApprovalEdit(e)` — installable On-edit trigger. Fires when col B → `approved`.
- Dedup key: `live:<timestamp>:<org_email>` in Script Properties.
- **Must be installable trigger** — simple triggers can't send email.
- Won't fire on markPastEvents (installable triggers don't fire on script-made edits).
- **Fires on manually-added events too** — be ready to explain to surprised organisers.

# 10. Outreach Strategy Notes

## Email deliverability rules
- No "free" in subject lines
- No hyperlinks in body — plain text only
- Single clear CTA per email
- Web forms bypass spam filters — use where available
- Don't follow up before 14-day mark
- Mailtrack/Mailsuite installed on eventry.au@gmail.com for open tracking

## Social runs — listing approach
- Event type: `Social`, Recurring: weekly, Price: free/0
- No registration link required
- Each store location = its own listing
- Good for community building and attracting run club partners

## Partner card upgrade pitch
- Visual: screenshot of bland partner card between image-backed event cards
- Ask: logo (PNG, transparent bg preferred) + background photo
- Subject: "Your Eventry listing — wanted to show you something"

# 11. Research URL Audit — Status

## Already in sheet ✅
hevents.com.au, in2adventure.com.au, adventurejunkie.com.au, coasttokosci.com, parkrun.com.au, Rocky Trail Entertainment, Coffs Running Festival, Rumble in the Jungle, Maitland River Run, Raffertys Coastal Run, Bouddi Coastal Run, Elephant Trail Race, Hounslow Classic, Pub to Pelican, Brisbane Trail Ultra, Blackall 100, Cairns Marathon Festival, The Guzzler Ultra, Cape to Cape MTB, Geo Bay Swim, The Black Pearl, Festival of the Feet, RunThrough AU (SIRC + Olympic Park + Albert Park), Riverina Trail Series Rounds 3–5, Barossa Marathon Festival, Yurrebilla 56K Ultra, Run Forrest Trail Run, Noosa Enduro (Trail + MTB + Gravel), Kangaroo Island Run Festival, Wonderland Run, Bare Creek Trail Run, ASICS Run Melbourne, Townsville Running Festival, Manly Dam Trail Run, Ten Trails of Garigal, SUM 30/50/100, Southern Sydney Track Ultra, STHM Winter, Burralow Bush Run, Wooton Classic, Coopernook Gravel, NHCC HEZ Road Race, MVCC Criterium + Road Race, Five Peaks Running Festival, TRSA On The Trails series (5 rounds), SAC 6 Hour Track, GNW Trail Running Festival, Sydney Backyard Ultra at St Ives, Kunanyi Trail Series (4 rounds), Rapid Ascent Trail Running Series (3 rounds)

## Pending — confirm details before adding
- CTTR — Trails & Tails Coopernook (Aug) + Deep Creek Backyard Ultra (Oct/Nov) — await CTTR response
- Sprint Series Lane Cove NSW + Anglesea VIC — 2026 dates not yet published
- Those Guys Events remaining events — await response
- Newcastle Orienteering Club — await Justin Stafford response
- Barossa Run (13 Sep 2026, Lyndoch SA, SARRC) — add when SARRC responds
- Bare Events portfolio — check bareevents.com.au for additional Sydney trail events
- Riverina Trail Series Round 5 (Fed Hill) — verify date at riverinatrails.com.au

## Categorised — not events to add
- runningcalendar.com.au, rundais.org — competitors/aggregators (monitor)
- ironman.com — too large/commercial for now
- rowingnsw.asn.au — governing body, future rowing event source
- tenpin.org.au, bowlsnsw.com.au, swimming.org.au — out of scope
- oceanswims.com — competitor + open water event source
- activelocals.com.au — competitor (app-based)
- First Light Marathon — New Zealand, out of scope
- Comrades ZA, Kepler Challenge NZ — overseas, out of scope

# 12. On the Horizon

- **Newsletter** — platform (Mailchimp), content strategy, cadence. Currently 2 subscribers. Migrate at 100+ subscribers (Mailchimp free: 500 contacts, 1,000 emails/month).
- **Social media** — Instagram account (minimum). Content plan, posting cadence.
- **GA → Sheets sync** — Apps Script + GA Data API to populate views/clicks columns. Build when monetisation is live.
- **Past events toggle** — "View past events" filter on index.html. Low priority.
- **submit.html image/logo URL fields** — expose event_image_url and event_logo_url to organisers.
- **Location-based sorting** — auto-selected state filter pill based on user location. Build when per-state event count is high enough.
- **Member pricing** — optional member_price per discipline. New col 48 planned. Designed, not built.
- **"Show all recurring events" toggle** — deferred until recurring overhaul is stable.
- Event cancellation detection — feasibility research
- Athlete profiles, What's Next feed, fitness platform integration — future roadmap

# 13. Key Learnings & Principles

- **Sheet structure is fixed:** Eventry_Events.xlsx has exactly two tabs — Sheet1 (events + partners) and Newsletter Subscribers (SUB- rows). Backup tabs were deleted Session 22. Do not reference other tabs.
- **Always add events via xlsx file** — tab-separated rows cause column alignment errors.
- **Column alignment discipline:** Removing a sheet column requires a placeholder in Apps Script.
- **Cross-session continuity via EVENTRY-CONTEXT.md:** Regenerate at end of every session.
- **Batch changes before uploading:** Adriaan prefers to batch code changes before GitHub upload.
- **Partner data discipline:** Keep records at pending until outreach is complete.
- **Duplicate the sheet tab** before structural changes as a backup.
- **no-cors masks all server failures:** Always verify via sheet, notification email, or Apps Script Executions log.
- **Apps Script Executions log is source of truth.**
- **Installable vs simple triggers:** Function named `onEdit` runs as simple trigger and CANNOT send email.
- **GitHub large file paste (web editor) can silently produce 0-byte files** — use upload/replace for files over ~500 lines.
- **Google Sheets Date object auto-conversion:** Use `instanceof Date` guard before `.toString()` on any date cell.
- **Script Properties dedup keys persist across test runs** — clear with `clearRecurringProps()` when retesting.
- **Pace Athletic owns Blue Mountains Running Co** — same business (Trasa Holdings Pty Ltd). Approach via Pace Athletic only.
- **Auto go-live email fires on any approval** — including manually-added events. Be ready to explain.
- **Social event cards** work — event type 'Social' shows 🎉 SOCIAL badge, plain white card.
- **Series rows:** Reliable same-submission key is timestamp col (AF, idx 31) + org_email.
- **GitHub image rename caveat:** Re-upload the actual file after case-change rename on case-insensitive OS.

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

# 16. Development Roadmap (reconciled to Session 22)

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

## ⏳ Designed, Not Yet Built

- **Member pricing** — optional `member_price` per discipline. New col planned.
- **"Show all recurring events" toggle** — deferred until recurring overhaul is stable.
- **GA → Sheets sync** — Apps Script + GA Data API. Build when monetisation is live.
- **submit.html image/logo URL fields** — sheet cols exist; form doesn't expose them yet.
- **Newsletter** — platform, content, cadence. Not started.
- **Social media (Instagram)** — not started.

## ❌ Not Yet Started

### Near-term (no blockers)

- **Top 5 sport pills + "More sports ▾" dropdown**
- **Admin dashboard** (password protected) — approve/reject without opening Google Sheet
- **Suburb/state cross-validation on submit form** — soft warning
- **Google Places autocomplete on venue field**

### Blocked on monetisation legal clearance

- **Stripe payments** — Featured listings $49 AUD per event
- **GA reporting for organisers** — monthly stats email

### Blocked on user accounts

- **User accounts** — email + password or Google SSO
- **Organiser self-service portal**
- **QR event check-in**
- **Strava / Garmin / Apple Fitness integration**
- **"What's Next?" personalised discovery** — product north star

### Infrastructure (trigger-based)

- **Database migration** — Google Sheets → Supabase when hitting 500+ events
- **Mailchimp migration** — at 100+ newsletter subscribers
- **hello@eventry.au branded email** — Google Workspace ~$8 AUD/month. Deferred.
