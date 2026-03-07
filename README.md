# Tanmoy Mondal - Multi-Page Cybersecurity Portfolio

Professional multi-page portfolio built with Next.js App Router.

## Pages

- `/` Home
- `/about` About
- `/projects` Projects
- `/contact` Contact

All pages share a consistent cybersecurity UI with:

- Animated navbar/footer
- Dark neon-themed visual style
- Framer Motion transitions
- Responsive layouts
- Particle-style cyber backdrop

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Nodemailer (contact email API)
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Email Setup (Contact Form)

The contact form posts to `POST /api/contact` and sends email via SMTP.

Configure these environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://cybersyco.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-password
CONTACT_TO=tanmoymondaltanmoy94@gmail.com
CONTACT_FROM="Portfolio Contact <your-smtp-user@example.com>"
```

On successful form submit, users see:

`Your message has been sent successfully.`

## Content Sources

Main profile/project data:

- `lib/portfolio-data.ts`

Core page/UI components:

- `components/navbar`
- `components/footer`
- `components/projectcard`
- `components/contactform`
- `components/layout`

## Build

```bash
npm run build
```
