import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl text-white mb-4">СВОД</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Современная платформа для проведения опросов аудитории в реальном времени 
              с мгновенной визуализацией результатов.
            </p>
            <p className="text-sm text-gray-500">
              © 2026 СВОД. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Архитектура
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Цены
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сообщество
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            Разработано с ❤️ для образования и бизнеса
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
