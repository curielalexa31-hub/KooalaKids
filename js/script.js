/* =====================================================================
   Koala Kids · Catálogo de disfraces — visor tipo libro
   PDF.js se carga desde CDN (ver index.html). No se empaqueta local.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) DATOS DE PRODUCTOS — extraídos manualmente de catalogo.pdf
   Cada producto: nombre, categoría, precio (min/max o texto), página PDF
   --------------------------------------------------------------------- */
const PRODUCTS = [
  // ---- Faldas ----
  { name: "Faldas lisas", category: "Faldas", priceMin: 220, priceMax: 235, page: 3 },
  { name: "Faldas floreadas", category: "Faldas", priceMin: 185, priceMax: 220, page: 3 },
  { name: "Falda de china poblana", category: "Faldas", priceMin: 215, priceMax: 265, page: 8 },
  { name: "Falda doble vuelo", category: "Faldas", priceMin: 360, priceMax: 400, page: 11 },

  // ---- Vestidos ----
  { name: "Vestido de Veracruz", category: "Vestidos", priceMin: 300, priceMax: 325, page: 4 },
  { name: "Vestido Nuevo León", category: "Vestidos", priceMin: 295, priceMax: 310, page: 4 },
  { name: "Vestido de la Piña", category: "Vestidos", priceMin: 290, priceMax: 320, page: 4 },
  { name: "Vestido de Aguascalientes", category: "Vestidos", priceMin: 390, priceMax: 390, page: 4 },
  { name: "Vestido de Jalisco", category: "Vestidos", priceMin: 290, priceMax: 530, page: 5 },
  { name: "Vestido floreado Adelitas", category: "Vestidos", priceMin: 270, priceMax: 270, page: 6 },
  { name: "Vestido Adelitas", category: "Vestidos", priceMin: 350, priceMax: 400, page: 6 },
  { name: "Vestido de Colima", category: "Vestidos", priceMin: 310, priceMax: 335, page: 7 },
  { name: "Vestido Azteca (incluye penacho)", category: "Vestidos", priceMin: 300, priceMax: 300, page: 7 },
  { name: "Vestido de Nayarit", category: "Vestidos", priceMin: 340, priceMax: 340, page: 7 },
  { name: "Vestido Yucateco", category: "Vestidos", priceMin: 290, priceMax: 320, page: 7 },
  { name: "Vestido de Chiapas", category: "Vestidos", priceMin: 290, priceMax: 290, page: 8 },
  { name: "Vestido de Chiapas bordado", category: "Vestidos", priceMin: 650, priceMax: 2500, page: 9 },
  { name: "Vestido Jalisco Gala", category: "Vestidos", priceMin: 660, priceMax: 3000, page: 9 },

  // ---- Trajes ----
  { name: "Traje de manta (manga corta)", category: "Trajes", priceMin: 160, priceMax: 210, page: 5 },
  { name: "Traje de manta (manga larga)", category: "Trajes", priceMin: 160, priceMax: 210, page: 5 },
  { name: "Manta niño (incluye camisa y pantalón)", category: "Trajes", priceMin: 160, priceMax: 210, page: 6 },
  { name: "Vestimenta de charro", category: "Trajes", priceMin: 535, priceMax: 870, page: 6 },
  { name: "Traje de Veracruz", category: "Trajes", priceMin: 370, priceMax: 450, page: 8 },
  { name: "Traje de charro niña", category: "Trajes", priceMin: 535, priceMax: 870, page: 8 },
  { name: "Manta bordada", category: "Trajes", priceMin: 235, priceMax: 265, page: 9 },
  { name: "Escaramuza", category: "Trajes", priceMin: 660, priceMax: 760, page: 9 },
  { name: "Traje de charro", category: "Trajes", priceMin: 360, priceMax: 370, page: 11 },

  // ---- Camisas y Blusas ----
  { name: "Camisa Pachuqueña", category: "Camisas y Blusas", priceMin: 185, priceMax: 195, page: 10 },
  { name: "Camisa de gallos", category: "Camisas y Blusas", priceMin: 230, priceMax: 250, page: 10 },
  { name: "Camisa de caballos", category: "Camisas y Blusas", priceMin: 230, priceMax: 300, page: 10 },
  { name: "Camisa Tricolor", category: "Camisas y Blusas", priceMin: 230, priceMax: 300, page: 10 },
  { name: "Blusa de olanes", category: "Camisas y Blusas", priceMin: 130, priceMax: 170, page: 11 },
  { name: "Tutú patrio", category: "Camisas y Blusas", priceMin: 145, priceMax: 195, page: 11 },
  { name: "Blusa con listón manga larga", category: "Camisas y Blusas", priceMin: 190, priceMax: 190, page: 18 },

  // ---- Personajes (niño/a) ----
  { name: "Miguel Hidalgo (niño/a)", category: "Personajes", priceMin: 250, priceMax: 250, page: 12 },
  { name: "Josefa Ortíz de Domínguez", category: "Personajes", priceMin: 250, priceMax: 250, page: 12 },
  { name: "Vicente Guerrero (niño)", category: "Personajes", priceMin: 250, priceMax: 290, page: 12 },
  { name: "Allende (niño)", category: "Personajes", priceMin: 250, priceMax: 250, page: 12 },
  { name: "Niños héroes", category: "Personajes", priceMin: 250, priceMax: 280, page: 13 },
  { name: "Aldama (niño)", category: "Personajes", priceMin: 250, priceMax: 280, page: 13 },
  { name: "Porfirio Díaz (niño)", category: "Personajes", priceMin: 260, priceMax: 290, page: 13 },
  { name: "Morelos (niño)", category: "Personajes", priceMin: 250, priceMax: 250, page: 13 },
  { name: "Iturbide (niño)", category: "Personajes", priceMin: 250, priceMax: 250, page: 13 },
  { name: "Cadete (niño)", category: "Personajes", priceMin: 250, priceMax: 280, page: 13 },

  // ---- Personajes (adulto) ----
  { name: "Miguel Hidalgo (adulto)", category: "Personajes", priceMin: 430, priceMax: 430, page: 14 },
  { name: "Cadete (adulto)", category: "Personajes", priceMin: 290, priceMax: 290, page: 14 },
  { name: "Morelos (adulto)", category: "Personajes", priceMin: 430, priceMax: 430, page: 14 },
  { name: "Allende (adulto)", category: "Personajes", priceMin: 430, priceMax: 430, page: 14 },
  { name: "Porfirio Díaz (adulto)", category: "Personajes", priceMin: 300, priceMax: 300, page: 15 },
  { name: "Vicente Guerrero (adulto)", category: "Personajes", priceMin: 290, priceMax: 290, page: 15 },
  { name: "Niño héroe (adulto)", category: "Personajes", priceMin: 290, priceMax: 290, page: 15 },
  { name: "Aldama (adulto)", category: "Personajes", priceMin: 290, priceMax: 290, page: 15 },

  // ---- Accesorios ----
  { name: "Sombreros de paja", category: "Accesorios", priceMin: 100, priceMax: 100, page: 16 },
  { name: "Caballitos con sonido", category: "Accesorios", priceMin: 140, priceMax: 180, page: 16 },
  { name: "Sombrero texano", category: "Accesorios", priceMin: 130, priceMax: 160, page: 16 },
  { name: "Pompones tricolor (par)", category: "Accesorios", priceMin: 100, priceMax: 100, page: 16 },
  { name: "Sombrero Allende", category: "Accesorios", priceMin: 100, priceMax: 100, page: 16 },
  { name: "Pompones de color (par)", category: "Accesorios", priceMin: 80, priceMax: 100, page: 16 },
  { name: "Sombrero de viejito", category: "Accesorios", priceMin: 100, priceMax: 100, page: 16 },
  { name: "Banda presidencial", category: "Accesorios", priceMin: 120, priceMax: 120, page: 16 },
  { name: "Sombrero de charro sencillo", category: "Accesorios", priceMin: 160, priceMax: 210, page: 17 },
  { name: "Sombrero de charro (calidad premium)", category: "Accesorios", priceMin: 260, priceMax: 350, page: 17 },
  { name: "Sombrero 4 piedras", category: "Accesorios", priceMin: 120, priceMax: 140, page: 17 },
  { name: "Rifle de juguete", category: "Accesorios", priceMin: 80, priceMax: 80, page: 17 },
  { name: "Sombrero de paja (charro)", category: "Accesorios", priceMin: 100, priceMax: 100, page: 17 },
  { name: "Sombrero caporal", category: "Accesorios", priceMin: 180, priceMax: 180, page: 17 },
  { name: "Fajilla roja para cintura", category: "Accesorios", priceMin: 50, priceMax: 50, page: 17 },
  { name: "Moño rojo/tricolor para charro", category: "Accesorios", priceMin: 85, priceMax: 85, page: 17 },
  { name: "Peluca de Miguel Hidalgo", category: "Accesorios", priceMin: 80, priceMax: 80, page: 18 },
  { name: "Carrilleras", category: "Accesorios", priceMin: 80, priceMax: 150, page: 18 },
  { name: "Espadas", category: "Accesorios", priceMin: 110, priceMax: 120, page: 18 },
  { name: "Rebozos", category: "Accesorios", priceMin: 120, priceMax: 150, page: 18 },
  { name: "Peineta Bailable Veracruz", category: "Accesorios", priceMin: 80, priceMax: 80, page: 18 },
  { name: "Paliacates", category: "Accesorios", priceMin: 40, priceMax: 40, page: 18 },
  { name: "Trenzas", category: "Accesorios", priceMin: 80, priceMax: 80, page: 18 },
  { name: "Sombrero revolucionario", category: "Accesorios", priceMin: 100, priceMax: 120, page: 19 },
  { name: "Huaraches", category: "Accesorios", priceMin: 150, priceMax: 180, page: 19 },
  { name: "Machetes", category: "Accesorios", priceMin: 49, priceMax: 49, page: 19 },
  { name: "Peinetas", category: "Accesorios", priceMin: 85, priceMax: 85, page: 19 },
  { name: "Trenza completa (par)", category: "Accesorios", priceMin: 190, priceMax: 190, page: 19 },
  { name: "Abanicos", category: "Accesorios", priceMin: 80, priceMax: 80, page: 19 },
  { name: "Collares", category: "Accesorios", priceMin: 20, priceMax: 20, page: 19 },
  { name: "Bigotes", category: "Accesorios", priceText: "Precio a consultar", page: 19 },
  { name: "Barbas", category: "Accesorios", priceText: "Precio a consultar", page: 19 },

  // ---- Destacados (Promoción Patria) ----
  { name: "Promo: Blusa de olanes con falda floreada", category: "Destacados", priceMin: 340, priceMax: 350, page: 20 },
  { name: "Promo: Blusa de olanes con falda lisa", category: "Destacados", priceMin: 340, priceMax: 350, page: 20 },
  { name: "Promo: Blusa de listón con falda lisa", category: "Destacados", priceMin: 390, priceMax: 410, page: 21 },
  { name: "Promo: Blusa de listón con falda floreada", category: "Destacados", priceMin: 360, priceMax: 380, page: 22 },
  { name: "Promo: Blusa bordada con falda lisa/floreada", category: "Destacados", priceMin: 360, priceMax: 380, page: 22 },
  { name: "Promo: Camisa de gallo/caballo, faja y pantalón caporal negro", category: "Destacados", priceText: "Precio a consultar", page: 23 },
  { name: "Promo: Camisa de gallo/caballo, faja y pantalón caporal rayas", category: "Destacados", priceText: "Precio a consultar", page: 23 },
  { name: "Promo: Camisa pachuqueña, faja y pantalón caporal rayas", category: "Destacados", priceText: "Precio a consultar", page: 24 },
  { name: "Promo: Camisa pachuqueña, faja y pantalón caporal negro", category: "Destacados", priceText: "Precio a consultar", page: 24 },
  { name: "Pantalón caporal rayas", category: "Destacados", priceMin: 210, priceMax: 300, page: 24 },
  { name: "Pantalón caporal negro", category: "Destacados", priceMin: 200, priceMax: 240, page: 24 },
];

