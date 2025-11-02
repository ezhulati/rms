# Astro Migration Guide

## ✅ Completed Setup

Your Astro project is now initialized and running! The core infrastructure is in place:

- **Astro v5.15.3** with React integration
- **File-based routing** (Astro standard)
- **Static Site Generation (SSG)**
- **React islands** for interactive components
- **Tailwind CSS** configured
- **Base layout** with Header (React island) and Footer (Astro)

### What's Working Now

- ✅ Astro dev server running on http://localhost:4323/
- ✅ Homepage (`src/pages/index.astro`) - fully functional
- ✅ Header navigation (React island with state)
- ✅ Footer (static Astro component)
- ✅ Tailwind CSS styling
- ✅ Lucide icons

### Current File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          # Main layout with SEO, Header, Footer
├── components/
│   ├── react/
│   │   └── Header.tsx             # Interactive header (React island)
│   └── Footer.astro               # Static footer
└── pages/
    ├── index.astro                # New homepage (Astro)
    ├── [330+ old .tsx files]      # Need migration
    └── blog/
        ├── guides/                # 6 blog articles (need migration)
        ├── stories/               # 6 blog articles (need migration)
        └── news/                  # 6 blog articles (need migration)
```

---

## 🚀 Migration Strategy

### Phase 1: Clean Up & Organize (Recommended First Step)

#### 1. Move Old React Pages to a Temporary Folder

```bash
mkdir src/_old_react_pages
mv src/pages/*.tsx src/_old_react_pages/
# Keep the subdirectories for now, we'll handle them separately
```

This will:
- Remove warnings from Astro
- Keep old files as reference
- Clear the way for new Astro pages

#### 2. Fix Syntax Errors in Old Files

There's a syntax error in `src/pages/OnlineTherapyReview.tsx:580`:
```tsx
</Link </div>  # Should be: </Link></div>
```

---

### Phase 2: Prioritized Migration Plan

Given 330+ routes, we recommend migrating in this order:

#### **Priority 1: High-Traffic Pages (Convert/Interest)**
1. `/compare` - Platform comparison pages
2. `/reviews` - Platform reviews
3. `/best` - Best platform recommendations
4. `/tools` - Interactive assessments & matchers

#### **Priority 2: Content Pages (Engagement)**
5. `/guides` - Therapy guides
6. `/case-studies` - Success stories
7. `/blog` - Blog articles (18 articles across 3 categories)

#### **Priority 3: Educational Pages (Awareness)**
8. `/learn` - Educational content
9. `/conditions-az` - Condition pages
10. `/resources` - Worksheets and resources

---

## 📝 Migration Steps for Each Page Type

### Option A: Convert to Pure Astro (Recommended for Static Pages)

**When to use:** Pages with mostly static content (blog posts, informational pages)

**Example:** Blog articles, condition pages, educational content

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { ArrowRight } from 'lucide-react';

const title = "Page Title";
const description = "Page description";
---

<BaseLayout title={title} description={description}>
  <section class="py-16">
    <div class="sb-container">
      <h1 class="text-4xl font-bold mb-6">{title}</h1>
      <p class="text-gray-600">{description}</p>

      {/* Static content here */}
    </div>
  </section>
</BaseLayout>
```

### Option B: Keep as React Island (For Interactive Components)

**When to use:** Pages with forms, state management, interactive features

**Example:** Assessments, matchers, platform finders

1. Create the Astro page wrapper:
```astro
---
// src/pages/tools/assessments/mental-health-assessment.astro
import BaseLayout from '../../../layouts/BaseLayout.astro';
import MentalHealthAssessment from '../../../components/react/MentalHealthAssessment';
---

<BaseLayout title="Mental Health Assessment">
  <MentalHealthAssessment client:load />
</BaseLayout>
```

2. Move the React component to `src/components/react/`:
```bash
mv src/_old_react_pages/tools/assessments/MentalHealthAssessment.tsx \
   src/components/react/MentalHealthAssessment.tsx
