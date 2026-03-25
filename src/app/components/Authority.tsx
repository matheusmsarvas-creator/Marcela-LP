import { motion } from "motion/react";
import { Trophy } from "lucide-react";

const clubs = [
  { name: "Santos FC", color: "text-gray-800" },
  { name: "Corinthians", color: "text-gray-800" },
  { name: "Flamengo", color: "text-red-600" },
  { name: "São Paulo FC", color: "text-gray-800" },
];

export function Authority() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2ECC71]/10 to-[#3498DB]/10 px-6 py-3 rounded-full mb-4 border border-[#2ECC71]/20">
            <Trophy className="w-5 h-5 text-[#2ECC71]" />
            <span className="text-gray-700 font-medium">
              Experiência com atletas de alto rendimento
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div
                className={`text-2xl md:text-3xl font-bold ${club.color} opacity-60 hover:opacity-100 transition-opacity`}
              >
                {club.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Confiança de clubes e atletas profissionais
          </p>
        </motion.div>
      </div>
    </section>
  );
}