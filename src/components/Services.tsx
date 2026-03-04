import React from 'react';
    import { motion } from 'framer-motion';
    import { Microscope, Plane, Users, BarChart3, Leaf, Shield } from 'lucide-react';
    
    const Services = () => {
      const services = [
        {
          icon: Microscope,
          title: 'Анализ почвы и воды',
          description: 'Профессиональные лабораторные исследования для оптимизации управления питанием и улучшения состояния почвы.',
          features: ['Анализ pH и содержания элементов', 'Проверка на загрязнения', 'Рекомендации по удобрению']
        },
        {
          icon: Plane,
          title: 'Дрон-услуги',
          description: 'Прецизионное опрыскивание, мониторинг полей и программы подготовки операторов дронов.',
          features: ['Услуги опрыскивания полей', 'Продажа и аренда дронов', 'Сертификация операторов']
        },
        {
          icon: Users,
          title: 'Агрономическая поддержка',
          description: 'Экспертные консультации и мониторинг полей для максимизации продуктивности культур.',
          features: ['Планирование посевов', 'Полевая мониторинг', 'Круглосуточная экспертная поддержка']
        },
        {
          icon: BarChart3,
          title: 'Консалтинг на основе данных',
          description: 'Продвинутая аналитика и решения прецизионного земледелия для оптимальных результатов.',
          features: ['Оптимизация урожайности', 'Анализ снижения затрат', 'Отслеживание эффективности']
        },
        {
          icon: Leaf,
          title: 'Устойчивые решения',
          description: 'Экологичные подходы, защищающие окружающую среду и повышающие продуктивность.',
          features: ['Органические альтернативы', 'Снижение применения химии', 'Сохранение почвы']
        },
        {
          icon: Shield,
          title: 'Техническое обучение',
          description: 'Комплексные программы обучения современным агротехнологиям и методам работы.',
          features: ['Обучение оборудованию', 'Лучшие практики', 'Программы сертификации']
        }
      ];
    
      return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Полный спектр <span className="text-green-600">агротехнологических</span> услуг
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                От прецизионного земледелия до экспертных консультаций — мы предоставляем сквозные решения, которые трансформируют ваши агрооперации и максимизируют продуктивность.
              </p>
            </motion.div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 group-hover:scale-105">
                    Подробнее
                  </button>
                </motion.div>
              ))}
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                Получить агрономическую поддержку
              </button>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default Services;