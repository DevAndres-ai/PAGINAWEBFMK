# Contenido del proyecto FMK Global Karate Platform

### /assets/fonts/.gitkeep

```

```

### /assets/icons/logo-fmk.svg

```
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle">
  <title id="logoTitle">Logo FMK</title>
  <circle cx="100" cy="100" r="80" fill="#111111" stroke="#D4AF37" stroke-width="10"/>
  <path d="M100 45L115 85H155L123 110L135 150L100 125L65 150L77 110L45 85H85L100 45Z" fill="#D4AF37"/>
  <text x="100" y="190" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="700" font-size="18">FMK</text>
</svg>
```

### /components/footer.html

```
<footer class="site-footer">
  <div class="container footer-grid">
    <a class="brand" href="#inicio">
      <img src="assets/icons/logo-fmk.svg" alt="" width="40" height="40" />
      <span>FMK Global</span>
    </a>
    <p>&copy; 2026 FMK Global Karate Platform. Todos los derechos reservados.</p>
    <a href="#inicio">Volver arriba</a>
  </div>
</footer>
```

### /components/gallery.html

```
<section class="section gallery" id="galeria">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Galeria</p>
      <h2>Vistas clave de la experiencia FMK.</h2>
    </div>
    <div class="gallery-grid">
      <img src="assets/images/galeria-imagenes.png" alt="Modulo de galeria FMK" loading="lazy" />
      <img src="assets/images/campeonatos.png" alt="Modulo de campeonatos FMK" loading="lazy" />
      <img src="assets/images/calendario.png" alt="Modulo de calendario FMK" loading="lazy" />
      <img src="assets/images/certificados.png" alt="Modulo de certificados FMK" loading="lazy" />
    </div>
  </div>
</section>
```

### /components/hero.html

```
<section class="hero section" id="inicio">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Federacion digital de alto rendimiento</p>
      <h1>FMK Global Karate Platform</h1>
      <p class="hero-lead">Centraliza atletas, clubes, pagos, eventos, certificaciones y contenido federativo en una experiencia premium.</p>
    </div>
    <div class="hero-visual">
      <img src="assets/images/dashboard-admin.png" alt="Panel administrativo de FMK" />
    </div>
  </div>
</section>
```

### /components/navbar.html

```
<nav class="navbar container" aria-label="Navegacion principal">
  <a class="brand" href="#inicio" aria-label="FMK inicio">
    <img src="assets/icons/logo-fmk.svg" alt="" width="44" height="44" />
    <span>FMK Global</span>
  </a>
  <ul class="nav-menu">
    <li><a href="#sobre">Sobre nosotros</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#galeria">Galeria</a></li>
    <li><a class="nav-cta" href="#contacto">Solicitar demo</a></li>
  </ul>
</nav>
```

### /css/animations.css

```
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 560ms ease, transform 560ms ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 { transition-delay: 100ms; }
.delay-2 { transition-delay: 190ms; }
.btn, .nav-cta, .gallery-item, .faq-item {
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}
.btn:hover, .nav-cta:hover, .gallery-item:hover, .faq-item:hover { transform: translateY(-2px); }
.btn:focus-visible, .nav-toggle:focus-visible, .gallery-item:focus-visible, .lightbox-close:focus-visible, a:focus-visible, summary:focus-visible {
  outline: 3px solid var(--gold-strong);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

### /css/responsive.css

```
@media (min-width: 720px) {
  .section { padding: 96px 0; }
  .hero-grid, .split, .feature-layout { grid-template-columns: 1.04fr 0.96fr; }
  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials .container { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr auto auto; }
  .cta-panel { padding: 52px; }
}

@media (min-width: 960px) {
  .nav-toggle { display: none; }
  .nav-menu {
    position: static;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }
  .hero { padding-top: 76px; }
  .card-grid { grid-template-columns: repeat(4, 1fr); }
  .gallery-grid { grid-template-columns: repeat(4, 1fr); }
  .feature-layout { grid-template-columns: 1.1fr 0.9fr; }
}

