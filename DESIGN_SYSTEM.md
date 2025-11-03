# RealMindSolutions Design System

## Modern Essence

A comprehensive design system for the RMS mental health platform, built with thoughtful color psychology and accessibility in mind.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Components](#components)
4. [Spacing & Layout](#spacing--layout)
5. [Usage Guidelines](#usage-guidelines)

---

## Color Palette

### Primary: Trust Blue (#3B82F6)

**Psychology:** Trust, calm, professionalism, stability
**Use for:** Primary actions, links, main CTAs, navigation highlights

```css
/* Tailwind classes */
bg-brand-primary-500
text-brand-primary-500
border-brand-primary-500

/* CSS variables */
var(--color-primary)
var(--color-primary-500)
```

**Scale:**
- `50` - #EFF6FF (Lightest - backgrounds)
- `100` - #DBEAFE
- `200` - #BFDBFE
- `300` - #93C5FD
- `400` - #60A5FA
- `500` - #3B82F6 ⭐ **Base**
- `600` - #2563EB
- `700` - #1D4ED8
- `800` - #1E40AF
- `900` - #1E3A8A (Darkest)

---

### Secondary: Wisdom Purple (#5F4B8B)

**Psychology:** Wisdom, introspection, depth, healing journey
**Use for:** Secondary actions, highlights, badges, featured content

```css
/* Tailwind classes */
bg-brand-secondary-500
text-brand-secondary-500
border-brand-secondary-500

/* CSS variables */
var(--color-secondary)
var(--color-secondary-500)
```

**Scale:**
- `50` - #F5F3F7
- `100` - #EBE7EF
- `200` - #D7CFE0
- `300` - #C3B7D0
- `400` - #AF9FC1
- `500` - #5F4B8B ⭐ **Base**
- `600` - #4C3C6F
- `700` - #3F3159
- `800` - #322644
- `900` - #251B2F

---

### Accent: Healing Teal (#4ECDC4)

**Psychology:** Growth, healing, renewal, positive progress
**Use for:** Success states, positive feedback, growth indicators, achievements

```css
/* Tailwind classes */
bg-brand-accent-400
text-brand-accent-400
border-brand-accent-400

/* CSS variables */
var(--color-accent)
var(--color-success)
```

**Scale:**
- `50` - #F0FDFB
- `100` - #CCFBF1
- `200` - #99F6E4
- `300` - #5EEAD4
- `400` - #4ECDC4 ⭐ **Base**
- `500` - #2DD4BF
- `600` - #14B8A6
- `700` - #0D9488
- `800` - #0F766E
- `900` - #115E59

---

### Coral: Warm Attention (#FF6B6B)

**Psychology:** Warmth, attention, importance, gentle urgency
**Use for:** Errors, warnings, important callouts, destructive actions

```css
/* Tailwind classes */
bg-brand-coral-500
text-brand-coral-500
border-brand-coral-500

/* CSS variables */
var(--color-coral)
var(--color-error)
```

**Scale:**
- `50` - #FFF5F5
- `100` - #FFE3E3
- `200` - #FFC9C9
- `300` - #FFA8A8
- `400` - #FF8787
- `500` - #FF6B6B ⭐ **Base**
- `600` - #FA5252
- `700` - #F03E3E
- `800` - #E03131
- `900` - #C92A2A

---

### Neutral: Grayscale (#737373)

**Use for:** Text, backgrounds, borders, disabled states

```css
/* Tailwind classes */
bg-neutral-500
text-neutral-700
border-neutral-300
```

**Scale:**
- `50` - #FAFAFA (Lightest)
- `100` - #F5F5F5
- `200` - #E5E5E5
- `300` - #D4D4D4
- `400` - #A3A3A3
- `500` - #737373 ⭐ **Base**
- `600` - #525252
- `700` - #404040
- `800` - #262626
- `900` - #171717 (Darkest)

---

## Typography

### Font Families

```css
/* Sans-serif (primary) */
font-family: 'Inter', system-ui, sans-serif;
/* Tailwind: font-sans */

/* Monospace (code) */
font-family: 'JetBrains Mono', monospace;
/* Tailwind: font-mono */
```

### Heading Scale (Fluid Typography)

```css
h1 { font-size: clamp(2rem, 5vw, 3rem); }     /* 32-48px */
h2 { font-size: clamp(1.5rem, 4vw, 2.25rem); } /* 24-36px */
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); }/* 20-28px */
h4 { font-size: clamp(1.125rem, 2vw, 1.5rem); }/* 18-24px */
```

### Font Weights

- `font-normal` (400) - Body text
- `font-medium` (500) - Subtle emphasis
- `font-semibold` (600) - Component labels
- `font-bold` (700) - Headings, strong emphasis

---

## Components

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">
  Get Started
</button>
```
**Style:** Blue (#3B82F6), white text, shadow on hover
**Use for:** Primary CTAs, main actions

#### Secondary Button
```html
<button class="btn btn-secondary">
  Learn More
</button>
```
**Style:** Purple (#5F4B8B), white text
**Use for:** Secondary actions

#### Accent Button
```html
<button class="btn btn-accent">
  Success Action
</button>
```
**Style:** Teal (#4ECDC4), white text
**Use for:** Positive actions, confirmations

#### Outline Button
```html
<button class="btn btn-outline-primary">
  Cancel
</button>
```
**Style:** Border only, transparent background
**Use for:** Secondary actions, cancel buttons

#### Ghost Button
```html
<button class="btn btn-ghost">
  Tertiary Action
</button>
```
**Style:** No border, subtle hover
**Use for:** Tertiary actions, text links

#### Button Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

---

### Cards

#### Basic Card
```html
<div class="card">
  <div class="p-6">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>
```

#### Hoverable Card
```html
<div class="card card-hover">
  <!-- Content -->
</div>
```
**Effect:** Lifts on hover, border color changes

#### Interactive Card
```html
<div class="card card-interactive">
  <!-- Clickable content -->
</div>
```
**Effect:** More pronounced hover, cursor pointer

#### Colored Cards
```html
<div class="card card-primary">Primary theme</div>
<div class="card card-secondary">Secondary theme</div>
```

---

### Badges

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-secondary">Featured</span>
<span class="badge badge-accent">Active</span>
<span class="badge badge-coral">Urgent</span>
<span class="badge badge-success">Verified</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-neutral">Default</span>
```

---

### Alerts

```html
<!-- Info Alert -->
<div class="alert alert-info">
  <span>ℹ️</span>
  <p>This is an informational message.</p>
</div>

<!-- Success Alert -->
<div class="alert alert-success">
  <span>✓</span>
  <p>Action completed successfully!</p>
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
  <span>⚠️</span>
  <p>Please review this important information.</p>
</div>

<!-- Error Alert -->
<div class="alert alert-error">
  <span>✕</span>
  <p>An error occurred. Please try again.</p>
</div>
```

---

### Form Elements

#### Input Field
```html
<input type="text" class="input" placeholder="Enter text..." />
```

#### Input with States
```html
<input type="text" class="input input-error" placeholder="Error state" />
<input type="text" class="input input-success" placeholder="Success state" />
```

#### Textarea
```html
<textarea class="textarea" placeholder="Enter longer text..."></textarea>
```

#### Select Dropdown
```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

---

### Gradients

#### Background Gradients
```html
<div class="gradient-primary">Primary gradient</div>
<div class="gradient-secondary">Secondary gradient</div>
<div class="gradient-accent">Accent gradient</div>
<div class="gradient-warm">Warm gradient</div>
<div class="gradient-hero">Hero gradient (multi-color)</div>
<div class="gradient-calm">Calm gradient (soft blend)</div>
```

#### Text Gradients
```html
<h1 class="text-gradient-primary">Gradient Text</h1>
<h1 class="text-gradient-secondary">Gradient Text</h1>
<h1 class="text-gradient-hero">Gradient Text</h1>
```

---

## Spacing & Layout

### Spacing Scale (CSS Variables)

```css
--space-xs: 0.5rem;  /* 8px */
--space-sm: 1rem;    /* 16px */
--space-md: 2rem;    /* 32px */
--space-lg: 3rem;    /* 48px */
--space-xl: 4rem;    /* 64px */
--space-2xl: 6rem;   /* 96px */
```

### Container Classes

```html
<!-- Standard container -->
<div class="sb-container">
  <!-- Max-width: 1000px, responsive padding -->
</div>

<!-- Narrow container (for reading) -->
<div class="sb-container-narrow">
  <!-- Max-width: 900px -->
</div>
```

### Grid Layouts

```html
<!-- Auto-fit grid (300px min) -->
<div class="sb-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Tight grid (250px min) -->
<div class="sb-grid-tight">...</div>

<!-- Wide grid (350px min) -->
<div class="sb-grid-wide">...</div>
```

### Stack Layouts

```html
<!-- Vertical stack with medium gap -->
<div class="sb-stack">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Small stack -->
<div class="sb-stack-sm">...</div>

<!-- Large stack -->
<div class="sb-stack-lg">...</div>
```

---

## Usage Guidelines

### When to Use Each Color

#### Primary Blue (#3B82F6)
✅ **Do use for:**
- Primary CTAs (Sign Up, Get Started, Book Now)
- Active navigation items
- Primary links
- Loading indicators
- Focus states

❌ **Don't use for:**
- Error messages
- Warning alerts
- Decorative elements where action is not expected

---

#### Secondary Purple (#5F4B8B)
✅ **Do use for:**
- Secondary CTAs
- Premium features
- Highlighted content
- Category badges
- Quote highlights

❌ **Don't use for:**
- Primary actions (use blue instead)
- Error or warning states
- Body text (low contrast)

---

#### Accent Teal (#4ECDC4)
✅ **Do use for:**
- Success messages
- Completed states
- Positive feedback
- Growth indicators
- Achievement badges
- Confirmation actions

❌ **Don't use for:**
- Error states
- Destructive actions
- Primary CTAs (use blue)

---

#### Coral (#FF6B6B)
✅ **Do use for:**
- Error messages
- Validation errors
- Warning alerts
- Destructive actions (Delete, Remove)
- Important notices
- Attention-grabbing elements

❌ **Don't use for:**
- Success messages
- Primary CTAs
- Large background areas (too intense)

---

### Accessibility Considerations

#### Color Contrast
All text colors meet WCAG AA standards:
- Large text (18pt+): 3:1 contrast ratio
- Normal text: 4.5:1 contrast ratio
- Interactive elements: Clear focus indicators

#### Recommended Combinations

**High Contrast (AAA):**
```css
/* Dark text on light backgrounds */
text-neutral-900 on bg-white
text-neutral-800 on bg-neutral-50

/* White text on dark backgrounds */
text-white on bg-brand-primary-700
text-white on bg-brand-secondary-600
text-white on bg-neutral-800
```

**Good Contrast (AA):**
```css
text-brand-primary-700 on bg-brand-primary-50
text-brand-secondary-700 on bg-brand-secondary-50
text-brand-accent-800 on bg-brand-accent-50
text-brand-coral-800 on bg-brand-coral-50
```

---

### Component Composition Examples

#### Call-to-Action Section
```html
<section class="gradient-hero text-white py-20 px-6">
  <div class="sb-container text-center">
    <h1 class="text-4xl font-bold mb-4">Find Your Path to Wellness</h1>
    <p class="text-xl mb-8">Connect with licensed therapists online</p>
    <div class="flex gap-4 justify-center">
      <button class="btn btn-light btn-lg">Get Started</button>
      <button class="btn btn-ghost btn-lg">Learn More</button>
    </div>
  </div>
</section>
```

#### Platform Card Grid
```html
<div class="sb-grid">
  <div class="card card-hover">
    <img src="platform-logo.png" alt="Platform" class="w-full h-48 object-cover" />
    <div class="p-6">
      <div class="flex gap-2 mb-3">
        <span class="badge badge-primary">Popular</span>
        <span class="badge badge-accent">Verified</span>
      </div>
      <h3 class="text-xl font-bold mb-2">Platform Name</h3>
      <p class="text-neutral-600 mb-4">Brief description of the platform...</p>
      <button class="btn btn-primary w-full">View Details</button>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

#### Form with Validation
```html
<form class="sb-stack-sm max-w-md mx-auto">
  <div>
    <label class="block text-sm font-medium mb-2">Email</label>
    <input type="email" class="input input-success" value="user@example.com" />
    <p class="text-sm text-brand-accent-700 mt-1">✓ Email is valid</p>
  </div>

  <div>
    <label class="block text-sm font-medium mb-2">Password</label>
    <input type="password" class="input input-error" />
    <p class="text-sm text-brand-coral-700 mt-1">✕ Password must be at least 8 characters</p>
  </div>

  <button class="btn btn-primary w-full">Sign Up</button>
</form>
```

---

## Quick Reference

### Color Class Patterns

```
Brand Colors:
- Primary: bg|text|border-brand-primary-{50-900}
- Secondary: bg|text|border-brand-secondary-{50-900}
- Accent: bg|text|border-brand-accent-{50-900}
- Coral: bg|text|border-brand-coral-{50-900}
- Neutral: bg|text|border-neutral-{50-900}

Component Classes:
- Buttons: .btn .btn-{variant} .btn-{size}
- Cards: .card .card-{variant}
- Badges: .badge .badge-{variant}
- Alerts: .alert .alert-{variant}
- Inputs: .input .input-{state}
- Gradients: .gradient-{variant}
```

### Legacy Support

Old class names are still supported for backwards compatibility:
- `.sb-btn-*` → maps to `.btn-*`
- `.sb-card-*` → maps to `.card-*`
- `.sb-badge-*` → maps to `.badge-*`

---

## Resources

- **Figma Design File:** [Link to Figma]
- **Component Storybook:** [Link to Storybook]
- **GitHub Repository:** [Link to repo]
- **Support:** dev@realmindSolutions.com

---

**Last Updated:** November 2025
**Version:** 1.0.0
**Design System:** Modern Essence
