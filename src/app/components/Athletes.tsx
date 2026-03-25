import { motion } from "motion/react";
import { Trophy, Target, Zap } from "lucide-react";

const athleteImage =
  "https://images.unsplash.com/photo-1760114852799-159fe9dccfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc3BvcnRzJTIwdHJhaW5pbmclMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzQ0MDU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  {
    icon: Trophy,
    title: "Alto rendimento",
    description: "Nutrição específica para atletas profissionais e amadores",
  },
  {
    icon: Target,
    title: "Objetivos claros",
    description: "Estratégias nutricionais focadas em performance",
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    description: "Otimização de energia e recuperação",
  },
];

export function Athletes() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${athleteImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#27AE60]/95 to-[#2ECC71]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              🏆 Performance de Elite
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nutrição de alta performance para quem quer ir além
            </h2>

            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Experiência comprovada com atletas de clubes profissionais. Leve
              sua performance ao próximo nível com uma nutrição científica e
              estratégica.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-white text-[#27AE60] px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all"
            >
              Agende sua avaliação
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-5xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-200">Atletas profissionais</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2">3</div>
                  <div className="text-gray-200">Clubes de futebol</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-gray-200">Resultados comprovados</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}