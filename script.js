 /*accordian*/
    document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
      h.nextElementSibling.style.maxHeight = null;
    });
    if (!expanded) {
      header.setAttribute('aria-expanded', 'true');
      const content = header.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
/*loader*/
  window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 600);
  });

/*cookies*/
  document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  if (!localStorage.getItem('cookiesAccepted')) {
    banner.classList.remove('hidden');
  }
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.classList.add('hidden');
  });
});

  
/*animations*/
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.1 };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      });
    }, options);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
/*menu toggle*/
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  });