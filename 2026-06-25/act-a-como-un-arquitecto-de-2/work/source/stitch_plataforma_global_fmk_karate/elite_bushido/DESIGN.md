---
name: Elite Bushido
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#000000'
  on-tertiary-container: '#8f7200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system embodies the prestige, discipline, and high-performance nature of the World Karate Federation. It is built on a foundation of **Athletic Minimalism** mixed with **Corporate Luxury**. The aesthetic must evoke the feeling of a high-stakes international championship—focused, intense, and impeccably organized.

The interface prioritizes a "Dark Mode" sanctuary where content is elevated through high-contrast typography and gold accents. This isn't just a sports app; it is the digital home of a global authority. The emotional response should be one of respect, clarity, and empowerment. Visuals should leverage large-scale, high-action photography of athletes, treated with slight desaturation to ensure the "Premium Gold" accents remain the focal point of prestige.

## Colors
The palette is restricted to a tri-color hierarchy to maintain maximum authority and brand recognition.

- **Deep Black (#000000):** The primary canvas. Used for all major backgrounds to create a "stage" effect for athletes and data.
- **Pure White (#FFFFFF):** Reserved for primary text, iconography, and essential UI boundaries. It represents the "Gi" (uniform) and purity of technique.
- **Premium Gold (#D4AF37):** Used sparingly for "Prestige Elements"—medals, active states, primary call-to-actions, and victory moments. It should feel earned, not decorative.
- **Surface Grey (#1A1A1A):** A secondary neutral used for card backgrounds and input fields to provide subtle depth against the pure black base.

## Typography
The typography strategy pairs the aggressive, geometric strength of **Montserrat** for headings with the systematic precision of **Inter** for data and body copy.

Headlines should utilize heavy weights (Bold/ExtraBold) to mimic the impact of a strike. To maintain the "International Federation" feel, use `label-caps` for category headers and overlines. For mobile devices, headline sizes scale down aggressively to ensure high-impact words do not wrap awkwardly. Line heights are kept tight on headlines to maintain a compact, powerful visual density.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain the "Editorial" feel of a sports magazine, switching to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Large 48px margins create a "frame" around the content, emphasizing the premium nature of the space.
- **Mobile:** 4-column fluid grid with 20px margins. 
- **Spacing Rhythm:** Based on an 8px base unit. Vertical rhythm should be generous between sections (stack-xl) to allow the high-quality photography room to "breathe," while internal component spacing (stack-sm/md) remains tight and disciplined.

## Elevation & Depth
In a pure black environment, traditional shadows are ineffective. Depth is instead achieved through **Tonal Layering** and **Gold Accents**.

- **Level 0:** Pure Black (#000000) - The main background.
- **Level 1:** Surface Grey (#1A1A1A) - Used for cards and sections that need to sit "above" the floor.
- **Level 2:** Strokes and Outlines. Instead of shadows, use 1px solid strokes in #FFFFFF (10% opacity) for standard containers, and #D4AF37 (100% opacity) for highlighted or "Gold Status" items.
- **Interactive Depth:** When a card is hovered, it does not lift with a shadow; instead, its border-color transitions to the Premium Gold, creating a "glow" or "focus" effect.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every element—from buttons and input fields to athlete cards and images—must feature hard 90-degree angles. This reflects the precision and "edge" of professional martial arts. Rounded corners are seen as too soft for this brand identity. The only exception is the use of circular avatars for athlete profiles to provide a singular point of organic contrast in an otherwise rigid, architectural layout.

## Components

- **Buttons:** Primary buttons are Solid Gold (#D4AF37) with Black text, using Bold Montserrat in all-caps. Secondary buttons are Ghost-style with a 2px White border. All buttons must have a sharp 0px radius.
- **Athlete Cards:** Use the #1A1A1A background. The athlete's name should be in `headline-md`, and their rank/country in `label-caps`. Use a Gold top-border (2px) for reigning champions.
- **Input Fields:** Deep Black background with a 1px White border (20% opacity). On focus, the border becomes 1px Gold.
- **Chips/Badges:** Small, rectangular tags with #1A1A1A backgrounds and White text. Use for weight classes or event status.
- **Data Tables:** High-density, professional tables for rankings. Use subtle White horizontal dividers (5% opacity). Header row should be `label-caps` in Gold.
- **Progress Bars:** For athlete stats, use a Black track with a Solid Gold fill to represent performance levels.