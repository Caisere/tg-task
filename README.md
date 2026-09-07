# Tobams Group — Training & Development

A responsive, single-page marketing site for Tobams Group's Training and Development offering. The implementation translates the supplied desktop, tablet, and mobile designs into reusable Next.js components with responsive Tailwind CSS layouts.

## Live site

**URL:** [https://tg-task.vercel.app/](https://tg-task.vercel.app)

> Replace this placeholder with the production deployment URL after hosting.

## Design reference

[Figma — Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=LZjp29pf0BSrcp3y-0)

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) for styling and responsive utilities
- `next/image` for optimized local image rendering
- `next/font` for optimized Nunito and Nunito Sans font loading
- ESLint with the Next.js configuration
- pnpm package manager

## Project structure

```text
app/
  globals.css          # Tailwind import, design tokens, global styles
  layout.tsx           # Font setup and page metadata
  page.tsx             # Landing-page composition
components/
  header.tsx           # Desktop and hamburger navigation
  hero.tsx             # Hero banner
  academy-section.tsx  # Learning Management System section
  ...                  # Reusable landing-page sections
public/
  icons/               # Supplied SVG assets
  *.jpg, *.png         # Supplied imagery and testimonial portraits
```

## Getting started

### Prerequisites

- Node.js 20.9 or newer
- pnpm 10 (recommended; the project declares `pnpm@10.15.1`)

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality checks

```bash
# Run linting
pnpm lint

# Create a production build
pnpm build

# Serve the production build locally
pnpm start
```

## Design decisions

- The page is decomposed into semantic, single-purpose components under `/components`; `app/page.tsx` only composes those sections.
- Section landmarks use semantic HTML (`header`, `nav`, `main`, `section`, `article`, and `footer`) to improve document structure and assistive-technology navigation.
- All supplied photos are served through `next/image` with descriptive alternative text. Decorative SVGs use empty alt text.
- The supplied colour palette is exposed as Tailwind theme tokens in `app/globals.css`, so the visual language remains consistent without inline styles or another CSS framework.
- Responsive behavior is implemented exclusively with Tailwind prefixes. Mobile is the base layout; tablet adjustments begin at `md`, and wide desktop navigation and multi-column layouts begin at `lg` when content has sufficient space.
- The mobile/tablet hamburger menu is keyboard-accessible, uses `aria-expanded` and `aria-controls`, and closes after a navigation selection.
- Testimonial controls rotate the visible card on mobile and tablet; wider desktop layouts show multiple testimonials at once.

## Known issues and assumptions

- The assessment provides a Figma reference and supplied static assets, but no production destinations for navigation links. Links therefore point to in-page anchors or placeholders until real routes are supplied.
- The Account and Take Assessment controls are present as interface elements only; authentication and assessment flows are outside this static landing-page scope.
- Google-hosted fonts used by `next/font` require network access during the first production build. In restricted or offline environments, the build can fail while Next.js fetches the Nunito font files.

