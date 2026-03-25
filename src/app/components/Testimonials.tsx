import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amanda Silva",
    role: "Emagrecimento",
    text: "Atendimento incrível, totalmente personalizado!",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    role: "Atleta Amador",
    text: "Finalmente encontrei uma nutricionista que entende minha rotina",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Saúde Feminina",
    text: "Resultados reais sem sofrimento",
    rating: 5,
  },
  {
    name: "Carlos Rodrigues",
    role: "Nutrição Esportiva",
    text: "Acompanhamento profissional de alto nível. Resultados visíveis em poucas semanas!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem meus pacientes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Histórias reais de transformação
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div>
              <div className="font-bold text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-300">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}