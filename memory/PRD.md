# PRD — Shreyshth Sharma Portfolio

## Original Problem Statement
Clone the editorial single-page portfolio at nischay11jr.github.io but personalized for Shreyshth Sharma — an Economics & Quantitative Methods (STEM) graduate from Indiana University Bloomington, targeting credit research / structured finance / asset-management analytics roles. Finance-professional (navy/clean) theme, with an "Ask Shreyshth" AI chatbot.

## Architecture
- Frontend: React 19 + Tailwind + Framer Motion. Single page (`/pages/Portfolio.jsx`) with section components under `/components/portfolio/`. Fonts: Cabinet Grotesk (display), Playfair Display (serif accents), IBM Plex Sans (body), JetBrains Mono (data).
- Backend: FastAPI + MongoDB (motor). AI chat via emergentintegrations `LlmChat` (Anthropic claude-sonnet-4-6) using EMERGENT_LLM_KEY. SSE streaming endpoint `/api/chat/stream`; messages persisted to `chat_messages`.

## User Persona
Finance recruiters / hiring managers in asset management & credit research evaluating Shreyshth, plus collaborators.

## Core Requirements (static)
- 7 numbered sections: About, Skills, Experience, Projects (with metric chart), Education, Interests, Contact.
- Hero with massive name typography, live Bloomington clock, availability status, Download CV.
- Floating AI assistant "Ash" answering questions about Shreyshth, streaming token-by-token.

## Implemented (2026-06-30)
- Full single-page portfolio with all 7 sections, scroll-reveal animations, animated stat counters, experience timeline, project cards + animated bar chart, education journey, interests grid.
- Streaming AI chatbot "Ask Shreyshth" (Claude Sonnet via Emergent key), suggested prompt pills, persisted history, plain-text replies.
- Tested: backend SSE 3/3 pytest pass, frontend flows 100%.

## Iteration 2 (2026-06-30)
- Read 5 uploaded resumes; rebuilt content with strongest points + CFA Level I, consulting/asset-management framing, regrouped skills (Finance & Valuation / Data & Analytics / Tools & Programming / Research & Communication).
- Added: sticky Navbar with scroll-progress + mobile hamburger menu; hero action buttons (View Resume / Contact Me / LinkedIn / Email); real downloadable CV at /Shreyshth-Sharma-CV.pdf; working contact form (POST /api/contact, stored in contact_messages); skills marquee ticker; hero greeting + name pronunciation.
- Added real personal photos (hosted in /public/images): About (2) + Education graduation photo.
- Tested: backend 8/8 pytest (contact + chat), frontend ~100%; fixed broken grad image (now local). Chat button repositioned above Emergent badge.

## Backlog
- P1: EmailStr validation + rate limiting on public /api/contact form. Email notification on new contact message (Resend/SendGrid).
- P2: True mobile device QA pass. Optional projects detail pages.

## Next Tasks
- Replace placeholder portrait + CV when user provides files.

