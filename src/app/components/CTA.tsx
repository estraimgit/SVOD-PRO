import { motion } from 'motion/react';
import { Rocket, Mail, Github } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Готовы начать работу с СВОД?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к образовательным учреждениям и корпорациям, 
            которые уже используют СВОД для интерактивных опросов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Запросить демо
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Связаться с нами
            </motion.button>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70 mb-4">
              Открытый исходный код
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              Посмотреть на GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
