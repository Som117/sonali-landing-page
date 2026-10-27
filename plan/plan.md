# Sonalii: UGC Creator Landing Page

A minimal, editorial one-page portfolio for Sonalii (@whyynotsonalii), a Pune-based UGC creator and digital marketing professional.
It shows who she is, the brands she has worked with, and her work, and lets brands send a collaboration enquiry straight to her inbox.

## Who it's for
- **Brands, agencies and marketing managers** looking for a UGC creator or influencer for campaigns, launches or long-term partnerships.
- **Sonalii herself**, who shares the link in her Instagram bio, DMs and pitch emails.

## Core features and experience
Single scrolling page with a fixed top bar ("SONALI" wordmark on the left; About · Work · Contact on the right, scrolling smoothly to each section).

1. **Hero**: built to match the attached mockup. Her portrait in a soft oval frame on the left. On the right: "UGC CREATOR • PORTFOLIO", the headline "Content That *Feels Real.*", and a pill-shaped "View my work →" button that scrolls to Selected Work.
2. **About**: built to match the attached mockup. "ABOUT ME" label and the headline "Just a girl who loves *creating.*" Next to it, a tilted polaroid-style photo with tape on top and a handwritten "Hi, I'm Sonali ♡". Then a thin divider and two short paragraphs, with "UGC CREATOR / PUNE" underneath and three tags: Authentic Storytelling · Relatable Content · Real Engagement. The about copy is rewritten from her profile, with the location changed to Pune.
3. **Collaborations**: the 17 brand logos shown in one soft tone so the page stays calm: NEWME, Littlebox, Yousta, Plum, Nykaa, Lakmé, Starbucks, Toscano, OPPO, Myntra, AJIO, Zouk, MINISO, UNIQLO, Bastian, Stone Wood. They appear as a slow scrolling strip or a neat grid, and each logo shows in full colour on hover. Below them: "2+ years · 17+ brands · Fashion, Beauty, Lifestyle, F&B…"
4. **Hire Me**: a short "Why brands work with Sonalii" pitch. Below it, the collaboration types (Brand Campaigns, UGC Campaigns, Influencer Collaborations, Product Launches, Event Promotions, Long-Term Partnerships…) and the categories she's open to. Then the enquiry form: name, brand/company, email, collaboration type (dropdown), budget range (optional) and message. Submitting sends a real, neatly formatted email to Work.Whyynotsonali@gmail.com, with "reply" going straight back to the brand. Afterwards the sender sees a friendly "Thank you, Sonalii will be in touch" message. Her email, Instagram, placeholder phone number and location are listed beside the form.
5. **Selected Work**: a staggered grid of tall reel-shaped tiles (9:16) and photo tiles. Each tile has a small label such as "Beauty · Reel" or "Fashion · Campaign". For now it uses her photos plus soft-pink placeholders that are easy to swap for real images and reels later.
6. **Kind Words**: 3–4 short sample testimonials in large serif quotes, each with a name and brand role. They are clearly sample text, ready to be replaced with real reviews.
7. **Approach**: six numbered steps laid out like an editorial list: 01 Research, 02 Strategy, 03 Creation, 04 Execution, 05 Engagement, 06 Optimisation. Each has her one-line description. The section ends with her statement: "Creating content is not just about being visible — it is about creating an identity that people remember."
8. **Footer**: deep brown background with a large "LET'S CREATE SOMETHING IMPACTFUL." line, an email button, Instagram link, quick section links, "Based in Pune, India", and © 2026 Sonalii.

## User flow
1. A brand opens the link from Instagram or an email pitch and lands on the hero.
2. They scroll (or use the top nav) through About, Collaborations and Selected Work, so trust builds quickly.
3. They read Kind Words and the Approach to see how she works.
4. They fill in the Hire Me form (or tap email/Instagram), and Sonalii receives the enquiry in her inbox.

## UI/UX feel
- **Minimalist and editorial**, the way the mockups look: lots of breathing room, small wide-spaced uppercase labels, elegant serif headlines with italic accents, and a light sans-serif for body text.
- **Colours**: the full range of lighter, deeper and muted versions of pink, red and brown. Main shades:
  - Baby-pink page background, plus slightly deeper blush panels so sections take turns.
  - Rose and dusty-pink for cards, frames and dividers.
  - A muted red for buttons, hearts and hover states, with deeper wine-red details.
  - Chocolate brown for text, warm cocoa for secondary text, and deep brown for the footer.
  
  Each section gets its own soft shade so the page has rhythm while staying minimal.
- **Personal touches**: the tape-and-polaroid photo, the handwritten note, and small heart icons.
- **Subtle animations throughout**:
  - Hero: headline and photo fade in one after another on load.
  - Sections fade up gently as you scroll to them.
  - About: the polaroid tilts slightly and the handwritten note writes itself in.
  - Collaborations: the logo strip scrolls slowly.
  - Selected Work: tiles lift softly and zoom in a little on hover.
  - Approach: the numbers count in one by one.
  - Buttons and links: the arrow slides and the underline grows on hover.
  - Smooth scrolling between sections.
  
  Everything is calm and short, nothing flashy. Animations are switched off for visitors whose devices are set to reduce motion.
- **Fully responsive**: on phones, sections stack cleanly and the nav collapses into a simple menu. Most brands will open it on a phone.

## Implementation phases
**Phase 1 (MVP, built now)**
- All 8 sections as described, matching the two mockups for Hero and About.
- Working enquiry form that emails Sonalii for real.
- Brand logos, placeholder work tiles, sample reviews, dummy phone number.

**Phase 2**
- Swap in her real photos and reels. Reels play on the page or open on Instagram.
- Replace sample reviews with real ones, and replace the dummy phone with her real number.
- Add an auto-reply email to the brand confirming their enquiry was received.

**Phase 3**
- A private page where Sonalii can see past enquiries and update work, reviews and brands herself without code.
- A downloadable media kit (PDF) and a section for performance highlights and stats.
- Custom domain and SEO / social-share preview polish.

## Assumptions
- Name is shown as "SONALI" in the nav (as in the mockups) and "Sonalii" in body copy and the footer.
- Location is **Pune** everywhere (the "Sydney" in the mockup is replaced).
- The hero uses the white-top studio photo seen in the mockup, and About uses the floral-top photo you attached. If the hero photo file isn't shared separately, the floral photo is used for both until you send it.
- Enquiry emails arrive from a platform-managed sender address with the display name "Sonalii Portfolio". Hitting reply goes to the brand's email. No account or setup is needed from you.
- Brand logos are taken from public sources and shown in one tone. A brand whose logo can't be found cleanly appears as its name in matching type.
- The phone number is a dummy (+91 98765 43210) until you share the real one.
- Testimonials are written as samples and labelled as editable. No real brand is quoted.
- Single page in English only. No login, blog or shop.
- The top nav shows only About · Work · Contact, as in the mockup. The other sections are reached by scrolling.
