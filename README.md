# USA-Palestine Mental Health Network — Website

Redesigned website for the [USA-Palestine Mental Health Network](https://usapalmhn.org), built as a responsive multi-page static site.

Plain HTML, CSS and JavaScript — no frameworks, no build step, no dependencies. It runs on any static host.

## Where to make a change

This is the part worth reading. Most edits belong in exactly one file.

| I want to change… | Edit this |
|---|---|
| A nav tab — add, remove, rename, reorder | `js/site.js` → `NAV` |
| A dropdown under a nav tab | `js/site.js` → `NAV`, the `children` array |
| A footer link or column | `js/site.js` → `FOOTER_COLUMNS` |
| Social media links | `js/site.js` → `SOCIALS` |
| The newsletter block | `js/site.js` → `buildNewsletter()` |
| Colors, fonts, spacing | `css/shared.css` → the `:root` tokens at the top |
| A shared component (buttons, cards, nav, footer) | `css/shared.css` |
| The look of one page only | `css/pages/<page>.css` |
| Words on one page | that page's `.html` file |
| **Publish a monthly update** | **`js/data/updates.js`** — add one object to the top |

**The nav and footer are not in the HTML files.** They are generated once by `js/site.js` and injected into every page. Change a nav item there and all eight pages update together. This is deliberate — the nav had previously drifted out of sync across pages.

## Project structure

```
├── index.html               Homepage
├── updates.html             Monthly updates, filterable archive
├── about.html               Mission, aims, Advisory Council, affiliates, contact
├── campaigns.html           "Don't Go" campaign archive
├── voices.html              First-person testimony and statements
├── resources.html           Books, journals, films, organizations
├── crisis-resources.html    Hotlines, legal help, psychological support
├── get-involved.html        Join, reading circles, delegations, donate
├── donate.html              Givebutter donation page
│
├── css/
│   ├── shared.css           Design tokens + every shared component
│   └── pages/
│       └── <page>.css       Styles used by one page only
│
├── js/
│   ├── site.js              Nav, footer, newsletter, mobile menu, translation
│   ├── data/
│   │   └── updates.js       Every monthly update — the only file you edit to publish one
│   └── pages/
│       ├── index.js         Homepage hero slider + animated counters
│       └── updates.js       Renders, groups and filters the updates
│
├── assets/
│   └── logo.png
└── README.md
```

Every page follows the same shape:

```html
<body data-page="about.html">      <!-- tells site.js which tab is active -->
  <div data-site="nav"></div>
  …page content…
  <div data-site="newsletter"></div>
  <div data-site="footer"></div>
  <script src="js/site.js"></script>
</body>
```

## Publishing a monthly update

Open `js/data/updates.js` and add an object at the top of the list:

```js
{
  date: '2026-10-14',                    // required, YYYY-MM-DD
  title: 'Café Palestine 42',
  category: 'event',                     // event | campaign | program | network
  host: 'UK-Palestine Mental Health Network',
  when: '4:00–6:00pm UK · 11:00am–1:00pm ET',
  where: 'Online',
  body: 'One or two sentences.',
  link: 'https://example.org/register',  // leave '' and no button appears
  linkLabel: 'Register'
}
```

Save. That's the whole job — `updates.html` sorts by date, splits upcoming from past,
groups the past by month and wires the category filters on its own. Add `ongoing: true`
for a campaign with no end date and it moves to the ongoing section instead.

## Arabic translation

Handled by the Google Translate widget, loaded from `js/site.js`. There is no second copy of the text to maintain — pressing **EN | عربي** sets a `googtrans` cookie and reloads, and Google translates the page. The cookie is site-wide, so Arabic persists as visitors move between pages.

- Right-to-left layout rules live under `[dir="rtl"]` in `css/shared.css`.
- To keep a string untranslated — a brand name, for instance — add `class="notranslate"` to its element.
- The language button appears in the top bar on desktop and inside the hamburger menu on phones.

## Design system

- **Typography:** Playfair Display (headings), Source Serif 4 (body copy), DM Sans (UI)
- **Color:** olive greens, red, navy, cream — all defined as CSS variables in `css/shared.css`
- **Visual identity:** keffiyeh pattern overlays in page heroes

## Running locally

From the project root:

```bash
python3 -m http.server 3000
```

Then open <http://localhost:3000>.

A local server is required — opening the `.html` files directly with `file://` will not work, because the browser blocks the shared script from loading.

## Deployment

Push to the connected repository; the host rebuilds automatically. Upload preserves the folder structure above. No server-side configuration is needed.

---

Developed by Sarah Al-Said · 2026
