// opens a panel based on hash when html is loaded
export function openMenuFromHash({ menuEl, map, delay = 850 }) {
  const run = () => {
    const h = (location.hash || "").toLowerCase();

    const id = map[h];
    if (!id) return;

    const isOpen =
      menuEl.getAttribute("data-active-btn") === id &&
      menuEl.getAttribute("data-docked") === "1";
    if (isOpen) return;

    menuEl.querySelector(`[data-btn-id="${id}"]`)?.click();
  };

  setTimeout(run, delay);

  window.addEventListener("pageshow", (e) => {
    if (e.persisted) setTimeout(run, delay);
  });
}
