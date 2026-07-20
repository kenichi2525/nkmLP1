// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}, { passive: true });

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

// Floating Line Popup (B-2) Scroll Trigger & Dismiss
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('linePopup');
    const closeBtn = document.getElementById('closePopupBtn');
    let isClosed = false;

    if (closeBtn && popup) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isClosed = true;
            popup.classList.remove('visible');
            popup.classList.add('closed');
        });
    }

    const checkScroll = () => {
        if (isClosed || !popup) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight
        );

        const scrollableDistance = docHeight - windowHeight;
        const scrollPercentage = scrollableDistance > 0 ? (scrollTop / scrollableDistance) * 100 : 0;

        // 画面高さの40%以上スクロール、またはスクロール率35%以上で確実に表示
        if (scrollPercentage >= 35 || scrollTop >= (windowHeight * 0.4)) {
            popup.classList.add('visible');
        } else {
            popup.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    checkScroll();
});
