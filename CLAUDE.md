# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RealMindSolutions (RMS) is a React-based mental health platform comparison website built with Vite, TypeScript, and Tailwind CSS. The site helps users discover, compare, and review online therapy platforms through various content types including reviews, comparisons, guides, and interactive tools.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint codebase
npm run lint

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: lucide-react
- **Backend**: Supabase (configured but not actively used in current codebase)

## Architecture

### Routing Structure

The application uses a hierarchical URL structure organized by content type and priority:

**Convert (High Priority)**
- `/compare/*` - Platform and modality comparisons
  - `/compare/platforms/*` - Platform-to-platform comparisons (e.g., BetterHelp vs Talkspace)
  - `/compare/modalities/*` - Therapy approach comparisons (e.g., CBT vs Psychodynamic)
  - `/compare/alternatives/*` - Alternative recommendations
  - `/compare/roundups/*` - Category roundups

**Interest (Mid Priority)**
- `/best/*` - Best platform recommendations
  - `/best/platforms/*` - Platform categories (e.g., best text therapy)
  - `/best/conditions/*` - Condition-specific recommendations (e.g., best for anxiety)
  - `/best/audiences/*` - Audience-specific recommendations (e.g., best for teens)
- `/reviews/*` - Detailed platform reviews
  - `/reviews/platforms/*` - Individual platform reviews
  - `/reviews/features/*` - Feature deep-dives
  - `/reviews/pricing/*` - Pricing analysis
  - `/reviews/specialty/*` - Specialty reviews
  - `/reviews/categories/*` - Category reviews

**Engagement Tools**
- `/tools/*` - Interactive user tools
  - `/tools/assessments/*` - Mental health assessments (OCD, anxiety, depression screenings)
  - `/tools/matchers/*` - Platform matching tools (budget finder, insurance checker)
- `/case-studies/*` - Success stories
  - `/case-studies/conditions/*` - Condition-based case studies
  - `/case-studies/demographics/*` - Demographic-based case studies

**Awareness (Foundation)**
- `/learn/*` - Educational content
  - `/learn/fundamentals/*` - Core concepts
  - `/learn/statistics/*` - Mental health statistics
- `/guides/*` - How-to guides
  - `/guides/selection/*` - Therapist selection guides
- `/blog/*` - Blog content
  - `/blog/stories/*` - Personal stories
  - `/blog/guides/*` - Blog-style guides
  - `/blog/news/*` - News and research
- `/conditions-az` - Mental health conditions encyclopedia
- `/resources/*` - Additional resources (worksheets, etc.)

### File Organization

```
src/
├── App.tsx              # Main routing configuration (350+ lines, 100+ routes)
├── main.tsx             # Application entry point
├── components/          # Reusable UI components
│   ├── Header.tsx       # Site navigation
│   ├── Footer.tsx       # Site footer
│   ├── Button.tsx       # Button component
│   ├── MetaTags.tsx     # SEO meta tag management
│   ├── HowWeReviewed.tsx
│   ├── RatingBreakdown.tsx
│   └── PlatformFinder.tsx
├── pages/               # Page components organized by content type
│   ├── [PageName].tsx   # Top-level pages
│   ├── best/            # Best recommendations by category
│   ├── reviews/         # Platform reviews and analysis
│   ├── comparisons/     # Platform and modality comparisons
│   ├── guides/          # Selection and usage guides
│   ├── learn/           # Educational content
│   ├── blog/            # Blog posts and articles
│   ├── case-studies/    # Success stories
│   ├── conditions/      # Mental health condition pages
│   ├── tools/           # Interactive tools
│   └── resources/       # Downloadable resources
├── comparisons/         # Standalone comparison components
└── index.css            # Global styles and Tailwind directives
```

### Key Architecture Patterns

**Route Organization**: Routes in App.tsx are organized by user journey priority:
1. Convert (comparison pages) - High-intent users ready to decide
2. Interest (best/review pages) - Users researching options
3. Engagement (tools/case studies) - Users exploring solutions
4. Awareness (learn/blog) - Users seeking education

**Component Structure**: Most page components are self-contained with inline data and styling. Shared UI elements are extracted to `/components`.

**SEO Management**: The `PageMetaTags` component in App.tsx dynamically sets meta tags based on route. Individual pages can override with their own `<MetaTags />` component.

**Scroll Behavior**: `ScrollToTop` component ensures pages scroll to top on navigation.

### Styling

The project uses a custom Tailwind color palette:
- **Brand colors**: `brand-primary` (#3ECF8E), `brand-secondary` (#00C8FF)
- **Dark theme**: `sb-dark-*` (900-100)
- **Gray scale**: `sb-gray-*` (900-300)

## Development Patterns

### Adding New Pages

1. Create the page component in the appropriate `src/pages/` subdirectory
2. Import the component in `src/App.tsx`
3. Add the route in the appropriate priority section of the `<Routes>` component
4. Follow the existing URL structure convention (`/category/subcategory/page-name`)

### Creating Comparison Pages

Comparison pages typically compare 2+ therapy platforms or modalities. Place in:
- `src/pages/comparisons/` for complex comparisons
- `src/comparisons/` for shared comparison components

### Creating Review Pages

Platform reviews go in `src/pages/reviews/platforms/`. Feature reviews go in `src/pages/reviews/features/`.

### Creating Interactive Tools

Assessment tools go in `src/pages/tools/assessments/`. Matcher tools go in `src/pages/tools/matchers/`.

## Important Notes

- **Supabase Integration**: Environment variables are configured (`.env`) and migrations exist (`supabase/migrations/`) but Supabase client is not actively used in the current codebase
- **Content-Heavy Application**: Most pages are content-rich marketing/educational pages with inline data
- **No Backend State**: Application is primarily static content with client-side routing
- **TypeScript**: All components should use TypeScript with proper typing
- **Route Wildcards**: Parent routes use `/*` to allow nested routing (e.g., `/compare/*`, `/reviews/*`)
