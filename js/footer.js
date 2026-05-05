/**
 * GESTIONE FOOTER UNIVERSALE
 */
document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.querySelector('footer');

    if (footerElement) {
        const currentYear = new Date().getFullYear();
        
        const footerHTML = `
            <div class="footer-logo">Matti<span>ace</span></div>
            <p class="footer-copy">&copy; ${currentYear} Pasticceria Mattiace — Toritto, Puglia</p>
        `;

        footerElement.innerHTML = footerHTML;
    }
});