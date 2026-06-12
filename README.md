# USA-Palestine Mental Health Network — Website

Redesigned website for the [USA-Palestine Mental Health Network](https://usapalmhn.org), rebuilt as a modern, fully responsive multi-page static site.

## Overview

This is a static website built with plain HTML, CSS, and JavaScript — no frameworks, build tools, or dependencies required. It can be hosted on any standard web host or static hosting service.

**Key features:**

- Bilingual support — English/Arabic toggle with full RTL (right-to-left) layout switching
- Responsive design with mobile navigation menu
- Sticky navigation with active-section highlighting
- Interactive elements: content filters, tab switchers, accordions, and form validation
- Consistent design system shared across all pages

## Project Structure

```
├── index.html              Homepage
├── about.html              About the organization
├── campaigns.html          Campaigns and advocacy
├── get-involved.html       Volunteer and participation info
├── resources.html          Mental health resources
├── voices.html             Community voices and testimonials
├── assets/
│   └── logo.png            Site logo
├── css/
│   └── shared.css          Shared styles for all pages
└── .gitignore
```

## Design System

- **Typography:** Playfair Display (headings), Source Serif 4, DM Sans
- **Color palette:** Olive greens, red, navy, and cream
- **Visual identity:** Keffiyeh pattern overlays in page heroes

## Running Locally

No installation needed. From the project root, start a simple local server:

```bash
python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note for macOS users:** Port 7000 is often occupied by a system process (Control Center), so port 3000 is recommended.

Alternatively, you can simply open `index.html` directly in a browser, though a local server is recommended for the most accurate preview.

## Editing Content

- Each page is a standalone HTML file — edit text directly in the corresponding file.
- Bilingual text uses `data-en` and `data-ar` attributes on elements. To update translated content, edit both attributes on the same element.
- Shared styles (colors, fonts, layout) live in `css/shared.css`. Changes there apply site-wide.

## Deployment

Upload all files and folders (preserving the structure above) to any static web host. No server-side configuration is required.

---

Developed by Sarah Al-Said · 2026
