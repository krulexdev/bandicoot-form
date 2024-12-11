/*===== MENU TOGGLE =====*/ 

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

// Initialize menu toggle
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU ON MOBILE ====================*/

const navLinks = document.querySelectorAll('.nav__link');

const closeMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};

// Add event listener to each nav link to close menu on mobile
navLinks.forEach(link => link.addEventListener('click', closeMenu));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

const highlightActiveSection = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

// Add scroll event to highlight active link
window.addEventListener('scroll', highlightActiveSection);

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true, // Uncomment if you want the animation to trigger each time the section comes into view
});

// Apply ScrollReveal for specific elements
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text');
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .showcase__img, .contact__input', { interval: 200 });