import { loadTemplate } from "/components/js/gk-templates.js";

export async function renderCardsPanel(panelConfig, { panelEl, panel }) {
    const MAX_PER_ROW = 4;

    const pad = document.createElement("div");
    pad.className = "gk-popup-panel__pad";

    const grid = document.createElement("div");
    grid.className = "gk-cards";
    grid.style.setProperty("--gk-cards-per-row", String(MAX_PER_ROW));

    pad.appendChild(grid);
    panelEl.appendChild(pad);

    const cards = panelConfig?.cards ?? panelConfig?.data?.cards ?? [];
    if (!Array.isArray(cards) || cards.length === 0) {
        const empty = document.createElement("div");
        empty.style.padding = "8px 0";
        empty.textContent = "No cards yet.";
        pad.appendChild(empty);
        return;
    }

    const tpl = await loadTemplate("/components/html/gk-card.html", "gk-card");

    const showcaseEnabled = !!panelConfig?.showcase;
    const showcaseCount   = Math.max(0, Number(panelConfig?.showcaseCount ?? 4));
    const showcaseTitle   = String(panelConfig?.showcaseTitle ?? "Showcase");
    const sectionTitle    = String(panelConfig?.sectionTitle ?? "All Items");

    const sortedCards = [...cards].sort((a, b) => {
      const at = String(a?.title ?? "").trim().toLowerCase();
      const bt = String(b?.title ?? "").trim().toLowerCase();
      return at.localeCompare(bt);
    });

    const showcaseCards = [];
    if (showcaseEnabled && showcaseCount > 0) {
      for (const c of sortedCards) {
        if (c?.showcase === true) {
          showcaseCards.push(c);
          if (showcaseCards.length >= showcaseCount) break;
        }
      }
    }

    function makeSectionHeader(title, underline = false) {
      const wrap = document.createElement("div");
      wrap.className = "gk-cards__section";

      const h = document.createElement("h3");
      h.className = "gk-cards__h" + (underline ? " gk-cards__h--underline" : "");
      h.textContent = title;

      wrap.appendChild(h);
      return wrap;
    }

    function makeGrid(perRow = MAX_PER_ROW) {
      const grid = document.createElement("div");
      grid.className = "gk-cards";
      grid.style.setProperty("--gk-cards-per-row", String(perRow));
      return grid;
    }

  function buildCardEl(c) {
    const cardEl = tpl.content.firstElementChild.cloneNode(true);

    cardEl.href = c.href || "";

    const media = cardEl.querySelector(".gk-card__media");
    const img   = cardEl.querySelector(".gk-card__img");
    const title = cardEl.querySelector(".gk-card__title");
    const desc  = cardEl.querySelector(".gk-card__desc");

    title.textContent = c.title ?? "";

    if (c.img) {
      if (img) {
        img.src = c.img;
        img.alt = c.alt ?? c.title ?? "";
      }
    } else {
      img?.remove();
      media?.classList.add("gk-card__media--placeholder");
    }

    if (c.desc && String(c.desc).trim()) {
      desc.textContent = c.desc;
    } else {
      desc?.remove();
    }

    const hasPanelId = typeof c.panelId === "string" && c.panelId.length > 0;
    const hasHref    = typeof c.href === "string" && c.href.length > 0 && c.href !== "#";

    if (hasPanelId) {
      cardEl.removeAttribute("href");
      cardEl.setAttribute("role", "button");
      cardEl.style.cursor = "pointer";

      cardEl.addEventListener("click", (e) => {
        e.preventDefault();
        panel?.routeTo(c.panelId);
      });

      cardEl.tabIndex = 0;
      cardEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          panel?.routeTo(c.panelId);
        }
      });
    } else if (hasHref) {
      cardEl.href = c.href;
    } else {
      cardEl.removeAttribute("href");
      cardEl.setAttribute("role", "article");
      cardEl.style.cursor = "default";
    }

    return cardEl;
  }

  if (showcaseCards.length > 0) {
    const showcaseHeader = makeSectionHeader(showcaseTitle, true);
    showcaseHeader.classList.add("gk-cards__section--showcase");

    const showcaseGrid = makeGrid(Math.min(showcaseCards.length, MAX_PER_ROW));
    showcaseGrid.classList.add("gk-cards--showcase");

    for (const c of showcaseCards) {
      showcaseGrid.appendChild(buildCardEl(c));
    }

    pad.appendChild(showcaseHeader);
    pad.appendChild(showcaseGrid);
  }

  const mainHeader = makeSectionHeader(sectionTitle, false);
  mainHeader.classList.add("gk-cards__section--main");
  
  const mainGrid = makeGrid(MAX_PER_ROW);

  for (const c of sortedCards) {
    mainGrid.appendChild(buildCardEl(c));
  }

  pad.appendChild(mainHeader);
  pad.appendChild(mainGrid);
}
