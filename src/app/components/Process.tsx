import { motion } from "motion/react";
import { ClipboardCheck, Calendar, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Avaliação completa",
    description:
      "Análise detalhada do seu histórico, objetivos, rotina e preferências alimentares",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Planejamento personalizado",
    description:
      "Desenvolvimento de um plano alimentar único, adaptado às suas necessidades",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Monitoramento contínuo com ajustes para otimizar seus resultados",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples e eficiente para alcançar seus objetivos
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2ECC71]/30 via-[#27AE60] to-[#3498DB]/30 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Circle on timeline */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#27AE60] to-[#2ECC71] rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mt-20 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="text-5xl font-bold text-[#2ECC71]/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-16"
            >
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-[#2ECC71] to-[#27AE60]/30"></div>
              )}

              {/* Icon Circle */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-r from-[#27AE60] to-[#2ECC71] rounded-full flex items-center justify-center shadow-lg">
                <step.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-[#2ECC71]/20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}