/* ============================================================
   USAPALMHN — Shared site script
   ------------------------------------------------------------
   The navigation, newsletter block and footer are defined ONCE
   here and injected into every page. To change a nav item or a
   footer link, edit this file only — not the eight HTML pages.

   Each page opts in with:
     <body data-page="about.html">        <- drives the active tab
     <div data-site="nav"></div>
     <div data-site="newsletter"></div>
     <div data-site="footer"></div>
     <script src="js/site.js"></script>   <- last line before </body>
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. NAVIGATION ----------------------------------
     Add, remove or reorder tabs here. `children` turns an item
     into a dropdown. `mobileLabel` is the longer wording used
     in the hamburger menu.
  ------------------------------------------------------------ */
  var NAV = [
    { href: 'about.html',          label: 'About' },
    { href: 'updates.html',        label: 'Updates' },
    { href: 'campaigns.html',      label: 'Campaigns',  mobileLabel: 'Campaigns' },
    { href: 'voices.html',         label: 'Voices',           mobileLabel: 'Voices on Mental Health' },
    { href: 'resources.html',      label: 'Resources', children: [
        { href: 'resources.html',        label: 'Resource Library' },
        { href: 'crisis-resources.html', label: 'Crisis Resources' }
    ]},
    { href: 'get-involved.html',   label: 'Get Involved' },
    { href: 'donate.html',         label: 'Donate' }
  ];

  /* ---------- 2. FOOTER ---------------------------------------
     Four columns. Edit the link lists here.
  ------------------------------------------------------------ */
  var FOOTER_COLUMNS = [
    { title: 'About', links: [
      { href: 'about.html#mission',          label: 'Our Mission' },
      { href: 'about.html#advisory-council', label: 'Advisory Council' },
      { href: 'about.html#affiliates',       label: 'Partner Networks' },
      { href: 'statement-on-anti-semitism.html', label: 'Statement on Anti-Semitism' },
      { href: 'about.html#contact',          label: 'Contact Us' }
    ]},
    { title: 'Navigate', links: [
      { href: 'updates.html',          label: 'Updates' },
      { href: 'campaigns.html',        label: 'Campaigns' },
      { href: 'voices.html',           label: 'Voices on Mental Health' },
      { href: 'resources.html',        label: 'Resources' },
      { href: 'crisis-resources.html', label: 'Crisis Resources' }
    ]},
    { title: 'Get Involved', links: [
      { href: 'get-involved.html#join',            label: 'Join the Network' },
      { href: 'get-involved.html#delegations',     label: 'Travel to Palestine' },
      { href: 'get-involved.html#reading-circles', label: 'Reading Circles' },
      { href: 'get-involved.html#how-to-help',     label: 'How to Help' },
      { href: 'donate.html',                       label: 'Donate' }
    ]}
  ];

  var SOCIALS = [
    { href: 'https://twitter.com/UsaPalMhn', label: '𝕏', title: 'Twitter/X' },
    { href: 'https://www.facebook.com/USA-Palestine-Mental-Health-Network-794365367408972', label: 'f', title: 'Facebook' },
    { href: 'https://www.instagram.com/us_pmhn/', label: 'ig', title: 'Instagram' }
  ];

  /* ---------- 3. PAGE CONTEXT --------------------------------- */
  var page = document.body.getAttribute('data-page') || 'index.html';
  var isHome = page === 'index.html';

  // A link like "index.html#news" becomes just "#news" on the homepage.
  function resolve(href) {
    if (isHome && href.indexOf('index.html#') === 0) return href.slice('index.html'.length);
    return href;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function isActive(item) {
    if (item.href === page) return true;
    if (item.children) {
      for (var i = 0; i < item.children.length; i++) {
        if (item.children[i].href === page) return true;
      }
    }
    return false;
  }

  /* ---------- 4. MARKUP BUILDERS ------------------------------ */
  function buildNav() {
    var desktop = '';
    var mobile = '';

    NAV.forEach(function (item) {
      var active = isActive(item) ? ' class="active"' : '';

      if (item.children) {
        desktop += '<li class="has-sub">' +
          '<a href="' + resolve(item.href) + '"' + (isActive(item) ? ' class="active"' : '') + '>' +
          esc(item.label) + '<span class="sub-caret" aria-hidden="true">▾</span></a>' +
          '<ul class="nav-submenu">';
        item.children.forEach(function (child) {
          desktop += '<li><a href="' + resolve(child.href) + '"' +
            (child.href === page ? ' class="active"' : '') + '>' + esc(child.label) + '</a></li>';
        });
        desktop += '</ul></li>';

        mobile += '<a href="' + resolve(item.href) + '">' + esc(item.mobileLabel || item.label) + '</a>';
        item.children.forEach(function (child) {
          mobile += '<a href="' + resolve(child.href) + '" class="mobile-sub">' + esc(child.label) + '</a>';
        });
      } else {
        desktop += '<li><a href="' + resolve(item.href) + '"' + active + '>' + esc(item.label) + '</a></li>';
        mobile += '<a href="' + resolve(item.href) + '">' + esc(item.mobileLabel || item.label) + '</a>';
      }
    });

    // The language button repeats inside the mobile menu, because the
    // one in the top bar is hidden at phone widths.
    mobile += '<button class="lang-toggle lang-toggle-mobile notranslate" type="button" data-lang-toggle>EN | عربي</button>';

    return '' +
      '<div class="nav-wrapper">' +
        '<nav class="nav-top">' +
          '<a href="index.html" class="nav-logo">' +
            '<img src="assets/logo.png" alt="USA Palestine Mental Health Network logo">' +
            '<span class="nav-logo-text">USA Palestine<br>Mental Health Network</span>' +
          '</a>' +
          '<div class="nav-org-name">USA Palestine Mental Health Network</div>' +
          '<div class="nav-top-right">' +
            '<button class="lang-toggle notranslate" type="button" data-lang-toggle>EN | عربي</button>' +
            '<a href="https://givebutter.com/USAPALMHN" target="_blank" rel="noopener" class="btn-join">Donate Now</a>' +
            '<button class="hamburger" type="button" data-menu-toggle aria-label="Menu" aria-expanded="false">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</nav>' +
        '<nav class="nav-bottom"><ul class="nav-links">' + desktop + '</ul></nav>' +
        '<div class="mobile-menu" id="mobileMenu">' + mobile + '</div>' +
      '</div>';
  }

  function buildNewsletter() {
    return '' +
      '<section id="newsletter">' +
        '<h2>Stay Connected with the Network</h2>' +
        '<p>Clinical updates, new resources, and network statements — delivered to your inbox.</p>' +
        '<div class="newsletter-form">' +
          '<input type="email" placeholder="your@email.com" aria-label="Email address" />' +
          '<button type="button">Subscribe</button>' +
        '</div>' +
        '<p class="fine-print">You can unsubscribe anytime. We respect your privacy.</p>' +
      '</section>';
  }

  function buildFooter() {
    var cols = FOOTER_COLUMNS.map(function (col) {
      var links = col.links.map(function (l) {
        return '<a href="' + resolve(l.href) + '">' + esc(l.label) + '</a>';
      }).join('');
      return '<div class="footer-col"><h4>' + esc(col.title) + '</h4>' + links + '</div>';
    }).join('');

    var socials = SOCIALS.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener" class="social-btn" title="' + s.title + '">' + s.label + '</a>';
    }).join('');

    return '' +
      '<footer>' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="footer-logo">' +
              '<div class="footer-logo-mark"><img src="assets/logo.png" alt=""></div>' +
              '<span>USA Palestine<br>Mental Health Network</span>' +
            '</div>' +
            '<p class="footer-tagline">A 100% volunteer-led network of U.S. mental health professionals in solidarity with Palestinian communities since 2016.</p>' +
            '<div class="footer-socials">' + socials + '</div>' +
          '</div>' +
          cols +
        '</div>' +
        '<div class="footer-bar">' +
          '<p>© ' + new Date().getFullYear() + ' USA Palestine Mental Health Network. All rights reserved.</p>' +
          '<div class="footer-bar-links">' +
            '<a href="about.html#contact">Contact</a>' +
            '<a href="donate.html">Donate</a>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* ---------- 5. GOOGLE TRANSLATE (Arabic) --------------------
     The button sets the googtrans cookie and reloads. Google
     reads that cookie on load and translates the page. The
     cookie is site-wide, so Arabic persists as people navigate.
  ------------------------------------------------------------ */
  function isArabicActive() {
    try { return document.cookie.indexOf('googtrans=/en/ar') !== -1; } catch (e) { return false; }
  }

  function toggleArabic() {
    var toArabic = !isArabicActive();
    document.cookie = 'googtrans=' + (toArabic ? '/en/ar' : '/en/en') + '; path=/';
    location.reload();
  }

  // Google's script calls this by name, so it must be global.
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ar',
      autoDisplay: false
    }, 'google_translate_element');
  };

  function loadGoogleTranslate() {
    var host = document.createElement('div');
    host.id = 'google_translate_element';
    host.style.display = 'none';
    host.setAttribute('aria-hidden', 'true');
    document.body.appendChild(host);

    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(s);
  }

  /* ---------- 6. SIDEBAR SCROLL-SPY ---------------------------
     Any <aside data-scrollspy> highlights its own links as the
     matching <section id="..."> scrolls past.
  ------------------------------------------------------------ */
  function initScrollSpy() {
    var sidebar = document.querySelector('[data-scrollspy]');
    if (!sidebar) return;

    var links = sidebar.querySelectorAll('a[href^="#"]');
    var sections = document.querySelectorAll('section[id]');
    if (!links.length || !sections.length) return;

    var ticking = false;
    function update() {
      var current = '';
      Array.prototype.forEach.call(sections, function (s) {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      Array.prototype.forEach.call(links, function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    });
    update();
  }

  /* ---------- 7. BOOT ----------------------------------------- */
  function mount(slot, html) {
    var el = document.querySelector('[data-site="' + slot + '"]');
    if (el) el.outerHTML = html;
  }

  function init() {
    mount('nav', buildNav());
    mount('newsletter', buildNewsletter());
    mount('footer', buildFooter());

    // Mobile menu
    var menu = document.getElementById('mobileMenu');
    document.addEventListener('click', function (e) {
      var burger = e.target.closest('[data-menu-toggle]');
      if (burger && menu) {
        var open = menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        return;
      }
      if (e.target.closest('[data-lang-toggle]')) {
        toggleArabic();
        return;
      }
      // Tapping a link inside the mobile menu closes it.
      if (menu && menu.classList.contains('open') && e.target.closest('#mobileMenu a')) {
        menu.classList.remove('open');
      }
    });

    // Reflect Arabic state on the button + layout direction
    if (isArabicActive()) {
      document.documentElement.setAttribute('dir', 'rtl');
      Array.prototype.forEach.call(document.querySelectorAll('[data-lang-toggle]'), function (b) {
        b.textContent = 'عربي | EN';
      });
    }

    initScrollSpy();
    loadGoogleTranslate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
