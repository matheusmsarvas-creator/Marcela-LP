import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Marcela Mosconi
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-[#2ECC71] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#2ECC71] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#2ECC71] transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-[#2ECC71] transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#2ECC71] transition-colors"
            >
              Contato
            </button>

            <motion.button
              onClick={() => scrollToSection("booking")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Agendar consulta
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-gray-700 hover:text-[#2ECC71] transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-[#2ECC71] transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-[#2ECC71] transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-gray-700 hover:text-[#2ECC71] transition-colors py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-[#2ECC71] transition-colors py-2"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="block w-full text-center bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white px-6 py-2.5 rounded-full font-medium shadow-lg"
            >
              Agendar consulta
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}