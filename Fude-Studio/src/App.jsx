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