/* ---------------------------------------------------------------------
   2) ESTADO Y CONFIG PDF.js
   --------------------------------------------------------------------- */
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const PDF_URL = "catalogo.pdf";
const ADJACENT_DURATION = 850; // ms, coincide con la transición CSS
const JUMP_FADE = 180; // ms

let pdfDoc = null;
let totalPages = 0;
let currentPage = 1;      // 1-indexed, página "de arriba" mostrada actualmente
let pageEls = [];         // [{ wrap, canvas, shade, rendered }]
let isAnimating = false;

const bookEl = document.getElementById("book");
const bookLoading = document.getElementById("bookLoading");
const bookError = document.getElementById("bookError");
const bookErrorMsg = document.getElementById("bookErrorMsg");
const loadingText = document.getElementById("loadingText");
const pageInput = document.getElementById("pageInput");
const pageTotalEl = document.getElementById("pageTotal");
const arrowPrev = document.getElementById("arrowPrev");
const arrowNext = document.getElementById("arrowNext");
const pillPrev = document.getElementById("pillPrev");
const pillNext = document.getElementById("pillNext");
const zoneLeft = document.getElementById("zoneLeft");
const zoneRight = document.getElementById("zoneRight");

/* ---------------------------------------------------------------------
   3) CARGA Y RENDERIZADO DEL PDF
   --------------------------------------------------------------------- */
