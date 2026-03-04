import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Phone, Mail } from 'lucide-react';
    
    const CTA = () => {
      return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=800&fit=crop&crop=center)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                    Готовы трансформировать ваши
                    <span className="text-green-400"> агрооперации?</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Присоединяйтесь к сотням успешных фермеров и агропредприятий, которые доверяют BioMaster комплексные технологические решения, экспертную поддержку и проверенные результаты.
                  </p>
                </div>
    
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Профессиональная агрономическая консультация</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Прецизионные услуги применения дронов</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Полный анализ почвы и воды</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Круглосуточная техническая поддержка и обучение</span>
                  </div>
                </div>
    
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Связаться со специалистом</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    Заказать услуги дрона
                  </button>
                </div>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Получите бесплатную консультацию
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Электронная почта"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200">
                      <option value="">Выберите интересующую услугу</option>
                      <option value="consultation">Агрономическая консультация</option>
                      <option value="soil-analysis">Анализ почвы</option>
                      <option value="drone-services">Дрон-услуги</option>
                      <option value="products">Информация о продукции</option>
                      <option value="partnership">Партнёрство</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Получить бесплатную консультацию
                  </button>
                </form>
    
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>+7 (727) 123-45-67</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} />
                      <span>info@biomaster.kz</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    
    export default CTA;