import { loadTemplate } from "/components/js/gk-templates.js";

function appendInline(el, text) {
  const s = String(text ?? "");

  const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*|_[^_\n]+_|`[^`\n]+`)/g;

  let last = 0;
  for (const m of s.matchAll(re)) {
    const i = m.index ?? 0;

    if (i > last) el.appendChild(document.createTextNode(s.slice(last, i)));

    const tok = m[0];

    if (tok.startsWith("**")) {
      const b = document.createElement("strong");
      b.textContent = tok.slice(2, -2);
      el.appendChild(b);
    } else if (tok.startsWith("*")) {
      const em = document.createElement("em");
      em.textContent = tok.slice(1, -1);
      el.appendChild(em);
    } else if (tok.startsWith("_")) {
      const em = document.createElement("em");
      em.textContent = tok.slice(1, -1);
      el.appendChild(em);
    } else if (tok.startsWith("`")) {
      const code = document.createElement("code");
      code.textContent = tok.slice(1, -1);
      el.appendChild(code);
    } else {
      el.appendChild(document.createTextNode(tok));
    }

    last = i + tok.length;
  }

  if (last < s.length) el.appendChild(document.createTextNode(s.slice(last)));
}

function makeEl(tag, text) {
  const el = document.createElement(tag);
  if (text != null && tag !== "code") appendInline(el, text);
  return el;
}

function clear(el) { el.innerHTML = ""; }

function appendBlocks(bodyEl, blocks){
  for (const b of blocks || []) {
    if (!b || typeof b !== "object") continue;
    if (b.type === "h1") bodyEl.appendChild(makeEl("h1", b.text));
    else if (b.type === "h2") bodyEl.appendChild(makeEl("h2", b.text));
    else if (b.type === "h3") bodyEl.appendChild(makeEl("h3", b.text));
    else if (b.type === "h4") bodyEl.appendChild(makeEl("h4", b.text));
    else if (b.type === "p") bodyEl.appendChild(makeEl("p", b.text));
    else if (b.type === "img") {
      const src = b.src ?? b.image;
      if (!src) continue;

      const figure = document.createElement("figure");
      figure.className = b.figureClass ?? "gk-project-about__figure";

      const img = document.createElement("img");
      img.className = b.className ?? "gk-project-about__img";
      img.src = src;

      img.alt = b.alt ?? "";
      img.loading = b.loading ?? "lazy";
      img.decoding = b.decoding ?? "async";

      if (b.width) img.width = b.width;
      if (b.height) img.height = b.height;

      figure.appendChild(img);

      if (b.caption) {
        const cap = document.createElement("figcaption");
        cap.className = "gk-project-about__caption";
        cap.textContent = b.caption;
        figure.appendChild(cap);
      }

      bodyEl.appendChild(figure);
    }
    else if (b.type === "code") {
      const figure = document.createElement("figure");
      figure.className = b.figureClass ?? "gk-project-about__code";

      const header = document.createElement("div");
      header.className = "gk-project-about__code-head";

      const meta = document.createElement("div");
      meta.className = "gk-project-about__code-meta";

      const name = document.createElement("div");
      name.className = "gk-project-about__code-name";
      name.textContent = b.filename ?? "";

      const lang = document.createElement("div");
      lang.className = "gk-project-about__code-lang";
      lang.textContent = (b.lang ?? "").toLowerCase();

      if (name.textContent) meta.appendChild(name);
      if (lang.textContent) meta.appendChild(lang);

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "gk-project-about__code-copy";
      copyBtn.textContent = "Copy";

      let codeText = String(b.code ?? "");
      codeText = codeText.replace(/\\\$\{/g, "${");
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy"), 900);
        } catch {
          copyBtn.textContent = "Failed";
          setTimeout(() => (copyBtn.textContent = "Copy"), 900);
        }
      });
    
      header.appendChild(meta);
      header.appendChild(copyBtn);
    
      const pre = document.createElement("pre");
      pre.className = "gk-project-about__pre";
    
      const code = document.createElement("code");
      code.className = "gk-project-about__code-inner";
      if (b.lang) code.setAttribute("data-lang", String(b.lang).toLowerCase());
      code.textContent = codeText;
    
      pre.appendChild(code);
    
      if ((b.filename || b.lang) || b.copy !== false) figure.appendChild(header);
      figure.appendChild(pre);
    
      if (b.caption) {
        const cap = document.createElement("figcaption");
        cap.className = "gk-project-about__caption";
        cap.textContent = b.caption;
        figure.appendChild(cap);
      }
    
      bodyEl.appendChild(figure);
    }
    else if (b.type === "ul") {
      const ul = document.createElement("ul");
      for (const it of (b.items || [])) ul.appendChild(makeEl("li", it));
      bodyEl.appendChild(ul);
    }
  }
}

