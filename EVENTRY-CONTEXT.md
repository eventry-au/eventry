**EVENTRY-CONTEXT.md**

Session Handover Document

*Last updated: 28 May 2026 (Session 15)*

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

*Local-first strategy — Northern Beaches & Newcastle/Lake Macquarie focus. All partner data held at pending status until outreach is complete.*

## Outreach Sent (awaiting response)

- FlowiTri — Lucas McBeath (hello@flowitri.com.au) — resent 25 May 2026, opened, no reply. Follow up ~8 June.
- Mauro Swim Team — Peter Mauro (coach@mauroswimteam.com) — resent 25 May 2026, untracked. Follow up ~8 June.
- Warners Bay Physiotherapy — Jeandre Theunissen (reception@warnersbayphysiotherapy.com.au) — resent 25 May 2026, opened, no reply. Follow up ~8 June.
- Tailwind Nutrition (info@tailwindnutrition.com.au) — resent 25 May 2026, untracked. Follow up ~8 June.

## Outreach Pending (partners)

- Cycle Fitness Nutrition — existing partner (PTR-CFN, status: pending)
- Hunter Physio Sports Clinic — existing partner (PTR-HUNTERPHYSIO, status: pending)
- Vert Nutrition (vertnutrition.com.au) — potential partner from research
- Neopro Cycling (neoprocycling.com.au) — potential partner from research
- Activate Muscle Therapy — sports therapy business active in regional NSW trail running community; no website found, check Instagram before assessing
- PB Events / Justin (justin@pbevents.com.au) — organiser of You Yangs / Werribee / Great Rail Run events; outreach not yet sent

## Organiser Outreach Sent

- Those Guys Events — web form 28 May 2026. Guzzler Ultra, Yarrabilba Trail Fest, Hidden Vale Trail Running Festival, SEQ Trail Running Series, runher Races.
- Coastal Track and Trail Runners — web form 28 May 2026. Elephant Trail Race + Deep Creek Backyard Ultra + Bottlebutt Bash + Trails & Tails.
- EventMatrix Pty Ltd (events@eventmatrix.com.au) — web form 28 May 2026. Cape to Cape MTB + Geo Bay Swim.
- Quad Events Australia — web form 28 May 2026. The Black Pearl (Newcastle/Lake Macquarie, Nov 6–8 2026).
- RunThrough Australia — email 28 May 2026 to hello@runthroughaustralia.com — **BOUNCED** (address not found). Need to find correct contact — try site contact form or social media DM.
- Terrigal Trotters (admin@terrigaltrotters.com.au) — email 28 May 2026. Automated response received.
- Western Districts Joggers & Harriers (festivalofthefeet@westiesjoggers.com) — email 28 May 2026.
- Sydney Striders (info@sydneystriders.org.au) — email 28 May 2026. Opened, no reply.
- Jase Kerr (Facebook DM) — 28 May 2026. Run clubs list in 2026 Sydney Marathon Runners group — invited to list club events on Eventry.

# 5. Current State

## Completed as of 28 May 2026 (Session 15)

- **Outreach tracker cleaned up** — removed duplicate Quad Crown row, fixed date errors, confirmed all 16 rows accurate.
- **Card image feature built and tested** — event cards now support per-event background images and logos, controlled by 4 new sheet columns.
- **Sheet1 expanded to 47 columns** — added AR: event_image_enabled, AS: event_image_url, AT: event_logo_enabled, AU: event_logo_url.
- **Apps Script updated** — doGet reads 47 columns, includes 4 new fields with boolean coercion; doPost writes 4 empty values for new submissions. Redeployed as new version.
- **8 sport background images committed** to repo root: running.jpg, adventure_racing.jpg, cycling_mtb.jpg, openwater.jpg, triathlon.jpg, cycling.jpg, hiking.jpg, paddling.jpg. All free under Unsplash License.
- **index.html updated** — SPORT_BACKGROUNDS map, card-image CSS panel, rendering logic (bgImage + showLogo conditionals). Confirmed working live on EVT-CAIRNSMARATHON-2026.
- **RunThrough Australia email bounced** — hello@runthroughaustralia.com does not exist. Site is React-rendered (Lovable/Supabase stack), contact page didn't load via fetch.
- **75 events now showing** on live site.

## Sheet status as of 28 May 2026 (Session 15)

