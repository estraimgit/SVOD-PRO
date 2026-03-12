import { motion } from 'motion/react';
import { Server, Monitor, Settings, Vote } from 'lucide-react';

const modules = [
  {
    icon: Server,
    title: 'Телекоммуникационное Ядро',
    subtitle: 'Backend',
    description: 'Серверная часть с REST API и менеджером WebSockets для мгновенного обмена данными. Единый центр агрегации всей логики.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Monitor,
    title: 'Экран Визуализации',
    subtitle: 'Web Dashboard',
    description: 'Frontend-приложение, выводящееся на проектор, экраны в зале или напрямую в онлайн-трансляцию (OBS/vMix).',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Settings,
    title: 'Модуль Управления',
    subtitle: 'Администрирование',
    description: 'Интерфейс для создания опросов, представленный защищенной веб-панелью с Magic Links авторизацией.',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    icon: Vote,
    title: 'Интерфейс Голосования',
    subtitle: 'Клиентская часть',
    description: 'Точка входа для прохождения опросов через веб-интерфейс и мини-приложения для мессенджеров (MAX, Telegram).',
    color: 'from-emerald-600 to-teal-600',
  },
];

export function Architecture() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Архитектура системы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Микросервисная архитектура с высокой производительностью и масштабируемостью. 
            Модули слабо связаны, что обеспечивает гибкость и простоту модификации.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl text-gray-900 mb-1">
                    {module.title}
                  </h3>
                  <p className="text-sm text-purple-600">
                    {module.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center"
        >
          <p className="text-xl text-white">
            <strong>Transport-Agnostic</strong> архитектура обеспечивает работу в любых условиях — 
            от полной автономности до интеграции с корпоративными мессенджерами
          </p>
        </motion.div>
      </div>
    </section>
  );
}
