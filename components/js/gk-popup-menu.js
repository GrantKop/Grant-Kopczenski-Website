// This component is for the dynamic popup menu I use over my image showcases

import { mountPopupPanel } from "/components/js/gk-popup-panel.js";
import { PANELS } from "/components/js/gk-panels.js";

/**
* @param {PopupMenuOptions} options
* @returns {{
* el: HTMLElement;
* show: () => void;
* hide: () => void;
* setText: (title: string, subtitle: string, subtitleSecondary?: string) => void;
* setButtons: (buttons: PopupButton[]) => void;
* destroy: () => void;
* }}
*/

export function mountPopupMenu(options = {}) {
    const opts = normalize(options);
    const parent = opts.parent ?? document.body;

    const shell = document.createElement('div');
    shell.className = 'gk-popup-shell';
    shell.setAttribute("data-docked", "0");
    parent.appendChild(shell);

    const el = document.createElement('div');
    el.className = opts.className;
    el.setAttribute('aria-label', 'Popup menu');
    el.setAttribute('data-state', 'hidden');
    el.setAttribute('data-subtitle', 'a');
    el.setAttribute('data-docked', '0');
    el.setAttribute('data-active-btn', '');

    const inner = document.createElement('div');
    inner.className = 'gk-popup-menu__inner';

    const left = document.createElement('div');
    left.className = 'gk-popup-menu__left';

    const titleEl = document.createElement('div');
    titleEl.className = 'gk-popup-menu__title';
    titleEl.textContent = opts.title;

    const subtitleWrap = document.createElement('div');
    subtitleWrap.className = 'gk-popup-menu__subtitle-wrap';

    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'gk-popup-menu__subtitle';
    subtitleEl.textContent = opts.subtitle;

    const subtitleSecondaryEl = document.createElement('div');
    subtitleSecondaryEl.className = 'gk-popup-menu__subtitle gk-popup-menu__subtitle--secondary';
    subtitleSecondaryEl.textContent = opts.subtitleSecondary;
    
    subtitleWrap.append(subtitleEl, subtitleSecondaryEl);
    const icons = document.createElement('div');
    icons.className = "gk-popup-menu__icons";
    icons.innerHTML = `
      <a href="mailto:grant.kop9@gmail.com" title="Gmail" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.instagram.com/grant.kopczenski/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/grant-kopczenski/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/GrantKop" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://discord.com/users/private_boi" target="_blank" rel="noopener noreferrer" title="Discord" aria-label="Discord">
        <i class="fab fa-discord"></i>
      </a>
    `;
    left.append(titleEl, subtitleWrap, icons);

    const nav = document.createElement('nav');
    nav.className = 'gk-popup-menu__nav';
    nav.setAttribute('aria-label', 'Navigation');

    const panel = mountPopupPanel({
        parent: shell,
        className: 'gk-popup-panel',
    });

    let activeButtonId = '';

    const baseHeader = {
        title: opts.title,
        subtitle: opts.subtitle,
        subtitleSecondary: opts.subtitleSecondary,
    };

    let headerSwapToken = 0;

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    function stopSubtitleCycle() {
        if (subtitleFirstTimer != null) {
            window.clearTimeout(subtitleFirstTimer);
            subtitleFirstTimer = null;
        }
        if (subtitleTimer != null) {
            window.clearInterval(subtitleTimer);
            subtitleTimer = null;
        }
    }

    function startSubtitleCycle() {
        const hasSecondary = subtitleSecondaryEl.textContent.trim().length > 0;
        if (!hasSecondary || opts.subtitleCycleMs <= 0) return;
        if (subtitleTimer != null || subtitleFirstTimer != null) return;

        const firstMs = Math.max(
            0,
            Math.min(opts.subtitleFirstCycleMs ?? opts.subtitleCycleMs, opts.subtitleCycleMs)
        );

        const flip = () => {
            subtitleState = (subtitleState === 'a') ? 'b' : 'a';
            el.setAttribute('data-subtitle', subtitleState);
        };

        if (firstMs > 0 && firstMs < opts.subtitleCycleMs) {
            subtitleFirstTimer = window.setTimeout(() => {
                subtitleFirstTimer = null;
                flip();
                subtitleTimer = window.setInterval(flip, opts.subtitleCycleMs);
            }, firstMs);
        } else {
            subtitleTimer = window.setInterval(flip, opts.subtitleCycleMs);
        }
    }

    function cssMs(name, fallback) {
        const v = getComputedStyle(el).getPropertyValue(name).trim();
        const n = parseFloat(v);
        return Number.isFinite(n) ? n : fallback;
    }

    async function swapHeader({ title, subtitle, subtitleSecondary }, { big = true } = {}) {
        const token = ++headerSwapToken;

        const outMs = cssMs('--gk-header-out-ms', 220);
        const inMs  = cssMs('--gk-header-in-ms', 240);

        el.setAttribute('data-header-anim', 'out');
        await sleep(outMs);
        if (token !== headerSwapToken) return;

        titleEl.textContent = String(title ?? '');
        subtitleEl.textContent = String(subtitle ?? '');
        subtitleSecondaryEl.textContent = String(subtitleSecondary ?? '');

        stopSubtitleCycle();
        subtitleState = 'a';
        el.setAttribute('data-subtitle', 'a');
        startSubtitleCycle();

        el.setAttribute('data-header-big', big ? '1' : '0');
        el.setAttribute('data-header-anim', 'in');

        await sleep(inMs);
        if (token !== headerSwapToken) return;
        el.setAttribute('data-header-anim', 'idle');
    }

    function setHeaderForPanel(panelConfig) {
        swapHeader({
                title: panelConfig?.menuTitle ?? baseHeader.title,
                subtitle: panelConfig?.menuSubtitle ?? baseHeader.subtitle,
                subtitleSecondary: '',
            },
            { big: true }
        );
    }

    function restoreBaseHeader() {
        swapHeader(baseHeader, { big: false });
    }

    function setDocked(docked) {
        shell.setAttribute('data-docked', docked ? '1' : '0');
    }

    function setActiveButton(id) {
        activeButtonId = id || '';
        el.setAttribute('data-active-btn', activeButtonId);

        [...nav.querySelectorAll('.gk-popup-menu__btn')].forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.btnId === activeButtonId && panel.isOpen());
        });
    }

    function openPanel(buttonId, panelId) {
        const panelConfig = PANELS[panelId];
        if (!panelConfig) {
            console.warn("No panel config found for:", panelId);
            return;
        }

        setDocked(true);
        setActiveButton(buttonId);
        panel.open(buttonId, panelConfig);

        setHeaderForPanel(panelConfig);

        [...nav.querySelectorAll('.gk-popup-menu__btn')].forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.btnId === buttonId);
        });
    }

    function closePanel() {
        panel.close();
        setDocked(false);
        setActiveButton('');

        restoreBaseHeader();

        [...nav.querySelectorAll('.gk-popup-menu__btn')].forEach(btn => {
            btn.classList.remove('is-active');
        });
    }

    function togglePanel(buttonId, panelId) {
        const isSame = panel.isOpen() && activeButtonId === buttonId;
        if (isSame) closePanel();
        else openPanel(buttonId, panelId);
    }

    function renderButtons(btns) {
        nav.innerHTML = '';

        for (const b of btns) {
            const a = document.createElement('a');
            a.className = 'gk-popup-menu__btn' + (b.primary ? ' is-primary' : '');
            a.href = b.href ?? '#';
            a.textContent = b.label ?? '';
            a.dataset.btnId = b.id;

            if (b.title) a.title = b.title;
            if (b.ariaLabel) a.setAttribute('aria-label', b.ariaLabel);
            else if (b.title) a.setAttribute('aria-label', b.title);

            const hasPanelId = typeof b.panelId === 'string' && b.panelId.length > 0;
            const hasHandler = typeof b.onClick === 'function';

            if (hasPanelId || hasHandler) {
                a.addEventListener('click', (e) => {
                    e.preventDefault();

                    if (hasHandler) {
                        b.onClick({
                            toggle: () => togglePanel(b.id, b.panelId),
                            open: () => openPanel(b.id, b.panelId),
                            close: () => closePanel(),
                        });
                        return;
                    }
                    togglePanel(b.id, b.panelId);
                });
            }
            nav.appendChild(a);
        }
    }

    renderButtons(opts.buttons);

    const right = document.createElement('div');
    right.className = 'gk-popup-menu__right';

    const footer = document.createElement('div');
    footer.className = 'gk-popup-menu__footer';
    const year = new Date().getFullYear();
    footer.textContent = `© 2025-${year} Grant Kopczenski. All rights reserved.`;

    right.append(nav, footer);
    inner.append(left, right);
    el.appendChild(inner);
    shell.appendChild(el);

    let timer = null;
    let subtitleTimer = null;
    let subtitleFirstTimer = null;
    let subtitleState = 'a';

    function show() {
        el.setAttribute('data-state', 'visible');
        startSubtitleCycle();
    }

    function hide() {
        el.setAttribute('data-state', 'hidden');
        closePanel();
        stopSubtitleCycle();
    }

    function setText(title, subtitle, subtitleSecondary) {
        titleEl.textContent = String(title ?? '');
        subtitleEl.textContent = String(subtitle ?? '');
        subtitleSecondaryEl.textContent = String(subtitleSecondary ?? '');
    }

    function setButtons(buttons) {
        renderButtons(Array.isArray(buttons) ? buttons : []);
    }

    function destroy() {
        if (timer != null) { window.clearTimeout(timer); timer = null; }
        if (subtitleTimer != null) { window.clearInterval(subtitleTimer); subtitleTimer = null; }
        el.remove();
    }

    if (opts.delayMs > 0) timer = window.setTimeout(show, opts.delayMs);
    else show();

    return { el, show, hide, setText, setButtons, destroy };
}

function normalize(opts) {
    const buttons = Array.isArray(opts.buttons) ? opts.buttons : null;
    return {
        delayMs:        typeof opts.delayMs === 'number' ? opts.delayMs : 900,
        title:          typeof opts.title === 'string' ? opts.title : 'Title',
        subtitle:       typeof opts.subtitle === 'string' ? opts.subtitle : 'Subtitle Primary',
        subtitleSecondary:  typeof opts.subtitleSecondary === 'string' ? opts.subtitleSecondary : 'Subtitle Secondary',
        subtitleCycleMs:    typeof opts.subtitleCycleMs === 'number' ? opts.subtitleCycleMs : 8000,
        subtitleFirstCycleMs: typeof opts.subtitleFirstCycleMs === "number" ? opts.subtitleFirstCycleMs : 4500,
        buttons:        buttons && buttons.length 
            ? buttons
            : [
                { label: 'Button 1', href: '' },
                { label: 'Button 2', href: '' },
                { label: 'Button 3', href: '' },
            ],
        parent: opts.parent,
        className: typeof opts.className === 'string' ? opts.className : 'gk-popup-menu',
    };
}
