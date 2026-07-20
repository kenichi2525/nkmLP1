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

// Floating Line Popup B-2 Scroll Trigger & Dismiss
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
            popup.style.display = 'none';
        });
    }

    const checkScroll = () => {
        if (isClosed || !popup) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // 300px以上スクロールしたら最前面ポップアップ表示
        if (scrollTop >= 300) {
            popup.classList.add('visible');
        } else {
            popup.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
});
