---
name: impeccable-design
description: Brand guidelines and UI/UX standards for the Super Agent project. Use when performing UI audits, polishing components, or creating new features to ensure compliance with the Premium Insurance Concierge design style.
---

# Impeccable Design: Super Agent

This skill ensures that the "Super Agent" project maintains a premium, luxurious, and trustworthy brand image through strict adherence to design guidelines.

## 1. Core Philosophy: Premium Insurance Concierge
- **Trust:** Professionalism in every detail. No broken images, no overlapping text.
- **Simplicity:** Clean UI with minimal distractions.
- **Personalization:** Focus on the user's needs and smart recommendations.

## 2. Design Constraints & Anti-patterns

### 🎨 Color Palette (The Signature Contrast)
- **Primary:** Brand Pink (`#ED008C`) - Use for CTA, buttons, and highlights.
- **Background:** Light Gray (`#F8FAFC`) - Main background. Avoid pure white (`#FFFFFF`) for large areas.
- **Typography:** Dark/Deep Black (`#0F172A` / `#050505`) - High contrast for readability.
- **🚫 Anti-pattern:** Using random colors outside the palette. Stick to established theme variables in `tailwind.config.js` or `index.css`.

### ✍️ Typography (Readability & Trust)
- **Primary Font:** `Prompt` (Sans-serif).
- **🚫 Strict Rule:** **NO `tracking-tight` or `tracking-tighter`**. Thai characters must have space to breathe.
- **✅ Rule:** Use `leading-relaxed` for all Thai body text and headings to prevent character clipping on mobile.
- **Hierarchy:** Maintain clear visual weight between H1-H6 and Body text.

### 📐 Layout & White Space
- **White Space is Luxury:** Don't be afraid of large margins. Content should "breathe."
- **Clean Interface:** Remove secondary information that doesn't add immediate value.
- **Responsive-First:** Always verify designs on mobile breakpoints (`sm:`, `md:`).

## 3. UI Audit Workflow
When asked to perform an audit or polish, follow these steps:
1. **Check Colors:** Ensure all elements use brand colors.
2. **Typography Check:** Remove any `tracking-tight` and verify `leading-relaxed` usage.
3. **Spacing Check:** Look for "claustrophobic" sections and add padding/margins where needed.
4. **Consistency Check:** Ensure buttons, icons, and card styles are uniform across the app.
5. **Interactive Reveal:** Ensure sections use the `.reveal` class for smooth scroll animations.