async function initBook() {
  try {
    const loadingTask = pdfjsLib.getDocument(PDF_URL);
    pdfDoc = await loadingTask.promise;
    totalPages = pdfDoc.numPages;
    pageTotalEl.textContent = totalPages;
    pageInput.max = totalPages;

    // Aspect ratio real desde la primera página (no hardcodeado)
    const firstPage = await pdfDoc.getPage(1);
    const vp = firstPage.getViewport({ scale: 1 });
    bookEl.style.setProperty("--ar", (vp.width / vp.height).toFixed(5));

    buildPageShells();
    await renderAllPages();

    bookLoading.remove();
    setCurrentInstant(1);
    buildCategoryOptions();
    renderResults();
  } catch (err) {
    console.error("Error al cargar el catálogo:", err);
    showBookError();
  }
}

function showBookError() {
  bookLoading.hidden = true;
  bookError.hidden = false;
  const isFileProtocol = location.protocol === "file:";
  bookErrorMsg.innerHTML = isFileProtocol
    ? "Parece que abriste este archivo con doble clic. Por seguridad, los navegadores " +
      "bloquean la lectura de archivos locales así. Abre esta carpeta con un servidor " +
      "local, por ejemplo:<br><code>python3 -m http.server</code><br>y visita " +
      "<code>http://localhost:8000</code>. También funcionará sin problema una vez " +
      "subido a tu hosting."
    : "No se pudo leer <code>catalogo.pdf</code>. Verifica tu conexión a internet " +
      "(se necesita para cargar la librería PDF.js) y que el archivo esté junto a " +
      "index.html, luego recarga la página.";
}

