# Necessary Aid Alliance - Documentation

## Project Structure
- `src/components/`: Individual sections of the website.
  - `Navbar.jsx`: Sticky glassmorphic navigation.
  - `Hero.jsx`: Full-screen entrance with GSAP animations.
  - `Mission.jsx`: Split layout describing the NGO foundation.
  - `Programs.jsx`: Card-based program showcase.
  - `Impact.jsx`: Scroll-triggered counter statistics.
  - `Testimonials.jsx`: Community success stories.
  - `GetInvolved.jsx`: Call to action for volunteers and donors.
  - `Contact.jsx`: Interactive contact form.
  - `Footer.jsx`: Bottom navigation and newsletter.
- `src/hooks/useGsap.js`: A custom hook that wraps GSAP ScrollTrigger logic for easy reusability.
- `src/index.css`: Tailwind 4 configuration and global design system tokens.

## Animation Logic
We use **GSAP (GreenSock Animation Platform)** with the **ScrollTrigger** plugin for all animations.
- **Reveal Hook (`useGsap.js`)**: Most sections use this hook to trigger a "fade-in + slide-up" effect when the element enters the viewport.
- **Counter Animation (`Impact.jsx`)**: Uses a GSAP `onUpdate` callback to animate integer values from 0 to the target number once triggered by ScrollTrigger.
- **Staggered Reveals**: Many components use the `stagger` property in GSAP to animate children elements one after another for a professional, synchronized feel.

## Design System
- **Typography**: 
  - Display: `Outfit` (Bold, modern, African-inspired feel).
  - Body: `Inter` (Highly readable, professional).
- **Colors**:
  - Primary: Deep Teal (`#004D40`) - Representing stability and growth.
  - Secondary: Amber (`#FFC107`) - Representing hope and energy.
  - Accent: Coral (`#E91E63`) - Representing passion and community.
- **Utilities**:
  - `.section-padding`: Standardized spacing across all sections.
  - `.glass-card`: Reusable backdrop-blur utility for modern UI elements.

## How to Extend
1. **Add a New Section**: Create a new `.jsx` file in `src/components/`, import `useGsapReveal`, and apply the ref to your main container.
2. **Modify Animations**: Adjust the `delay`, `duration`, or `y` offset in the `useGsapReveal` hook options within the component.
3. **Update Theme**: Modify the `@theme` block in `src/index.css` to update global colors or fonts.
