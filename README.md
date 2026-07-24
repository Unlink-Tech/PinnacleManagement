# Pinnacle Management

Marketing site for Pinnacle Management — Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion. Light theme only, white primary with a green secondary palette.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx              root shell (header, footer, scroll progress, fonts, metadata)
  page.tsx                Home
  about/                  About Us
  services/               Our Services (index)
  services/[slug]/        Service inner pages (statically generated per service)
  contact/                Contact Us
  privacy-policy/         Privacy Policy
  terms-of-service/       Terms of Service
  not-found.tsx           404
  globals.css             design tokens, keyframes, custom utilities

components/
  layout/                 Header (mega-menu + mobile drawer), Footer
  ui/                     Button, Card, Container, Section, SectionHeading,
                          Accordion, Counter, Icon, Logo, Marquee, Reveal,
                          Decor, ScrollProgress
  sections/               PageHero, HomeHero, ServiceCard, StatsBand,
                          ProcessTimeline, Testimonials, ContactForm,
                          CtaBand, LegalLayout

lib/
  content.ts              all site copy + service data (single source of truth)
  legal.ts                privacy / terms section content
  utils.ts                cn() class helper
```

## Editing content

All placeholder (lorem ipsum) copy lives in `lib/content.ts` and `lib/legal.ts`. Adding an entry to the `services` array automatically creates:

- a card on the home page and services index,
- an entry in the header mega-menu, footer and contact form dropdown,
- a statically generated inner page at `/services/<slug>`.

## Design tokens

Brand colours, fonts, radii, shadows and animation keyframes are declared in the
`@theme` block of `app/globals.css`. Change `--color-brand-*` there to reshade the
whole site.

## Notes

- The contact form is a front-end placeholder — wire `handleSubmit` in
  `components/sections/ContactForm.tsx` to a real endpoint or CRM.
- The logo is a temporary placeholder mark (`components/ui/Logo.tsx`).
- All motion respects `prefers-reduced-motion`.
