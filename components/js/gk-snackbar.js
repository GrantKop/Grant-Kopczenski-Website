// This component is for my dynamic snackbar menu

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
    shell.setAttribute("data-expanded", "0");
    parent.appendChild(shell);

    const el = document.createElement('div');
    el.className = opts.className;
    el.setAttribute('aria-label', 'Popup menu');
    el.setAttribute('data-state', 'hidden');
    el.setAttribute('data-intro', '1');
    el.setAttribute('data-subtitle', 'a');
    el.setAttribute('data-docked', '0');
    el.setAttribute('data-active-btn', '');

    const inner = document.createElement('div');
    inner.className = 'gk-snackbar__inner';

    const left = document.createElement('div');
    left.className = 'gk-snackbar__left';

    const titleEl = document.createElement('div');
    titleEl.className = 'gk-snackbar__title';
    titleEl.textContent = opts.title;

    const subtitleWrap = document.createElement('div');
    subtitleWrap.className = 'gk-snackbar__subtitle-wrap';

    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'gk-snackbar__subtitle';
    subtitleEl.textContent = opts.subtitle;

    const subtitleSecondaryEl = document.createElement('div');
    subtitleSecondaryEl.className = 'gk-snackbar__subtitle gk-snackbar__subtitle--secondary';
    subtitleSecondaryEl.textContent = opts.subtitleSecondary;
    
    subtitleWrap.append(subtitleEl, subtitleSecondaryEl);
    const icons = document.createElement('div');
    icons.className = "gk-snackbar__icons";
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

    const navRow = document.createElement('div');
    navRow.className = 'gk-snackbar__navrow';

    const nav = document.createElement('nav');
    nav.className = 'gk-snackbar__nav';
    nav.setAttribute('aria-label', 'Navigation');

    const moreBtn = document.createElement('button');
    moreBtn.className = 'gk-snackbar__more';
    moreBtn.type = 'button';
    moreBtn.setAttribute('aria-label', 'More');
    moreBtn.setAttribute('aria-expanded', 'false');

    moreBtn.innerHTML = `<i class="fas fa-ellipsis-h"></i>`;

    navRow.append(nav, moreBtn);

    nav.setAttribute('aria-label', 'Navigation');

    const panel = mountPopupPanel({
      parent: shell,
      className: 'gk-popup-panel',
      onRoute: ({ panelId, buttonId }) => {
        openPanel(activeButtonId || buttonId || panelId, panelId);
      },
    });

    let activeButtonId = '';
    let currentPanelId = '';
    const buttonToPanelId = new Map();

    const baseHeader = {
        title: opts.title,
        subtitle: opts.subtitle,
        subtitleSecondary: opts.subtitleSecondary,
    };

    let headerSwapToken = 0;
    let headerIsSwapped = false;

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
    function nextFrame() { return new Promise((r) => requestAnimationFrame(() => r())); }

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

        el.setAttribute('data-header-anim', 'idle');
        await nextFrame();
        if (token !== headerSwapToken) return;

        el.setAttribute('data-header-anim', 'out');
        await nextFrame();
        if (token !== headerSwapToken) return;

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
        headerIsSwapped = true;
        swapHeader({
                title: panelConfig?.menuTitle ?? baseHeader.title,
                subtitle: panelConfig?.menuSubtitle ?? baseHeader.subtitle,
                subtitleSecondary: '',
            },
            { big: true }
        );
    }

    function restoreBaseHeader() {
        headerIsSwapped = false;
        swapHeader(baseHeader, { big: false });
    }

    function panelWantsHeaderSwap(cfg) {
        return cfg?.swapMenuHeader !== false;
    }

    function setDocked(docked) {
        shell.setAttribute('data-docked', docked ? '1' : '0');
    }

    function setActiveButton(id) {
        activeButtonId = id || '';
        el.setAttribute('data-active-btn', activeButtonId);

        [...nav.querySelectorAll('.gk-snackbar__btn')].forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.btnId === activeButtonId && panel.isOpen());
        });
    }

    function slugify(id) {
      return "#" + String(id ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");
    }

    function makeProjectsHash(group) {
      return group ? `#projects?group=${encodeURIComponent(group)}` : "#projects";
    }

    function groupFromPanelId(panelId) {
      switch (panelId) {
        case "home_projects_all":      return null;
        case "home_big_projects":      return "large";
        case "home_small_projects":    return "small";
        case "home_hardware_projects": return "hardware";
        default: return null;
      }
    }

    function parseHash() {
      const raw = window.location.hash || "";
      const [base, query = ""] = raw.split("?");
      const params = new URLSearchParams(query);
      return {
        base,
        group: params.get("group"),
      };
    }

    function panelFromHash() {
      const { base, group } = parseHash();
      if (base !== "#projects") return null;

      switch (group) {
        case "large":    return "home_big_projects";
        case "small":    return "home_small_projects";
        case "hardware": return "home_hardware_projects";
        default:         return "home_projects_all";
      }
    }

    function hashForButtonId(id) {
      switch (id) {
        case "Projects-All": return "#projects";
        case "Photos": return "#photos";
        case "3D-Prints": return "#prints";
        default: return slugify(id);
      }
    }

    function setHash(hash, { push = false } = {}) {
      const url = new URL(window.location.href);
      url.hash = hash || "";

      const state = { hash: url.hash, panelId: currentPanelId, btnId: activeButtonId };

      if (push) history.pushState(state, "", url);
      else history.replaceState(state, "", url);
    }

    function clearHash({ push = false } = {}) {
      setHash("", { push });
    }

    function openPanel(buttonId, panelId) {
        const nextCfg = PANELS[panelId];
        if (!nextCfg) {
            console.warn("No panel config found for:", panelId);
            return;
        }

        currentPanelId = panelId;

        setExpanded(false); 
        setDocked(true);
        setActiveButton(buttonId);
        panel.open(buttonId, nextCfg);

        const group = groupFromPanelId(panelId);
        const hash = (panelId === "home_projects_all" ||
                      panelId === "home_big_projects" ||
                      panelId === "home_small_projects" ||
                      panelId === "home_hardware_projects")
          ? makeProjectsHash(group)
          : hashForButtonId(buttonId);
        
        setHash(hash, { push: true });

        const nextSwaps  = panelWantsHeaderSwap(nextCfg);

        if (nextSwaps) {
            setHeaderForPanel(nextCfg);
        } else if (headerIsSwapped) {
            restoreBaseHeader();
        }

        [...nav.querySelectorAll('.gk-snackbar__btn')].forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.btnId === buttonId);
        });
    }

    function closePanel() {
        const panelId = buttonToPanelId.get(activeButtonId);
        const cfg = panelId ? PANELS[panelId] : null;

        panel.close();
        currentPanelId = '';

        setDocked(false);
        setExpanded(false);
        setActiveButton('');
        clearHash({ push: false });

        if (panelWantsHeaderSwap(cfg)) {
            restoreBaseHeader();
        }

        [...nav.querySelectorAll('.gk-snackbar__btn')].forEach(btn => {
            btn.classList.remove('is-active');
        });
    }

    function togglePanel(buttonId, panelId) {
      const targetPanelId = panelId;
      const isSameButton = panel.isOpen() && activeButtonId === buttonId;   

      if (isSameButton) {
        if (currentPanelId && currentPanelId !== targetPanelId) {
          openPanel(buttonId, targetPanelId);
        } else {
          closePanel();
        }
        return;
      } 

      openPanel(buttonId, targetPanelId);
    }

    function renderButtons(btns) {
        nav.innerHTML = '';
        buttonToPanelId.clear();

        for (const b of btns) {
            const a = document.createElement('a');
            a.className = 'gk-snackbar__btn' + (b.primary ? ' is-primary' : '');
            if (typeof b.href === "string" && b.href.length > 0) {
              a.href = b.href;
            } else {
              a.removeAttribute("href");
            }
            a.textContent = b.label ?? '';
            a.dataset.btnId = b.id;

            if (typeof b.panelId === 'string' && b.panelId.length > 0) {
                buttonToPanelId.set(b.id, b.panelId);
            }

            if (b.title) a.title = b.title;
            if (b.ariaLabel) a.setAttribute('aria-label', b.ariaLabel);
            else if (b.title) a.setAttribute('aria-label', b.title);

            const hasPanelId = typeof b.panelId === 'string' && b.panelId.length > 0;
            const hasHref    = typeof b.href === "string" && b.href.length > 0;
            const hasHandler = typeof b.onClick === 'function';

            a.addEventListener('click', (e) => {
                if (hasHref && !hasPanelId && !hasHandler) return;

                e.preventDefault();

                if (hasHandler) {
                    b.onClick({
                        toggle: () => togglePanel(b.id, b.panelId),
                        open:   () => openPanel(b.id, b.panelId),
                        close:  () => closePanel(),
                    });
                    return;
                }
                if (hasHref) {
                    window.location.href = b.href;
                    return;
                }
                if (hasPanelId) {
                    togglePanel(b.id, b.panelId);
                }
            });

            const isClickable = hasHref || hasPanelId || hasHandler;
            if (!isClickable) {
                a.removeAttribute("href");
                a.setAttribute("role", "article");
            }
            nav.appendChild(a);
        }
    }

    renderButtons(opts.buttons);

    const right = document.createElement('div');
    right.className = 'gk-snackbar__right';

    const footer = document.createElement('div');
    footer.className = 'gk-snackbar__footer';
    const year = new Date().getFullYear();
    footer.textContent = `© 2025-${year} Grant Kopczenski. All rights reserved.`;

    right.append(navRow, footer);
    inner.append(left, right);
    el.appendChild(inner);
    shell.appendChild(el);

    let timer = null;
    let subtitleTimer = null;
    let subtitleFirstTimer = null;
    let subtitleState = 'a';

    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isDocked()) return;

        setExpanded(shell.getAttribute('data-expanded') !== '1');
    });

    document.addEventListener('pointerdown', (e) => {
        if (isDocked()) return;
        if (shell.getAttribute('data-expanded') !== '1') return;

        const within = shell.contains(e.target);
        if (!within) setExpanded(false);
    });

    window.addEventListener("popstate", () => {
      const targetPanelId = panelFromHash();
      if (!targetPanelId) return;

      const cfg = PANELS[targetPanelId];
      if (!cfg) return;

      const btnId =
        targetPanelId === "home_projects_all"      ? "Projects-All" :
        targetPanelId === "home_big_projects"      ? "Projects-All" :
        targetPanelId === "home_small_projects"    ? "Projects-All" :
        targetPanelId === "home_hardware_projects" ? "Projects-All" :
        activeButtonId;

      currentPanelId = targetPanelId;
      setExpanded(false);
      setDocked(true);
      setActiveButton(btnId);
      panel.open(btnId, cfg);

      const nextSwaps = panelWantsHeaderSwap(cfg);
      if (nextSwaps) setHeaderForPanel(cfg);
      else if (headerIsSwapped) restoreBaseHeader();
    });

    function setExpanded(expanded) {
        shell.setAttribute('data-expanded', expanded ? '1' : '0');
        moreBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
    function isDocked() {
        return shell.getAttribute('data-docked') === '1';
    }

    function show() {
        el.setAttribute('data-state', 'visible');
        startSubtitleCycle();

        window.setTimeout(() => {
            el.removeAttribute('data-intro');
        }, 2000);
    }

    function hide() {
        el.setAttribute('data-state', 'hidden');
        closePanel();
        stopSubtitleCycle();
    }

    function setText(title, subtitle, subtitleSecondary) {
        headerSwapToken++;

        baseHeader.title = String(title ?? "");
        baseHeader.subtitle = String(subtitle ?? "");
        baseHeader.subtitleSecondary = String(subtitleSecondary ?? "");

        headerIsSwapped = false;

        titleEl.textContent = baseHeader.title;
        subtitleEl.textContent = baseHeader.subtitle;
        subtitleSecondaryEl.textContent = baseHeader.subtitleSecondary;

        el.setAttribute("data-header-anim", "idle");
        el.setAttribute("data-header-big", "0");

        stopSubtitleCycle();
        subtitleState = "a";
        el.setAttribute("data-subtitle", "a");
        startSubtitleCycle();
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
            : [],
        parent: opts.parent,
        className: typeof opts.className === 'string' ? opts.className : 'gk-snackbar',
        onRoute: typeof opts.onRoute === 'function' ? opts.onRoute : null,
    };
}
