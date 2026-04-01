

# Aether — Minimal One-Page Website Rebuild

## Overview
Strip the entire multi-page Verion website down to a single-page, minimal, aesthetic site for **Aether — Agentic IAM Reimagined**. The site will tease the vision and differentiator without deep technical detail.

## What Gets Removed
- All existing pages: Vision, Architecture, Features, Comparison, Roadmap, Careers, Job Details, Job Application, Chat, Waitlist
- All existing section components (CEONote, VisionSection, ArchitectureSection, FeaturesSection, RoadmapSection, TechStackSection, ComparisonSection, WaitlistSection, etc.)
- Multi-page routing — single route only (`/`)
- Security/anti-screenshot code, translation features
- All Verion social-platform messaging

## What Gets Built (Single Page)

### 1. Splash Screen
- Keep existing V logo animation, update text to "Aether" instead of "Verion"

### 2. Header (Minimal)
- Aether logo + wordmark
- Nav links: anchor scroll to sections (About, Contact, Download)
- "Book a Demo" CTA button

### 3. Hero Section
- Large headline: **"The Identity & Control Layer for AI Agents"**
- Tagline: *"No anonymous agents. No uncontrolled actions."*
- Two CTAs: "Book a Demo" and "Download App" (OS-detected)
- Sleek animated background (reuse existing AnimatedBackground)

### 4. Vision Teaser Section (3 cards)
- **Identity** — Every agent gets a verifiable, cryptographic identity
- **Intent** — Real-time verification of what an agent is doing and why
- **Control** — Secure, temporary access with economic guardrails
- One-liner differentiator: *"Other platforms govern what agents can do. Aether governs why."*

### 5. Closing Statement
- *"In the future, companies won't manage employees — they'll manage AI agents. Aether becomes the identity layer for that world."*

### 6. Contact / Book Demo Section
- "Book a Demo" form or mailto/Calendly link
- Contact email, social links

### 7. Download App Section
- OS detection (Windows/Mac/Linux/iOS/Android)
- Show appropriate download button based on detected OS
- "Coming Soon" state if no actual download links yet

### 8. Footer
- Verion Privacy and Tech LLP
- Founder: Manik K. Sangal
- Social links (Twitter/X, GitHub)
- Copyright, legal links

## Technical Changes

### Files to Modify
- **`src/App.tsx`** — Remove all routes except `/` and `*`
- **`src/pages/Index.tsx`** — Complete rewrite as single-page Aether site
- **`src/components/Header.tsx`** — Simplify to minimal nav with anchor links + "Book Demo" CTA
- **`src/components/SplashScreen.tsx`** — Change "Verion" text to "Aether"
- **`src/components/Footer.tsx`** — Rewrite with Aether/Verion LLP info
- **`src/index.css`** — Keep the existing dark futuristic theme (it fits Aether well)

### New Components
- **`src/components/AetherHero.tsx`** — Hero with headline, tagline, CTAs, OS-detected download
- **`src/components/AetherVision.tsx`** — 3-card teaser (Identity, Intent, Control)
- **`src/components/AetherClosing.tsx`** — Closing statement
- **`src/components/AetherContact.tsx`** — Book demo / contact section

### OS Detection for Download
- Use `navigator.userAgent` / `navigator.platform` to detect OS
- Show platform-specific download button (or "Coming Soon" if no link)

### Color Theme
- Keep current dark futuristic palette (cyan/purple accents on deep dark background) — it matches Aether's enterprise security vibe perfectly

