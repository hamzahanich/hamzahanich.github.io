/* ============================================================
   HAMZA HANICH — Portfolio Scripts
   Typing animation · Smooth scroll · Theme toggle · Fade-in
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== TYPING ANIMATION ==========
  const typedElement = document.getElementById('typed-text');
  const phrases = [
    'Cloud / DevOps Engineer',
    'CI/CD Pipeline Builder',
    'Container Orchestration',
    'Infrastructure Automation',
    'Linux & Security Enthusiast'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 500;

  function typeEffect() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      typedElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseEnd);
        return;
      }

      setTimeout(typeEffect, typeSpeed);
    } else {
      typedElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, pauseStart);
        return;
      }

      setTimeout(typeEffect, deleteSpeed);
    }
  }

  typeEffect();


  // ========== MOBILE NAV TOGGLE ==========
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = navToggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });


  // ========== THEME TOGGLE (Dark / Light) ==========
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
  }

  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });


  // ========== FADE-IN ON SCROLL (Intersection Observer) ==========
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));


  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });


  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.style.color = 'var(--accent)';
        } else {
          link.style.color = '';
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

});
