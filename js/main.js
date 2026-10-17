/**
 * Main JavaScript
 */

(function() {
  'use strict';

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Close mobile menu
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });

  // Mobile menu
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // Project card click-through
  document.querySelectorAll('.project-card[data-href]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      window.location.href = card.dataset.href;
    });
  });



  // Native scrolling also supports touch, trackpads, and keyboard focus.
  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    const controls = document.querySelector('.carousel-controls');
    const previous = controls.querySelector('.carousel-prev');
    const next = controls.querySelector('.carousel-next');
    const slides = Array.from(carousel.children);
    const position = controls.querySelector('.carousel-position');
    const looping = slides.length > 1;
    // End copies let each boundary animate one slide in the same direction.
    // They are visual only; the real slides retain their links and accessibility.
    if (looping) {
      const copy = slide => {
        const clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.inert = true;
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
        return clone;
      };
      carousel.prepend(copy(slides.at(-1)));
      carousel.append(copy(slides[0]));
    }
    const track = Array.from(carousel.children);
    const positions = () => track.map(slide =>
      slide.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft
      - parseFloat(getComputedStyle(carousel).paddingLeft));
    const nearest = points => points.reduce((active, point, index) =>
      Math.abs(point - carousel.scrollLeft) < Math.abs(points[active] - carousel.scrollLeft)
        ? index : active, 0);
    const updateControls = () => {
      previous.disabled = next.disabled = !looping;
      const active = nearest(positions());
      const logical = looping ? (active - 1 + slides.length) % slides.length : active;
      const label = `${String(logical + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      if (position.textContent !== label) position.textContent = label;
    };
    const settle = () => {
      if (!looping) return;
      const points = positions();
      const active = nearest(points);
      if (Math.abs(points[active] - carousel.scrollLeft) > 2) return;
      const real = active === 0 ? slides.length : active === track.length - 1 ? 1 : active;
      if (real !== active) {
        // Both positions look identical, so this reset is invisible.
        carousel.scrollTo({ left: points[real], behavior: 'instant' });
      }
      updateControls();
    };
    const move = direction => {
      settle();
      const points = positions();
      const target = Math.max(0, Math.min(points.length - 1, nearest(points) + direction));
      carousel.scrollTo({ left: points[target] });
    };
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    carousel.addEventListener('keydown', event => {
      if (event.target !== carousel) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    });
    let settleTimer;
    carousel.addEventListener('scroll', () => {
      updateControls();
      clearTimeout(settleTimer);
      // Fallback for browsers without the scrollend event.
      settleTimer = setTimeout(settle, 160);
    }, { passive: true });
    carousel.addEventListener('scrollend', settle);
    window.addEventListener('resize', updateControls);
    controls.hidden = false;
    // Open on Image Guidance, the second project (after the leading loop copy).
    if (looping) carousel.scrollTo({ left: positions()[2], behavior: 'instant' });
    updateControls();
  }

  // Nav background on scroll (only toggle on pages with a hero section)
  const nav = document.getElementById('nav');
  if (nav && document.querySelector('.hero')) {
    const updateScrollAppearance = () => {
      const nearTop = window.scrollY <= 50;
      nav.classList.toggle('scrolled', !nearTop);
      document.documentElement.classList.toggle('at-top', nearTop);
    };
    updateScrollAppearance();
    window.addEventListener('scroll', updateScrollAppearance, { passive: true });
    window.addEventListener('pageshow', updateScrollAppearance);
  }

})();
