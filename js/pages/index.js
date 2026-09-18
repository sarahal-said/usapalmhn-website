/* ============================================================
   index.html — homepage-only behaviour
   (hero slider + the animated impact numbers)
   Shared nav, footer and translation live in js/site.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- HERO SLIDER ---------- */
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');

  if (slides.length) {
    var current = 0;
    var timer;

    function show(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      restart();
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 5000);
    }

    // Exposed so inline onclick="goToSlide(n)" in the markup keeps working.
    window.goToSlide = show;
    window.nextSlide = function () { show(current + 1); };

    restart();
  }

  /* ---------- IMPACT COUNT-UP ---------- */
  var numbers = document.querySelectorAll('.impact-number');

  if (numbers.length && 'IntersectionObserver' in window) {
    var countUp = function (el) {
      var target = parseInt(el.dataset.target, 10) || 0;
      var suffix = el.dataset.suffix || '';
      var duration = 1800;
      var start = performance.now();

      function step(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    Array.prototype.forEach.call(numbers, function (el) { observer.observe(el); });
  }
})();