@media (max-width: 420px) {
  .hero-stats { grid-template-columns: 1fr; }
  .hero-actions .btn { width: 100%; }
  h1 { font-size: 2.45rem; }
}
```

### /css/style.css

```
:root {
  --bg: #0b0b0f;
  --surface: rgba(255, 255, 255, 0.08);
  --surface-strong: rgba(255, 255, 255, 0.14);
  --text: #f7f7fb;
  --muted: #c9c7d1;
  --gold: #d4af37;
  --gold-strong: #f6d56f;
  --red: #d63838;
  --line: rgba(255, 255, 255, 0.16);
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  --radius: 8px;
  --container: min(1120px, calc(100% - 32px));
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(214, 56, 56, 0.24), transparent 30rem),
    linear-gradient(135deg, #0b0b0f 0%, #161116 44%, #0f1218 100%);
  line-height: 1.6;
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.container { width: var(--container); margin-inline: auto; }
.section { padding: 76px 0; position: relative; }
.narrow { max-width: 820px; }
.skip-link {
  position: fixed;
  left: 16px;
  top: 12px;
  z-index: 1000;
  transform: translateY(-150%);
  background: var(--gold);
  color: #111;
  padding: 10px 14px;
  border-radius: var(--radius);
}
.skip-link:focus { transform: translateY(0); }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background 180ms ease, border-color 180ms ease;
}
.site-header.is-scrolled {
  background: rgba(11, 11, 15, 0.76);
  backdrop-filter: blur(18px);
  border-color: var(--line);
}
.navbar { min-height: 76px; display: flex; align-items: center; justify-content: space-between; }
.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: 0; }
.brand img { width: 44px; height: 44px; }
.nav-toggle {
  display: inline-grid;
  gap: 5px;
  width: 44px;
  height: 44px;
  place-content: center;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--text);
  background: var(--surface);
}
.nav-toggle span:not(.sr-only) { width: 20px; height: 2px; background: currentColor; }
.nav-menu {
  position: fixed;
  inset: 76px 16px auto;
  display: none;
  padding: 18px;
  margin: 0;
  list-style: none;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(16, 16, 22, 0.94);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}
.nav-menu.is-open { display: grid; gap: 12px; }
.nav-menu a { color: var(--muted); font-weight: 700; }
.nav-menu a:hover, .nav-menu a:focus-visible { color: var(--text); }
.nav-cta {
  display: inline-flex;
  justify-content: center;
  padding: 10px 14px;
  color: #17120a !important;
  background: linear-gradient(135deg, var(--gold), var(--gold-strong));
  border-radius: var(--radius);
}

