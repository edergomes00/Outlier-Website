// ============================================================
// OUTLIER EXPERIENCES — Website Script
// ============================================================

// ---- ICONS ----

const SVG_WHATSAPP = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const SVG_INSTAGRAM = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;

// ---- EVENT DATA ----

const EVENTS = [
  {
    slug: 'village-superbet',
    name: 'Village Superbet',
    venue: 'Jockey Club Brasileiro',
    location: 'Rio de Janeiro',
    date: 'June 3 – July 19, 2026',
    dateSort: '2026-06-03',
    categories: ['destaques', 'copa-2026', 'open-bar'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_a0c093fe6b8f41099698f03062e8d11d~mv2.png',
    code: 'VILLAGE',
    ticketUrl: 'https://www.villagefestival.com.br',
    description: `<p>From June 3 to July 19, Village Superbet transforms Jockey Club Brasileiro into Rio's official World Cup 2026 arena.</p>
<p>Live shows every day, full match broadcasts, a Ferris wheel, top-tier food, and open bar on party nights. The Carioca way to live the World Cup.</p>
<p>🎟️ Get yours at a discount with code: <strong>VILLAGE</strong></p>`,
  },
  {
    slug: 'funk-you',
    name: 'FUNK YOU',
    venue: 'Bosque Bar',
    location: 'Rio de Janeiro',
    date: 'May 15, 2026',
    dateSort: '2026-05-15',
    categories: ['destaques', 'funk', 'boates-clubs'],
    badge: 'LIST',
    image: 'https://static.wixstatic.com/media/ff9425_88bbfd756d7c4ae19c7f89bfc72dc88e~mv2.jpg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>📄 Lari's Guest List — 🚺 VIP &nbsp;🚹 R$80 until 9PM</p>
<p>🎧 FP DO TREM BALA (Funk)<br>🎧 Corth (Funk)<br>🎧 Fred Gama (Funk)<br>🎧 Tucho (Open Format)<br>🎧 Bruna Areas (Open Format)</p>
<p>Birthdays and info: <a href="http://wa.me/5521971070967" target="_blank">Larissa's WhatsApp</a></p>`,
  },
  {
    slug: 'aldeia-sabado',
    name: 'Aldeia Sábado',
    venue: 'Aldeia Lagoa',
    location: 'Rio de Janeiro',
    date: 'May 16, 2026',
    dateSort: '2026-05-16',
    categories: ['destaques', 'funk', 'boates-clubs'],
    badge: 'LIST',
    image: 'https://static.wixstatic.com/media/83c774_1fc2a1bae54043048458dc986658aad0~mv2.jpg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Aldeia is back at Lagoa for the long weekend. Funk, axé, and true Rio energy.</p>`,
  },
  {
    slug: 'capital-do-samba',
    name: 'Capital do Samba',
    venue: 'Marina da Glória',
    location: 'Rio de Janeiro',
    date: 'May 16, 2026',
    dateSort: '2026-05-16',
    categories: ['destaques', 'pagode-samba'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_952ea2438c844b03a812ecba9f1133e1~mv2.jpg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Alcione at Marina da Glória. Samba the way it should be — waterfront, Guanabara breeze, and genuine emotion.</p>`,
  },
  {
    slug: 'fusca',
    name: 'F.U.S.C.A.',
    venue: 'Privilège Búzios',
    location: 'Búzios, RJ',
    date: 'May 16, 2026',
    dateSort: '2026-05-16',
    categories: ['destaques', 'eletronicos', 'boates-clubs', 'buzios'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_5e3fe6002779407fb9755af5d70fae32~mv2.webp',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Real electronic music in Búzios. F.U.S.C.A. at Privilège is the perfect excuse to never come home early.</p>`,
  },
  {
    slug: 'nosso-domingo',
    name: 'Nosso Domingo Lagoa',
    venue: 'PARQUE, Lagoa',
    location: 'Rio de Janeiro',
    date: 'May 17, 2026',
    dateSort: '2026-05-17',
    categories: ['destaques', 'pagode-samba', 'boates-clubs'],
    badge: 'LIST',
    image: 'https://static.wixstatic.com/media/ff9425_0d9d3164a977419ea293694219bf72f8~mv2.jpeg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Sunday samba, Lagoa, and sun. Everything Rio has to offer in a single afternoon.</p>`,
  },
  {
    slug: 'samba-entre-4-paredes',
    name: 'Samba Entre 4 Paredes',
    venue: 'São Clemente',
    location: 'Rio de Janeiro',
    date: 'May 23, 2026',
    dateSort: '2026-05-23',
    categories: ['pagode-samba'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_e2ad3b31aea64f0eb8aec527b6a6d5a0~mv2.png',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Real samba in a real space. No automated playlist. Just the roda, the voice, and the instruments.</p>`,
  },
  {
    slug: 'sambinha-da-gigoia',
    name: 'Sambinha da Gigóia com Vitinho',
    venue: 'Ilha Itanhangá',
    location: 'Rio de Janeiro',
    date: 'May 17, 2026',
    dateSort: '2026-05-17',
    categories: ['pagode-samba'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_65624a7cd7f945d3855dd2389ec743e9~mv2.jpg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Holiday Sunday at Ilha Itanhangá. Vitinho, roda de samba, and afternoon sun.</p>`,
  },
  {
    slug: 'baile-do-marley',
    name: 'Baile do Marley — Anos 90 & 2000',
    venue: 'Privilège Búzios',
    location: 'Búzios, RJ',
    date: 'May 23, 2026',
    dateSort: '2026-05-23',
    categories: ['rap-hip-hop', 'eletronicos', 'boates-clubs', 'buzios'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_a2bb6dfc297945409a447506f35ae88b~mv2.webp',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>90s & 2000s edition at Privilège. Búzios on the long weekend — nostalgia with an ocean view.</p>`,
  },
  {
    slug: 'spirit-hi-profile',
    name: 'Spirit com Hi Profile',
    venue: 'Taquara',
    location: 'Rio de Janeiro',
    date: 'May 16, 2026',
    dateSort: '2026-05-16',
    categories: ['eletronicos', 'boates-clubs'],
    badge: 'DISCOUNT',
    image: 'https://kraken.ingresse.com/event/posters/90037/large/1768353494.1451993.jpg',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Hi Profile at Taquara. Techno and house — no further justification needed.</p>`,
  },
  {
    slug: 'village-vintage-culture',
    name: 'Village com Vintage Culture',
    venue: 'Jockey Club Brasileiro',
    location: 'Rio de Janeiro',
    date: 'June 3, 2026',
    dateSort: '2026-06-03',
    categories: ['eletronicos', 'copa-2026'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_6197edc7e86a4c3b82bb11ec414767df~mv2.jpg',
    code: 'VILLAGE',
    ticketUrl: '#',
    description: `<p>Vintage Culture opens Village Superbet. The best opening night the Jockey has ever seen, during the 2026 World Cup.</p>`,
  },
  {
    slug: 'bloco-das-gauchas',
    name: 'Bloco das Gaúchas',
    venue: 'Jockey Club Brasileiro',
    location: 'Rio de Janeiro',
    date: 'June 20, 2026',
    dateSort: '2026-06-20',
    categories: ['open-bar', 'copa-2026'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_0f8bc4b722a84171a34a128de62bbd4f~mv2.jpg',
    code: 'VILLAGE',
    ticketUrl: '#',
    description: `<p>Open bar inside the Village during the World Cup. Bloco das Gaúchas at Jockey — it doesn't end easily.</p>`,
  },
  {
    slug: 'village-final-open-bar',
    name: 'Village — Grande Final Open Bar',
    venue: 'Jockey Club Brasileiro',
    location: 'Rio de Janeiro',
    date: 'July 19, 2026',
    dateSort: '2026-07-19',
    categories: ['open-bar', 'copa-2026'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_58f64676ee1e46f398e928dc7a55adf9~mv2.jpg',
    code: 'VILLAGE',
    ticketUrl: '#',
    description: `<p>The grand finale. Open bar, the World Cup, and one last night. Rio will never forget the summer of 2026.</p>`,
  },
  {
    slug: 'reveillon-rio',
    name: "New Year's Eve Rio — WhatsApp Group",
    venue: 'Rio de Janeiro',
    location: 'Rio de Janeiro',
    date: 'December 26, 2026',
    dateSort: '2026-12-26',
    categories: ['reveillon'],
    badge: 'DISCOUNT',
    image: 'https://static.wixstatic.com/media/ff9425_cf7d9a699b4b4e58b53e7c75738e7a04~mv2.png',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>Early access to the best New Year's Eve options in Rio. Outlier Experiences' curated selection for year-end celebrations.</p>`,
  },
  {
    slug: 'reveillon-encontros',
    name: "Réveillon Encontros RJ 2027",
    venue: 'Sociedade Germânica — Gávea',
    location: 'Rio de Janeiro',
    date: 'December 31, 2026',
    dateSort: '2026-12-31',
    categories: ['reveillon', 'boates-clubs', 'open-bar'],
    badge: 'GROUP',
    image: 'https://static.wixstatic.com/media/ff9425_9efb7f1879cb43d2972503bfee05027d~mv2.png',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>New Year's Eve at Germânica in Gávea. South Zone, open bar, and counting down with the real Rio crowd.</p>`,
  },
  {
    slug: 'reveillon-alto-vidigal',
    name: 'Réveillon Alto Vidigal RJ 2027',
    venue: 'Alto Vidigal',
    location: 'Rio de Janeiro',
    date: 'December 31, 2026',
    dateSort: '2026-12-31',
    categories: ['reveillon'],
    badge: 'GROUP',
    image: 'https://static.wixstatic.com/media/ff9425_3d86188f02f949a1a1cdfe8991dcf22c~mv2.png',
    code: 'INSIDER',
    ticketUrl: '#',
    description: `<p>New Year's Eve at Vidigal with a view of Rio and the ocean. Nothing else needed.</p>`,
  },
];

// ---- CATEGORIES ----

const CATEGORIES = [
  { id: 'destaques',    label: 'HIGHLIGHTS' },
  { id: 'pagode-samba', label: 'PAGODE / SAMBA' },
  { id: 'funk',         label: 'FUNK' },
  { id: 'eletronicos',  label: 'ELECTRONIC / RAVES' },
  { id: 'rap-hip-hop',  label: 'RAP / TRAP / HIP-HOP' },
  { id: 'open-bar',     label: 'OPEN BAR PARTIES' },
  { id: 'boates-clubs', label: 'CLUBS & NIGHTLIFE' },
  { id: 'copa-2026',    label: 'WORLD CUP 2026' },
  { id: 'buzios',       label: 'PARTIES IN BÚZIOS' },
  { id: 'reveillon',    label: "NEW YEAR'S EVE 2027" },
];

const WPP_GROUPS = [
  { name: 'General Group — All Styles',   url: '#' },
  { name: 'World Cup 2026 — Village Rio', url: '#' },
  { name: "New Year's Eve RJ 2027",       url: '#' },
  { name: 'Parties in Búzios',            url: '#' },
  { name: 'Open Bar Parties',             url: '#' },
  { name: 'Electronic & Raves',           url: '#' },
];

// ---- HELPERS ----

function badgeClass(badge) {
  const map = { LIST: 'badge-insider', DISCOUNT: 'badge-desconto', GROUP: 'badge-grupo' };
  return map[badge] || 'badge-desconto';
}

function getByCat(catId) {
  return EVENTS.filter(e => e.categories.includes(catId));
}

// ---- RENDER: SIDEBAR ----

function renderSidebar() {
  const el = document.getElementById('sidebar');
  if (!el) return;

  const catLinks = CATEGORIES.map(c =>
    `<li><a href="index.html#${c.id}" onclick="if(window.innerWidth<=800)closeSidebar()">${c.label}</a></li>`
  ).join('');

  el.innerHTML = `
    <button class="sidebar-close" onclick="closeSidebar()" aria-label="Fechar menu">✕</button>
    <div class="sidebar-logo">
      <a href="index.html">
        <img src="assets/logo.jpg" alt="Outlier Experiences">
      </a>
    </div>
    <div class="sidebar-social">
      <a href="#" title="WhatsApp">${SVG_WHATSAPP}</a>
      <a href="#" title="Instagram">${SVG_INSTAGRAM}</a>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><a href="index.html">FULL SCHEDULE</a></li>
        ${catLinks}
        <li class="nav-divider"></li>
        <li><a href="#grupos-vip" onclick="if(window.innerWidth<=800)closeSidebar()">VIP GROUPS</a></li>
      </ul>
    </nav>
  `;
}

// ---- RENDER: TOP BAR ----

function renderTopBar() {
  return `
    <div class="top-bar">
      <div class="top-bar-search">
        <input type="text" placeholder="Search experiences, venues, dates..." id="searchInput" oninput="handleSearch(this.value)">
      </div>
    </div>`;
}

// ---- RENDER: EVENT CARD ----

function renderCard(ev) {
  return `
    <div class="event-card" onclick="window.location='event.html?slug=${ev.slug}'">
      <div class="card-image-wrap">
        <img src="${ev.image}" alt="${ev.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="card-badge ${badgeClass(ev.badge)}">${ev.badge}</span>
        <button class="card-save" onclick="event.stopPropagation();toggleSaveCard(this)" title="Save" aria-label="Save">♡</button>
      </div>
      <div class="card-info">
        <span class="card-slug">${ev.slug}</span>
        <span class="card-date">${ev.date}</span>
        <p class="card-venue">${ev.venue}</p>
        <h3 class="card-name">${ev.name}</h3>
      </div>
    </div>`;
}

// ---- RENDER: CATEGORY SECTION ----

function renderSection(catId, label) {
  const events = getByCat(catId);
  if (!events.length) return '';
  return `
    <section id="${catId}" class="category-section">
      <div class="section-header">
        <h2>${label}</h2>
        <a href="#">View all events →</a>
      </div>
      <div class="events-row">
        ${events.map(renderCard).join('')}
      </div>
    </section>`;
}

// ---- RENDER: WHATSAPP SECTION ----

function renderWppSection() {
  const cards = WPP_GROUPS.map(g => `
    <a href="${g.url}" target="_blank" class="wpp-card">
      <div class="wpp-icon">${SVG_WHATSAPP}</div>
      <div>
        <div class="wpp-name">${g.name}</div>
        <div class="wpp-sub">Join the group</div>
      </div>
    </a>`).join('');

  return `
    <section id="grupos-vip" class="category-section">
      <div class="section-header">
        <h2>VIP GROUPS — WHATSAPP</h2>
        <a href="#">View all groups →</a>
      </div>
      <div class="wpp-grid">${cards}</div>
    </section>`;
}

// ---- RENDER: HOME PAGE ----

function renderHome() {
  const main = document.getElementById('main');
  if (!main) return;
  const sections = CATEGORIES.map(c => renderSection(c.id, c.label)).join('');
  main.innerHTML = renderTopBar() + sections + renderWppSection();
  setupScrollSpy();
}

// ---- RENDER: EVENT DETAIL ----

function renderEventDetail(slug) {
  const main = document.getElementById('main');
  if (!main) return;

  const ev = EVENTS.find(e => e.slug === slug);
  if (!ev) {
    main.innerHTML = renderTopBar() + `
      <div style="padding:60px 30px;text-align:center">
        <h2 style="font-family:'Playfair Display',serif;color:var(--forest);margin-bottom:14px">Event not found.</h2>
        <a href="index.html" style="color:var(--gold)">← Back to schedule</a>
      </div>`;
    return;
  }

  document.title = `${ev.name} | OUTLIER EXPERIENCES`;

  const related = EVENTS
    .filter(e => e.slug !== slug && e.categories.some(c => ev.categories.includes(c)))
    .slice(0, 5);

  const relatedHtml = related.length ? `
    <div class="next-events">
      <h3>MORE EXPERIENCES TO EXPLORE</h3>
      <div class="next-events-list">
        ${related.map(e => `
          <div class="next-event-item" onclick="window.location='event.html?slug=${e.slug}'">
            <span class="nei-name">${e.name}</span>
            <span class="nei-date">${e.date} · ${e.venue}</span>
          </div>`).join('')}
      </div>
    </div>` : '';

  main.innerHTML = `
    <div class="event-search-bar">
      <a href="index.html" class="event-mobile-logo">
        <img src="assets/logo.jpg" alt="Outlier Experiences">
      </a>
      <div class="top-bar-search">
        <input type="text" placeholder="Search experiences, venues, dates..." id="searchInput" oninput="handleSearch(this.value)">
      </div>
    </div>
    <div class="event-detail">
      <a href="index.html" class="back-link">← Back to schedule</a>

      <div class="event-detail-grid">
        <div class="event-poster">
          <a href="${ev.ticketUrl}" target="_blank">
            <img src="${ev.image}" alt="${ev.name}" onerror="this.style.display='none'">
            <div class="poster-overlay"><span class="poster-overlay-text">VIEW TICKET</span></div>
          </a>
        </div>

        <div class="event-meta">
          <h1>${ev.name}</h1>
          <div class="meta-row">📅&nbsp;<strong>${ev.date}</strong></div>
          <div class="meta-row">📍&nbsp;<span>${ev.venue}</span></div>

          <div class="event-description">${ev.description}</div>

          <a href="${ev.ticketUrl}" target="_blank" class="btn-comprar" style="margin-top:16px">BUY TICKET</a>
        </div>
      </div>

      ${relatedHtml}
    </div>`;
}

// ---- SEARCH ----

function handleSearch(val) {
  const q = val.toLowerCase().trim();
  document.querySelectorAll('.event-card').forEach(card => {
    const text = (
      (card.querySelector('.card-name')?.textContent || '') +
      (card.querySelector('.card-venue')?.textContent || '')
    ).toLowerCase();
    card.style.display = !q || text.includes(q) ? '' : 'none';
  });
  document.querySelectorAll('.category-section:not(#grupos-vip)').forEach(sec => {
    const hasVisible = [...sec.querySelectorAll('.event-card')].some(c => c.style.display !== 'none');
    sec.style.display = hasVisible ? '' : 'none';
  });
}

// ---- SCROLL SPY ----

function setupScrollSpy() {
  const sections = document.querySelectorAll('.category-section[id]');
  const links = document.querySelectorAll('.sidebar-nav a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle('active', !!l.getAttribute('href')?.includes('#' + en.target.id));
        });
      }
    });
  }, { threshold: 0.25 });
  sections.forEach(s => io.observe(s));
}

// ---- SAVE TOGGLES ----

function toggleSaveCard(btn) {
  const saved = btn.classList.toggle('saved');
  btn.textContent = saved ? '♥' : '♡';
}

function toggleSaveDetail(btn) {
  const saved = btn.classList.toggle('saved');
  btn.textContent = saved ? '♥ Saved' : '♡ Save';
}

// ---- SIDEBAR MOBILE ----

function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
}

function initSidebar() {
  const ham = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  if (!ham || !sidebar) return;
  ham.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && e.target !== ham) {
      sidebar.classList.remove('open');
    }
  });
}

// ---- INIT ----

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  initSidebar();
  const page = document.body.dataset.page;
  if (page === 'home') renderHome();
  if (page === 'event') renderEventDetail(new URLSearchParams(location.search).get('slug'));
});
