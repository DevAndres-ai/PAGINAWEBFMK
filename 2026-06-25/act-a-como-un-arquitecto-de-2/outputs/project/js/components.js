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
