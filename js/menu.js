/**
 * GESTIONE MENU UNIVERSALE - COMPATIBILE CLOUDFLARE (PRETTY URLS)
 */
const NAV_DATA = [
    { label: "Home", href: "../index.html" },
    { label: "Specialità", href: "../pasticceriamattiace/specialita.html" },
    { label: "Menu", href: "../pasticceriamattiace/menu.html" },
    { label: "Chi Siamo", href: "../pasticceriamattiace/chisiamo.html" },
    { label: "Contatti", href: "../pasticceriamattiace/contact.html" }
];

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // 1. Pulizia del path attuale: togliamo .html e gli slash estremi
    // Es: "/pasticceriamattiace/contact.html" diventa "contact"
    let currentPath = window.location.pathname
        .replace(/\.html$/, '') // Toglie .html alla fine
        .split('/')
        .pop() || 'index'; // Prende l'ultima parte o 'index' se vuoto

    if (currentPath === '/') currentPath = 'index';

    NAV_DATA.forEach((item) => {
        // 2. Pulizia dell'href del menu per il confronto
        // Prendiamo solo il nome del file senza estensione
        // Es: "../contact.html" -> "contact"
        let cleanHref = item.href
            .replace(/\.html$/, '')
            .split('/')
            .pop();

        // 3. Controllo corrispondenza
        const isCurrentPage = (currentPath === cleanHref);

        // --- Creazione Link Desktop ---
        if (navLinks) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.label;
            if (isCurrentPage) a.classList.add('active');
            li.appendChild(a);
            navLinks.appendChild(li);
        }

        // --- Creazione Link Mobile ---
        if (mobileMenu) {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.label;
            if (isCurrentPage) a.classList.add('active');
            a.onclick = () => {
                hamburger?.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            };
            mobileMenu.appendChild(a);
        }
    });

    // Gestione Hamburger
    if (hamburger && mobileMenu) {
        hamburger.onclick = () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        };
    }

    // Gestione Scroll Navbar
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});