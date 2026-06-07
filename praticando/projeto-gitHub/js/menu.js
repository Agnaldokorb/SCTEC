const nav = document.querySelector("header nav");
const menuToggle = document.querySelector(".menu-toggle");

if (nav) {
  const shrinkAt = 30;
  const desktopBreakpoint = 760;

  function closeMenu() {
    nav.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  }

  function toggleMenu() {
    const isOpen = nav.classList.toggle("menu-open");
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    menuToggle?.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  }

  function updateMenuState() {
    const shouldShrink = window.scrollY > shrinkAt;
    nav.classList.toggle("menu-shrink", shouldShrink);
  }

  window.addEventListener("scroll", updateMenuState, { passive: true });
  menuToggle?.addEventListener("click", toggleMenu);
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > desktopBreakpoint) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  updateMenuState();
}
