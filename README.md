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

The contact form uses EmailJS directly from the frontend.

Required variables for contact form sending:

1. `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
2. `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
3. `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Configure these environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://cybersyco.vercel.app
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

On successful form submit, users see:

`Your message has been sent successfully.`

### Step-by-Step Setup (Vercel + EmailJS)

1. Open your Vercel project dashboard.
2. Go to `Settings` -> `Environment Variables`.
3. Add these variables for `Production` (and `Preview` if needed):
	- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
	- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
	- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy the project from Vercel, or push a new commit.
5. Submit a test message from `/contact`.
6. Verify the message is received.

### EmailJS Security Notes

1. Use EmailJS dashboard domain restrictions for your production domain.
2. Keep private keys/server secrets out of client code.
3. Use only the EmailJS Public Key in `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

### Frontend Form Behavior

- Prevents default browser refresh on submit
- Client-side validation for empty fields and email format
- Loading state with disabled submit button while sending
- Inline success/error alerts based on EmailJS response
- Console logging for submit events and environment diagnostics

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
