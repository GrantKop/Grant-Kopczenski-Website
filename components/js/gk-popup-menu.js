// This component is for the dynamic popup menu I use over my image showcases

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

    const el = document.createElement('div');
    el.className = opts.className;
    el.setAttribute('aria-label', 'Popup menu');
    el.setAttribute('data-state', 'hidden');
    el.setAttribute('data-subtitle', 'a');

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

    function renderButtons(btns) {
        nav.innerHTML = '';
        for (const b of btns) {
            const a = document.createElement('a');
            a.className = 'gk-popup-menu__btn' + (b.primary ? ' is-primary' : '');
            a.href = b.href;
            a.textContent = b.label;
            if (b.target) a.target = b.target;
            if (b.rel) a.rel = b.rel;
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
    parent.appendChild(el);

    let timer = null;
    let subtitleTimer = null;
    let subtitleState = 'a';

    function show() {
        el.setAttribute('data-state', 'visible');

        const hasSecondary = subtitleSecondaryEl.textContent.trim().length > 0;

        if (hasSecondary && opts.subtitleCycleMs > 0 && subtitleTimer == null) {
            subtitleTimer = window.setInterval(() => {
                subtitleState = (subtitleState === 'a') ? 'b' : 'a';
                el.setAttribute('data-subtitle', subtitleState);
            }, opts.subtitleCycleMs);
        }
    }

    function hide() {
        el.setAttribute('data-state', 'hidden');
        if (subtitleTimer != null) {
          window.clearInterval(subtitleTimer);
          subtitleTimer = null;
        }
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

    if (opts.delayMs > 0) {
        timer = window.setTimeout(show, opts.delayMs);
    } else {
        show();
    }

    return { el, show, hide, setText, setButtons, destroy };
}

function normalize(opts) {
    const buttons = Array.isArray(opts.buttons) ? opts.buttons : null;
    return {
        delayMs:        typeof opts.delayMs === 'number' ? opts.delayMs : 900,
        title:          typeof opts.title === 'string' ? opts.title : 'Grant Kopczenski',
        subtitle:       typeof opts.subtitle === 'string' ? opts.subtitle : 'Software Developer | Photographer | 3D Printer',
        subtitleSecondary:  typeof opts.subtitleSecondary === 'string' ? opts.subtitleSecondary : 'Project Portfolio',
        subtitleCycleMs:    typeof opts.subtitleCycleMs === 'number' ? opts.subtitleCycleMs : 8000,
        buttons:        buttons && buttons.length 
            ? buttons
            : [
                { label: 'Software Projects', href: '' },
                { label: 'Photography', href: '' },
                { label: '3D Prints', href: '' },
            ],
        parent: opts.parent,
        className: typeof opts.className === 'string' ? opts.className : 'gk-popup-menu',
    };
}
