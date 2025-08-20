import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  try {
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
  } catch (e) {}

  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
