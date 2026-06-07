const bg = document.getElementById("interactive-bg");
const cursorGlow = document.querySelector(".cursor-glow");

document.getElementById("ano").textContent = new Date().getFullYear();

if (bg && cursorGlow) {
  let lastHoverPulse = 0;

  function createPulse(x, y) {
    const ring = document.createElement("span");
    ring.className = "pulse-ring";
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    bg.appendChild(ring);
    window.setTimeout(() => ring.remove(), 680);
  }

  function handleMouseMove(event) {
    bg.style.setProperty("--cursor-x", `${event.clientX}px`);
    bg.style.setProperty("--cursor-y", `${event.clientY}px`);
    bg.style.setProperty("--cursor-opacity", "1");

    const now = performance.now();
    if (now - lastHoverPulse > 80) {
      createPulse(event.clientX, event.clientY);
      lastHoverPulse = now;
    }
  }
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      bg.style.setProperty("--cursor-x", `${touch.clientX}px`);
      bg.style.setProperty("--cursor-y", `${touch.clientY}px`);
      bg.style.setProperty("--cursor-opacity", "1");

      const now = performance.now();
      if (now - lastHoverPulse > 95) {
        createPulse(touch.clientX, touch.clientY);
        lastHoverPulse = now;
      }
    },
    { passive: true },
  );

  document.addEventListener("mouseleave", () => {
    bg.style.setProperty("--cursor-opacity", "0");
  });
}
