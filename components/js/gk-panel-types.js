import { loadTemplate } from "/components/js/gk-templates.js";

export async function renderCardsPanel({ panelEl, cards, maxPerRow = 4 }) {
    const pad = document.createElement("div");
    pad.className = "gk-popup-panel__pad";

    const grid = document.createElement("div");
    grid.className = "gk-cards";
    grid.style.setProperty("--gk-cards-per-row", String(maxPerRow));

    pad.appendChild(grid);
    panelEl.appendChild(pad);

    const tpl = await loadTemplate("/components/html/gk-card.html", "gk-card");

    for (const c of cards) {
        const node = tpl.content.firstElementChild.cloneNode(true);

        node.href = c.href;

        const img = node.querySelector(".gk-card__img");
        const title = node.querySelector(".gk-card__title");
        const desc = node.querySelector(".gk-card__desc");

        title.textContent = c.title;

        if (c.img) {
            img.src = c.img;
            img.alt = c.alt ?? c.title;
        } else {
            img.remove();
            node.querySelector(".gk-card__media")?.classList.add("gk-card__media--placeholder");
        }

        if (c.desc && c.desc.trim()) {
            desc.textContent = c.desc;
        } else {
            desc.remove();
        }

        grid.appendChild(node);
    }   
}
