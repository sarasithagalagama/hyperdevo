# HyperDevo

Production-ready Next.js agency website for HyperDevo, a Sri Lankan creative digital agency serving local and future international clients.

## Built With

- Next.js App Router
- TypeScript
- Tailwind CSS
- Reusable React components
- CSS-only motion and dashboard-style visuals
- Dark and light theme support with localStorage persistence

## Pages

- Home
- About
- Services
- Web Development
- Social Media Management
- Digital Marketing
- Graphic Design & Branding
- Portfolio with frontend filters
- Packages
- Blog
- Contact with frontend validation

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Notes

The contact form validates required fields on the frontend and shows a fake success state. It is structured so a future API route can be added for email delivery or CRM integration.

The theme toggle follows the system preference on first visit, then stores the user's explicit light or dark choice in `localStorage`.
