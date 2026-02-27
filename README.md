# Tanmoy Mondal — Cybersecurity Portfolio

Minimal futuristic portfolio for Tanmoy Mondal, positioned as an aspiring cybersecurity professional focused on ethical hacking, penetration testing, AI security learning, and CTF growth.

## Project Overview

This portfolio is intentionally realistic and student-focused:

- Clean dark red-team aesthetic (matte black + subtle neon accents)
- Smooth section transitions with Framer Motion
- Glassmorphism cards with restrained visual effects
- One real project: EchoGuard AI (prototype)
- Certifications timeline that only renders verified entries

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Three.js + React Three Fiber (subtle background)
- Lucide React icons
- ESLint + Prettier

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update Real Profile Data (Single Source)

Edit all profile-facing content from one file:

- `lib/portfolio-data.ts`

Inside this file you can update:

- `profile` (name, title, subtitle, LinkedIn URL, about text)
- `projects` (currently EchoGuard AI only)
- `certifications` (verified credentials only, max 5 shown)
- `skillColumns`

To add real certifications, append entries to `certifications` in this shape:

```ts
{ title: "Certification Name", issuer: "Issuer", year: "2026" }
```

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project into Vercel.
3. Build command: `npm run build`
4. Deploy.
