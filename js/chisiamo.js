document.addEventListener('DOMContentLoaded', () => {
    // ─── EFFETTO REVEAL ALLO SCROLL ───
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // ─── PARALLASSE SOFT SULLE ORBS ───
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.hero-orb');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});