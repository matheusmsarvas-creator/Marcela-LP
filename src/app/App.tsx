import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Authority } from "./components/Authority";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Differentials } from "./components/Differentials";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Athletes } from "./components/Athletes";
import { Booking } from "./components/Booking";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Authority />
      <About />
      <Services />
      <Differentials />
      <Process />
      <Testimonials />
      <Athletes />
      <Booking />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;