function buildPageShells() {
  for (let i = 1; i <= totalPages; i++) {
    const wrap = document.createElement("div");
    wrap.className = "page";
    wrap.style.zIndex = String(totalPages - i + 1);

    const canvas = document.createElement("canvas");
    const shade = document.createElement("div");
    shade.className = "shade";

    wrap.appendChild(canvas);
    wrap.appendChild(shade);
    bookEl.appendChild(wrap);

    pageEls.push({ wrap, canvas, shade, rendered: false });
  }
}

async function renderAllPages() {
  const dpr = window.devicePixelRatio || 1;
  for (let i = 1; i <= totalPages; i++) {
    loadingText.textContent = `Cargando catálogo… ${i}/${totalPages}`;
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: 1 });

    // Renderiza a una resolución fija multiplicada por devicePixelRatio,
    // pero se muestra al 100% del contenedor vía CSS.
    const targetCssWidth = 620; // referencia; el CSS lo escala igualmente
    const scale = (targetCssWidth / viewport.width) * dpr * 1.2;
    const scaledViewport = page.getViewport({ scale });

    const canvas = pageEls[i - 1].canvas;
    canvas.width = Math.ceil(scaledViewport.width);
    canvas.height = Math.ceil(scaledViewport.height);
    const ctx = canvas.getContext("2d");

    await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
    pageEls[i - 1].rendered = true;
  }
}

/* ---------------------------------------------------------------------
   4) NAVEGACIÓN: volteo adyacente y salto rápido
   --------------------------------------------------------------------- */
function setCurrentInstant(target) {
  pageEls.forEach((p, idx) => {
    const num = idx + 1;
    p.wrap.classList.add("no-anim");
    p.wrap.style.transform = num < target ? "rotateY(-180deg)" : "rotateY(0deg)";
    p.wrap.style.zIndex = num < target ? String(idx + 1) : String(totalPages - idx);
    // fuerza reflow para que el próximo cambio sí anime
    void p.wrap.offsetHeight;
    p.wrap.classList.remove("no-anim");
  });
  currentPage = target;
  syncControls();
}

function syncControls() {
  pageInput.value = currentPage;
  arrowPrev.disabled = currentPage <= 1;
  pillPrev.disabled = currentPage <= 1;
  arrowNext.disabled = currentPage >= totalPages;
  pillNext.disabled = currentPage >= totalPages;
}

function goNext() {
  if (isAnimating || currentPage >= totalPages) return;
  flipAdjacent(currentPage, "forward");
}

