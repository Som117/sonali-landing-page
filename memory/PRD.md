# Sonalii — UGC Creator Landing Page

## Original problem
Minimalist one-page landing page for UGC creator Sonalii (@whyynotsonalii, Pune). Palette: baby pink, red, brown. Sections: Hero (match mockup), About (match mockup), Collaborations (brands), Hire Me, Selected Work, Kind Words, Approach, Footer.

## Architecture
- React (framer-motion, Instrument Serif / Jost / La Belle Aurore) — components in src/components/site/
- FastAPI `POST /api/enquiries` → validates, rate-limits (5 per 10 min per IP), sends email via Emergent managed Resend to OWNER_EMAIL, stores in `enquiries` collection
- Images: /public/img/hero.jpg (cropped from mockup), /public/img/floral.jpeg

## Implemented (2026-06)
- All 8 sections, responsive, reduced-motion aware
- Real enquiry email to Work.Whyynotsonali@gmail.com (sender name "Sonalii Portfolio"; "Reply to brand" mailto button in email)
- Brand names rendered as styled wordmarks (no logo files)

## Placeholders
- Phone +91 98765 43210, sample reviews, "coming soon" work tiles

## Backlog
- P1: real photos/reels, real reviews, real phone, auto-reply email to brand
- P2: admin page for enquiries/content, media kit PDF, stats, SEO/OG, custom domain
