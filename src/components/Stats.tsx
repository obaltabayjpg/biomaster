import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    
    const Stats = () => {
      const [counters, setCounters] = useState({
        yield: 0,
        clients: 0,
        coverage: 0,
        waste: 0
      });
    
      const finalValues = {
        yield: 30,
        clients: 500,
        coverage: 85,
        waste: 40
      };
    
      useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
    
        const intervals = Object.keys(finalValues).map(key => {
          const finalValue = finalValues[key as keyof typeof finalValues];
          const increment = finalValue / steps;
          let currentValue = 0;
    
          return setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              currentValue = finalValue;
              clearInterval(intervals.find(interval => interval === this));
            }
            setCounters(prev => ({
              ...prev,
              [key]: Math.floor(currentValue)
            }));
          }, stepDuration);
        });
    
        return () => intervals.forEach(interval => clearInterval(interval));
      }, []);
    
      const stats = [
        {
          value: counters.yield,
          suffix: '%',
          label: 'Потенциал роста урожайности',
          description: 'Среднее улучшение продуктивности с нашими решениями'
        },
        {
          value: counters.clients,
          suffix: '+',
          label: 'Довольные клиенты',
          description: 'Фермеры и предприятия доверяют нашей экспертизе'
        },
        {
          value: counters.coverage,
          suffix: '%',
          label: 'Ускоренное покрытие полей',
          description: 'С помощью прецизионного применения дронов'
        },
        {
          value: counters.waste,
          suffix: '%',
          label: 'Снижение расхода химикатов',
          description: 'За счёт точного внесения и профессиональных рекомендаций'
        }
      ];
    
      return (
        <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=600&fit=crop&crop=center)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Проверенные результаты, которые <span className="text-green-200">двигают успех</span>
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Наш технологический подход обеспечивает измеримые улучшения в продуктивности, эффективности и устойчивости сельского хозяйства Казахстана.
              </p>
            </motion.div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-green-100 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-green-200 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300">
                Заказать анализ почвы
              </button>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default Stats;