- **~90+ approved events** on site
- **4 approved partners** live (FlowiTri, Mauro Swim Team, Tailwind Nutrition, Warners Bay Physio)
- **2 pending partners** in sheet (Cycle Fitness Nutrition, Hunter Physio Sports Clinic)
- **Sheet1: 47 columns** (AR–AU are new image/logo fields)
- **Event format standard updated: now 47 columns** — tab-separated rows must include 4 trailing empty values for new image/logo fields

# 6. Immediate To-Do Queue (Priority Order)

- **Follow up FlowiTri + Warners Bay Physio ~8 June** (both opened, no reply)
- **RunThrough Australia** — find correct contact; try site contact form at runthroughaustralia.com or Instagram/Facebook DM
- **Remove debugCairns function** from Apps Script before next deploy
- **Move sport images to /assets/images/sports/** — currently at repo root, should be tidied into a folder; update SPORT_BACKGROUNDS paths in index.html accordingly
- **Riverina Trail Series Round 5 (Fed Hill)** — date not yet confirmed on riverinatrails.com.au; add when published
- **CTTR events** — Trails and Tails Coopernook (Aug) + Deep Creek Backyard Ultra (Oct/Nov) — await CTTR response
- **Those Guys Events** — if they respond, bulk-add: Yarrabilba Trail Fest, Hidden Vale Trail Running Festival, SEQ Trail Series rounds, runher Races
- **Sydney Striders 10K Series** — if they respond, add remaining 2026 rounds (Jun–Nov)
- **Sprint Series Lane Cove NSW + Anglesea VIC** — 2026 dates still not published on adventuresprint.com.au; check again next session
- **Backfill event_image_enabled** — enable backgrounds on key events in the sheet once image rollout is approved
- **Backfill event_logo_url** — source logos for key events and populate column AU

# 7. Card Image Feature — Design & Logic

## Card states (per-event toggles in sheet)

- **Base card** (default): current style, no background — all events default to this
- **Background on** (`event_image_enabled = TRUE`): sport-type generic background image with darkened overlay
- **Supplied background** (`event_image_url` populated + enabled): organiser's own photo replaces generic
- **Logo** (`event_logo_enabled = TRUE` + `event_logo_url` populated): event logo shown centre-right over background

## Rendering logic in index.html

```javascript
const bgImage = e.event_image_enabled
  ? (e.event_image_url || SPORT_BACKGROUNDS[e.sport] || null)
  : null;
const showLogo = e.event_logo_enabled && e.event_logo_url;
```

## Sport background image map

```javascript
const SPORT_BACKGROUNDS = {
  'Running': '/running.jpg',
  'Adventure Racing': '/adventure_racing.jpg',
  'Cycling MTB': '/cycling_mtb.jpg',
  'Open Water Swimming': '/openwater.jpg',
  'Triathlon': '/triathlon.jpg',
  'Cycling': '/cycling.jpg',
  'Hiking': '/hiking.jpg',
  'Paddling': '/paddling.jpg',
};
```

## Image sources (Unsplash, free commercial use)

| Sport | Photographer | Unsplash URL |
|---|---|---|
| Running | Brian Erickson | unsplash.com/photos/XFneC_rHR48 |
| Adventure Racing | Massimo Sartirana | unsplash.com/photos/iz_HuFCttA8 |
| Cycling MTB | Sunil Chandra Sharma | unsplash.com/photos/pprI3KVUaag |
| Open Water | Arisa Chattasa | unsplash.com/photos/9HLURpkNpXI |
| Triathlon | Jorge Romero | unsplash.com/photos/mfCFuPfTtdU |
| Cycling | Markus Spiske | unsplash.com/photos/WUehAgqO5hE |
| Hiking | Spencer Goggin (Mt Keira NSW) | unsplash.com/photos/M3UHrqGPfnw |
| Paddling | Aleksandar Andreev | unsplash.com/photos/heeKsWrqgUs |

## Logo storage approach

URL-first (organiser supplies URL in event_logo_url), GitHub /assets/logos/ as fallback for hosted logos.

# 8. On the Horizon

- **Past events toggle** — "View past events" filter on index.html; low priority but useful once archive grows
- **submit.html update** — add event_image_url and event_logo_url fields to organiser submission form
- Recurring events feature: Add option in submit.html to mark events as recurring (weekly/monthly/annual) with frequency selector; build automated organiser reminder emails. Key use cases: parkrun, orienteering, weekly club events
- Event cancellation detection: Research feasibility of periodic checks against event URLs/organiser sites to flag cancelled/postponed events
- Athlete profiles and event history (Future roadmap): Track events, log completions, build a profile — prerequisite is user accounts
- What's Next (Future roadmap): Personalised event feed matching history, location, preferences
- Fitness platform integration (Future roadmap): Sync training apps, build complete sporting record
- St Helens MTB Trails race (Icarus Track) — 7 June 2026, St Helens TAS, Adults $35 / Youngins $25, cycling_mtb — find proper organiser/event URL before adding (registration currently via ClickFunnels/hrgurus domain — unusual)

# 9. Outreach Tracker Notes

Google Sheets tab: Outreach Tracker. 16 rows. Columns: Contact Name, Organisation, Email Address, Type, Event/Context, Date Sent, Subject Line, Delivered, Opened, Response Received, Response Date, Outcome, Notes.

Conditional formatting rule: Highlight rows amber where Date Sent >14 days ago AND Outcome = No response. Formula: =AND($F2<>"", TODAY()-$F2>14, $L2="No response")

Deliverability issues identified: New Gmail account (low send history), free in subject lines, hyperlinks in body, cold email to business addresses. Fixes applied to new templates. Mailtrack now installed — all future sends will have open tracking.

Resend template subject line: "Eventry — wanted to make sure this reached you" (used 25 May for all four resends).

Web forms preferred over cold email where available — bypasses spam filters entirely.

**Run clubs outreach note:** Most clubs on Jase Kerr's list (2026 Sydney Marathon Runners FB group) run socially — not raceable events. The pitch to clubs is: "for the events you do organise — fun runs, charity races, time trials — Eventry is where runners outside Facebook find them." Facebook DM sent to Jase 28 May.

# 10. Key Learnings & Principles

- Content originality: Partner taglines and event descriptions must be written in original language — caught in audit and corrected
- Legal clarity on public data: Listing publicly available organiser/business information is generally acceptable in Australia with appropriate safeguards
- Partner data discipline: Keep all partner records at pending until outreach is complete
- Root-cause over workarounds: Sport pill filter fixed properly via normaliseSport() normalisation
- Visual confirmation caution: Browser automation screenshots can incorrectly show fixes as resolved; javascript_exec is more reliable for confirming DOM state
- Batch deploys: Changes should be batched before uploading to conserve deploy resources
- Sheet backup before structural changes: Duplicate the Google Sheet tab before making structural changes
- Email deliverability: Remove free from subject lines, no hyperlinks in body, plain text only, single clear CTA per email; web forms bypass spam filters entirely
- Opens without replies are normal for first contact — don't follow up before the 14-day mark
- Context doc can drift: verify live before actioning to-dos from previous sessions
- **Event format standard:** Tab-separated, **47 columns** matching Sheet1 exactly. Present as code block with event name header. Dates in YYYY-MM-DD format — Google Sheets auto-formats. Watch for empty org_email/org_phone fields causing column shift. Last 4 columns are image/logo fields — leave empty for new events unless enabling immediately.
- **Domain cross-checks:** Always verify event URLs — brisbanetrailultra.com.au redirects to The Guzzler; btu.org.au is correct BTU site.
- **Organiser intelligence:** Mathieu Dore Coaching organises both Riverina Trail Running Series and Pub to Pelican. Those Guys Events (thoseguysevents.com.au) organise 5+ QLD trail events. EventMatrix Pty Ltd (events@eventmatrix.com.au) organise Cape to Cape MTB and Geo Bay Swim — use this email, not hello@capetocapemtb.com. Quad Events Australia (formerly Quad Crown MTB) — rebranded, run The Black Pearl (Newcastle) and The Mystic Yak (Bright VIC).
- **Run clubs vs event organisers:** Most run clubs operate socially — weekly group runs, no public registration. The subset that matter for Eventry are clubs that organise proper open events. Confirmed event-organising clubs: Terrigal Trotters (GNW Trail + Bay to Bay), Western Districts Joggers & Harriers (Festival of the Feet), Sydney Striders (10K Series). Social-only confirmed: most of Jase Kerr's list.
- **event_type column:** Use cycling_mtb for MTB stage races, not trail_run. Applies to Cape to Cape and The Black Pearl.
- **Apps Script column reading:** getRange(1, 1, lastRow, 47) reads all 47 columns. New columns beyond last data column return empty string until data is added. Boolean TRUE in sheet comes through as boolean true in Apps Script — coercion `=== true || === 'TRUE'` handles both.
- **GitHub image uploads:** Can't rename files during upload via drag-and-drop UI. Upload first to root, then tidy paths later. Images at repo root are served at eventry.au/filename.jpg.
- **Google Sheets column drift:** Adding new header columns to Sheet1 won't take effect until you confirm the tab is Sheet1 (not a backup tab). Always verify active tab before editing structure.

# 11. Tools & Resources

- Claude in Chrome MCP — browser automation throughout development sessions
- Mailtrack / Mailsuite — installed on eventry.au@gmail.com for open tracking
- Debugging globals: window._allPartners, window._allEvents, window._apiDebug; Apps Script endpoint directly fetchable from browser console
- Mobile preview pattern: Navigate tab to about:blank, use document.write() to create 390px phone-frame wrapper with iframe loading eventry.au
- Cache-busting: Hard refresh via ctrl+shift+r; iframe cache-bust by appending ? + Date.now() to iframe src; also try ?nocache=1 on the URL
- GitHub file operations: Must navigate into the specific file before the three-dot delete menu appears
- DNS issues: Restart Starlink router to clear DNS cache if needed
- Crazy Domains for domain/DNS management
- GitHub editor find/replace: Ctrl+H in the web editor; works well for simple text replacements
- **Apps Script trigger:** markPastEvents — Time-driven, Day timer, Midnight–1am AEST. Live as of 28 May 2026.
- **Apps Script debug pattern:** Add debug function at bottom of script, select from dropdown, run, check execution log. Remove before next deploy.

# 12. Research URL Audit — Status

## Already in sheet ✅
hevents.com.au, in2adventure.com.au, adventurejunkie.com.au, coasttokosci.com, parkrun.com.au, Rocky Trail Entertainment, eventlist.com.au, Coffs Running Festival, Rumble in the Jungle, Maitland River Run, Raffertys Coastal Run, Bouddi Coastal Run, Elephant Trail Race, Hounslow Classic, Pub to Pelican, Brisbane Trail Ultra, Blackall 100, Cairns Marathon Festival, The Guzzler Ultra, Cape to Cape MTB, Geo Bay Swim, The Black Pearl, Festival of the Feet, RunThrough AU (Sydney IRC + Olympic Park), Riverina Trail Series Rounds 3–4

## Pending — confirm dates/details before adding
- Riverina Trail Series Round 5 (Fed Hill) — date TBC, check riverinatrails.com.au
- CTTR — Trails and Tails Coopernook (Aug 2026) + Deep Creek Backyard Ultra (Oct/Nov) — 2026 dates not yet confirmed; await CTTR response
- Sprint Series Lane Cove NSW + Anglesea VIC — 2026 dates not yet published on adventuresprint.com.au
- Those Guys Events remaining events — Yarrabilba Trail Fest, Hidden Vale Trail Running Festival, SEQ Trail Series, runher Races (await response)
- Sydney Striders 10K Series remaining 2026 rounds (Jun–Nov) — await response before bulk-adding

## Categorised — not events to add
- runningcalendar.com.au — competitor/aggregator
- ironman.com — too large/commercial for now, revisit later
- rowingnsw.asn.au — governing body, source for future rowing events
- tenpin.org.au — out of scope
- bowlsnsw.com.au — out of scope
- swimming.org.au — pool swimming governing body, out of scope
- oceanswims.com — competitor + good source for future open water swim events
- First Light Marathon — New Zealand event, not Australian
- Campbelltown Joggers — internal club racing only, no public-facing events to list
- Pakenham Road Runners — no organised public events found

# 13. About Page — Locked Copy

*Committed to GitHub 25 May 2026. Reference copy below for future edits.*

## Hero

Eyebrow: OUR STORY

Headline: Built by athletes, for athletes.

Subtext: Eventry started with a simple question — what's next? Searching for that answer shouldn't be this hard. So we built the place we always wished existed.

## Origin Story

After finishing an event — that post-race buzz still in your legs, already thinking about what's next — you pull out your phone and start searching. Five different websites. A few Facebook groups. A club newsletter you're not sure is still active. Half the events are out of date. Some links are broken. A few have already closed registrations.

Australia has thousands of incredible sporting events every year — trail runs, triathlons, ocean swims, obstacle races, cycling tours, paddling classics. But finding them, comparing them, and actually entering them has always been more work than it should be.

We thought so too.

## Pull Quote

"What's next? We built the answer."

## Roadmap

- NOW: Australia's sports events directory — browse, filter, and enter events across every sport and every state. Free to list, simple to find.
- SOON: Featured listings and partner network — organisers can feature events for more visibility; coaches and sports businesses can reach active athletes.
- FUTURE: Athlete profiles and event history — track events, log completions, build a profile.
- FUTURE: What's Next — personalised feed matching history, location, preferences.
- FUTURE: Fitness platform integration — sync training apps, build a complete record of your sporting life.
