import { motion } from 'motion/react';
import { Zap, Shield, Globe, Smartphone, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Мгновенная визуализация',
    description: 'Результаты голосования отображаются на экране в режиме реального времени благодаря WebSocket-технологии',
  },
  {
    icon: Shield,
    title: 'Полная безопасность',
    description: 'Защита от накруток через криптографические сессии. Один человек = один голос',
  },
  {
    icon: Globe,
    title: 'Инфраструктурный суверенитет',
    description: 'Полная независимость от внешних платформ. Работает в режиме Full Web без привязки к мессенджерам',
  },
  {
    icon: Smartphone,
    title: 'Нативное веб-голосование',
    description: 'Участникам не нужно устанавливать приложения. Достаточно встроенного браузера и QR-кода',
  },
  {
    icon: BarChart3,
    title: 'Продвинутая аналитика',
    description: 'Автоматический подсчет процентов, количества проголосовавших и подсветка лидеров',
  },
  {
    icon: Users,
    title: 'Массовая масштабируемость',
    description: 'Архитектура выдерживает пиковые нагрузки при одновременном голосовании тысяч участников',
  },
];

export function Features() {
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
            Ключевые преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            СВОД объединяет гибкость, производительность и отказоустойчивость в единой платформе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
