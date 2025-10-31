import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OrganicHero from "./components/OrganicHero/OrganicHero";
import Services from "./components/Services/Services";
import Spotlight from "./components/Spotlight/Spotlight";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Spotlight />
      </section>

      <section id="about">
        <About />
      </section>
      <OrganicHero />
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
