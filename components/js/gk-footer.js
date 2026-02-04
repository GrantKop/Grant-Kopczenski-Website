// This component is used for keeping the copyright footer up to date on all of my pages
// DEPRECATED 

class GKFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <p>© 2025-${year} Grant Kopczenski. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("gk-footer", GKFooter);
