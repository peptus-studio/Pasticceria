// js/manu.js

// Usa l'oggetto che hai creato in supabase_access.js
const _supabase = supabase.createClient(supabaseConfig.URL, supabaseConfig.KEY);

const tableName = "pasticceria mattiace";

// Funzione principale per caricare le specialità
async function caricaSpecialita() {
    const { data, error } = await _supabase
        .from(tableName)
        .select('*')
        .order('ordine', { ascending: true });

    if (error) {
        console.error("Errore caricamento dati:", error);
        return;
    }

    renderizzaSpecialita(data);
}

// Funzione per creare il codice HTML dinamico
function renderizzaSpecialita(items) {
    const grid = document.getElementById('specialita-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Pulisce la griglia

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'specialita-card';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-content">
                    <p class="card-category">${item.categoria}</p>
                    <h3 class="card-title">${item.nome}</h3>
                    <div class="card-divider"></div>
                    <p class="card-desc">${item.descrizione || ''}</p>
                    <p class="card-price">${item.prezzo}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Configurazione Realtime
// Configurazione Realtime corretta
const inizializzaRealtime = () => {
    _supabase
        .channel('cambiamenti-menu') // Crea il canale (puoi chiamarlo come vuoi)
        .on('postgres_changes', 
            { 
                event: '*', 
                schema: 'public', 
                table: tableName 
            }, 
            (payload) => {
                console.log('Update ricevuto via Realtime!', payload);
                caricaSpecialita(); // Ricarica i dati quando cambia qualcosa
            }
        )
        .subscribe();
};

// Avvio al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    caricaSpecialita();
    inizializzaRealtime();
});