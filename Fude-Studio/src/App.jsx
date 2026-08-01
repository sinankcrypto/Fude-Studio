import Container from "./components/common/Container";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio";
import Video from "./components/Video";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Portfolio />
      <Footer />
    </Container>

  );
}

export default App;