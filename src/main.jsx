import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from "motion/react";
import Lenis from "lenis";
import './index.css'
import App from './App.jsx'

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ duration: 1.1 });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </StrictMode>,
)
