import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import OrganicHero from "./components/OrganicHero/OrganicHero";
import Services from "./components/Services/Services";
import Spotlight from "./components/Spotlight/Spotlight";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Spotlight />
      <About />
      <OrganicHero />
      <Services />
      <Testimonials />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;
