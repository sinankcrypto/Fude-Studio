import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Container from "./components/common/Container";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio";
import Video from "./components/Video";
import Clients from "./components/layout/Clients";
import Team from "./components/layout/Team";

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth momentum mouse scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Portfolio />
      <Clients />
      <Team />
      <Footer />
    </Container>
  );
}

export default App;