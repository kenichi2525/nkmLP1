// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Once shown, keep it visible
        }
    });
}, {
    threshold: 0.15 // 15% of the element is visible
});

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Subtle Parallax for hero image
window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-img');
    const scroll = window.scrollY;
    heroImg.style.transform = `scale(1.05) translateY(${scroll * 0.1}px)`;
});
