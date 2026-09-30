/**
 * PORTAFOLIO v2.0 — MILEIDYS AGAMEZ OSPINO
 * Logica: Filtros, Modal, Terminal CLI, Canvas Ambiental, Nav scroll
 * Paleta: Sage Green + Warm Amber (sin cyan/purple IA genericos)
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initAmbientGlow();
  initThemeToggle();
  initNavScroll();
  initProjects();
  initTerminal();
  initContactForm();
  initNavigation();
  initMobileMenu();
});

/* ==========================================================================
   1. Data Model de Proyectos
   ========================================================================== */
const PROJECTS = [
  {
    id: 'tinder-app',
    title: 'TinderApp Mobile',
    category: 'mobile',
    badge: 'Mobile & Cloud',
    image: 'assets/images/tinder_app_preview.jpg',
    summary: 'Aplicacion movil de citas cross-platform con fisica tactil de tarjetas, Supabase en tiempo real, chat interactivo y soporte Android nativo.',
    tags: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'Supabase', 'Android'],
    github: 'https://github.com/Mileidys10/TinderApp',
    architecture: 'Arquitectura modular en Angular con servicios desacoplados para Auth, Query y Realtime. Persistencia en Supabase BaaS con politicas RLS (Row Level Security).',
    challenges: [
      'Animacion de deslizamiento de cartas a 60 FPS con rotacion angular proporcional.',
      'Sincronizacion en vivo de salas de chat y deteccion inmediata de matches mutuos.',
      'Carga y optimizacion de fotografias de perfil en cliente antes del guardado en Supabase Storage.'
    ],
    features: [
      'Deck tactil swipeable (Like, Pass, SuperLike)',
      'Modal de Match festivo con apertura inmediata a chat',
      'Salas de mensajeria con actualizacion en tiempo real',
      'Soporte bilingue y exportacion nativa a Android APK'
    ]
  },
  {
    id: 'perfume-store',
    title: 'Aeterna Perfumes Luxury E-Commerce',
    category: 'fullstack',
    badge: 'Enterprise Fullstack',
    image: 'assets/images/perfume_store_preview.jpg',
    summary: 'Plataforma e-commerce de fragancias exclusivas con Spring Boot 3, Spring Security 6 (JWT), PostgreSQL, Docker y frontend reactivo en Angular.',
    tags: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker', 'Angular'],
    github: 'https://github.com/Mileidys10/Tienda-de-Perfumes',
    architecture: 'Arquitectura en capas (Controller, Service, Repository, DTO) con validacion Jakarta, envio transaccional de correos con Thymeleaf y contenedorizacion completa con Docker Compose.',
    challenges: [
      'Diseno de seguridad stateless con JWT y filtrado de autorizacion por perfiles (RBAC).',
      'Pipeline de moderacion automatica de resenas y almacenamiento de imagenes.',
      'Gestion de estados del pedido (Pending, Paid, Shipped, Delivered) y transacciones ACID.'
    ],
    features: [
      'Catalogo de lujo con filtros por notas olfativas y marcas',
      'Carrito de compras reactivo con checkout simulado',
      'Correos HTML transaccionales automatizados con Thymeleaf',
      'Despliegue unificado con Docker Compose'
    ]
  },
  {
    id: 'devcards-ai',
    title: 'DevCards AI — EdTech Platform',
    category: 'ai',
    badge: 'AI & Fullstack',
    image: 'assets/images/devcards_ai_preview.jpg',
    summary: 'Plataforma de estudio con 284 tarjetas tecnicas en 10 materias de ingenieria, quizzes interactivos, analogias y motor dual de IA (Gemini + Offline).',
    tags: ['Python 3.12', 'FastAPI', 'Google Gemini', 'Pydantic', 'JavaScript', 'CSS3'],
    github: 'https://github.com/Mileidys10/devcards_ai',
    architecture: 'Backend en FastAPI con validacion estricta de esquemas JSON con Pydantic. Motor de inferencia dual con Google Gemini API y generador sintetico determinista offline.',
    challenges: [
      'Filtrado instantaneo en memoria para 284 tarjetas con latencia inferior a 5ms.',
      'Diseno de prompts estructurados para quizzes de 4 opciones validos con Gemini.',
      'Arquitectura de fallback automatico ante fallas o falta de API keys.'
    ],
    features: [
      '284 flashcards en 10 disciplinas (Java, Python, Docker, SQL, IA, etc.)',
      'Efectos 3D de volteo de tarjeta y quizzes con feedback visual',
      'Generacion en caliente de tarjetas tecnicas mediante Google Gemini',
      '100% de cobertura en tests automatizados unitarios'
    ]
  },
  {
    id: 'videogame-pose',
    title: 'VideoGame Pose Combat',
    category: 'ai',
    badge: 'Computer Vision & Gaming',
    image: 'assets/images/videogame_pose_preview.jpg',
    summary: 'Videojuego de combate multijugador por vision computacional en tiempo real donde los jugadores disparan rayos usando poses corporales frente a la camara.',
    tags: ['Python', 'YOLOv8-Pose', 'MediaPipe', 'Pygame-CE', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/Mileidys10/videogame_pose',
    architecture: 'Patron Strategy desacoplado con soporte intercambiable entre YOLOv8-Pose y MediaPipe Tasks API. Motor de fisica de proyectiles continuos y sintetizador de audio procedimental offline.',
    challenges: [
      'Estimacion y seguimiento de poses corporales multiples a 60 FPS en resolucion 1080p.',
      'Filtro de estabilizacion biomecanica con debounce temporal para evitar falsos positivos.',
      'Deteccion precisa de gestos: Kamehameha, escudo defensivo y recarga de Ki.'
    ],
    features: [
      'Modo combate multijugador local de 2 a 4 jugadores',
      'Mecanica de choque de rayos energeticos (Beam Struggle)',
      'Audio procedimental sintetizado sin archivos externos',
      'HUD reactivo con esqueletos ciberneticos superpuestos'
    ]
  },
  {
    id: 'telegram-erp',
    title: 'Telegram ERP Agent',
    category: 'backend',
    badge: 'AI & Enterprise Automation',
    image: 'assets/images/telegram_erp_preview.jpg',
    summary: 'Agente conversacional empresarial para Telegram conectado a BD relacionales para consultar stock, registrar movimientos Kardex y emitir reportes PDF.',
    tags: ['Python', 'SQLAlchemy', 'Telegram API', 'Google GenAI', 'ReportLab', 'PostgreSQL'],
    github: 'https://github.com/Mileidys10/telegram_erp_agent',
    architecture: 'Bot asincrono con control de acceso por roles (RBAC), transacciones ACID en SQLAlchemy, reportes ejecutivos PDF con ReportLab y consultas en lenguaje natural con Gemini Function Calling.',
    challenges: [
      'Aislamiento de permisos estrictos por usuario de Telegram (Almacen, Ventas, Gerencia).',
      'Auditoria y trazabilidad completa de cada movimiento de stock en Kardex.',
      'Generacion de PDFs con tablas y graficos vectoriales generados dinamicamente.'
    ],
    features: [
      'Consultas de inventario y stock en tiempo real por chat',
      'Registro de compras, traslados y mermas con teclado interactivo',
      'Notificaciones push para alertas de reorden',
      'Reportes ejecutivos en PDF generados al instante'
    ]
  },
  {
    id: 'cinemastellar',
    title: 'CinemaStellar Movie Platform',
    category: 'fullstack',
    badge: 'Web & Media',
    image: 'assets/images/cinemastellar_preview.jpg',
    summary: 'Portal multimedia para cartelera cinematografica, seleccion visual de butacas en tiempo real y emision de boletos digitales con codigo QR.',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'SVG Interactivo', 'LocalStorage'],
    github: 'https://github.com/Mileidys10/CINEMASTELLAR',
    architecture: 'Single Page Application (SPA) ligera con diseno cinematografico inmersivo, mapa de butacas reactivo en SVG y persistencia en cliente.',
    challenges: [
      'Selector de asientos con estados interactivos (Libre, Ocupado, Seleccionado).',
      'Generacion de boleto digital imprimible con canvas HTML5 y codigo QR.',
      'Optimizacion de medios y streaming de trailers en ventanas modales.'
    ],
    features: [
      'Catalogo de peliculas organizado por generos y estrenos',
      'Mapa interactivo de sala de cine para reserva de butacas',
      'Carrito de combos y confiteria integrado',
      'Boleto digital descargable con confirmacion de compra'
    ]
  },
  {
    id: 'minddump',
    title: 'MindDump Cognitive Capturer',
    category: 'mobile',
    badge: 'PWA & Offline-First',
    image: 'assets/images/minddump_preview.jpg',
    summary: 'Capturador de pensamientos y notas de voz local-first con PWA, IndexedDB (Dexie.js), sincronizacion a la nube y estetica Quiet Luxury.',
    tags: ['Angular', 'Ionic', 'IndexedDB', 'PWA', 'TypeScript', 'Firebase Hosting'],
    github: 'https://github.com/Mileidys10/minddump',
    architecture: 'Arquitectura Local-First con almacenamiento reactivo en IndexedDB mediante Dexie.js, Service Workers para funcionamiento 100% offline y despliegue continuo en Firebase Hosting.',
    challenges: [
      'Garantizar persistencia local sin conexion y sincronizacion no destructiva con resolucion de conflictos.',
      'Soporte de grabacion de audio y formas de onda fluidas en dispositivos moviles y navegadores de escritorio.',
      'Evolucion estetica hacia diseno Quiet Luxury sin saturacion de emojis, con tipografia de precision e iconos vectoriales SVG.'
    ],
    features: [
      'Captura rapida de notas de texto y grabaciones de audio',
      'Persistencia robusta en IndexedDB con cero latencia',
      'Despliegue activo en Firebase Hosting con soporte PWA instalable',
      'Estetica minimalista premium en modo oscuro con paleta titanio y ambar'
    ]
  },
  {
    id: 'agente-enfermeria',
    title: 'Agente Clínico de Enfermería',
    category: 'ai',
    badge: 'Medical AI & Triage',
    image: 'assets/images/agente_enfermeria_preview.jpg',
    summary: 'Sistema asistencial de valoración clínica y triage asistido por IA multimodal, digitalización de prescripciones manuscritas, extracción estructurada de signos vitales (JSON-LD) y reportes médicos en PDF.',
    tags: ['Python', 'Streamlit', 'Google Gemini', 'JSON-LD', 'ReportLab', 'SQLite'],
    github: 'https://github.com/Mileidys10/agente_enfermeria',
    architecture: 'Pipeline multimodal con extracción estructurada de signos vitales mediante visión computacional y modelos Gemini. Normalización médica a estándares OKF JSON-LD y generación transaccional de reportes clínicos en PDF con ReportLab.',
    challenges: [
      'Digitalización y OCR contextual de recetas y notas clínicas manuscritas de médicos.',
      'Extracción determinista de constantes vitales (frecuencia, presión, saturación O2) en esquemas JSON-LD.',
      'Generación automatizada de reportes médicos en PDF para la historia clínica hospitalaria.'
    ],
    features: [
      'Dashboard clínico interactivo en Streamlit con telemetría de signos vitales',
      'Digitalización y transcripción de notas clínicas manuscritas con IA multimodal',
      'Normalización médica a especificación JSON-LD y persistencia en SQLite',
      'Generador instantáneo de reportes de triage y valoración en PDF'
    ]
  }
];

