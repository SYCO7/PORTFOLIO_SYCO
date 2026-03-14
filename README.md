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

The contact form posts to `POST /api/contact` using `fetch` from the frontend.

Backend delivery priority:

1. SMTP (`SMTP_*` variables)
2. Resend fallback (`RESEND_API_KEY`)

Configure these environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://cybersyco.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-password
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM="Portfolio Contact <onboarding@resend.dev>"
CONTACT_TO=tanmoymondaltanmoy94@gmail.com
CONTACT_FROM="Portfolio Contact <your-smtp-user@example.com>"
```

On successful form submit, users see:

`Your message has been sent successfully.`

### Step-by-Step Setup (Vercel + SMTP)

1. Open your Vercel project dashboard.
2. Go to `Settings` -> `Environment Variables`.
3. Add these variables for `Production` (and `Preview` if needed):
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_SECURE`
	- `SMTP_USER`
	- `SMTP_PASS`
	- `CONTACT_TO`
	- `CONTACT_FROM`
	- `RESEND_API_KEY` (optional but recommended fallback)
	- `RESEND_FROM` (optional sender for Resend)
4. Add optional anti-spam controls:
	- `CONTACT_RATE_LIMIT_WINDOW_MS` (example: `600000`)
	- `CONTACT_RATE_LIMIT_MAX` (example: `5`)
	- `CONTACT_MIN_FILL_MS` (example: `2500`)
5. Redeploy the project from Vercel, or push a new commit.
6. Submit a test message from `/contact`.
7. Verify the message is received at `tanmoymondaltanmoy94@gmail.com`.

### Gmail SMTP Notes

If you use Gmail SMTP:

1. Enable 2-Step Verification on your Google account.
2. Create an App Password in Google Account security settings.
3. Use that App Password as `SMTP_PASS`.
4. Use:
	- `SMTP_HOST=smtp.gmail.com`
	- `SMTP_PORT=587`
	- `SMTP_SECURE=false`

### Contact API Protections

The backend now includes:

- Required-field validation for `name`, `email`, `message`
- Email format validation
- Message and name length validation
- Honeypot field blocking (`website`)
- Minimum form fill time check
- Per-IP rate limiting with `429` responses for bursts

### Frontend Form Behavior

- Prevents default browser refresh on submit
- Client-side validation for empty fields and email format
- Loading state with disabled submit button while sending
- Inline success/error alerts based on API response

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
