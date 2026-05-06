
        // Semplice effetto reveal al caricamento
        window.addEventListener('load', () => {
            document.querySelector('.reveal').style.opacity = '1';
            document.querySelector('.reveal').style.transform = 'translateY(0)';
        });

        document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pasticceria-form');
    
    // Inserisci qui il tuo numero di telefono (con prefisso internazionale, senza +)
    // Esempio per Italia: 393471234567
    const whatsappNumber = "393498759019"; 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Recupero i dati dal form
        const nome = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const oggetto = form.querySelector('select').value;
        const messaggio = form.querySelector('textarea').value;

        // Costruisco il testo del messaggio (usando i codici per andare a capo: %0A)
        let testoWhatsApp = `*Richiesta digitale:*%0A%0A`;
        testoWhatsApp += `*👤 Nome:* ${nome}%0A`;
        testoWhatsApp += `*📧 Email:* ${email}%0A`;
        testoWhatsApp += `*📌 Oggetto:* ${oggetto}%0A`;
        testoWhatsApp += `*💬 Messaggio:* ${messaggio}`;

        // Creo l'URL finale per WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${testoWhatsApp}`;

        // Apro WhatsApp in una nuova scheda
        window.open(url, '_blank').focus();
        
        // Opzionale: reset del form dopo l'invio
        form.reset();
    });
});