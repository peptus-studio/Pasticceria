/* ─── INDEX.JS: LOGICA SPECIFICA PER LA HOME ─── */

(function () {
    // Dati specifici per la Home (Contenuti sezioni)
    const HOME_DATA = {
        hero: {
            subtitle: "Ogni creazione racconta una storia di passione, tradizione e sapori autentici di Toritto."
        },
        categories: [
            {
                id: "torte", icon: "🎂", title: "Torte d’Autore", desc: "Capolavori di pasticceria su ordinazione",
                items: [
                    { name: "Torta Mattiace", price: "€45", desc: "Crema di ricotta siciliana, pistacchio di Bronte, fiori di arancio", badge: "Signature" },
                    { name: "Opera al Cioccolato", price: "€38", desc: "Ganache fondente 70%, dacquoise alle mandorle, glassa a specchio", badge: null },
                    { name: "Millefoglie della Nonna", price: "€32", desc: "Sfoglia croccante, crema pasticcera alla vaniglia Bourbon, fragoline", badge: "Classico" },
                    { name: "Saint-Honoré Moderno", price: "€42", desc: "Choux caramellati, crema chiboust, caramello salato della Bretagna", badge: null }
                ]
            },
            {
                id: "pasticcini", icon: "🍮", title: "Pasticcini", desc: "Piccoli capolavori da assaporare",
                items: [
                    { name: "Cannolo Siciliano", price: "€3.50", desc: "Cialda fritta, ricotta freschissima, gocce di cioccolato, scorza d’arancia", badge: "Best Seller" },
                    { name: "Sfogliatella Riccia", price: "€3.00", desc: "Pasta sfogliata croccante, crema di semolino e ricotta profumata", badge: null },
                    { name: "Macaron Mattiace", price: "€2.80", desc: "Guscio di meringa francese, ganache ai gusti stagionali", badge: null },
                    { name: "Cassatina Siciliana", price: "€4.20", desc: "Pan di Spagna, pasta reale, ricotta, frutta candita, glassa reale", badge: "Tradizione" }
                ]
            },
            {
                id: "gelati", icon: "🍦", title: "Gelati Artigianali", desc: "Mantecati freschi ogni mattina",
                items: [
                    { name: "Granita di Mandorla", price: "€4.00", desc: "Mandorle di Avola, acqua di fiori d’arancio, granella tostata", badge: "Stagionale" },
                    { name: "Semifreddo al Torroncino", price: "€5.50", desc: "Crema inglese, torroncino sbriciolato, cioccolato bianco", badge: null },
                    { name: "Gelato di Bronte", price: "€4.50", desc: "Pistacchio DOP, latte fresco siciliano, nessun colorante", badge: "Premium" },
                    { name: "Sorbetto al Limone", price: "€3.80", desc: "Limoni di Siracusa IGP, menta fresca, scorza candita", badge: null }
                ]
            },
            {
                id: "caffe", icon: "☕", title: "Caffetteria", desc: "Il rituale del buon caffè",
                items: [
                    { name: "Espresso Mattiace", price: "€1.50", desc: "Miscela esclusiva di arabica etiope e brasiliana, tostatura media", badge: "House Blend" },
                    { name: "Cappuccino Artigianale", price: "€2.50", desc: "Latte intero montato a mano, art latte con decorazione floreale", badge: null },
                    { name: "Cioccolata Calda Densa", price: "€3.80", desc: "Cacao criollo del Venezuela, latte fresco, spezie d’oriente", badge: "Invernale" },
                    { name: "Granita col Briosco", price: "€4.50", desc: "Granita di stagione e briosca col tuppo calda e soffice", badge: "Siciliano" }
                ]
            }
        ],
        about: {
            story: "Dal 1987, la famiglia Mattiace porta avanti un’arte antica con anima moderna. Ogni dolce nasce dalle mani del Maestro Pasticciere Giuseppe Mattiace, che ha saputo trasformare la tradizione in eccellenza innovativa.",
            values: ["Ingredienti a km0", "Ricette tradizionali", "Nessun conservante", "Passione autentica"]
        },
        contact: {
            address: "Via Giuseppe Alberto Pugliese, 314 — Toritto, Puglia",
            phone: "+39 349 875 9019",
            email: "mattiacepasticceria@gmail.com",
            hours: "Lun–Sab 7:30–20:00 · Dom 8:00–13:00"
        }
    };

    /* ── CURSOR ── */
    var cur = document.getElementById('cursor');
    var ring = document.getElementById('cursor-ring');
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
    (function tick() {
        cur.style.left = (mx - 6) + 'px';
        cur.style.top = (my - 6) + 'px';
        rx += (mx - rx) * 0.14;
        ry += (my - ry) * 0.14;
        ring.style.left = (rx - 18) + 'px';
        ring.style.top = (ry - 18) + 'px';
        requestAnimationFrame(tick);
    })();

    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('a,button,.tab-btn,.menu-card,.spec-card,.contatti-card')) cur.classList.add('big');
    });
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('a,button,.tab-btn,.menu-card,.spec-card,.contatti-card')) cur.classList.remove('big');
    });

    /* ── PARTICLES ── */
    var SHAPES = ['🌸','✨','🍫','🌺','⭐','🍰','🌹','💫','🎀','🍊'];
    var pBox = document.getElementById('particles');
    function spawnP() {
        var p = document.createElement('span');
        var s = 13 + Math.random() * 13;
        p.textContent = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        p.style.cssText = 'position:absolute;left:' + (Math.random()*100) + 'vw;bottom:-30px;font-size:' + s + 'px;animation:floatUp ' + (7+Math.random()*8) + 's linear forwards;pointer-events:none;';
        pBox.appendChild(p);
        setTimeout(function() { p.remove(); }, 17000);
    }
    setInterval(spawnP, 1300);

    /* ── HERO SUBTITLE ── */
    const heroSub = document.getElementById('hero-sub');
    if(heroSub) heroSub.textContent = HOME_DATA.hero.subtitle;

    /* ── SPECIALITÀ (GRID) ── */
    var sg = document.getElementById('spec-grid');
    if(sg) {
        HOME_DATA.categories.forEach(function(cat, i) {
            var card = document.createElement('div');
            card.className = 'spec-card reveal reveal-d' + (i + 1);
            card.innerHTML = '<span class="spec-icon">' + cat.icon + '</span><h3 class="spec-title">' + cat.title + '</h3><p class="spec-desc">' + cat.desc + '</p>';
            sg.appendChild(card);
        });
    }

    /* ── MENU TABS & PANELS ── */
    var tabsEl = document.getElementById('menu-tabs');
    var panelsEl = document.getElementById('menu-panels');
    if(tabsEl && panelsEl) {
        HOME_DATA.categories.forEach(function(cat, i) {
            var btn = document.createElement('button');
            btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
            btn.dataset.tab = cat.id;
            btn.textContent = cat.icon + ' ' + cat.title;
            tabsEl.appendChild(btn);

            var panel = document.createElement('div');
            panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
            panel.id = 'panel-' + cat.id;
            cat.items.forEach(function(item, j) {
                var card = document.createElement('div');
                card.className = 'menu-card';
                card.style.animationDelay = (j * 0.08) + 's';
                card.innerHTML =
                    '<div class="menu-card-top"><div class="menu-card-name">' + item.name + '</div><div class="menu-card-price">' + item.price + '</div></div>' +
                    '<p class="menu-card-desc">' + item.desc + '</p>' +
                    (item.badge ? '<span class="menu-badge">' + item.badge + '</span>' : '');
                panel.appendChild(card);
            });
            panelsEl.appendChild(panel);
        });

        tabsEl.addEventListener('click', function(e) {
            var btn = e.target.closest('.tab-btn');
            if (!btn) return;
            document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
            document.querySelectorAll('.menu-panel').forEach(function(p){ p.classList.remove('active'); });
            btn.classList.add('active');
            var p = document.getElementById('panel-' + btn.dataset.tab);
            if (p) p.classList.add('active');
        });
    }

    /* ── ABOUT ── */
    const aboutS = document.getElementById('about-story');
    if(aboutS) aboutS.textContent = HOME_DATA.about.story;
    
    var vEl = document.getElementById('about-values');
    if(vEl) {
        HOME_DATA.about.values.forEach(function(v) {
            var t = document.createElement('span');
            t.className = 'value-tag'; t.textContent = v;
            vEl.appendChild(t);
        });
    }

    /* ── CONTATTI ── */
    var cgEl = document.getElementById('contatti-grid');
    if(cgEl) {
        var cData = [
            { 
                icon: '📍', label: 'Indirizzo', value: HOME_DATA.contact.address, 
                onclick: function() { window.open('https://www.google.com/maps/search/?api=1&query=Mattiace+Toritto'); } 
            },
            { icon: '📞', label: 'Telefono', value: HOME_DATA.contact.phone },
            { icon: '✉️', label: 'Email', value: HOME_DATA.contact.email },
            { icon: '🕒', label: 'Orari', value: HOME_DATA.contact.hours }
        ];

        cData.forEach(function(c, i) {
            var card = document.createElement('div');
            card.className = 'contatti-card reveal reveal-d' + (i + 1);
            card.innerHTML = '<div class="contatti-card-icon">' + c.icon + '</div><div class="contatti-card-label">' + c.label + '</div><div class="contatti-card-value">' + c.value + '</div>';
            if (c.onclick) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', c.onclick);
            }
            cgEl.appendChild(card);
        });
    }

    /* ── REVEAL ON SCROLL ── */
    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });

    /* ── SMOOTH SCROLL ── */
    document.addEventListener('click', function(e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a || a.hash === "") return;
        e.preventDefault();
        var t = document.querySelector(a.hash);
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });

})();