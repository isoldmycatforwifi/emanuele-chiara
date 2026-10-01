# Emanuele & Chiara Wedding Website

A mobile-first, multilingual wedding website built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace placeholder content

- Photography and gallery image metadata live in `lib/site-data.ts`.
- Venue, schedule, FAQ, and bank-detail placeholders are kept in the relevant data or component files.
- The RSVP submit handler in `components/RSVPModal.tsx` is frontend-only and is marked for a future API integration.
- Bank information is explicitly dummy data and must be replaced before launch.

## Routes

Italian is the canonical/default version and uses unprefixed URLs:

- `/`, `/faq-rsvp`, `/our-story`, `/wedding`, `/gifts`, `/gallery`

English uses the `/en` prefix, German uses `/de`, and Sardinian uses `/sc`, with the same page paths. The language switcher preserves the visitor's current page.

All translated copy is centralized in `lib/i18n.ts`. Sardinian uses a broadly accessible Limba Sarda Comuna-style register and should receive a final native-speaker review before launch.

Set `NEXT_PUBLIC_SITE_URL` in production so canonical links, language alternates, `robots.txt`, and `sitemap.xml` use the deployed domain.

## Security and privacy

- Production responses include a Content Security Policy and browser hardening headers configured in `next.config.ts`.
- Run `npm run security:audit` to check production dependencies for known vulnerabilities.
- The RSVP is currently a visual preview and does not transmit or store guest data.
- Anything committed to this repository or displayed in the site—including photographs, venue details, and future bank details—must be treated as public. Use access protection if the site should be invitation-only.
