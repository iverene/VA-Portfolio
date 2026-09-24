import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from "motion/react";
import { initLenis } from "./lib/lenis.js";
import './index.css'
import App from './App.jsx'

initLenis();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </StrictMode>,
)
