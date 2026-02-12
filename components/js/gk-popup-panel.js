// This component is used to trail the popup menu when a nav button is pressed

import { renderPanelByType } from "/components/js/gk-panel-renderers.js";

/**
 * @param {{
 *   parent?: HTMLElement,
 *   className?: string,
 * }} opts
 */

export function mountPopupPanel(options = {}) {
    const parent = options.parent ?? document.body;

    const panelEl = document.createElement('div');
    panelEl.className = options.className ?? 'gk-popup-panel';
    panelEl.setAttribute('data-state', 'closed');

    const contentEl = document.createElement('div');
    contentEl.className = 'gk-popup-panel__content';

    const innerEl = document.createElement("div");
    innerEl.className = "gk-popup-panel__inner";
    contentEl.appendChild(innerEl);

    panelEl.append(contentEl);
    parent.appendChild(panelEl);

    let openState = false;
    let activeButtonId = "";
    let panelConfig = null;
    let renderToken = 0;

    const FADE_MS = 600;

    function isOpen() { return openState; }

    function nextFrame() { return new Promise((r) => requestAnimationFrame(() => r())); }

    function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

    async function render() {
        innerEl.innerHTML = "";

        if (typeof panelConfig?.render === "function") {
            await panelConfig.render({ panelEl: innerEl, buttonId: activeButtonId });
            return;
        }

        if (panelConfig?.type) {
            await renderPanelByType(panelConfig, { panelEl: innerEl, buttonId: activeButtonId, });
            return;
        }

        const p = document.createElement("div");
        p.className = "gk-popup-panel__pad";
        p.textContent = `Panel "${activeButtonId}"`;
        innerEl.appendChild(p);
    }

    async function open(buttonId, cfg) {
        const token = ++renderToken;

        openState = true;
        activeButtonId = buttonId;
        panelConfig = cfg ?? null;

        const isAlreadyOpen = panelEl.getAttribute("data-state") === "open";
        try {
            if (isAlreadyOpen) {
                innerEl.classList.add("is-fading-out");
                await sleep(FADE_MS);
                if (token !== renderToken) return;
            }
          
            await render();
            if (token !== renderToken) return;
          
            await nextFrame();
            if (token !== renderToken) return;
          
            innerEl.classList.remove("is-fading-out");
            panelEl.setAttribute("data-state", "open");
        } catch (err) {
            console.error("Popup panel render failed:", err);

            innerEl.classList.remove("is-fading-out");

            const p = document.createElement("div");
            p.className = "gk-popup-panel__pad";
            p.textContent = "Something went wrong loading this panel.";
            innerEl.innerHTML = "";
            innerEl.appendChild(p);

            panelEl.setAttribute("data-state", "open");
        }
  }

    async function close() {
        if (!openState) return;

        ++renderToken;

        openState = false;
        innerEl.classList.add("is-fading-out");
        await sleep(FADE_MS);

        panelEl.setAttribute('data-state', 'closed');
        innerEl.classList.remove("is-fading-out");
    }

    function destroy() {
        panelEl.remove();
    }

    return { open, close, destroy, isOpen };
}
