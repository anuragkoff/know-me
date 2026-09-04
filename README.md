# Know Me

An interactive personal portfolio built with Next.js, React, TypeScript, GSAP, Framer Motion, and Tailwind CSS. The site presents projects, experience, skills, a resume, and a contact form in an animated single-page experience.

## Features

- Animated portfolio homepage with hero, project, journey, about, contact, and footer sections
- Responsive navigation and interactive scrolling components
- Project and skills presentation components
- Resume page at `/resume`
- Public resume PDF at `/AnuragResume.pdf`
- Contact form backed by a Next.js route handler and Nodemailer
- React Compiler enabled in the Next.js configuration
- Remote image configuration for the external image hosts used by the project

## Tech Stack

- Next.js `16`
- React `19`
- TypeScript `5`
- Tailwind CSS `4`
- GSAP and `@gsap/react`
- Framer Motion
- React Icons
- TypeIt and TypeIt React
- Nodemailer for contact email delivery

## Requirements

- Node.js 20 or newer
- npm
- A Gmail account with an App Password if the contact form should send email

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_PASS=your-gmail-app-password
```

`GMAIL_PASS` must be a Gmail App Password, not the normal Gmail account password. Keep `.env.local` private and do not commit it.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server after building. |

## Project Structure

```text
src/
	app/
		page.tsx                 # Portfolio homepage composition
		layout.tsx               # Root layout, fonts, metadata, and navbar
		globals.css              # Global styles and Tailwind import
		api/send-email/route.ts  # Contact form email endpoint
	components/
		icons/                   # Reusable icon components
		layout/
			about/                 # About and skills sections
			card/                  # Shared card UI
			contact/               # Contact form and styles
			footer/                # Footer section
			hero/                  # Hero and typewriter experience
			journey/               # Journey timeline and stacked cards
			navbar/                # Site navigation
			projects/              # Projects section
			text-scroll.tsx        # Scrolling text experience
public/
	images/                    # Portfolio images
	AnuragResume.pdf           # Resume document
```

## Contact Form

The contact form submits JSON to:

```text
POST /api/send-email
```

The route reads `name`, `email`, and `message`, then sends the message through the Gmail account configured by `GMAIL_USER` and `GMAIL_PASS`. The recipient is the configured Gmail user, and the sender's email is used as the reply-to address.

For production use, configure the environment variables in the hosting provider rather than committing them to the repository. The email account should have two-step verification and an App Password enabled.

## Development Guidelines

- Keep browser-only behavior in client components and avoid adding client boundaries unnecessarily.
- Reuse the existing component and CSS patterns before introducing new UI dependencies.
- Keep animation behavior accessible and avoid making essential content depend only on animation.
- Validate contact input and preserve secrets on the server side.
- Run lint and a production build before deploying:

```bash
npm run lint
npm run build
```

## Deployment

The project can be deployed to Vercel or another host that supports Next.js 16.

1. Import the repository into the hosting provider.
2. Use `npm install` as the dependency installation command.
3. Use `npm run build` as the build command.
4. Use `npm run start` for a Node.js server deployment when required by the provider.
5. Add `GMAIL_USER` and `GMAIL_PASS` as production environment variables.

Before production deployment, confirm that the configured image hosts are allowed by `next.config.ts`, the email App Password is active, and the deployment platform supports the project's Node.js version.

## License
