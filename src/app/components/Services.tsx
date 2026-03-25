import { motion } from "motion/react";
import { Scale, Dumbbell, Heart, Baby } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Emagrecimento",
    description:
      "Resultados sustentáveis sem sofrimento",
    color: "from-[#2ECC71] to-[#27AE60]",
  },
  {
    icon: Dumbbell,
    title: "Nutrição Esportiva",
    description:
      "Performance, energia e recuperação otimizadas",
    color: "from-[#3498DB] to-[#2980B9]",
  },
  {
    icon: Heart,
    title: "Nutrição Feminina",
    description:
      "Equilíbrio hormonal e bem-estar",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Baby,
    title: "Atendimento Infantil",
    description:
      "Introdução alimentar e acompanhamento especializado",
    color: "from-purple-500 to-indigo-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviços especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendimento personalizado para cada objetivo e necessidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
            >
              <div
                className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-[#2ECC71] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}