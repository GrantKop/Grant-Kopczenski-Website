// This is used for each HTML template I use on the site
const templateCache = new Map();

/**
 * Loads a <template id="..."> from an external HTML file and caches it.
 * @param {string} url - e.g. "/components/html/gk-card.html"
 * @param {string} templateId - e.g. "gk-card"
 * @returns {Promise<HTMLTemplateElement>}
 */
export async function loadTemplate(url, templateId) {
    const key = `${url}#${templateId}`;
    if (templateCache.has(key)) return templateCache.get(key);
    
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) throw new Error(`Failed to load template: ${url} (${res.status})`);
    
    const html = await res.text();
    const host = document.createElement("div");
    host.innerHTML = html;
    
    const tpl = host.querySelector(`template#${templateId}`);
    if (!tpl) throw new Error(`Template "${templateId}" not found in ${url}`);
    
    templateCache.set(key, tpl);
    return tpl;
}
