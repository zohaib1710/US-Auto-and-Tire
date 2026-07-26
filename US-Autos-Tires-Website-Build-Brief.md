# US Autos & Tires — Website Build Brief

You're building a brand-new marketing website for **US Autos & Tires**, an independent auto repair shop in Plantation, Florida that specializes in European and luxury vehicles but services everything on the road. This brief is the design and content direction — treat it the way you'd treat a creative director's handoff, not a checklist. Where I give you a principle instead of a pixel value, use your judgment, but stay inside the system described below. The goal is a site that feels like it belongs to a shop that's more careful and more transparent than a typical dealership service department, at independent-shop prices.

Nobody has seen this site before. There is no "current site" to reference, clone, or improve on — you're building this from a blank canvas.

---

## 1. The Business (ground truth — don't invent facts beyond this)

- **Name:** US Autos & Tires
- **Address:** 770 N State Rd 7, Plantation, FL 33317
- **Phone:** (754) 223-5452
- **Hours:** Mon–Fri 8:00 AM–6:00 PM · Sat 9:00 AM–4:00 PM · Closed Sunday
- **Positioning:** Dealership-level precision for European and luxury vehicles, at independent-shop pricing. ASE certified technicians. Modern diagnostic equipment. Plain-language work orders — customers approve the cost before any work starts.
- **Specialty makes:** BMW, Mercedes-Benz, Audi, Volkswagen, Volvo, Land Rover, Porsche, MINI — plus domestic and Asian makes.
- **Core services (9):** Oil & Filter Changes, Tire Rotations, Wheel Alignments, Brake Inspections, Battery Testing, Fluid Services, Engine Diagnostics, Transmission Repairs, Suspension & Exhaust Repairs.
- **Differentiators:** Free towing on major repairs. Diagnosis is always free. Financing up to $5,000 with no credit history required, through American First Finance (apply link: `https://americanfirstfinance.com/app/selectApp`).

Do not fabricate additional facts (years in business, technician names, review content, review counts, "voted best of," etc.). Anywhere you need placeholder content to make a section look complete (team bios, testimonials, before/after photos, specific coupon values), build the component properly but mark the placeholder clearly in an HTML comment and, where it's user-facing on a page like Coupons, with a small visible tag so nobody accidentally ships fake claims. I'd rather you build a great empty box than fill it with something untrue.

### Content source

The shop's current live website is **https://usautoandtire.com/**. Use it as your source of truth for factual content — exact service descriptions, hours, any additional detail not already listed in this brief. Pull facts from it, not layout or visual style: the current site's design is being fully replaced by the system in this brief, so don't reference its look, structure, or components — only its written content. If something on the live site conflicts with a fact stated in this brief, this brief wins.

---

## 2. Design System

### Voice
Precise, confident, plain-spoken. No fake urgency, no "call NOW!!" energy. The site should feel like it was designed by people who take the work seriously — closer to a well-run dealership service department's digital presence than a bargain tire shop flyer.

### Color
```
--navy:      #0F1B33   /* primary dark — header, footer, dark sections */
--navy-2:    #16233F   /* secondary dark surface */
--navy-3:    #1C2A48   /* tertiary dark surface, cards on dark */
--red:       #C8202A   /* primary accent — CTAs, highlights, active states */
--red-2:     #E02830   /* red hover state */
--paper:     #F5F5F3   /* primary light background */
--paper-2:   #ECECE8   /* secondary light surface, alternating sections */
--steel:     #7B8494   /* muted text, labels, captions */
--white:     #FFFFFF
--ok:        #4CAF6D   /* status/success accents only, used sparingly */
```
Navy and red are the brand. Don't introduce a third hue as a major color — steel and paper are neutrals, not competing accents. Red is a spotlight color: CTAs, active nav states, key numbers, small accent marks. It should never be more than ~10% of any given viewport.

### Type
Load via Google Fonts CDN:
- **Poppins** (600/700/800) — all headings. Bold, geometric, slightly aggressive — this is the "dealership precision" voice.
- **Inter** (400/500/600) — body copy, UI text.
- **IBM Plex Mono** (400/500) — small labels, eyebrows, service codes, data points (est. time, work order numbers, stats). This monospace layer is a signature detail — it should show up anywhere you're presenting something that reads like structured data, not narrative copy.