## Session Update (Jul 7, 2026): FINAL MASTER REVISION v2
- Restored /app/backend (lost in fork) from git; recreated backend/.env (MONGO_URL, DB_NAME=portfolio_db, EMERGENT_LLM_KEY).
- Global sweeps: zero em dashes, zero banned words (visa/OPT/immigration/sponsorship/work authorization/stay-back); dates corrected sitewide (New Delhi 2002 - 2021, IU 2021 - 2026).
- Hero: pronunciation line + new tagline "Shrey Sharma · Finance · Analytics · Investment Research".
- About: 4 new verbatim biography paragraphs (Kelley switch story, 2021 arrival). Born = "New Delhi, India".
- Projects: UBI "View code on GitHub" button (github.com/Shreyshth15/UBI-Labor-Supply-Simulation); new 03 GRAMMYs Audience Analytics card with three-stage funnel + 3 drop-off markers.
- Journey (05): premium numbered vertical timeline, draw-on-scroll line, 4 verbatim stops, closing "The distance was the easy part."
- Background: new supply/demand equilibrium centerpiece (S, D, dashed D' shift with arrow, P*/Q* guides) + per-section motifs (Experience=yield curve, Projects=normal dist, Journey=growth curve, Contact=axes + Qd=Qs). ROOT-CAUSE FIX: removed bg color from Portfolio wrapper (positioned ancestor bg painted over fixed -z-10 layer). Final opacities: curves 0.13, labels 0.14, equations 0.09 (user asked "less bold" after acceptance pass).
- Navbar scroll-spy active state; chatbot regrounded (2021 arrival, Kelley academic story, deflects visa/GPA/off-topic with exact refusal line).
- User follow-up fixes applied: softer background, "Markets · Ongoing" dedupe in stop 4, DLF dates Aug 2023 - Nov 2023 (site + chatbot).
- Testing: iteration_7.json PASS, backend 19/19, frontend 100%.

## Session Update (Jul 7, 2026): Key-term bolding + CONTENT REVISION v3
- Emph highlighter bolds ~26 key terms (Indiana University, Kelley, tools, employers, minor in Psychology) across About/Experience/Journey/Projects/hero.
- v3 edits: new hero paragraph (minor in Psychology bold), 6 hero chips (+Fixed Income, Behavioral Economics), expanded Open To row, relocation "nationwide · NYC · Chicago first", grades sentence removed from About, new verbatim Journey Stop 2 (Dean's List proved bet right, Finance Chair $2K/semester EY/AT&T/Accenture), new Contact intro, nTalents role = Data Analyst Intern. Chatbot grounding synced. Sweeps clean.

## Session Update (Jul 7, 2026): Recruiter polish
- Contact form converted to pure mailto (Shreshth2002@gmail.com), backend /api/contact no longer called by UI (endpoint left in place, harmless).
- "Made with Emergent" badge removed: static HTML + emergent-main.js script deleted from index.html, MutationObserver in App.js removes any re-injected badge.
- About replaced with concise 3-paragraph professional copy (user-provided verbatim).
- Metadata: title "Shreyshth Sharma | Finance & Analytics Portfolio" + new description across title/meta/OG/Twitter.
- Relocation line updated earlier to "nationwide · NYC · Chicago · Florida · Texas" (site + chatbot).
- All external links verified (resume 200, LinkedIn/GitHub _blank, contact anchor).

## Session Update (Jul 8, 2026): Resume swap + location/copy/mobile fixes
- Resume replaced with user-uploaded Resume_fitch.pdf (same path /Shreyshth-Sharma-CV.pdf).
- Location unified to "Washington-Baltimore Area" (hero, About Based card, chatbot). No Burtonsville anywhere.
- Origin journey card rewritten (professional tone, verbatim user copy); closing line now "The move shaped how I think about risk, independence, and long-term decision-making."
- Mobile: hero name single-line (13vw + nowrap), journey cards 15px/1.75 leading, smaller nodes/padding, scroll-margin-top 6.5rem.
- User instructed to push via Save to GitHub -> Shreyshth15/shreyshth-portfolio main -> Vercel auto-redeploy.

## Session Update (Jul 8, 2026): Final recruiter polish (13-item pass)
- Relocation simplified to "Open to relocation nationwide". About replaced with concise 3-para recruiter copy (origin/Kelley story moved to Education only, both shortened per user verbatim).
- Stats: "4 Finance & Analytics Experiences" / "8+ Companies Analyzed" + context subtitles; single-column on mobile.
- Skills rebuilt MECE (Finance & Markets / Analytics / Tools / Communication, exact user lists); hero Worked-with matches Tools exactly.
- Projects title: "Selected Analytical Projects". Phone removed sitewide (contact = email + LinkedIn only).
- ChatWidget removed entirely (file deleted, CHAT_PROMPTS emptied); backend chat endpoint remains but unused by UI.
- Mobile polish: About text 15px/1.75, chips wrap cleanly, no overflow. All verified via live screenshots.
- User to push via Save to GitHub -> Shreyshth15/shreyshth-portfolio main.
