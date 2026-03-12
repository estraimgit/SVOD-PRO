import { motion } from 'motion/react';
import { UserCog, Presentation, Scan, TrendingUp } from 'lucide-react';

const functionalities = [
  {
    icon: UserCog,
    title: 'Для администраторов',
    subtitle: 'Полная веб-панель управления',
    features: [
      'Быстрое создание опросов (Single/Multiple Choice, числовые шкалы, матричные форматы)',
      'Управление медиа с автоматическим сжатием и удалением метаданных',
      'Real-time контроль сессии — активация и закрытие опросов в один клик',
      'Бесшовная веб-авторизация через Magic Links без логинов и паролей',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Presentation,
    title: 'Экран визуализации',
    subtitle: 'Live Web Dashboard',
    features: [
      'Мгновенный рендеринг каждого голоса через WebSocket',
      'Динамический QR-код для быстрого присоединения опоздавших',
      'Автоматическая аналитика с процентами и подсветкой лидеров',
      'Адаптивный UI для экранов любых форматов (16:9, 4:3)',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Scan,
    title: 'Для участников',
    subtitle: 'Нативное веб-голосование',
    features: [
      'Полная независимость от установки приложений',
      'Быстрый доступ через QR-код или ссылку в браузере',
      'Автоматическая Shadow-сессия без регистрации',
      'Защита от накруток — один человек = один голос',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Технологические преимущества',
    subtitle: 'Под капотом',
    features: [
      'Python 3 + FastAPI для высокой скорости обработки запросов',
      'React 18 с хуками состояния и Recharts для визуализации',
      'Асинхронная ОРМ SQLAlchemy 2.0 с поддержкой PostgreSQL',
      'Nginx + systemd для надежности 24/7',
    ],
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function Functionality() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Функциональные возможности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все необходимые инструменты для проведения опросов на высочайшем уровне
          </p>
        </motion.div>

        <div className="space-y-8">
          {functionalities.map((func, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden hover:border-purple-300 transition-colors">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Icon and Title */}
                  <div className={`md:w-1/3 p-8 bg-gradient-to-br ${func.gradient} text-white`}>
                    <func.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl mb-2">
                      {func.title}
                    </h3>
                    <p className="text-white/90">
                      {func.subtitle}
                    </p>
                  </div>

                  {/* Right side - Features */}
                  <div className="md:w-2/3 p-8">
                    <ul className="space-y-4">
                      {func.features.map((feature, fIndex) => (
                        <motion.li
                          key={fIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + fIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <span className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-br ${func.gradient}`} />
                          <span className="ml-4 text-gray-700">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