/* ==========================================================================
   2. Renderizado y Filtro de Proyectos
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-category', p.category);
      card.innerHTML = `
        <div class="project-thumbnail">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="project-badge-corner">${p.badge}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.summary}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button class="btn-case-study" onclick="openCaseStudy('${p.id}')">
              Ver Caso de Estudio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="project-links">
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render();
}

/* ==========================================================================
   3. Modal de Caso de Estudio
   ========================================================================== */
window.openCaseStudy = function(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('case-study-modal');
  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-img').alt = project.title;
  document.getElementById('modal-tags').innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent = project.summary;
  document.getElementById('modal-arch').textContent = project.architecture;

  document.getElementById('modal-challenges').innerHTML = project.challenges.map(c => `
    <li class="modal-feature-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${c}</span>
    </li>
  `).join('');

  document.getElementById('modal-features').innerHTML = project.features.map(f => `
    <li class="modal-feature-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
      <span>${f}</span>
    </li>
  `).join('');

  document.getElementById('modal-github').href = project.github;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCaseStudy = function() {
  document.getElementById('case-study-modal').classList.remove('open');
  document.body.style.overflow = '';
};

window.addEventListener('keydown', e => { if (e.key === 'Escape') closeCaseStudy(); });
document.getElementById('case-study-modal')?.addEventListener('click', e => {
  if (e.target.id === 'case-study-modal') closeCaseStudy();
});

/* ==========================================================================
   4. Terminal CLI
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('cli-input');
  const history = document.getElementById('cli-history');
  if (!input || !history) return;

  const COMMANDS = {
    help: () => `
<span class="term-highlight">Comandos disponibles:</span>
  <span class="term-highlight">bio</span>          Resumen profesional y filosofia tecnica
  <span class="term-highlight">skills</span>       Inventario de tecnologias y stacks
  <span class="term-highlight">projects</span>     Lista de proyectos insignia
  <span class="term-highlight">contact</span>      Datos de contacto directo
  <span class="term-highlight">github</span>       Enlace oficial de GitHub
  <span class="term-highlight">clear</span>        Limpiar la pantalla
  <span class="term-highlight">secret</span>       Mensaje de la fabrica de software
`,
    bio: () => `
<span class="term-highlight">Mileidys Agamez Ospino</span> — Ingeniera de Software & Arquitecta Fullstack.
Especializada en desarrollo movil hibrido de alto rendimiento (Ionic/Angular),
backends corporativos en Java/Spring Boot y Python/FastAPI, e integracion de
modelos de IA (Gemini) y Vision Computacional (YOLOv8/MediaPipe).
`,
    skills: () => `
<span class="term-prompt">[Mobile & Frontend]:</span>  Angular, Ionic, TypeScript, Capacitor, SCSS, HTML5.
<span class="term-prompt">[Backend & Cloud]:</span>    Java 17/21, Spring Boot 3, Python, FastAPI, Docker, PostgreSQL.
<span class="term-prompt">[AI & Vision]:</span>        Google Gemini API, Ultralytics YOLOv8, MediaPipe, OpenCV.
<span class="term-prompt">[QA & DevOps]:</span>        JUnit 5, Pytest, Git, Arquitectura Hexagonal, OWASP.
`,
    projects: () => `
Proyectos Insignia:
  1. <span class="term-highlight">TinderApp</span>: App movil swipeable en Ionic/Angular con Supabase.
  2. <span class="term-highlight">Aeterna Perfumes</span>: E-commerce Spring Boot + Angular + Docker.
  3. <span class="term-highlight">DevCards AI</span>: Plataforma EdTech con 284 tarjetas en 10 materias.
  4. <span class="term-highlight">VideoGame Pose Combat</span>: Lucha en tiempo real con YOLOv8/MediaPipe.
  5. <span class="term-highlight">Telegram ERP Agent</span>: Bot empresarial con IA y reportes PDF.
  6. <span class="term-highlight">CinemaStellar</span>: Portal de cine con selector de butacas SVG.
  7. <span class="term-highlight">MindDump</span>: Capturador cognitivo PWA local-first con IndexedDB y audio.
  8. <span class="term-highlight">Agente Clínico de Enfermería</span>: Triage asistido con IA multimodal, JSON-LD y PDF.
`,
    contact: () => `
Conectemos:
  - Email:  <a href="mailto:agamezmileidys@gmail.com" class="term-highlight">agamezmileidys@gmail.com</a>
  - GitHub: <a href="https://github.com/Mileidys10" target="_blank" class="term-highlight">github.com/Mileidys10</a>
`,
    github: () => `Abriendo GitHub: <a href="https://github.com/Mileidys10" target="_blank" class="term-highlight">https://github.com/Mileidys10</a>`,
    secret: () => `
<span class="term-highlight">[DIRECTIVA MAESTRA DE FABRICA]:</span>
Esta ingeniera opera con gobernanza <span class="term-prompt">Google Cloud OKF v0.2</span>.
Cero alucinaciones. Suites de pruebas automaticas. Nivel internacional.
`,
    clear: () => { history.innerHTML = ''; return null; }
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = input.value.trim().toLowerCase();
      input.value = '';
      if (!val) return;

      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = `<span class="term-prompt">mileidys@eng:~$</span> <span class="term-cmd">${val}</span>`;
      history.appendChild(line);

      const handler = COMMANDS[val];
      if (handler) {
        const out = handler();
        if (out !== null) {
          const resp = document.createElement('div');
          resp.className = 'term-output';
          resp.innerHTML = out;
          history.appendChild(resp);
        }
      } else {
        const err = document.createElement('div');
        err.className = 'term-output';
        err.innerHTML = `<span style="color:#d4956a">Comando no reconocido: '${val}'. Escribe <span class="term-highlight">help</span> para ver la lista.</span>`;
        history.appendChild(err);
      }

      const screen = document.querySelector('.terminal-full-screen');
      screen.scrollTop = screen.scrollHeight;
    }
  });
}

/* ==========================================================================
   5. Canvas Ambiental — Sage Green particles
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const count = 40;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.4 + 0.8;
      // sage green or amber tint
      this.isSage = Math.random() > 0.25;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isSage ? 'rgba(107,158,122,0.4)' : 'rgba(212,149,106,0.3)';
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(107,158,122,${0.12 * (1 - dist/110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   6. Mouse Ambient Glow (sage)
   ========================================================================== */
function initAmbientGlow() {
  const glow = document.querySelector('.ambient-glow');
  if (!glow) return;
  window.addEventListener('mousemove', e => {
    glow.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
  });
}

/* ==========================================================================
   7. Theme Toggle
   ========================================================================== */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('mileidys_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('mileidys_portfolio_theme', target);
    showToast(`Modo ${target === 'dark' ? 'Oscuro' : 'Claro'} activado`);
  });
}

