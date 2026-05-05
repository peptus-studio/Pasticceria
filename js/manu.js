// js/manu.js

// 1. Inizializzazione Client Supabase
const _supabase = supabase.createClient(supabaseConfig.URL, supabaseConfig.KEY);
const tableName = "menu";

/**
 * Funzione principale: recupera i dati dal database
 * Ordinati per la colonna 'ordine' che abbiamo creato
 */
async function caricaSpecialita() {
    const { data, error } = await _supabase
        .from(tableName)
        .select('*')
        .order('ordine', { ascending: true });

    if (error) {
        console.error("Errore caricamento dati:", error.message);
        return;
    }

    renderizzaSpecialita(data);
}

/**
 * Genera l'HTML dinamico per la griglia pubblica
 */
function renderizzaSpecialita(items) {
    const grid = document.getElementById('specialita-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Svuota la griglia prima di riempirla

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'specialita-card';
        
        // Gestione immagine: se manca, usiamo un placeholder
        const imgUrl = item.immagine || 'img/placeholder.jpg';
        
        // Pulizia descrizione: se è null o undefined, mettiamo stringa vuota
        const descrizione = item.descrizione && item.descrizione !== 'null' ? item.descrizione : '';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-image-container">
                    <img src="${imgUrl}" alt="${item.nome}" class="card-img">
                </div>
                <div class="card-content">
                    <p class="card-category">${item.categoria}</p>
                    <h3 class="card-title">${item.nome}</h3>
                    <div class="card-divider"></div>
                    <p class="card-desc">${descrizione}</p>
                    <p class="card-price">${item.prezzo}${isNaN(item.prezzo) ? '' : '€'}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * Configurazione Realtime:
 * Permette al sito di aggiornarsi da solo se modifichi qualcosa dalla dashboard
 * senza che l'utente debba ricaricare la pagina.
 */
const inizializzaRealtime = () => {
    _supabase
        .channel('cambiamenti-menu')
        .on('postgres_changes', 
            { 
                event: '*', 
                schema: 'public', 
                table: tableName 
            }, 
            (payload) => {
                console.log('Sincronizzazione Realtime in corso...');
                caricaSpecialita(); 
            }
        )
        .subscribe();
};

// Avvio automatico al caricamento del browser
document.addEventListener('DOMContentLoaded', () => {
    caricaSpecialita();
    inizializzaRealtime();
});