---
title: "Design Tradeoffs in Dark Mode"
description: "Dark mode isn't just flipping the background to black. A discussion of tones, contrast, and when not to use pure black."
pubDate: 2025-02-08
lang: en
tags: ["Design", "CSS", "Accessibility"]
---

## Not "white inverted to black"

The most common mistake in dark mode is to replace `#ffffff` with `#000000`. This causes:

- **Eye strain**: pure black background with pure white text has too much contrast
- **OLED burn-in risk**: pure black pixels displayed for a long time may leave ghosting
- **Lost visual hierarchy**: shadows and borders become invisible on dark backgrounds

## Recommended base colors

- Light background: `#fafaf9` (warm off-white, not pure white)
- Dark background: `#0a0a0a` (close to black, but leaves a little breathing room)
- Text color: light `#1c1917`, dark `#fafaf9`

## The contrast formula

WCAG 2.1 recommends body text contrast of at least **4.5:1**. Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to validate your palette.

## A few small lessons

- Store the theme choice in `localStorage` and apply it before the page renders, to avoid FOUC (flash of unstyled content)
- Follow the system `prefers-color-scheme`, but allow user override
- Use the `view-transition` API for the theme toggle animation — the experience is much smoother
