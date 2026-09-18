/* ============================================================
   updates.html — renders js/data/updates.js
   Sorting, month grouping and filtering are automatic.
   To publish an update, edit js/data/updates.js only.
   ============================================================ */

(function () {
  'use strict';

  var items = (window.UPDATES || []).slice();
  var mount = document.getElementById('updates-mount');
  var counts = document.getElementById('filter-counts');
  if (!mount) return;

  var LABELS = {
    event: 'Event',
    campaign: 'Campaign',
    program: 'Programme',
    network: 'Partner Network'
  };

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  function parse(d) {
    var p = String(d).split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function dayLabel(it) {
    var d = parse(it.date);
    if (it.dateEnd) {
      var e = parse(it.dateEnd);
      if (e.getMonth() === d.getMonth()) {
        return MONTHS[d.getMonth()] + ' ' + d.getDate() + '–' + e.getDate();
      }
      return MONTHS[d.getMonth()] + ' ' + d.getDate() + ' – ' +
             MONTHS[e.getMonth()] + ' ' + e.getDate();
    }
    return MONTHS[d.getMonth()] + ' ' + d.getDate();
  }

  function card(it) {
    var d = parse(it.date);
    var meta = [];
    if (it.host)  meta.push(esc(it.host));
    if (it.when)  meta.push(esc(it.when));
    if (it.where) meta.push(esc(it.where));

    var link = '';
    if (it.link) {
      var external = /^https?:|^mailto:/.test(it.link);
      link = '<a class="upd-link" href="' + esc(it.link) + '"' +
             (external ? ' target="_blank" rel="noopener"' : '') + '>' +
             esc(it.linkLabel || 'Learn more') + ' →</a>';
    }

    return '' +
      '<article class="upd-card" data-category="' + esc(it.category) + '">' +
        '<div class="upd-date" aria-hidden="true">' +
          '<span class="upd-mon">' + MONTHS[d.getMonth()].slice(0, 3) + '</span>' +
          '<span class="upd-day">' + d.getDate() + '</span>' +
        '</div>' +
        '<div class="upd-body">' +
          '<span class="upd-tag upd-' + esc(it.category) + '">' +
            esc(LABELS[it.category] || it.category) +
          '</span>' +
          '<h3>' + esc(it.title) + '</h3>' +
          (meta.length ? '<div class="upd-meta">' + meta.join(' <span>·</span> ') + '</div>' : '') +
          (it.body ? '<p>' + esc(it.body) + '</p>' : '') +
          link +
        '</div>' +
      '</article>';
  }

  function group(list) {
    var out = [], key = null, bucket = [];
    list.forEach(function (it) {
      var d = parse(it.date);
      var k = d.getFullYear() + '-' + d.getMonth();
      if (k !== key) {
        if (bucket.length) out.push({ key: key, items: bucket });
        key = k; bucket = [];
      }
      bucket.push(it);
    });
    if (bucket.length) out.push({ key: key, items: bucket });
    return out;
  }

  function monthHeading(key) {
    var p = key.split('-');
    return MONTHS[+p[1]] + ' ' + p[0];
  }

  function render() {
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var ongoing = items.filter(function (i) { return i.ongoing; });
    var dated = items.filter(function (i) { return !i.ongoing; })
      .sort(function (a, b) { return parse(b.date) - parse(a.date); });

    var upcoming = dated.filter(function (i) {
      return parse(i.dateEnd || i.date) >= today;
    }).sort(function (a, b) { return parse(a.date) - parse(b.date); });

    var past = dated.filter(function (i) {
      return parse(i.dateEnd || i.date) < today;
    });

    var html = '';

    html += '<section class="upd-section"><h2 class="upd-h2">Upcoming</h2>';
    html += upcoming.length
      ? '<div class="upd-list">' + upcoming.map(card).join('') + '</div>'
      : '<p class="upd-empty">Nothing on the calendar right now. ' +
        '<a href="get-involved.html#join">Join the network</a> to hear about the next one first.</p>';
    html += '</section>';

    if (ongoing.length) {
      html += '<section class="upd-section"><h2 class="upd-h2">Ongoing campaigns &amp; programmes</h2>' +
              '<div class="upd-list">' + ongoing.map(function (it) {
                return card(it).replace(
                  /<div class="upd-date"[\s\S]*?<\/div>/,
                  '<div class="upd-date upd-date-ongoing" aria-hidden="true"><span class="upd-mon">Now</span></div>');
              }).join('') + '</div></section>';
    }

    if (past.length) {
      html += '<section class="upd-section"><h2 class="upd-h2">Archive</h2>';
      group(past).forEach(function (g) {
        html += '<h3 class="upd-month">' + monthHeading(g.key) + '</h3>' +
                '<div class="upd-list">' + g.items.map(card).join('') + '</div>';
      });
      html += '</section>';
    }

    mount.innerHTML = html;

    if (counts) {
      counts.textContent = dated.length + ' entries · ' + ongoing.length + ' ongoing';
    }
  }

  function filter(cat) {
    var shown = 0;
    Array.prototype.forEach.call(mount.querySelectorAll('.upd-card'), function (c) {
      var match = cat === 'all' || c.getAttribute('data-category') === cat;
      c.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    // hide a month heading or section whose cards are all filtered out
    Array.prototype.forEach.call(mount.querySelectorAll('.upd-list'), function (list) {
      var any = list.querySelector('.upd-card:not([style*="display: none"])');
      list.style.display = any ? '' : 'none';
      var head = list.previousElementSibling;
      if (head && head.classList.contains('upd-month')) head.style.display = any ? '' : 'none';
    });
    Array.prototype.forEach.call(mount.querySelectorAll('.upd-section'), function (sec) {
      var any = sec.querySelector('.upd-card:not([style*="display: none"])');
      var empty = sec.querySelector('.upd-empty');
      sec.style.display = (any || (empty && cat === 'all')) ? '' : 'none';
    });
    return shown;
  }

  render();

  var bar = document.querySelector('.upd-filters');
  if (bar) {
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      Array.prototype.forEach.call(bar.querySelectorAll('button'), function (b) {
        b.classList.toggle('active', b === btn);
      });
      filter(btn.getAttribute('data-filter'));
    });
  }
})();