.hero { min-height: 100svh; display: grid; align-items: center; overflow: hidden; padding-top: 112px; }
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(11, 11, 15, 0.94), rgba(11, 11, 15, 0.62), rgba(11, 11, 15, 0.92)),
    url("../assets/images/campeonatos.png") center / cover;
  opacity: 0.9;
}
.hero-grid { position: relative; display: grid; gap: 34px; }
.eyebrow {
  margin: 0 0 12px;
  color: var(--gold-strong);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
h1, h2, h3, p { margin-top: 0; }
h1 { max-width: 760px; margin-bottom: 18px; font-size: clamp(2.6rem, 10vw, 5.2rem); line-height: 0.96; letter-spacing: 0; }
h2 { margin-bottom: 16px; font-size: clamp(2rem, 6vw, 3.4rem); line-height: 1.05; letter-spacing: 0; }
h3 { margin-bottom: 10px; font-size: 1.18rem; }
.hero-lead, .section-text { max-width: 650px; color: var(--muted); font-size: 1.05rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0; }
.btn {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: var(--radius);
  font-weight: 900;
  border: 1px solid transparent;
}
.btn-primary { color: #17120a; background: linear-gradient(135deg, var(--gold), var(--gold-strong)); }
.btn-secondary { color: var(--text); background: var(--surface); border-color: var(--line); backdrop-filter: blur(14px); }
.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 520px; margin: 0; }
.hero-stats div, .glass-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}
.hero-stats div { padding: 14px; }
.hero-stats dt { color: var(--gold-strong); font-size: 1.35rem; font-weight: 900; }
.hero-stats dd { margin: 0; color: var(--muted); font-size: 0.86rem; }
.hero-visual img {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.split, .feature-layout { display: grid; gap: 28px; align-items: center; }
.section-heading { max-width: 760px; margin-bottom: 30px; }
.card-grid { display: grid; gap: 16px; }
.glass-card { padding: 22px; }
.glass-card p, .feature-list li, .faq-item p, .testimonial p { color: var(--muted); }
.feature-image {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  aspect-ratio: 16 / 11;
  object-fit: cover;
}
.feature-list ul { display: grid; gap: 12px; padding-left: 20px; }
.feature-list li::marker { color: var(--gold); }
.gallery-grid { display: grid; gap: 14px; }
.gallery-item {
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  cursor: zoom-in;
}
.gallery-item img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; transition: transform 220ms ease; }
.gallery-item:hover img { transform: scale(1.035); }
.testimonials .container { display: grid; gap: 16px; }
.testimonial p { font-size: 1.08rem; }
.testimonial strong { color: var(--gold-strong); }
.faq-item {
  margin-bottom: 12px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.06);
}
.faq-item summary { cursor: pointer; font-weight: 900; }
.faq-item p { margin: 12px 0 0; }
.cta-panel {
  padding: 34px 22px;
  text-align: center;
  border: 1px solid rgba(214, 175, 55, 0.38);
  border-radius: var(--radius);
  background: linear-gradient(135deg, rgba(214, 175, 55, 0.18), rgba(214, 56, 56, 0.14)), var(--surface);
  backdrop-filter: blur(18px);
}
.cta-panel p { color: var(--muted); }
.site-footer { padding: 28px 0; border-top: 1px solid var(--line); background: rgba(0, 0, 0, 0.24); }
.footer-grid { display: grid; gap: 16px; align-items: center; color: var(--muted); }
.footer-grid p { margin: 0; }
.footer-grid a:last-child { color: var(--gold-strong); font-weight: 800; }
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.82);
}
.lightbox img { max-height: 86svh; border-radius: var(--radius); border: 1px solid var(--line); }
.lightbox-close {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--text);
  background: var(--surface-strong);
  font-size: 1.7rem;
  cursor: pointer;
}
```

### /index.html

```
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Landing premium para FMK Global Karate Platform: gestiÃ³n federativa, eventos, certificaciones, atletas y clubes en una plataforma digital moderna." />
    <meta name="keywords" content="FMK, karate, federacion, plataforma deportiva, torneos, certificados, atletas" />
    <meta name="author" content="FMK Global Karate Platform" />
    <meta name="theme-color" content="#0b0b0f" />
    <meta property="og:title" content="FMK Global Karate Platform" />
    <meta property="og:description" content="La plataforma digital premium para conectar federaciones, atletas, directores y eventos de karate." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="assets/images/dashboard-admin.png" />
    <title>FMK Global Karate Platform | Gestion deportiva premium</title>
    <link rel="icon" href="assets/icons/logo-fmk.svg" type="image/svg+xml" />
    <link rel="preload" href="assets/images/dashboard-admin.png" as="image" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/animations.css" />
    <link rel="stylesheet" href="css/responsive.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">Saltar al contenido principal</a>

    <header class="site-header" data-header>
      <nav class="navbar container" aria-label="Navegacion principal">
        <a class="brand" href="#inicio" aria-label="FMK inicio">
          <img src="assets/icons/logo-fmk.svg" alt="" width="44" height="44" />
          <span>FMK Global</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-menu" data-nav-toggle>
          <span class="sr-only">Abrir menu</span>
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-menu" id="primary-menu" data-nav-menu>
          <li><a href="#sobre">Sobre nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a class="nav-cta" href="#contacto">Solicitar demo</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <section class="hero section" id="inicio">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <p class="eyebrow">Federacion digital de alto rendimiento</p>
            <h1>FMK Global Karate Platform</h1>
            <p class="hero-lead">Centraliza atletas, clubes, pagos, eventos, certificaciones y contenido federativo en una experiencia premium, segura y lista para crecer.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contacto">Solicitar demo</a>
              <a class="btn btn-secondary" href="#galeria">Ver plataforma</a>
            </div>
            <dl class="hero-stats" aria-label="Indicadores de plataforma">
              <div><dt>360</dt><dd>Gestion integral</dd></div>
              <div><dt>AA</dt><dd>Accesibilidad</dd></div>
              <div><dt>24/7</dt><dd>Operacion digital</dd></div>
            </dl>
          </div>
          <div class="hero-visual reveal delay-1">
            <img src="assets/images/dashboard-admin.png" alt="Vista del panel administrativo de FMK Global Karate Platform" />
          </div>
        </div>
      </section>

      <section class="section about" id="sobre">
        <div class="container split">
          <div class="section-copy reveal">
            <p class="eyebrow">Sobre nosotros</p>
            <h2>Una plataforma para federaciones que necesitan orden, velocidad y confianza.</h2>
          </div>
          <p class="section-text reveal delay-1">FMK Global conecta la gestion deportiva con una interfaz clara para administradores, directores, aspirantes y atletas. La arquitectura visual prioriza trazabilidad, rendimiento y una experiencia consistente en escritorio y movil.</p>
        </div>
      </section>

      <section class="section services" id="servicios">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Servicios</p>
            <h2>Operacion federativa en un solo ecosistema.</h2>
          </div>
          <div class="card-grid">
            <article class="glass-card reveal"><h3>Gestion de atletas</h3><p>Perfiles, grados, historial, documentos y postulaciones con informacion centralizada.</p></article>
            <article class="glass-card reveal delay-1"><h3>Eventos y campeonatos</h3><p>Calendarios, inscripciones, sedes, convocatorias y seguimiento de competencias.</p></article>
            <article class="glass-card reveal delay-2"><h3>Certificacion digital</h3><p>Emision, consulta y control de certificados con datos verificables.</p></article>
            <article class="glass-card reveal"><h3>Administracion financiera</h3><p>Historial de pagos, estados, comprobantes y visibilidad para equipos directivos.</p></article>
          </div>
        </div>
      </section>

      <section class="section features" id="caracteristicas">
        <div class="container feature-layout">
          <img class="feature-image reveal" src="assets/images/perfil-aspirante.png" alt="Pantalla de perfil del aspirante en la plataforma FMK" loading="lazy" />
          <div class="feature-list reveal delay-1">
            <p class="eyebrow">Caracteristicas</p>
            <h2>DiseÃ±ada para escalar sin perder control.</h2>
            <ul>
              <li>Interfaz responsive con lectura rapida de informacion clave.</li>
              <li>Componentes reutilizables para mantener consistencia visual.</li>
              <li>Animaciones suaves que respetan preferencias de movimiento reducido.</li>
              <li>HTML semantico, SEO tecnico y contraste compatible con WCAG AA.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section gallery" id="galeria">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Galeria</p>
            <h2>Vistas clave de la experiencia FMK.</h2>
          </div>
          <div class="gallery-grid" data-gallery>
            <button class="gallery-item reveal" type="button"><img src="assets/images/galeria-imagenes.png" alt="Modulo de galeria de imagenes FMK" loading="lazy" /></button>
            <button class="gallery-item reveal delay-1" type="button"><img src="assets/images/campeonatos.png" alt="Modulo de campeonatos mundiales FMK" loading="lazy" /></button>
            <button class="gallery-item reveal delay-2" type="button"><img src="assets/images/calendario.png" alt="Modulo de calendario de eventos FMK" loading="lazy" /></button>
            <button class="gallery-item reveal" type="button"><img src="assets/images/certificados.png" alt="Modulo de certificados digitales FMK" loading="lazy" /></button>
          </div>
        </div>
      </section>

      <section class="section testimonials">
        <div class="container">
          <div class="testimonial glass-card reveal">
            <p>"FMK Global transforma procesos fragmentados en una experiencia clara para atletas, clubes y directivos."</p>
            <strong>Comite tecnico federativo</strong>
          </div>
          <div class="testimonial glass-card reveal delay-1">
            <p>"La visibilidad de pagos, eventos y certificaciones reduce carga administrativa y mejora la toma de decisiones."</p>
            <strong>Direccion administrativa</strong>
          </div>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="container narrow">
          <div class="section-heading reveal">
            <p class="eyebrow">FAQ</p>
            <h2>Preguntas frecuentes</h2>
          </div>
          <details class="faq-item reveal"><summary>Se puede desplegar sin frameworks?</summary><p>Si. El proyecto usa HTML5, CSS3 y JavaScript Vanilla, por lo que puede publicarse en hosting estatico.</p></details>
          <details class="faq-item reveal"><summary>La landing es responsive?</summary><p>Si. La base es mobile first y se adapta a tablet, escritorio y pantallas amplias.</p></details>
          <details class="faq-item reveal"><summary>Incluye componentes separados?</summary><p>Si. La carpeta components contiene fragmentos HTML reutilizables para navbar, hero, galeria y footer.</p></details>
        </div>
      </section>

      <section class="section final-cta" id="contacto">
        <div class="container cta-panel reveal">
          <h2>Moderniza la gestion de tu federacion con una plataforma premium.</h2>
          <p>Una experiencia digital clara para operar, certificar, comunicar y crecer.</p>
          <a class="btn btn-primary" href="mailto:contacto@fmkglobal.org">Contactar equipo FMK</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <a class="brand" href="#inicio"><img src="assets/icons/logo-fmk.svg" alt="" width="40" height="40" /><span>FMK Global</span></a>
        <p>&copy; 2026 FMK Global Karate Platform. Todos los derechos reservados.</p>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>

    <div class="lightbox" data-lightbox hidden>
      <button type="button" class="lightbox-close" data-lightbox-close aria-label="Cerrar vista ampliada">Ã—</button>
      <img src="" alt="" data-lightbox-image />
    </div>

    <script src="js/components.js" defer></script>
    <script src="js/animations.js" defer></script>
    <script src="js/main.js" defer></script>
  </body>
