import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1601341348280-550b5e87281b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBudXRyaXRpb25pc3QlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDQwNTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2ECC71]/10 via-white to-[#3498DB]/10 pt-24"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ECC71]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#3498DB]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#27AE60]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-[#2ECC71]/10 text-[#27AE60] px-4 py-2 rounded-full text-sm font-medium border border-[#2ECC71]/20"
          >
            ✨ Nutrição de alto desempenho
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Transforme seu corpo e sua saúde com nutrição personalizada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Atendimento clínico e esportivo com foco em resultados reais, sem
            dietas prontas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#2ECC71]/30 transition-all flex items-center justify-center gap-2"
            >
              Agendar consulta
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all"
            >
              Saiba mais
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <img
              src={heroImage}
              alt="Marcela Mosconi - Nutricionista"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="text-4xl font-bold text-[#2ECC71]">500+</div>
            <div className="text-gray-700 font-medium">
              Pacientes transformados
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}