import { motion } from 'motion/react';
import { Code2, Database, Wifi, Lock } from 'lucide-react';

const techCategories = [
  {
    icon: Code2,
    title: 'Backend',
    technologies: [
      { name: 'Python 3', description: 'Основной язык разработки' },
      { name: 'FastAPI', description: 'Асинхронный веб-фреймворк' },
      { name: 'WebSockets', description: 'Стриминг данных в реальном времени' },
      { name: 'Asyncio', description: 'Неблокирующая обработка I/O' },
    ],
  },
  {
    icon: Database,
    title: 'База данных',
    technologies: [
      { name: 'SQLAlchemy 2.0', description: 'Асинхронная ОРМ' },
      { name: 'PostgreSQL', description: 'Промышленная СУБД' },
      { name: 'SQLite', description: 'Легковесная альтернатива' },
      { name: 'Alembic', description: 'Миграции схемы данных' },
    ],
  },
  {
    icon: Wifi,
    title: 'Frontend',
    technologies: [
      { name: 'React 18', description: 'UI библиотека с хуками' },
      { name: 'Recharts', description: 'Визуализация на базе D3.js' },
      { name: 'Axios', description: 'HTTP-клиент для API' },
      { name: 'TypeScript', description: 'Типобезопасность' },
    ],
  },
  {
    icon: Lock,
    title: 'Инфраструктура',
    technologies: [
      { name: 'Nginx', description: 'Прокси и балансировка' },
      { name: 'systemd', description: 'Auto-restart демон' },
      { name: 'Docker', description: 'Контейнеризация' },
      { name: 'Let\'s Encrypt', description: 'SSL-сертификаты' },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Технологический стек
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Современные технологии для выдерживания высоких пиковых нагрузок 
            и обеспечения микрозадержек в обработке запросов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, tIndex) => (
                  <motion.div
                    key={tIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + tIndex * 0.1 }}
                    className="border-l-2 border-purple-500 pl-4 py-2 hover:bg-gray-700/30 transition-colors rounded-r"
                  >
                    <div className="text-lg text-white">
                      {tech.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {tech.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-sm text-blue-100">Обработка</div>
            <div className="text-2xl">10000+</div>
            <div className="text-sm text-blue-100">запросов/сек</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-sm text-purple-100">Задержка</div>
            <div className="text-2xl">&lt; 50ms</div>
            <div className="text-sm text-purple-100">среднее время отклика</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-sm text-emerald-100">Надежность</div>
            <div className="text-2xl">99.9%</div>
            <div className="text-sm text-emerald-100">uptime гарантия</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