</html>
```

### /js/animations.js

```
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
```

### /js/components.js

```
const componentRegistry = {
  navbar: "components/navbar.html",
  hero: "components/hero.html",
  gallery: "components/gallery.html",
  footer: "components/footer.html"
};

// Helper opcional para proyectos que quieran montar fragmentos HTML por demanda.
async function loadComponent(targetSelector, componentName) {
  const target = document.querySelector(targetSelector);
  const path = componentRegistry[componentName];
  if (!target || !path) return;

  const response = await fetch(path);
  if (!response.ok) throw new Error(`No se pudo cargar el componente: ${componentName}`);
  target.innerHTML = await response.text();
}
```

### /js/main.js

```
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const gallery = document.querySelector("[data-gallery]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

gallery?.addEventListener("click", (event) => {
  const button = event.target instanceof Element ? event.target.closest(".gallery-item") : null;
  const image = button?.querySelector("img");
  if (!image || !lightbox || !lightboxImage) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  lightboxClose?.focus();
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
};

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }
});
```

### /README.md

```
# FMK Global Karate Platform Landing

Landing page estatica, responsive y lista para despliegue en hosting estatico.

## Tecnologias

- HTML5 semantico
- CSS3 modular
- JavaScript Vanilla
- Sin frameworks ni dependencias obligatorias

