import Navbar from "./components/layout/Navbar.jsx";
import Section from "./components/layout/Section.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Section id="services"><h2>Services</h2></Section>
        <Section id="skills"><h2>Skills</h2></Section>
        <Section id="portfolio"><h2>Portfolio</h2></Section>
        <Section id="experience"><h2>Experience</h2></Section>
        <Section id="contact"><h2>Contact</h2></Section>
      </main>
      <Footer email="hello@example.com" />
    </>
  );
}
