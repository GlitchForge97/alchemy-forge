const defaultConfig = {
background_color: '#080808',
surface_color: '#1a1a1a',
text_color: '#e8e8e8',
accent_color: '#00ff88',
secondary_accent: '#00ccff',
hero_title: 'Building Systems\nThat Think & Feel',
hero_subtitle: 'Independent student developer crafting interactive web experiences where logic meets design, and code serves purpose.',
hero_tagline: 'Sharek Jabir · Student Developer from Dhaka, focused on problem-solving, clean architecture, and human-centered digital systems.',
services_title: 'Focus Areas',
services_subtitle: 'Where code meets interaction, and systems are built to feel intentional, responsive, and human.',
process_title: 'My Process',
about_title: 'Independent Builder',
about_intro: 'I\'m Sharek Jabir, a student developer from Dhaka who builds under the name GlitchForge. This isn\'t about copying trends or stacking frameworks—it\'s about understanding how systems think, respond, and feel.',
contact_title: 'Start a Conversation',
contact_subtitle: 'Have a project idea or just want to connect? Let\'s talk about building something meaningful together.',
font_family: 'Inter, -apple-system, BlinkMacSystemFont'
};

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
navToggle.addEventListener('click', () => {
navToggle.classList.toggle('active');
navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
});
});

document.addEventListener('click', (e) => {
if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
}
});
}

function checkDeviceAndShowBanner() {
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768 && window.innerWidth <= 1024;
const banner = document.getElementById('desktopBanner');
const dismissed = localStorage.getItem('desktopBannerDismissed');

if ((isMobile || isTablet) && !dismissed && banner) {
banner.classList.add('visible');
}
}

function enableDesktopMode() {
const metaViewport = document.querySelector('meta[name="viewport"]');
if (metaViewport) {
metaViewport.setAttribute('content', 'width=1200');
}
localStorage.setItem('desktopBannerDismissed', 'true');
document.getElementById('desktopBanner').classList.remove('visible');
}

function dismissBanner() {
localStorage.setItem('desktopBannerDismissed', 'true');
document.getElementById('desktopBanner').classList.remove('visible');
}

window.enableDesktopMode = enableDesktopMode;
window.dismissBanner = dismissBanner;

checkDeviceAndShowBanner();

async function onConfigChange(config) {
const bgColor = config.background_color || defaultConfig.background_color;
const textColor = config.text_color || defaultConfig.text_color;
const accentColor = config.accent_color || defaultConfig.accent_color;
const fontFamily = config.font_family || defaultConfig.font_family;

document.body.style.background = bgColor;
document.body.style.color = textColor;
document.body.style.fontFamily = `${fontFamily}, sans-serif`;

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
heroTitle.innerHTML = (config.hero_title || defaultConfig.hero_title).replace(/\n/g, '<br>');
}

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
}

const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline) {
heroTagline.textContent = config.hero_tagline || defaultConfig.hero_tagline;
}

const servicesTitle = document.querySelector('#services .section-title');
if (servicesTitle) {
servicesTitle.textContent = config.services_title || defaultConfig.services_title;
}

const servicesSubtitle = document.querySelector('#services .section-subtitle');
if (servicesSubtitle) {
servicesSubtitle.textContent = config.services_subtitle || defaultConfig.services_subtitle;
}

const processTitle = document.querySelector('#process .section-title');
if (processTitle) {
processTitle.textContent = config.process_title || defaultConfig.process_title;
}

const aboutTitle = document.querySelector('#about .section-title');
if (aboutTitle) {
aboutTitle.textContent = config.about_title || defaultConfig.about_title;
}

const aboutIntro = document.querySelector('.about-text p:first-child');
if (aboutIntro) {
const strongTag = aboutIntro.querySelector('strong');
const strongText = strongTag ? strongTag.textContent : 'Md Sharek Abdullah Al Zabir';
aboutIntro.innerHTML = (config.about_intro || defaultConfig.about_intro).replace('Md Sharek Abdullah Al Zabir', `<strong>${strongText}</strong>`);
}