## Estructura

- `index.html`: pagina principal optimizada para SEO.
- `css/`: estilos base, responsive y animaciones.
- `js/`: interaccion, animaciones y helper de componentes.
- `components/`: fragmentos HTML reutilizables.
- `assets/`: imagenes e iconos del proyecto.

## Despliegue

Sube el contenido de la carpeta `project` a cualquier hosting estatico. Tambien puedes abrir `index.html` directamente para una vista rapida, aunque se recomienda servirlo desde HTTP para futuras cargas dinamicas de componentes.

## Accesibilidad y rendimiento

Incluye navegacion semantica, enlace de salto, contraste AA, estados de foco visibles, carga diferida de imagenes secundarias, `prefers-reduced-motion` y metadatos SEO/Open Graph.
```

## Assets binarios incluidos

- /assets/images/calendario.png (318.644 bytes)
- /assets/images/campeonatos.png (368.931 bytes)
- /assets/images/certificados.png (431.387 bytes)
- /assets/images/dashboard-admin.png (367.414 bytes)
- /assets/images/galeria-imagenes.png (568.619 bytes)
- /assets/images/noticias.png (630.109 bytes)
- /assets/images/panel-director.png (287.772 bytes)
- /assets/images/perfil-aspirante.png (299.405 bytes)