```

3. Update imports in the React component:
   - Replace `Link` from `react-router-dom` with `<a href="...">`
   - Remove `useLocation()` and `useNavigate()` hooks
   - Keep state management (useState, useEffect, etc.)

---

## 🔄 Routing Conversion

### React Router → Astro File-based Routing

| React Router | Astro File-based |
|-------------|------------------|
| `/compare` | `src/pages/compare.astro` or `src/pages/compare/index.astro` |
| `/reviews/platforms/betterhelp` | `src/pages/reviews/platforms/betterhelp.astro` |
| `/blog/guides/therapy-costs` | `src/pages/blog/guides/therapy-costs.astro` |
| `/tools/assessments/mental-health` | `src/pages/tools/assessments/mental-health.astro` |

**Key differences:**
- No `<Route>` components needed
- File structure = URL structure
- `index.astro` = `/` route for that directory
- Nested folders = nested URLs

---

## 💡 Migration Tips & Best Practices

### 1. Component Conversion Checklist

When converting a React component to Astro:

- [ ] Remove React Router imports (`Link`, `useLocation`, `useNavigate`)
- [ ] Replace `Link` with `<a href="">` for navigation
- [ ] Convert `className` to `class`
- [ ] Move static content to Astro frontmatter
- [ ] Keep interactive parts as React islands with `client:load`

### 2. Handling React Router Links

**Old (React Router):**
```tsx
import { Link } from 'react-router-dom';
<Link to="/compare">Compare</Link>
```

**New (Astro):**
```astro
<a href="/compare">Compare</a>
```

### 3. Client Directives for React Islands

Use these directives based on when you need the component to hydrate:

- `client:load` - Load immediately (forms, critical interactive features)
- `client:idle` - Load when browser is idle (less critical features)
- `client:visible` - Load when scrolled into view (below-fold content)
- `client:only="react"` - Only render on client (no SSR)

### 4. Sharing State Between Components

If you need to share state across the page:
- Use React Context within a parent React island
- Use Astro's built-in stores (`@nanostores`) for simple state
- Use URL parameters for navigation state

---

## 🎯 Quick Wins: Start Here

### 1. Migrate One Blog Article (Easy Practice)

Pick a blog article from `src/pages/blog/guides/` and convert it:

```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import { Calendar, User, Clock } from 'lucide-react';
---

<BaseLayout title="Article Title" description="Article description">
  {/* Copy the JSX content, convert className to class */}
</BaseLayout>
```

### 2. Create a Simple Static Page

Convert `/learn` or `/conditions-az` hub pages - they're mostly static lists.

### 3. Move One Interactive Component

Convert one assessment or matcher tool - good practice for React islands.

---

## 🐛 Troubleshooting

### Warning: "Unsupported file type .tsx found"

**Cause:** Astro sees `.tsx` files in the `pages` directory
**Solution:** Move old files to `src/_old_react_pages/` or prefix with `_` (e.g., `_OldComponent.tsx`)

### Error: "Cannot find module 'react-router-dom'"

**Cause:** Trying to use React Router in Astro pages
**Solution:** Replace with native `<a href="">` tags or Astro's `<a>` elements

### Styles Not Working

**Cause:** Tailwind classes might not be applying
**Solution:** Ensure `src/index.css` is imported in `BaseLayout.astro`

---

## 📊 Migration Progress Tracker

Create a simple spreadsheet or checklist:

- [ ] Homepage (1 page) - ✅ DONE
- [ ] Compare section (20+ pages)
- [ ] Reviews section (40+ pages)
- [ ] Best section (20+ pages)
- [ ] Tools section (15+ pages)
- [ ] Blog section (18 articles)
- [ ] Guides section (10+ pages)
- [ ] Case Studies (12 pages)
- [ ] Learn section (15+ pages)
- [ ] Conditions A-Z (12+ pages)
- [ ] Resources (5+ pages)

---

## 🚢 Deployment

Once migration is complete:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

3. **Deploy:** Astro builds to `/dist` - deploy this folder to:
   - Vercel
   - Netlify
   - Cloudflare Pages
   - Any static hosting

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [React in Astro (Islands)](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Astro Routing](https://docs.astro.build/en/core-concepts/routing/)
- [Tailwind in Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

---

## ✨ Benefits You'll See

After migration:

- **⚡ 90%+ faster page loads** (SSG vs client-side React)
- **📈 Better SEO** (pre-rendered HTML)
- **💰 Lower hosting costs** (static files)
- **🎯 Smaller bundle sizes** (only interactive parts use JavaScript)
- **♿ Better accessibility** (works without JavaScript)
- **🔧 Easier maintenance** (file-based routing, simpler architecture)

---

## Need Help?

This is a large migration! Consider:

1. **Start small:** Migrate 5-10 pages to get familiar with the pattern
2. **Automate:** Create scripts to batch-convert similar pages
3. **Team up:** If you have a team, divide pages by section
4. **Test incrementally:** Test each migrated page before moving to the next

Good luck with your migration! 🚀
