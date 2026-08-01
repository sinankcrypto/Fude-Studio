import Container from "./components/common/Container";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Video />
      <Footer />
    </Container>

  );
}

export default App;