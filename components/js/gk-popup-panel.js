// This component is used to trail the popup menu when a nav button is pressed

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

    panelEl.append(contentEl);
    parent.appendChild(panelEl);

    let openState = false;
    let activeButtonId = '';
    let panelConfig = null;

    function isOpen() { return openState; }

    function render() {
        contentEl.innerHTML = ``;
        if (panelConfig?.render) {
            panelConfig.render({ panelEl: contentEl, buttonId: activeButtonId });
        } else {
            const p = document.createElement('div');
            p.style.padding = '18px';
            p.textContent = `Panel "${activeButtonId}"`;
            contentEl.appendChild(p);
        }
    }

    function open(buttonId, cfg) {
        openState = true;
        activeButtonId = buttonId;
        panelConfig = cfg ?? null;

        render();
        panelEl.setAttribute('data-state', 'open');
    }

    function close() {
        openState = false;
        panelEl.setAttribute('data-state', 'closed');
    }

    function destroy() {
        panelEl.remove();
    }

    return { open, close, destroy, isOpen };
}
