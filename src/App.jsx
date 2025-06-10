import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
