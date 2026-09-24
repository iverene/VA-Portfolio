import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
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