const contactTitle = document.querySelector('#contact .section-title');
if (contactTitle) {
contactTitle.textContent = config.contact_title || defaultConfig.contact_title;
}

const contactSubtitle = document.querySelector('#contact .section-subtitle');
if (contactSubtitle) {
contactSubtitle.textContent = config.contact_subtitle || defaultConfig.contact_subtitle;
}

const heroCta = document.querySelector('.hero-cta');
if (heroCta) {
heroCta.style.background = `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`;
}

document.querySelectorAll('.section-eyebrow').forEach(el => {
el.style.color = accentColor;
});

document.querySelectorAll('.outcome-tag').forEach(el => {
el.style.color = accentColor;
el.style.borderColor = `${accentColor}33`;
el.style.background = `${accentColor}1a`;
});
}

if (window.elementSdk) {
window.elementSdk.init({
defaultConfig,
onConfigChange,
mapToCapabilities: (config) => ({
    recolorables: [
    {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
        config.background_color = value;
        window.elementSdk.setConfig({ background_color: value });
        }
    },
    {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
        config.surface_color = value;
        window.elementSdk.setConfig({ surface_color: value });
        }
    },
    {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
        config.text_color = value;
        window.elementSdk.setConfig({ text_color: value });
        }
    },
    {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
        config.accent_color = value;
        window.elementSdk.setConfig({ accent_color: value });
        }
    },
    {
        get: () => config.secondary_accent || defaultConfig.secondary_accent,
        set: (value) => {
        config.secondary_accent = value;
        window.elementSdk.setConfig({ secondary_accent: value });
        }
    }
    ],
    borderables: [],
    fontEditable: {
    get: () => config.font_family || defaultConfig.font_family,
    set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
    }
    },
    fontSizeable: undefined
}),
mapToEditPanelValues: (config) => new Map([
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
    ['services_title', config.services_title || defaultConfig.services_title],
    ['services_subtitle', config.services_subtitle || defaultConfig.services_subtitle],
    ['process_title', config.process_title || defaultConfig.process_title],
    ['about_title', config.about_title || defaultConfig.about_title],
    ['about_intro', config.about_intro || defaultConfig.about_intro],
    ['contact_title', config.contact_title || defaultConfig.contact_title],
    ['contact_subtitle', config.contact_subtitle || defaultConfig.contact_subtitle]
])
});
}

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';

setTimeout(() => {
cursorFollower.style.left = e.clientX + 'px';
cursorFollower.style.top = e.clientY + 'px';
}, 50);
});

// Cursor interactions
document.querySelectorAll('a, button, .service-card, .project-card, .tech-item').forEach(el => {
el.addEventListener('mouseenter', () => {
cursor.style.transform = 'scale(2)';
cursor.style.opacity = '0.5';
});
el.addEventListener('mouseleave', () => {
cursor.style.transform = 'scale(1)';
cursor.style.opacity = '1';
});
});

// Service card mouse tracking
document.querySelectorAll('.service-card').forEach(card => {
card.addEventListener('mousemove', (e) => {
const rect = card.getBoundingClientRect();
const x = ((e.clientX - rect.left) / rect.width) * 100;
const y = ((e.clientY - rect.top) / rect.height) * 100;
card.style.setProperty('--mouse-x', x + '%');
card.style.setProperty('--mouse-y', y + '%');
});
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});

// Scroll reveal
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('active');
}
});
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;

if (currentScroll > 100) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}

lastScroll = currentScroll;
});

// Contact form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const btn = contactForm.querySelector('.submit-btn');
const originalText = btn.textContent;

btn.textContent = 'Sending...';
btn.style.opacity = '0.7';

setTimeout(() => {
btn.textContent = '✓ Message Sent!';
btn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00ccaa 100%)';

setTimeout(() => {
    btn.textContent = originalText;
    btn.style.opacity = '1';
    contactForm.reset();
}, 3000);
}, 1500);
});
