// This component is for the slideshow of images on most of my pages

/**
 * Start a fullscreen-ish slideshow inside `parent` using Option B.
 * It loads `${folder}/${indexFile}` which must be `{ images: ["a.jpg", ...] }`.
 *
 * @param {ShowcaseOptions} options
 * @returns {Promise<{
 *   next: () => void,
 *   prev: () => void,
 *   goTo: (i:number) => void,
 *   pause: () => void,
 *   resume: () => void,
 *   destroy: () => void,
 *   getIndex: () => number,
 *   getSlides: () => string[],
 * }>}
 */
export async function startShowcase(options) {
    const opts = normalizeOptions(options);

    const folderUrl = ensureTrailingSlash(opts.folder);
    const indexUrl = folderUrl + opts.indexFile;

    const res = await fetch(indexUrl, { cache: opts.cache });
    if (!res.ok) {
        throw new Error(`Showcase: failed to load ${indexUrl} (HTTP ${res.status})`);
    }

    const data = await res.json();

    if (!data.images || !Array.isArray(data.images) || data.images.length === 0) {
        throw new Error(`Showcase: ${indexUrl} must contain { \"images\": [ ... ] }`);
    }

    const slides = data.images.map(name => folderUrl + encodePathPiece(name));

    return startShowcaseFromSlides({
        ...opts,
        slides,
    });
}


/**
 * (Internal) Start slideshow given full slide URLs.
 * @param {Omit<ShowcaseOptions,'folder'> & {slides: string[]}} opts
 */
function startShowcaseFromSlides(opts) {
    if (!opts.slides.length) throw new Error("Showcase: slides is empty");

    const parent = opts.parent ?? document.body;

    const root = document.createElement("div");
    root.className = "gk-img-showcase";
    parent.appendChild(root);

    const a = document.createElement("div");
    const b = document.createElement("div");
    a.className = "gk-img-showcase__layer is-visible";
    b.className = "gk-img-showcase__layer";

    root.append(a, b);

    let overlayEl = null;
    if (opts.overlay) {
        overlayEl = document.createElement("div");
        overlayEl.className = "gk-showcase__overlay";
        root.appendChild(overlayEl);
    }

    const slides = opts.slides.slice();
    if (opts.shuffle) shuffleInPlace(slides);

    let index = clampIndex(opts.startIndex, slides.length);
    let topIsA = true;
    let timer = null;
    let firstTimer = null;
    let paused = false;

    preload(slides);

    setBg(a, slides[index]);

    function goTo(i) {
        index = clampIndex(i, slides.length);

        const incoming = topIsA ? b : a;
        const outgoing = topIsA ? a : b;

        setBg(incoming, slides[index]);
        void incoming.offsetWidth;

        incoming.classList.add("is-visible");
        outgoing.classList.remove("is-visible");

        topIsA = !topIsA;
    }

    function next() { goTo(index + 1); }

    function previous() { goTo(index - 1); }

    function startTimer() {
        if (opts.intervalMs <= 0) return;
        stopTimer();

        const firstMs = Math.max(0, Math.min(opts.firstIntervalMs ?? opts.intervalMs, opts.intervalMs));
        if (firstMs > 0 && firstMs < opts.intervalMs) {
            firstTimer = window.setTimeout(() => {
                firstTimer = null;
                next();
                if (!paused) {
                    timer = window.setInterval(next, opts.intervalMs);
                }
            }, firstMs);
        } else {
            timer = window.setInterval(next, opts.intervalMs);
        }
    }

    function stopTimer() {
        if (firstTimer != null) {
            window.clearTimeout(firstTimer);
            firstTimer = null;
        }
        if (timer != null) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    function pause() {
        paused = true;
        stopTimer();
    }

    function resume() {
        if (!paused) return;
        paused = false;
        startTimer();
    }

    function destroy() {
        stopTimer();
        root.remove();
    }

    function getIndex() { return index; }

    function getSlides() { return slides.slice(); }

    startTimer();

    return { next, previous, goTo, pause, resume, destroy, getIndex, getSlides };
}

// helper functions
function normalizeOptions(o = {}) {
    if (!o.folder) throw new Error("Showcase: folder is required");
    return {
        folder:     o.folder,
        parent:     o.parent,
        intervalMs: typeof o.intervalMs === "number" ? o.intervalMs : 8000,
        firstIntervalMs: typeof o.firstIntervalMs === "number" ? o.firstIntervalMs : 4500,
        fadeMs:     typeof o.fadeMs === "number" ? o.fadeMs : 900,
        shuffle:    o.shuffle !== false,
        overlay:    o.overlay !== false,
        overlayCss: typeof o.overlayCss === "string" ? o.overlayCss : "",
        startIndex: typeof o.startIndex === "number" ? o.startIndex : 0,
        indexFile:  typeof o.indexFile === "string" ? o.indexFile : "index.json",
        cache:      o.cache ?? "no-store",
    };
}

function setBg(el, url) {
    el.style.backgroundImage = `url("${url}")`;
}

function preload(urls) {
    for (const u of urls) {
        const img = new Image();
        img.decoding = "async";
        img.src = u;
    }
}

function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function clampIndex(i, len) {
    if (len <= 0) return 0;
    const n = Math.floor(i);
    return ((n % len) + len) % len;
}

function ensureTrailingSlash(s) { 
    return s.endsWith("/") ? s : s + "/";
}

function encodePathPiece(name) {
    return name.split("/").map(encodeURIComponent).join("/");
}
