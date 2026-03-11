window.addEventListener("load", () => {
  const isSmallScreen = window.matchMedia("(max-width: 900px)").matches;
  const alreadyShown = sessionStorage.getItem("desktopNoticeShown");

  if (!isSmallScreen || alreadyShown) return;

  const banner = document.createElement("div");
  banner.className = "gk-mobile-alert";
  banner.setAttribute("role", "status");
  banner.innerHTML = `
    <div class="gk-desktop-notice__text">
      This site is best viewed on desktop.
    </div>
    <button
      class="gk-desktop-notice__dismiss"
      type="button"
      aria-label="Dismiss notice"
    >
      Dismiss
    </button>
  `;

  const dismissBtn = banner.querySelector(".gk-desktop-notice__dismiss");

  dismissBtn.addEventListener("click", () => {
    banner.remove();
    sessionStorage.setItem("desktopNoticeShown", "1");
  });

  document.body.appendChild(banner);
});
