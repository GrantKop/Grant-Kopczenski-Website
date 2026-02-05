import { renderCardsPanel } from "/components/js/gk-render-cards-panel.js";

const RENDERERS = {
    cards: renderCardsPanel,
    // photos: renderPhotosPanel,
};

export async function renderPanelByType(panelConfig, ctx) {
    const type = panelConfig?.type;
    const fn = RENDERERS[type];

    if (!fn) {
        const p = document.createElement("div");
        p.className = "gk-popup-panel__pad";
        p.textContent = `Unknown panel type: "${type}"`;
        ctx.panelEl.appendChild(p);
        return;
    }

    await fn(panelConfig, ctx);
}
