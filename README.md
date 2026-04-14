# Rick Broider Website

Production-ready Next.js App Router site for Rick Broider.

## Launch

1. `npm install`
2. `npm run dev`
3. Replace `SITE_URL` in [lib/site.ts](C:/Users/rbroi/OneDrive/Documents/New project/lib/site.ts)
4. Replace `BOOKING_URL` in [lib/site.ts](C:/Users/rbroi/OneDrive/Documents/New project/lib/site.ts)
5. Add the final OG image at [public/og/rick-broider-home.jpg](C:/Users/rbroi/OneDrive/Documents/New project/public/og/rick-broider-home.jpg)
6. Confirm the diagnostic images exist in [public/images](C:/Users/rbroi/OneDrive/Documents/New project/public/images)
7. Deploy to Vercel

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- `next/font/google`

## Notes

- Contact email, booking URL, and live domain are intentionally centralized in [lib/site.ts](C:/Users/rbroi/OneDrive/Documents/New project/lib/site.ts).
- Structured data, sitemap, robots, and Open Graph metadata are included.
- The homepage, service pages, article, book page, and about page are fully wired with shared content objects for easier future expansion.
