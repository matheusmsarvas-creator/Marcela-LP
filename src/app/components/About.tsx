import { motion } from "motion/react";
import { Award, GraduationCap, Heart } from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1770223722037-8dc5d3dff8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbiUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzQ0MDU3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  {
    icon: Award,
    title: "Nutricionista clínica e esportiva",
    description: "Especialização em performance e resultados",
  },
  {
    icon: GraduationCap,
    title: "Certificação internacional",
    description: "Barça Innovation Hub",
  },
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Planos alimentares adaptados à sua rotina",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-[#2ECC71]/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conheça a profissional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformando vidas através da nutrição personalizada e baseada em
            ciência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Marcela Mosconi"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#2ECC71] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Marcela Mosconi
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou Marcela Mosconi, nutricionista clínica e esportiva.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Meu trabalho é simples: entender você como único e criar um plano
              alimentar que realmente funcione na sua rotina.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Sem dietas genéricas. Sem extremismos. Apenas estratégia,
              constância e resultado.
            </p>

            <div className="space-y-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#2ECC71]/10 p-3 rounded-lg border border-[#2ECC71]/20">
                    <item.icon className="w-6 h-6 text-[#2ECC71]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}