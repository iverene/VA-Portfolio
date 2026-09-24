import Lenis from "lenis";

let lenis = null;

export function initLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  lenis = new Lenis({ duration: 1.1 });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

export function scrollToTopInstant() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}
