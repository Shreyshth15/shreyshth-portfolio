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
- Full single-page portfolio with all 7 sections, scroll-reveal animations, animated stat counters, experience timeline, project cards + animated bar chart (Intel prep-time), education journey, interests grid.
- Streaming AI chatbot "Ask Shreyshth" (Claude Sonnet via Emergent key), suggested prompt pills, persisted history, plain-text replies.
- Download CV = placeholder toast (no PDF yet); contact links (email/LinkedIn/phone) wired.
- Tested: backend SSE 3/3 pytest pass, frontend flows 100%. Fixed chat-button/badge overlap, markdown stripping, logger ordering, message length cap.

## Backlog
- P1: Real CV PDF upload + wired download. Real portrait photo (currently stock placeholder).
- P2: Rate limiting on /api/chat/stream. Slugified testids for prompt pills. Mobile fine-tune of chat window height.

## Next Tasks
- Replace placeholder portrait + CV when user provides files.