/* ==========================================================================
   8. Nav Scroll Effect
   ========================================================================== */
function initNavScroll() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ==========================================================================
   9. Formulario de Contacto
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const msg = document.getElementById('contact-msg').value.trim();
    if (!name || !email || !msg) {
      showToast('Por favor completa todos los campos.', 'error');
      return;
    }
    showToast(`Gracias ${name}! Tu mensaje fue enviado.`, 'success');
    form.reset();
  });
}

window.copyToClipboard = function(text, label = 'Texto') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copiado al portapapeles!`, 'success');
  }).catch(() => {
    showToast('Error al copiar', 'error');
  });
};

/* ==========================================================================
   10. Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  const color = type === 'success' ? '#6b9e7a' : type === 'error' ? '#d4956a' : '#8bbf9a';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease-out';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   11. Navigation Active State
   ========================================================================== */
function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ==========================================================================
   12. Mobile Menu (simple toggle)
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!btn || !navLinks) return;
  btn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '66px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--bg-glass)';
    navLinks.style.backdropFilter = 'blur(20px)';
    navLinks.style.borderBottom = '1px solid var(--border-subtle)';
    navLinks.style.padding = '16px 32px 20px';
    navLinks.style.gap = '8px';
    navLinks.style.zIndex = '99';
  });
}
