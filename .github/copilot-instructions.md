# Copilot Instructions

This is a Next.js 16 personal website for Nameless Productions, using the App Router, React 19, TypeScript, and Tailwind CSS 4.

## Build, Test, and Lint

```bash
# Development server (auto-reloads on file changes)
pnpm dev

# Production build
pnpm build

# Start production server (requires build first)
pnpm start

# Lint (eslint with Next.js config)
pnpm lint
```

## Architecture

### Project Structure
- **App Router**: Uses Next.js App Router (`app/` directory) with file-based routing
- **Layout**: Root layout in `app/layout.tsx` provides:
  - Global navigation with links to Home and Projects
  - GitHub repository link
  - Dark theme (gray-800 background, black navbar)
  - Metadata for SEO and OpenGraph
- **Routes**:
  - `/` - Home page (currently shows "Coming soon!")
  - `/projects` - Lists all projects with links
  - `/projects/cursed-calculator` - Interactive calculator with random results
  - `/projects/discord-webhooker` - Discord webhook sender tool

### Client-Side Pages
Both project pages use `"use client"` directive for interactivity:
- **Cursed Calculator**: React state with setTimeout chains for "loading" simulation before showing random result
- **Discord Webhooker**: Fetches Discord webhooks with user-provided URL, content, and embeds

## Key Conventions

### Styling
- **Tailwind CSS 4**: Uses `@import "tailwindcss"` in globals.css (v4 syntax)
- **Reusable classes**: Defined in `vars.ts` and imported where needed (e.g., `inputClass`)
- **Design patterns**:
  - Dark theme: gray-800/gray-900 backgrounds, white text
  - Borders: 2px black borders on most interactive elements
  - Hover effects: `hover:bg-gray-X` with `transition-all duration-300`
  - Rounded corners: `rounded-xl` or `rounded-2xl` consistently

### TypeScript
- Path alias `@/*` maps to root directory
- Strict mode enabled
- Type imports from Next.js (Metadata, NextConfig, etc.)

### Component Patterns
- Functional components with TypeScript
- Props typed inline (e.g., `{ children }: { children: React.ReactNode }`)
- State management with `useState` for client components
- Navigation uses Next.js `Link` component for internal links, `<a>` tags for external

### Package Management
- Uses **pnpm** (lock file present)
- Next.js 16.1.6 with React 19