function appendLinks(bodyEl, links) {
  const list = Array.isArray(links) ? links.filter(l => l?.href) : [];
  if (!list.length) return;

  const wrap = document.createElement("div");
  wrap.className = "gk-project-about__links";

  const title = document.createElement("div");
  title.className = "gk-project-about__links-title";
  title.textContent = "Additional Links";
  wrap.appendChild(title);

  const row = document.createElement("div");
  row.className = "gk-project-about__links-row";

  for (const l of list) {
    const a = document.createElement("a");
    a.className = "gk-project-about__link";
    a.href = l.href;
    a.textContent = l.text ?? "Link";

    const isExternal = /^https?:\/\//i.test(l.href);
    if (isExternal) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    row.appendChild(a);
  }

  wrap.appendChild(row);
  bodyEl.appendChild(wrap);
}

function firstTocId(toc) {
  for (const s of (toc || [])) {
    for (const it of (s.items || [])) {
      if (it?.id) return it.id;
    }
  }
  return null;
}

export async function renderProjectAboutPanel(panelConfig, { panelEl }) {
  const pad = document.createElement("div");
  pad.className = "gk-popup-panel__pad";
  panelEl.appendChild(pad);

  const tpl = await loadTemplate("/components/html/gk-project-about.html?v2", "gk-project-about");
  const root = tpl.content.firstElementChild.cloneNode(true);

  const tocEl = root.querySelector(".gk-project-about__toc");
  const bodyEl = root.querySelector(".gk-project-about__body");
  const contentEl = root.querySelector(".gk-project-about__content");

  if (!tocEl || !bodyEl || !contentEl) {
    throw new Error("gk-project-about panel template missing required elements");
  }

  appendLinks(bodyEl, panelConfig?.links);

  const toc = Array.isArray(panelConfig?.toc) ? panelConfig.toc : [];
  const pages = panelConfig?.pages && typeof panelConfig.pages === "object" ? panelConfig.pages : {};

    function renderPage(id){
    clear(contentEl);

    contentEl.scrollTop = 0;

    const page = pages[id];

    if (!page) {
      if (panelConfig?.menuTitle) contentEl.appendChild(makeEl("h2", panelConfig.menuTitle));
      contentEl.appendChild(makeEl("p", "No content for this section yet."));
      return;
    }

    if (typeof page.content === "string" && page.content.trim()) {
      contentEl.innerHTML = page.content;
      return;
    }

    appendBlocks(contentEl, page.blocks || []);
  }

  let activeId = panelConfig?.defaultPage ?? firstTocId(toc);

  function setActive(id) {
    activeId = id;
    tocEl.querySelectorAll(".gk-project-about__toc-item").forEach(a => {
      a.classList.toggle("is-active", a.getAttribute("data-id") === id);
    });
    renderPage(id);
  }
  
  clear(tocEl);

  for (const section of toc) {
    const secWrap = document.createElement("div");
    secWrap.className = "gk-project-about__toc-section";

    const title = document.createElement("div");
    title.className = "gk-project-about__toc-title";
    title.textContent = section?.title ?? "";
    secWrap.appendChild(title);

    const list = document.createElement("div");
    list.className = "gk-project-about__toc-list";

    for (const item of (section?.items || [])) {
      if (!item?.id) continue;

      const a = document.createElement("button");
      a.type = "button";
      a.className = "gk-project-about__toc-item";
      a.setAttribute("data-id", item.id);
      a.textContent = `- ${item.label ?? item.id}`;

      a.addEventListener("click", () => setActive(item.id));

      list.appendChild(a);
    }

    secWrap.appendChild(list);
    tocEl.appendChild(secWrap);
  }

  if (activeId) setActive(activeId);

  pad.appendChild(root);
}
