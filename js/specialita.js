/**
 * DATI DELLE REALIZZAZIONI (SPECIALITÀ)
 * Logica di animazione coerente con la Home
 */
const CREAZIONI = [
    { icon: "💍", cat: "Eventi", title: "Wedding Cake", desc: "Torte monumentali sartoriali per il giorno più bello." },
    { icon: "🍫", cat: "Artigianale", title: "Pralineria d'Oro", desc: "Selezione di cioccolato pregiato con ripieno alla mandorla di Toritto." },
    { icon: "🍓", cat: "Autore", title: "Mousse ai Frutti", desc: "Leggerezza e freschezza in una creazione moderna e raffinata." },
    { icon: "🥐", cat: "Tradizione", title: "Lievitati Premium", desc: "Il profumo del burro di Normandia e lievito madre vivo." },
    { icon: "🎨", cat: "Design", title: "Torte Moderne", desc: "Geometrie perfette e glasse a specchio dal gusto contemporaneo." },
    { icon: "☕", cat: "Specialty", title: "Mignon de Luxe", desc: "Piccola pasticceria pensata per i palati più esigenti." }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('specialita-grid');
    if (!grid) return;

    // 1. Generazione delle Card
    CREAZIONI.forEach((item, index) => {
        const div = document.createElement('div');
        
        // Aggiungiamo 'reveal' per l'animazione e una classe di delay dinamica
        div.className = `spec-item reveal`;
        
        // Calcoliamo il delay in base alla posizione (0.1s, 0.2s, etc.)
        div.style.transitionDelay = `${(index % 3) * 0.15}s`; 
        
        div.innerHTML = `
            <span class="spec-item-icon">${item.icon}</span>
            <span class="spec-item-cat">${item.cat}</span>
            <h3 class="spec-item-title">${item.title}</h3>
            <p class="spec-item-desc">${item.desc}</p>
        `;
        
        grid.appendChild(div);
    });

    // 2. Logica di Reveal (Intersection Observer)
    // Identica a quella della Home per coerenza visiva
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Una volta visibile, smettiamo di osservare l'elemento
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // L'elemento deve essere visibile al 15% prima di scattare
        rootMargin: '0px 0px -50px 0px' // Fa scattare l'animazione leggermente prima che entri nel viewport
    });

    // Applichiamo l'osservatore a tutte le card appena create
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});