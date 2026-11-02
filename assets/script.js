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
      nav_activities: 'Expérience',
      nav_contact: 'Contact',
      theme_use_dark: 'Activer le thème sombre',
      theme_use_light: 'Activer le thème clair',
      lang_switch_en: 'Passer à l’anglais',
      lang_switch_fr: 'Passer au français',
      hero_hi: 'Bonjour, je suis',
      hero_location: '<i class="fa-solid fa-location-dot"></i> Oujda, Maroc · Mobilité Maroc · Disponible pour un stage PFE',
      hero_cv: '<i class="fa-solid fa-download"></i> Télécharger le CV',
      about_title: 'À propos de moi',
      about_main: "Curieux et motivé par l’envie de construire des systèmes résilients et sécurisés by design.<br>Je me spécialise en DevSecOps, sécurité cloud-native et détection de menaces.<br>Je cherche un stage PFE de 6 mois au Maroc, de février à juillet 2027.",
      about_skills: 'Profil : élève ingénieur en cybersécurité, orienté systèmes résilients, automatisation et sécurité opérationnelle.<br>Formation : ENSAO — Sécurité des Systèmes d’Information et Cybersécurité, 2022–présent.',
      projects_title: 'Projets',
      project1_title: 'Plateforme DevSecOps Cloud-Native & Sécurité Runtime',
      project1_1: 'Pipeline CI/CD GitHub Actions avec scan des vulnérabilités et secrets (Trivy), génération de SBOM (Syft) et signature cryptographique des conteneurs (Cosign).',
      project1_2: 'Politiques Zero Trust avec Kyverno sur k3s : blocage des images non signées, des conteneurs root et verrouillage du système de fichiers en lecture seule.',
      project1_3: 'Détection runtime eBPF avec Cilium Tetragon, observabilité Prometheus/Grafana et isolation automatique des pods suspects via NetworkPolicies.',
      project2_title: 'Détection d’anomalies pour APIs REST par IA',
      project2_1: 'Fine-tuning d’un modèle LLaMA avec QLoRA sur des jeux de données de journaux réseau structurés pour identifier les charges utiles malveillantes et les signatures de fuzzing.',
      project2_2: 'Ingénierie des fonctionnalités de télémétrie HTTP pour améliorer la détection d’anomalies, directement cartographiée sur l’OWASP API Top 10.',
      skills_title: 'Compétences',
      skills_devops: 'Sécurité Cloud-Native & DevSecOps',
      skills_secops: 'Opérations de sécurité (SecOps)',
      skills_monitoring: 'Supervision, MCO & Télémétrie',
      skills_systems: 'Systèmes, Infrastructure & Durcissement',
      skills_appsec: 'Sécurité Applicative & IA',
      skills_scripting: 'Programmation & Automatisation',
      activities_title: 'Expérience & parcours',
      experience_eyebrow: 'Expérience phare',
      experience_role: 'Solution de supervision IT pour les serveurs internes de test et d’intégration',
      experience_dates: 'Juil. 2026 – Août 2026',
      experience_location: 'Rabat, Maroc · Sur site',
      experience_lede: 'Une mission terrain au cœur de la supervision, de la fiabilité et du durcissement d’une infrastructure critique de test.',
      experience_1: 'Conception et déploiement d’une plateforme Prometheus/Grafana couvrant 7 serveurs physiques, avec dashboards temps réel et alerting.',
      experience_2: 'Validation sur 5 scénarios de pannes réelles avant le déploiement sur l’ensemble du parc.',
      experience_3: 'Durcissement TLS, authentification, règles de pare-feu, permissions NTFS et alertes de détection de menaces.',
      experience_4: 'Automatisation du provisionnement avec Terraform : réduction de 45–60 minutes à environ 3 minutes.',
      experience_metric_servers: 'serveurs physiques supervisés',
      experience_metric_failures: 'scénarios de pannes validés',
      experience_metric_terraform: 'provisionnement automatisé avec Terraform',
      activities_education: 'Formation',
      activities_education_details: 'Diplôme d’Ingénieur d’État — Sécurité des Systèmes d’Information et Cybersécurité<br>2022 – Présent · Oujda, Maroc<br>Modules : Cloud Computing, sécurité des services &amp; protocoles, systèmes Unix/Windows, pentesting, audit &amp; risques, forensics, machine learning, cryptographie avancée.',
      activities_certifications: 'Certifications',
      activities_languages: 'Langues',
      contact_title: 'Contact',
      contact_text: 'Je recherche actuellement un <strong>stage PFE de 6 mois au Maroc</strong>, de février à juillet 2027.<br>DevSecOps, sécurité cloud-native, SecOps ou détection de menaces : parlons de votre sujet !',
      contact_email: '<i class="fa-solid fa-envelope"></i> Email',
      contact_github: '<i class="fa-brands fa-github"></i> GitHub',
      contact_linkedin: '<i class="fa-brands fa-linkedin"></i> LinkedIn',
    },
    en: {
      nav_about: 'About',
      nav_projects: 'Projects',
      nav_skills: 'Skills',
      nav_activities: 'Experience',
      nav_contact: 'Contact',
      theme_use_dark: 'Use dark theme',
      theme_use_light: 'Use light theme',
      lang_switch_en: 'Switch to English',
      lang_switch_fr: 'Switch to French',
      hero_hi: "Hi, I'm",
      hero_location: '<i class="fa-solid fa-location-dot"></i> Oujda, Morocco · Available for a PFE internship in Morocco',
      hero_cv: '<i class="fa-solid fa-download"></i> Download CV',
      about_title: 'About Me',
      about_main: "Curious and motivated by building resilient, secure-by-design systems.<br>Focused on DevSecOps, cloud-native security, and threat detection.<br>Looking for a 6-month PFE internship in Morocco from February to July 2027.",
      about_skills: 'Profile: cybersecurity engineering student focused on resilient systems, automation, and security operations.<br>Education: ENSAO — Information Systems Security and Cybersecurity, 2022–present.',
      projects_title: 'Projects',
      project1_title: 'Cloud-Native DevSecOps & Runtime Security Platform',
      project1_1: 'Built a GitHub Actions CI/CD pipeline with vulnerability and secret scanning (Trivy), SBOM generation (Syft), and cryptographic container signing (Cosign).',
      project1_2: 'Applied Zero Trust policies with Kyverno on k3s: block unsigned images and root containers, and enforce read-only filesystems.',
      project1_3: 'Added runtime eBPF detection with Cilium Tetragon, Prometheus/Grafana observability, and automatic isolation of suspicious pods with NetworkPolicies.',
      project2_title: 'AI-Based Anomaly Detection for REST APIs',
      project2_1: 'Fine-tuned a LLaMA model with QLoRA on structured network-log datasets to identify malicious payloads and fuzzing signatures.',
      project2_2: 'Engineered HTTP telemetry features to improve anomaly detection, mapped directly to the OWASP API Top 10.',
      skills_title: 'Skills',
      skills_devops: 'Cloud-Native Security & DevSecOps',
      skills_secops: 'Security Operations (SecOps)',
      skills_monitoring: 'Monitoring, MCO & Telemetry',
      skills_systems: 'Systems, Infrastructure & Hardening',
      skills_appsec: 'Application Security & AI',
      skills_scripting: 'Programming & Automation',
      activities_title: 'Experience & background',
      experience_eyebrow: 'Career highlight',
      experience_role: 'IT monitoring solution for internal test and integration servers',
      experience_dates: 'Jul 2026 – Aug 2026',
      experience_location: 'Rabat, Morocco · On site',
      experience_lede: 'Hands-on work at the intersection of monitoring, reliability, and hardening for a critical test infrastructure.',
      experience_1: 'Designed and deployed a Prometheus/Grafana platform covering 7 physical servers, with real-time dashboards and alerting.',
      experience_2: 'Validated the solution against 5 real failure scenarios before deployment across the fleet.',
      experience_3: 'Hardened TLS, authentication, firewall rules, NTFS permissions, and threat-detection alerts.',
      experience_4: 'Automated server provisioning with Terraform, reducing the process from 45–60 minutes to about 3 minutes.',
      experience_metric_servers: 'physical servers monitored',
      experience_metric_failures: 'failure scenarios validated',
      experience_metric_terraform: 'automated provisioning with Terraform',
      activities_education: 'Education',
      activities_education_details: 'State Engineering Degree — Information Systems Security and Cybersecurity<br>2022 – Present · Oujda, Morocco<br>Modules: Cloud Computing, service & protocol security, Unix/Windows systems, pentesting, risk & audit, forensics, machine learning, advanced cryptography.',
      activities_certifications: 'Certifications',
      activities_languages: 'Languages',
      contact_title: 'Contact',
      contact_text: 'Currently seeking a <strong>6-month PFE internship in Morocco</strong> from February to July 2027.<br>DevSecOps, cloud-native security, SecOps, or threat detection — let’s talk about your project!',
      contact_email: '<i class="fa-solid fa-envelope"></i> Email',
      contact_github: '<i class="fa-brands fa-github"></i> GitHub',
      contact_linkedin: '<i class="fa-brands fa-linkedin"></i> LinkedIn',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'fr';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const themeToggle = document.getElementById('themeToggle');

  function updateLangUI(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });
    document.documentElement.lang = lang;
    langLabel.textContent = lang.toUpperCase();
    langToggle.setAttribute('aria-label', lang === 'fr' ? i18n[lang].lang_switch_en : i18n[lang].lang_switch_fr);
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeToggle.setAttribute('aria-label', activeTheme === 'light' ? i18n[lang].theme_use_dark : i18n[lang].theme_use_light);
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
    'Cybersecurity Engineering Student',
    'DevSecOps & Cloud-Native Security',
    'Security Operations',
    'Threat Detection',
    'Infrastructure Automation'
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

  if (reduceMotion) {
    typedElement.textContent = phrases[0];
  } else {
    typeEffect();
  }


  // ========== MOBILE NAV TOGGLE ==========
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function setNavOpen(isOpen) {
    navLinks.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark', isOpen);
  }

  navToggle.addEventListener('click', () => {
    setNavOpen(!navLinks.classList.contains('open'));
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setNavOpen(false);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setNavOpen(false);
    }
  });


  // ========== THEME TOGGLE (Dark / Light) ==========
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
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    const themeLabel = currentLang === 'fr'
      ? (theme === 'light' ? i18n.fr.theme_use_dark : i18n.fr.theme_use_light)
      : (theme === 'light' ? i18n.en.theme_use_dark : i18n.en.theme_use_light);
    themeToggle.setAttribute('aria-label', themeLabel);
    localStorage.setItem('theme', theme);
  }

  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });


  // ========== FADE-IN ON SCROLL (Intersection Observer) ==========
  const fadeElements = document.querySelectorAll('.fade-in');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    fadeElements.forEach(el => el.classList.add('visible'));
  } else {
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
  }


  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }

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
        const isActive = scrollPos >= top && scrollPos < top + height;
        if (isActive) {
          link.style.color = 'var(--accent)';
        } else {
          link.style.color = '';
        }
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

});