### Signature motifs (use these — they're what make this feel designed, not templated)
- **Eyebrow labels:** small uppercase mono text in red, preceded by a short horizontal red tick mark, above every major section heading. E.g. `— ASE CERTIFIED · EUROPEAN & LUXURY SPECIALISTS`
- **Service codes:** each of the 9 services gets a short mono tag, `SVC-01` through `SVC-09`, displayed above the service name. This is a real diagnostic-code convention in the industry — lean into it.
- **Work-order card:** on the homepage hero, build a small floating card styled like a live digital work order/service ticket (work order #, vehicle, service, technician, est. time, a "diagnosis: always free" line, and a small pulsing "in service" status pill). This is the single most important visual signature of the brand — it should read as trustworthy and transparent, not gimmicky.
- **Numbered process steps:** the "how it works" flow (book → free diagnosis → you approve the work → drive away) uses large circular numbered badges, not icons.

### Spacing & shape
Generous section padding (100–120px vertical on desktop, scaling down on mobile). Cards use `rounded-xl` to `rounded-2xl`, never sharp corners, never fully square. Soft, low-opacity shadows — nothing harsh. Borders are hairline (`1px`, low-opacity) more often than they're heavy.

### Motion (use it, but keep it purposeful — nothing decorative for its own sake)
- Scroll-triggered fade/rise-in reveals on section content, staggered slightly on grid items (services, gallery, testimonials) so they don't all pop in at once.
- Animated count-up on stat numbers (ASE %, service line count, financing amount) when they scroll into view.
- Sticky header that gains a shadow/blur and shrinks slightly on scroll (see header spec below).
- Hover states on every interactive element — cards lift slightly, buttons darken, links get an underline that draws in from the left.
- Respect `prefers-reduced-motion` — disable/shorten animations for users who've asked for that.

### Imagery
Use real, tasteful automotive stock photography (well-lit shop bays, technicians working, brake/tire close-ups, a tow truck) as placeholders — nothing cartoonish, nothing generic clip-art. Every placeholder photo gets an HTML comment `<!-- PLACEHOLDER PHOTO: swap for real shop photography before launch -->` directly above it, since none of these are the actual shop yet.

---

## 3. Header & Navigation (must-have spec)

This is a **floating pill header**:
- Sits inside a max-width container with a visible top margin, not flush against the viewport edges — it should read as a distinct rounded bar floating over the page, `rounded-full` or `rounded-2xl`, with a soft shadow.
- Background: navy, or navy with a subtle blur/transparency if you're layering it over the hero image.
- **Layout: logo centered**, navigation links split into two groups on either side of it (roughly 3 links left, 3 links right, or 2/2 with a CTA button anchoring the far right — your call on exact balance across 6 nav items + CTA).
- Nav items (in some left/right split around the centered logo): Home, Services, Car Care, About Us, Gallery, Coupons. The 9 individual service pages live under Services but don't each get their own top-level nav slot — reachable from the Services overview page and from internal "related services" links, not from the main nav itself.
- A red CTA button ("Call (754) 223-5452" or "Book Service") sits at the far right, outside or as part of the pill.
- **Sticky:** the header pins to the top on scroll. On scroll past ~10–20px, tighten the vertical padding slightly and increase the shadow so it visually "lifts" — a subtle transition, not an abrupt jump.
- **Logo:** you don't have the real logo file yet. Build the logo slot as a fixed-height flexible-width container (e.g. `h-12`) with `object-contain` on the `<img>`, sourced from `assets/images/logo.png` — a file that doesn't exist yet. Add an HTML comment noting this is where the real logo goes and that the box auto-scales so no resizing will be needed once it's dropped in. Use a clean text lockup ("US AUTOS & TIRES" in Poppins) as the fallback that renders if the image is missing, so the header never looks broken during development.
- **Mobile:** logo stays centered, nav collapses to a hamburger (animates to an X) on the right that opens a full-width slide-down panel with stacked links and the CTA button.

---

## 4. Site Architecture

Multi-page static site, one HTML file per page, shared header/footer markup (duplicate it across files — no templating engine, keep this dependency-free). Each of the 9 core services also gets its own dedicated detail page, so a visitor (or a search engine) can land directly on "Brake Inspections" instead of only finding it as a card on the Services overview.

```
/
├── index.html            (Home)
├── services.html          (Services — overview/index, links to each detail page)
├── services/
│   ├── oil-and-filter-changes.html
│   ├── tire-rotations.html
│   ├── wheel-alignments.html
│   ├── brake-inspections.html
│   ├── battery-testing.html
│   ├── fluid-services.html
│   ├── engine-diagnostics.html
│   ├── transmission-repairs.html
│   └── suspension-and-exhaust.html
├── car-care.html         (Car Care — tips & maintenance guidance)
├── about.html             (About Us)
├── gallery.html           (Gallery)
├── coupons.html           (Coupons / Offers)
├── assets/
│   ├── images/            (placeholder photos + logo slot go here)
│   └── icons/
├── js/
│   └── main.js             (shared: nav toggle, sticky header, reveals, counters, carousel, lightbox, accordion)
├── robots.txt
└── sitemap.xml
```

That's 15 pages total. Every page shares the same header and footer. Every page's `<nav>` highlights its own active state.

---

## 5. Global Components

**Footer** (every page): logo slot again, one-paragraph mission recap, quick links (mirror the main nav), contact block (address, phone, hours), copyright line. Dark navy background.

**Financing banner:** a reusable dark section (used at minimum on Home and Services) — headline about $5,000 financing with no credit needed, one sentence about American First Finance, red CTA button linking out to their apply page (`target="_blank" rel="noopener"`).

**Mid-page CTA strip:** reusable dark navy strip with a short headline + red call button, usable near the bottom of any page before the footer.

**Mobile sticky call bar:** fixed to the bottom of the viewport on small screens only (below `md`), a full-width red bar with a "Call Now" link, appears after the user scrolls past the hero.

**Back-to-top button:** fixed bottom-right circular button, appears after ~600px of scroll, smooth-scrolls to top.

---

## 6. Page-by-Page Briefs

### Home (`index.html`)
1. Hero — headline built around "dealership precision, independent pricing," sub-copy covering the European/luxury specialty + ASE certification + transparent work orders, two CTAs (Book Service / Call), the work-order signature card floating alongside.
2. Trust strip — 4 short trust markers (ASE certified, free towing, financing, dealership-style facility).
3. Makes-we-service strip — chip/pill row of the specialty makes plus "domestic & Asian makes."
4. Services overview — condensed cards for the 9 services (code + name + one-line description), linking through to `services.html` for detail.
5. How it works — 4-step numbered process.
6. Stats band — full-width red section with animated count-up numbers (100% ASE certified, 9 service lines, $0 diagnosis, $5K financing). No invented years-in-business number.
7. About teaser — 2–3 sentences + link to `about.html`.
8. Gallery teaser — 3–4 placeholder photos + link to `gallery.html`.
9. Testimonials — carousel, 3 cards, clearly marked as sample content in an HTML comment (real reviews go here later).
10. Financing banner.
11. Short FAQ (4–5 questions — appointment necessity, free diagnosis, towing, financing).
12. Final CTA strip.
13. Footer.

### Services (`services.html` + `services/*.html`)

`services.html` is an **overview/index page**, not the full detail. It gets a short intro, then a card grid of all 9 services — each card shows the `SVC-0X` code, name, and a one-sentence description, and the whole card links through to that service's dedicated page. Add the "not sure what's wrong?" free-diagnosis callout, the makes-we-service strip, and the financing banner. End with a CTA to book or call.

Each of the 9 pages in `/services/` is a **full detail page** for one service, and should include:
- A short hero/header repeating the `SVC-0X` code, service name, and a one-paragraph description.
- A bulleted breakdown of what's included in the service (e.g., for Brake Inspections: pad/rotor wear check, fluid condition, caliper inspection, road test).
- A "why it matters" paragraph — plain-language explanation of what happens if this maintenance is skipped, without resorting to scare tactics.
- A "related services" block linking to 2–3 of the other 8 service pages (this is important for internal linking/SEO, not just navigation).
- The free-diagnosis / transparent-work-order promise, restated briefly.
- A CTA to book or call.
- Its own unique `<title>`, meta description, and JSON-LD `Service` schema nested under the business (see SEO section) — this is the main payoff of having individual pages: each one can rank for its own specific search query ("brake inspection Plantation FL," "BMW transmission repair Plantation," etc.).

Keep the visual system identical across all 9 — same layout, same components, only the copy changes. Nobody should be able to tell these were templated by looking at them, but you should absolutely build them as a single reusable template with 9 content variations rather than 9 independently hand-built pages.

### Car Care (`car-care.html`)
An educational, SEO-friendly page — distinct from Services, focused on maintenance knowledge rather than the shop's offerings. Structure it around a few clear categories, each as its own section or accordion:
- **Maintenance basics** — general, non-brand-specific guidance on common service intervals (oil changes, tire rotation, brake checks) framed as general industry guidance, not a specific promise from this shop.
- **Warning signs not to ignore** — dashboard lights, unusual noises, handling changes — written to help a reader recognize when to bring a vehicle in.
- **European car care notes** — a short section on why European vehicles often have different maintenance schedules or parts requirements than domestic vehicles, tying back to the shop's specialty.
- **Seasonal care tips** — South Florida-relevant (heat, AC systems, storm-season readiness), kept general.

This page exists to rank for informational searches and to build trust — keep it genuinely useful, not thin content padded with keywords.

### About Us (`about.html`)
Mission/story section (dealership-style facility, transparency, ASE certification), an expanded "why choose us" list, a certifications/partners section (ASE, American First Finance), a facility highlights block, and a **team section built as a reusable placeholder component** — 3–4 cards with a photo placeholder and a generic "ASE Certified Technician" label rather than invented names, clearly commented as needing real bios/photos. Close with a map embed and CTA.

### Gallery (`gallery.html`)
A responsive photo grid (masonry or clean grid, your call) with light category filtering (e.g. Engine Bay, Tires & Wheels, Brakes, Facility, Tow Truck) and a click-to-open lightbox with prev/next navigation and keyboard support (Escape, arrow keys). Every photo is a placeholder per the imagery guidance above.

### Coupons (`coupons.html`)
A grid of offer cards (title, discount description, fine-print/terms line, a "mention this offer when you call" CTA). Since there are no real, current offers to list yet, build the component fully but populate it with clearly-flagged sample content — each card gets a small visible "SAMPLE OFFER — CONFIRM BEFORE LAUNCH" tag (not just an HTML comment) so nobody previewing the site mistakes a placeholder discount for a live one. This is the one page where the placeholder needs to be visible in the rendered page, not just in code.

---

## 7. SEO Requirements

- Unique, keyword-relevant `<title>` and meta description on **every one of the 15 pages** — the 9 individual service pages are the biggest SEO opportunity in this build, since each can target its own specific long-tail query (e.g. "European wheel alignment Plantation FL") instead of competing with itself on one crowded services page.
- One `<h1>` per page, logical heading hierarchy beneath it.
- Semantic HTML5 landmarks throughout (`header`, `nav`, `main`, `section`, `footer`) — don't div-soup this.
- Descriptive `alt` text on every image (including placeholders — describe what the real photo will show).
- Open Graph and Twitter Card meta tags on every page.
- `rel="canonical"` on every page.
- JSON-LD `AutoRepair`/`LocalBusiness` structured data (name, address, phone, hours, geo coordinates for Plantation FL, priceRange) on every page. On each individual service page, additionally nest a `Service` entry (`hasOfferCatalog` or `makesOffer`) describing that specific service under the parent business.
- `sitemap.xml` listing all 15 pages, and `robots.txt` allowing full crawl and pointing to the sitemap.
- Internal linking between related pages — Services ↔ each service detail page ↔ Car Care ↔ Coupons ↔ Home — and the "related services" links called out in the Services section above. Don't leave any page as a dead end.
- Fast-loading by default: Tailwind via CDN, minimal custom JS, `loading="lazy"` on below-the-fold images, no render-blocking bloat.
- Mobile-first responsive layout — this will be judged primarily on a phone screen, not a desktop monitor.

---

## 8. Technical Setup

- **Tailwind via CDN** (`<script src="https://cdn.tailwindcss.com"></script>`) — no build step, no npm dependency. Extend the default theme in an inline `tailwind.config` object (before the CDN script runs) with the custom color tokens and font families from Section 2, so you're using `bg-navy`, `text-red`, `font-poppins` etc. rather than arbitrary hex values scattered through the markup.
- **Vanilla JavaScript only**, one shared `js/main.js` included on every page, handling: mobile menu toggle, sticky header scroll state, scroll-triggered reveals (IntersectionObserver), animated stat counters, the homepage testimonial carousel, the gallery lightbox, and any accordion/FAQ interactions. No frameworks, no build tooling — this needs to run by opening the HTML files directly or dropping them on any static host.
- Cross-browser support: latest two versions of Chrome, Safari, Firefox, Edge. Test at minimum at 375px (mobile), 768px (tablet), and 1440px (desktop) widths.
- Accessibility: visible focus states on all interactive elements, sufficient color contrast (red-on-navy and navy-on-paper both need checking), `aria-expanded` on toggles, keyboard-operable nav, lightbox, and accordion.

---

## 9. Deliverables Checklist

- [ ] All 15 HTML pages (6 core pages + 9 individual service pages), fully built, sharing consistent header/footer
- [ ] Service detail pages built as one reusable template with 9 content variations, each with unique SEO metadata and "related services" internal links
- [ ] `js/main.js` with all interactive behavior described above
- [ ] `tailwind.config` (inline) reflecting the color/type system
- [ ] `robots.txt` + `sitemap.xml` listing all 15 pages
- [ ] JSON-LD local business schema (plus per-service `Service` schema) in place
- [ ] Every placeholder (photos, logo, testimonials, coupons, team bios) clearly marked per the guidance in this brief
- [ ] Fully responsive from 375px through desktop, tested at the three reference widths above
- [ ] `prefers-reduced-motion` respected

Build something that would genuinely make a shop owner sit up when they see it — this brief is the floor, not the ceiling. Where you see a chance to make a section better than what's described here without breaking the system, take it.
