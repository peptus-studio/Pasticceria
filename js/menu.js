/**
 * GESTIONE MENU UNIVERSALE - VERSIONE CORRETTA
 */
const NAV_DATA = [
    { label: "Home", href: "../index.html" },
    { label: "Specialità", href: "../pasticceriamattiace/specialita.html" },
    { label: "Menu", href: "../pasticceriamattiace/menu.html" },
    { label: "Chi Siamo", href: "../index.html#chisiamo" },
    { label: "Contatti", href: "../index.html#contatti" }
];

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    NAV_DATA.forEach((item) => {
        let isCurrentPage = false;
        const cleanHref = item.href.split('/').pop();

        if (cleanHref.includes('#')) {
            const [page, hash] = cleanHref.split('#');
            if (currentPath === page && currentHash === "#" + hash) {
                isCurrentPage = true;
            }
        } else {
            if (cleanHref === "index.html") {
                isCurrentPage = (currentPath === "index.html" && currentHash === "");
            } else {
                isCurrentPage = (currentPath === cleanHref);
            }
        }

        // --- Desktop ---
        if (navLinks) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.label;
            if (isCurrentPage) a.classList.add('active');
            li.appendChild(a);
            navLinks.appendChild(li);
        }

        // --- Mobile ---
        if (mobileMenu) {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.label;
            if (isCurrentPage) a.classList.add('active');
            a.onclick = () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            };
            mobileMenu.appendChild(a);
        }
    });

    if (hamburger) {
        hamburger.onclick = () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            // Blocca lo scroll della pagina quando il menu è aperto
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        };
    }
});

// Gestione dello scroll per la Navbar
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Quando scorri verso il basso
            navbar.classList.add('scrolled');
        } else {
            // Quando sei in cima alla pagina
            navbar.classList.remove('scrolled');
        }
    });
});