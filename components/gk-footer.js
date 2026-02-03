class GKFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <p>© ${year} Grant Kopczenski. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("gk-footer", GKFooter);