function goPrev() {
  if (isAnimating || currentPage <= 1) return;
  flipAdjacent(currentPage - 1, "backward");
}

function flipAdjacent(pageIndex, direction) {
  // pageIndex es 1-indexado: la hoja física que va a girar
  const entry = pageEls[pageIndex - 1];
  if (!entry) return;
  isAnimating = true;
  entry.wrap.style.zIndex = "9999";
  entry.wrap.classList.add("flipping");

  requestAnimationFrame(() => {
    entry.wrap.style.transform =
      direction === "forward" ? "rotateY(-180deg)" : "rotateY(0deg)";
  });

  const onEnd = () => {
    entry.wrap.removeEventListener("transitionend", onEnd);
    entry.wrap.classList.remove("flipping");
    entry.wrap.style.zIndex =
      direction === "forward" ? String(pageIndex) : String(totalPages - pageIndex + 1);
    currentPage = direction === "forward" ? pageIndex + 1 : pageIndex;
    isAnimating = false;
    syncControls();
  };
  entry.wrap.addEventListener("transitionend", onEnd, { once: true });

  // Salvaguarda por si transitionend no dispara (tab en background, etc.)
  setTimeout(() => {
    if (isAnimating) onEnd();
  }, ADJACENT_DURATION + 150);
}

function jumpTo(target) {
  target = Math.max(1, Math.min(totalPages, target));
  if (target === currentPage || isAnimating) {
    if (target === currentPage) syncControls();
    return;
  }
  const isAdjacent = Math.abs(target - currentPage) === 1;
  if (isAdjacent) {
    if (target > currentPage) goNext();
    else goPrev();
    return;
  }

  isAnimating = true;
  bookEl.classList.add("jumping");
  setTimeout(() => {
    setCurrentInstant(target);
    requestAnimationFrame(() => {
      bookEl.classList.remove("jumping");
      setTimeout(() => { isAnimating = false; }, JUMP_FADE);
    });
  }, JUMP_FADE);
}

/* ---------------------------------------------------------------------
   5) CONTROLES: flechas, píldora, teclado, swipe, clic en el libro
   --------------------------------------------------------------------- */
arrowNext.addEventListener("click", goNext);
arrowPrev.addEventListener("click", goPrev);
pillNext.addEventListener("click", goNext);
pillPrev.addEventListener("click", goPrev);
zoneRight.addEventListener("click", goNext);
zoneLeft.addEventListener("click", goPrev);

pageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    commitPageInput();
    pageInput.blur();
  }
});
pageInput.addEventListener("blur", commitPageInput);
function commitPageInput() {
  const val = parseInt(pageInput.value, 10);
  if (!Number.isNaN(val)) jumpTo(val);
  else pageInput.value = currentPage;
}

document.addEventListener("keydown", (e) => {
  if (document.activeElement === pageInput) return;
  if (drawer.classList.contains("open")) return;
  if (e.key === "ArrowRight") goNext();
  else if (e.key === "ArrowLeft") goPrev();
  else if (e.key === "Home") jumpTo(1);
  else if (e.key === "End") jumpTo(totalPages);
});

// swipe táctil
let touchStartX = null;
const bookStageEl = document.querySelector(".book-stage");
bookStageEl.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
bookStageEl.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) goNext();
    else goPrev();
  }
  touchStartX = null;
}, { passive: true });

/* ---------------------------------------------------------------------
   6) DRAWER DE BÚSQUEDA
   --------------------------------------------------------------------- */
const openSearchBtn = document.getElementById("openSearch");
const closeSearchBtn = document.getElementById("closeSearch");
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const filterText = document.getElementById("filterText");
const filterCategory = document.getElementById("filterCategory");
const priceMinInput = document.getElementById("priceMinInput");
const priceMaxInput = document.getElementById("priceMaxInput");
const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const rangeFill = document.getElementById("rangeFill");
const clearFiltersBtn = document.getElementById("clearFilters");
const resultsList = document.getElementById("resultsList");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");

const priceable = PRODUCTS.filter((p) => typeof p.priceMin === "number");
const GLOBAL_MIN = Math.min(...priceable.map((p) => p.priceMin));
const GLOBAL_MAX = Math.max(...priceable.map((p) => p.priceMax));

function initRangeSlider() {
  [rangeMin, rangeMax].forEach((el) => {
    el.min = GLOBAL_MIN;
    el.max = GLOBAL_MAX;
  });
  rangeMin.value = GLOBAL_MIN;
  rangeMax.value = GLOBAL_MAX;
  priceMinInput.placeholder = GLOBAL_MIN;
  priceMaxInput.placeholder = GLOBAL_MAX;
  updateRangeFill();
}

