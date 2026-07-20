// Header scroll effect (for scrolled style if needed)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Floating Line Popup (B-2) Scroll Trigger (Scrolled > 50%) & Dismiss
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('linePopup');
    const closeBtn = document.getElementById('closePopupBtn');
    let isClosed = false;

    if (closeBtn && popup) {
        closeBtn.addEventListener('click', () => {
            isClosed = true;
            popup.classList.remove('visible');
            popup.classList.add('closed');
        });
    }

    const checkScrollPercentage = () => {
        if (isClosed || !popup) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (scrollHeight <= 0) return;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollPercentage >= 50) {
            popup.classList.add('visible');
        } else {
            popup.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', checkScrollPercentage);
    checkScrollPercentage(); // Initial check
});
