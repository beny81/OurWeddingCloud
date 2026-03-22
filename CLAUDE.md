# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build (outputs to /docs for GitHub Pages)
npm run preview      # Preview production build
npm run lint         # Run oxlint + eslint with auto-fix
npm run format       # Format src/ with Prettier
npm run test:unit    # Run unit tests with Vitest
npm run test:e2e     # Run E2E tests with Playwright
```

## Architecture

**Wedding information website** built with Vue 3 + Vite, deployed to GitHub Pages under `/OurWeddingCloud/`. The base path in `vite.config.js` is conditionally set based on `NODE_ENV`.

**Routing:** Uses `createWebHashHistory()` (hash-based) to avoid 404s on GitHub Pages. Routes are in `src/router/index.js`. Catch-all redirects to `/`.

**Layout system:** Pages are wrapped in `MainLayout` which provides a two-column responsive layout:
- Desktop: sticky sidebar (`LeftNavBar`) + main content
- Mobile: hamburger offcanvas (`SmallNavBar`) + main content

**State (Pinia stores in `src/stores/`):**
- `weddingInfo.js` — couple names, venue, wedding date/time (2026-06-20 at 16:00)
- `navigation.js` — nav links array used by both nav components

**Pages (`src/pages/`):** Home, Schedule, Travel, WeddingParty, Gallery — all rendered via `<RouterView />` in `App.vue` and slotted into `MainLayout`.

## Code Style

Prettier config (`.prettierrc.json`): no semicolons, single quotes, 100 char line width. ESLint uses flat config with Vue, Playwright, and Vitest plugins alongside Oxlint.
