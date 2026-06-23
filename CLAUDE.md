# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Turbopack) at http://localhost:3000
- `npm run build` — produce the static export into `out/`
- `npm run lint` — run ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)
- `npm start` — serve the production build

There is no test setup in this project.

## Architecture

Static marketing website for "Rains Karya Multindo" (an Indonesian construction / event / procurement company). All user-facing copy is in **Bahasa Indonesia** — match that language when editing content.

- **Next.js App Router + React 19, TypeScript strict.** Stack is on Next 16 canary.
- **Static export.** `next.config.ts` sets `output: 'export'`, so the build emits pure static HTML/CSS/JS to `out/`. There is **no server runtime** — do not add API routes, server actions, `middleware`, `cookies()`, dynamic `headers()`, or any feature requiring a server. Anything dynamic must run client-side.
- **Routing.** `src/app/layout.tsx` is the shared shell (NavigationHeader + page + FooterSection + WhatsappCTA, plus site `metadata`/OpenGraph). Three routes: `/` (`page.tsx`), `/portfolio`, `/profile`. Each route file is thin and just renders a section component from `src/components/`.
- **Page composition.** The home page is a vertical stack of section components (`hero-section`, `our-clients`, `stats-section`, `about-section`, `services-section`, `portfolio-module-section`, `contact-section`). In-page nav uses hash anchors (e.g. `/#about`, `/#services`) matched by `id` props on sections; cross-page links go to `/portfolio` and `/profile`.

## Project-specific conventions

- **Always import `CustomImage` from `@/components/custom-image` instead of `next/image`.** It wraps `next/image` with `unoptimized` so images work under static export. `next.config.ts` also points a custom `loaderFile` (`my-loader.ts`, a Cloudinary loader) — note `my-loader.ts` currently targets Cloudinary's `demo` account, so it is effectively a placeholder.
- **Static content lives in two places:** component-local `const` arrays for short lists (e.g. `services` in `services-section.tsx`, `navigationLinks` in `navigation-header.tsx`), and `src/data/portfolioItems.json` for the portfolio grid. Portfolio categories/tabs are derived at runtime from the distinct `category` values in that JSON, so add a portfolio entry by appending `{ category, image }` objects and dropping the image under `public/portfolio/<category>/`.
- **Client vs server components.** Default to server components; add `"use client"` only when using state/effects/handlers (see `portfolio-section.tsx`, `navigation-header.tsx`).
- **Styling.** Tailwind 3 + shadcn/ui (new-york style, `components.json`). UI primitives go in `src/components/ui/`. Use the `cn()` helper from `@/lib/utils` to compose classes. Brand colors are CSS variables in `src/app/globals.css` exposed as Tailwind tokens in `tailwind.config.ts` — prefer semantic classes like `text-primary-900`, `bg-neutral-400` over hardcoded hex.
- **Path alias:** `@/*` maps to `src/*`.
- **Assets** are served from `public/` (icons in `public/icons`, client logos in `public/clients`, portfolio images in `public/portfolio`, company-profile PDF in `public/files`).

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
