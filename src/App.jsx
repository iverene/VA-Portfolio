import Navbar from "./components/layout/Navbar.jsx";
import Section from "./components/layout/Section.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Section id="portfolio"><h2>Portfolio</h2></Section>
        <Experience />
        <Section id="contact"><h2>Contact</h2></Section>
      </main>
      <Footer email="hello@example.com" />
    </>
  );
}
