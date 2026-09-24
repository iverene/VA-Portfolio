import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    }
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact email="hello@example.com" links={[]} />
      </main>
      <Footer email="hello@example.com" />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
