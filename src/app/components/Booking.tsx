import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle2 } from "lucide-react";

const availableTimes = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];
    
    // Start from today and show next 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        days.push(date);
      }
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Here you would integrate with Google Calendar API
    // For now, we'll show a success message
    console.log("Agendamento:", {
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });

    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedDate(null);
      setSelectedTime("");
      setFormData({ name: "", email: "", phone: "", service: "" });
    }, 5000);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("pt-BR", { weekday: "short" });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-br from-[#2ECC71]/5 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Agendamento confirmado!
            </h3>
            <p className="text-xl text-gray-600 mb-2">
              Sua consulta foi agendada para:
            </p>
            <p className="text-2xl font-bold text-[#2ECC71] mb-6">
              {selectedDate?.toLocaleDateString("pt-BR")} às {selectedTime}
            </p>
            <p className="text-gray-600">
              Você receberá uma confirmação por e-mail e WhatsApp com todos os
              detalhes.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-[#2ECC71]/5 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agende sua consulta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o melhor dia e horário para sua primeira consulta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Calendar & Time */}
            <div className="p-8 bg-gradient-to-br from-[#2ECC71]/5 to-white">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-[#2ECC71]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Selecione uma data
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2">
                  {calendarDays.map((date, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-xl text-center transition-all ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white shadow-lg"
                          : "bg-white border border-gray-200 hover:border-[#2ECC71] hover:shadow-md"
                      }`}
                    >
                      <div className="text-xs opacity-70">
                        {getDayName(date)}
                      </div>
                      <div className="text-lg font-bold">{formatDate(date)}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#2ECC71]" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Escolha o horário
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl font-semibold transition-all ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white shadow-lg"
                            : "bg-white border border-gray-200 hover:border-[#2ECC71] hover:shadow-md"
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Side - Form */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Seus dados
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 transition-all outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/20 transition-all outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="emagrecimento">Emagrecimento</option>
                    <option value="esportiva">Nutrição Esportiva</option>
                    <option value="feminina">Nutrição Feminina</option>
                    <option value="infantil">Atendimento Infantil</option>
                  </select>
                </div>

                {selectedDate && selectedTime && (
                  <div className="bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Consulta agendada para:</strong>
                      <br />
                      {selectedDate.toLocaleDateString("pt-BR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}{" "}
                      às {selectedTime}
                    </p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedDate && selectedTime
                      ? "bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Confirmar agendamento
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Ao confirmar, você receberá um e-mail e WhatsApp com os
                  detalhes da consulta
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-[#2ECC71]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Fácil e rápido</h4>
            <p className="text-sm text-gray-600">
              Agende em poucos cliques
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-[#3498DB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#3498DB]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Confirmação automática</h4>
            <p className="text-sm text-gray-600">
              Receba por e-mail e WhatsApp
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#2ECC71]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Flexível</h4>
            <p className="text-sm text-gray-600">
              Remarque quando precisar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