function updateRangeFill() {
  const min = Number(rangeMin.value);
  const max = Number(rangeMax.value);
  const pctMin = ((min - GLOBAL_MIN) / (GLOBAL_MAX - GLOBAL_MIN)) * 100;
  const pctMax = ((max - GLOBAL_MIN) / (GLOBAL_MAX - GLOBAL_MIN)) * 100;
  rangeFill.style.left = pctMin + "%";
  rangeFill.style.width = Math.max(0, pctMax - pctMin) + "%";
}

rangeMin.addEventListener("input", () => {
  if (Number(rangeMin.value) > Number(rangeMax.value) - 5) {
    rangeMin.value = Math.max(GLOBAL_MIN, Number(rangeMax.value) - 5);
  }
  priceMinInput.value = rangeMin.value;
  updateRangeFill();
  renderResults();
});
rangeMax.addEventListener("input", () => {
  if (Number(rangeMax.value) < Number(rangeMin.value) + 5) {
    rangeMax.value = Math.min(GLOBAL_MAX, Number(rangeMin.value) + 5);
  }
  priceMaxInput.value = rangeMax.value;
  updateRangeFill();
  renderResults();
});
priceMinInput.addEventListener("input", () => {
  let v = priceMinInput.value === "" ? GLOBAL_MIN : Number(priceMinInput.value);
  v = Math.min(Math.max(v, GLOBAL_MIN), Number(rangeMax.value));
  rangeMin.value = v;
  updateRangeFill();
  renderResults();
});
priceMaxInput.addEventListener("input", () => {
  let v = priceMaxInput.value === "" ? GLOBAL_MAX : Number(priceMaxInput.value);
  v = Math.max(Math.min(v, GLOBAL_MAX), Number(rangeMin.value));
  rangeMax.value = v;
  updateRangeFill();
  renderResults();
});

function buildCategoryOptions() {
  const cats = [...new Set(PRODUCTS.map((p) => p.category))];
  cats.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    filterCategory.appendChild(opt);
  });
}

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  drawerOverlay.classList.add("open");
  setTimeout(() => filterText.focus(), 200);
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  drawerOverlay.classList.remove("open");
}
openSearchBtn.addEventListener("click", openDrawer);
closeSearchBtn.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});

filterText.addEventListener("input", renderResults);
filterCategory.addEventListener("change", renderResults);

clearFiltersBtn.addEventListener("click", () => {
  filterText.value = "";
  filterCategory.value = "";
  rangeMin.value = GLOBAL_MIN;
  rangeMax.value = GLOBAL_MAX;
  priceMinInput.value = "";
  priceMaxInput.value = "";
  updateRangeFill();
  renderResults();
});

function priceLabel(p) {
  if (p.priceText) return p.priceText;
  if (p.priceMin === p.priceMax) return `$${p.priceMin}`;
  return `$${p.priceMin} – $${p.priceMax}`;
}

function renderResults() {
  const q = filterText.value.trim().toLowerCase();
  const cat = filterCategory.value;
  const min = Number(rangeMin.value);
  const max = Number(rangeMax.value);

  const filtered = PRODUCTS.filter((p) => {
    if (q && !p.name.toLowerCase().includes(q)) return false;
    if (cat && p.category !== cat) return false;
    if (typeof p.priceMin === "number") {
      // el producto entra si su rango de precio se solapa con el filtro
      if (p.priceMax < min || p.priceMin > max) return false;
    }
    return true;
  });

  resultsCount.textContent = `${filtered.length} producto${filtered.length === 1 ? "" : "s"}`;
  resultsList.innerHTML = "";
  noResults.hidden = filtered.length !== 0;

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <div class="result-card-top">
        <span class="result-name">${p.name}</span>
        <span class="result-price">${priceLabel(p)}</span>
      </div>
      <div class="result-meta">
        <span class="result-tag">${p.category}</span>
        <button class="result-view" type="button">Ver · pág. ${p.page}</button>
      </div>
    `;
    card.querySelector(".result-view").addEventListener("click", () => {
      jumpTo(p.page);
      closeDrawer();
    });
    resultsList.appendChild(card);
  });
}

/* ---------------------------------------------------------------------
   7) ARRANQUE
   --------------------------------------------------------------------- */
initRangeSlider();
initBook();
