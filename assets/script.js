/* ============================================================
   HAMZA HANICH — Portfolio Scripts
   Typing animation · Smooth scroll · Theme toggle · Fade-in
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== I18N (French/English) ==========
  const i18n = {
    fr: {
      nav_about: 'À propos',
      nav_projects: 'Projets',
      nav_skills: 'Compétences',
      nav_activities: 'Parcours',
      nav_contact: 'Contact',
      hero_hi: 'Bonjour, je suis',
      hero_location: '<i class="fa-solid fa-location-dot"></i> Oujda, Maroc',
      hero_cv: '<i class="fa-solid fa-download"></i> Télécharger le CV',
      about_title: 'À propos de moi',
      about_main: "Étudiant en 4ᵉ année d’ingénierie en cybersécurité, passionné par la sécurité applicative et l’analyse de vulnérabilités.<br>Je recherche un stage PFA (Été 2026) pour contribuer à des missions concrètes en sécurité et développer mes compétences sur des problématiques réelles.<br>Rigoureux, autonome, et motivé par l’apprentissage continu.",
      about_skills: 'Compétences : DevOps (Docker, CI/CD, Linux), Sécurité AppSec & Réseau (STRIDE, SAST/DAST/SCA, Fuzzing), Scripting (Python, Bash), Analyse de logs, Automatisation.<br>Langues : Français, Anglais, Arabe.',
      projects_title: 'Projets',
      project1_title: "Système Automatisé de Détection d'Anomalies pour APIs REST",
      project1_1: "Extraction et structuration des caractéristiques réseau depuis des logs bruts pour différencier le trafic légitime des attaques complexes.",
      project1_2: "Intégration et fine-tuning d’un modèle IA (LLaMa) via des scripts Python pour automatiser la détection des payloads malveillants (fuzzing) et réduire les faux positifs.",
      project1_3: "Conteneurisation de l’environnement d’analyse et rédaction de documentation technique en anglais pour les tests fonctionnels.",
      project2_title: "Pipeline CI/CD d'Analyse Automatisée de Vulnérabilités",
      project2_1: "Conception d’un pipeline CI/CD avec GitHub Actions pour automatiser les tests de sécurité à chaque validation de code.",
      project2_2: "Intégration d’outils open-source (Trivy, Bandit) via des scripts Shell pour scanner automatiquement les images Docker et le code source.",
      project2_3: "Blocage des déploiements en cas de failles critiques et génération automatique de rapports d’audit.",
      project3_title: "Outil d’Analyse de Sécurité Réseau pour Android",
      project3_1: "Création d’un utilitaire pour extraire automatiquement les fichiers de Configuration de Sécurité Réseau (NSC) à partir d’APKs compilés.",
      project3_2: "Analyse des fichiers NSC extraits pour détecter de potentielles mauvaises configurations exposant les applications à des failles de sécurité réseau.",
      project3_3: "Évaluation de la prévalence de ces vulnérabilités sur un dataset d’applications réelles (APKs marocains et F-Droid) et discussion des résultats.",
      skills_title: 'Compétences',
      skills_appsec: 'Sécurité AppSec & Réseau',
      skills_devops: 'DevOps & Automatisation',
      skills_scripting: 'Scripting & Analyse',
      activities_title: 'Parcours',
      activities_education: 'Formation',
      activities_certifications: 'Certifications',
      activities_languages: 'Langues',
      contact_title: 'Contact',
      contact_text: "Je recherche actuellement un <strong>stage PFA en cybersécurité / sécurité applicative</strong> pour l'été 2026.<br>Pour toute opportunité, question ou échange sur la sécurité, n'hésitez pas à me contacter !",
      contact_email: '<i class="fa-solid fa-envelope"></i> Email',
      contact_github: '<i class="fa-brands fa-github"></i> GitHub',
      contact_linkedin: '<i class="fa-brands fa-linkedin"></i> LinkedIn',
    },
    en: {
      nav_about: 'About',
      nav_projects: 'Projects',
      nav_skills: 'Skills',
      nav_activities: 'Background',
      nav_contact: 'Contact',
      hero_hi: "Hi, I'm",
      hero_location: '<i class="fa-solid fa-location-dot"></i> Oujda, Morocco',
      hero_cv: '<i class="fa-solid fa-download"></i> Download CV',
      about_title: 'About Me',
      about_main: "4th year cybersecurity engineering student, passionate about application security and vulnerability analysis.<br>Looking for a PFA internship (Summer 2026) to contribute to real security missions and develop my skills on real-world challenges.<br>Rigorous, autonomous, and motivated by continuous learning.",
      about_skills: 'Skills: DevOps (Docker, CI/CD, Linux), AppSec & Network Security (STRIDE, SAST/DAST/SCA, Fuzzing), Scripting (Python, Bash), Log analysis, Automation.<br>Languages: French, English, Arabic.',
      projects_title: 'Projects',
      project1_title: 'Automated Anomaly Detection System for REST APIs',
      project1_1: 'Extracted and structured network features from raw logs to distinguish legitimate traffic from complex attacks.',
      project1_2: 'Integrated and fine-tuned an AI model (LLaMa) via Python scripts to automate malicious payload detection (fuzzing) and reduce false positives.',
      project1_3: 'Containerized the analysis environment and wrote technical documentation in English for functional tests.',
      project2_title: 'Automated Vulnerability Analysis CI/CD Pipeline',
      project2_1: 'Designed a CI/CD pipeline with GitHub Actions to automate security tests on every code commit.',
      project2_2: 'Integrated open-source tools (Trivy, Bandit) via Shell scripts to automatically scan Docker images and source code.',
      project2_3: 'Configured the pipeline to block deployments on critical vulnerabilities and automatically generate audit reports.',
      project3_title: 'Network Security Analysis Tool for Android',
      project3_1: 'Created a utility to automatically extract Network Security Configuration (NSC) files from compiled APKs.',
      project3_2: 'Analyzed extracted NSC files to detect potential misconfigurations exposing apps to network security flaws.',
      project3_3: 'Ran the analysis script on a targeted dataset (Moroccan and F-Droid APKs) to assess real-world vulnerability prevalence and discussed results.',
      skills_title: 'Skills',
      skills_appsec: 'AppSec & Network Security',
      skills_devops: 'DevOps & Automation',
      skills_scripting: 'Scripting & Analysis',
      activities_title: 'Background',
      activities_education: 'Education',
      activities_certifications: 'Certifications',
      activities_languages: 'Languages',
      contact_title: 'Contact',
      contact_text: "Currently seeking a <strong>PFA internship in cybersecurity / application security</strong> for Summer 2026.<br>For any opportunity, question, or discussion about security, feel free to contact me!",
      contact_email: '<i class="fa-solid fa-envelope"></i> Email',
      contact_github: '<i class="fa-brands fa-github"></i> GitHub',
      contact_linkedin: '<i class="fa-brands fa-linkedin"></i> LinkedIn',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'fr';
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function updateLangUI(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.classList.contains('btn') || el.classList.contains('section-title')) {
          el.innerHTML = i18n[lang][key];
        } else {
          el.innerHTML = i18n[lang][key];
        }
      }
    });
    langLabel.textContent = lang.toUpperCase();
    localStorage.setItem('lang', lang);
  }

  if (langToggle && langLabel) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      updateLangUI(currentLang);
    });
    updateLangUI(currentLang);
  }

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
