import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  {
    title: "Nada de dietas prontas",
    description:
      "Esqueça as dietas genéricas. Aqui você tem um acompanhamento individual",
  },
  {
    title: "Estratégia personalizada",
    description:
      "Cada plano é único e desenvolvido especialmente para você e seus objetivos",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Suporte constante para ajustar e otimizar seus resultados",
  },
  {
    title: "Foco em resultado real",
    description:
      "Estratégia baseada em ciência para alcançar seus objetivos de forma sustentável",
  },
];

export function Differentials() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cada paciente é único. Seu plano também.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um atendimento que vai além do básico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#2ECC71]/10 p-2 rounded-full flex-shrink-0 border border-[#2ECC71]/20">
                <CheckCircle2 className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
              "Acredito que a nutrição deve ser prática, sustentável e
              prazerosa. Sem radicalismos, apenas ciência e bom senso."
            </blockquote>
            <p className="mt-6 text-lg opacity-90">— Marcela Mosconi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}