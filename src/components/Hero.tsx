import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Play } from 'lucide-react';
    
    const Hero = () => {
      return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop&crop=center)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 bg-green-600/20 backdrop-blur-sm rounded-full text-green-400 text-sm font-medium"
                  >
                    Официальный дистрибьютор мировых производителей
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
                  >
                    Полные агротехнологические
                    <span className="text-green-400"> решения</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-gray-200 leading-relaxed max-w-2xl"
                  >
                    Повышайте урожайность на 15–30%, улучшайте плодородие почвы и уменьшайте потери питательных веществ с помощью прецизионного земледелия, профессиональной агрономической поддержки и современных дронов.
                  </motion.p>
                </div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Запросить консультацию</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play size={20} />
                    <span>Посмотреть демо</span>
                  </button>
                </motion.div>
    
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">15-30%</div>
                    <div className="text-sm text-gray-300">Рост урожайности</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">500+</div>
                    <div className="text-sm text-gray-300">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-300">Экспертная поддержка</div>
                  </div>
                </motion.div>
              </motion.div>
    
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center"
                    alt="Современный сельскохозяйственный дрон опрыскивает посевы"
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    
    export default Hero;