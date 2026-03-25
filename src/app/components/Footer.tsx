import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Marcela Mosconi
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nutricionista clínica e esportiva especializada em
                transformações reais e sustentáveis. Certificação internacional
                pelo Barça Innovation Hub.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#E1306C" }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#1877F2" }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#0A66C2" }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@marcelamosconi.com.br"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@marcelamosconi.com.br
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Horário</h4>
            <div className="space-y-2 text-sm">
              <p>Segunda a Sexta</p>
              <p className="text-white font-semibold">8:00 - 19:00</p>
              <p className="mt-4">Sábado</p>
              <p className="text-white font-semibold">9:00 - 13:00</p>
              <p className="mt-4 text-gray-500">Domingo: Fechado</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Marcela Mosconi - Nutricionista. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
