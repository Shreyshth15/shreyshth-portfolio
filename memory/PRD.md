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
