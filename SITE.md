# LaunchKit - SaaS Landing Page Template

> Build something people will love. A beautiful, modern landing page template for SaaS products.

## Brand Identity

### Personality
- **Modern & Fresh**: Clean design that feels contemporary
- **Energetic**: Inspires action and building
- **Professional**: Enterprise-ready but approachable
- **Trustworthy**: Signals reliability and quality

### Colors
The site uses a distinctive sky blue palette (not the overused Tailwind blue-500):

| Color | Value | Usage |
|-------|-------|-------|
| Primary/Accent | `#0EA5E9` (Sky-500) | Buttons, links, highlights |
| Accent Hover | `#0284C7` (Sky-600) | Button hover states |
| Accent Light | `#E0F2FE` (Sky-100) | Badges, subtle backgrounds |
| Accent Dark | `#0369A1` (Sky-700) | Text on light accent backgrounds |
| Background | `#fafaf9` | Page background (warm off-white) |
| Foreground | `#0f172a` (Slate-900) | Main text |
| Muted | `#64748B` (Slate-500) | Secondary text |
| Border | `#E2E8F0` (Slate-200) | Borders and dividers |

Dark mode is supported and switches automatically based on system preference.

### Typography
- **Display/Headings**: Space Grotesk - Modern, geometric, distinctive
- **Body/Text**: DM Sans - Clean, readable, friendly

---

## Pages

### Homepage (`/`)
The main landing page with all sections:

1. **Navbar** - Fixed at top with logo, navigation links (Features, Pricing, FAQ), and CTA buttons
2. **Hero** - Centered layout with gradient text, large product screenshot extending to edge
3. **Trust Bar** - "Trusted by teams at..." with placeholder company logos
4. **Features** - Bento-style grid with 4 features, one large accent card
5. **Feature Showcase** - 3 alternating left/right detailed feature blocks with mockups
6. **Testimonials** - 3 customer quotes with star ratings
7. **Pricing** - 3 tiers (Free, Pro, Enterprise) with monthly/annual toggle
8. **FAQ** - 6 questions in accordion format
9. **Final CTA** - Blue banner with call to action
10. **Footer** - 4-column navigation, social links, legal

---

## Components

### UI Components (in `components/ui/`)

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, and ghost variants in sm/md/lg sizes |
| **Container** | Max-width wrapper (sm/md/lg/xl sizes) with horizontal padding |
| **Card** | Bordered card with optional hover effects |
| **SectionHeading** | Badge + title + description pattern for sections |
| **Badge** | Small labels (default, accent, success, warning variants) |

### Layout Components (in `components/layout/`)

| Component | Description |
|-----------|-------------|
| **Navbar** | Fixed navigation with mobile menu toggle |
| **Footer** | Multi-column footer with social links |

### Section Components (in `components/sections/`)

| Component | Description |
|-----------|-------------|
| **Hero** | Main hero with headline, CTAs, and decorative elements |
| **TrustBar** | Company logo bar |
| **Features** | Bento-style feature grid |
| **FeatureShowcase** | Alternating feature blocks with mockups |
| **Testimonials** | Customer quotes grid |
| **Pricing** | Pricing cards with toggle |
| **FAQ** | Accordion-style questions |
| **CTA** | Final call-to-action banner |

---

## Customization Guide

### To change the brand name:
1. Open `components/layout/Navbar.tsx` - change "LaunchKit" text
2. Open `components/layout/Footer.tsx` - change "LaunchKit" text and tagline
3. Open `app/layout.tsx` - update the page title and description

### To change colors:
1. Open `app/globals.css`
2. Modify the `:root` CSS variables for light mode colors
3. Modify the `@media (prefers-color-scheme: dark)` section for dark mode

### To edit the hero section:
1. Open `components/sections/Hero.tsx`
2. Change the headline text in the `<h1>` tag
3. Change the subheadline in the `<p>` tag below it
4. Update button text in the `<Button>` components

### To edit pricing:
1. Open `components/sections/Pricing.tsx`
2. Find the `plans` array at the top
3. Edit plan names, prices, features, and descriptions

### To add/edit FAQ questions:
1. Open `components/sections/FAQ.tsx`
2. Find the `faqs` array at the top
3. Add, remove, or edit question/answer objects

### To add company logos to the trust bar:
1. Open `components/sections/TrustBar.tsx`
2. Replace the placeholder SVG icons with actual logo images or SVGs
3. Update the company names in the `logos` array

### To edit testimonials:
1. Open `components/sections/Testimonials.tsx`
2. Find the `testimonials` array at the top
3. Edit quotes, names, roles, and companies

---

## Technical Notes

- Built with Next.js 14+ App Router
- Styled with Tailwind CSS
- All components are React Server Components except interactive ones (Navbar, Pricing toggle, FAQ accordion)
- Responsive design works on mobile, tablet, and desktop
- Smooth scroll enabled for anchor links

---

## Recent Changes

- **Polish Pass**: Audited and refined every section:
  - Hero: Fixed navbar overlap, improved background gradient, removed distracting decorative shapes
  - TrustBar: Cleaner company logo placeholders with consistent styling
  - Features: Improved 2-column bento grid layout with better responsiveness
  - FeatureShowcase: Refined mockup designs with realistic UI elements
  - Testimonials: Reorganized layout (quote marks, stars, author info)
  - Pricing: Smoother toggle animation, better card elevation for popular plan
  - FAQ: Smooth accordion animation using CSS grid, styled active states
  - CTA: Added gradient background for more depth
  - Navbar: Smooth mobile menu animation
  - Footer: Better social link buttons, improved grid layout
  - Button: Added subtle scale animation on click

- **Initial Build**: Created complete SaaS landing page template with:
  - Sky blue color palette
  - Space Grotesk + DM Sans typography
  - All 10 sections (Navbar through Footer)
  - Bento-style features grid
  - Interactive pricing toggle
  - Accordion FAQ
  - Mobile-responsive design
  - Dark mode support
