import React from 'react';
    import { motion } from 'framer-motion';
    import { Sprout, Shield, Droplets, Zap } from 'lucide-react';
    
    const Products = () => {
      const productCategories = [
        {
          icon: Sprout,
          title: 'Семена и гибриды',
          description: 'Премиальные семена полевых и овощных культур от мировых производителей',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
          products: ['Сорта пшеницы', 'Гибриды кукурузы', 'Овощные семена', 'Специализированные культуры']
        },
        {
          icon: Shield,
          title: 'Средства защиты растений',
          description: 'Современные гербициды, инсектициды и фунгициды для комплексной защиты растений',
          image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&crop=center',
          products: ['Гербициды', 'Инсектициды', 'Фунгициды', 'Интегрированные решения']
        },
        {
          icon: Droplets,
          title: 'Удобрения и питание',
          description: 'Биоуго́днения, микроудобрения и NPK-решения для оптимального питания растений',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
          products: ['NPK удобрения', 'Микроэлементы', 'Биоуго́днения', 'Листовые подкормки']
        },
        {
          icon: Zap,
          title: 'Стимуляторы роста',
          description: 'Экологичные стимуляторы роста и биостимуляторы для повышения продуктивности',
          image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop&crop=center',
          products: ['Биостимуляторы', 'Средства для корнеобразования', 'Снятие стрессов', 'Повышение урожайности']
        }
      ];
    
      return (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Премиальная <span className="text-green-600">сельскохозяйственная</span> продукция
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Официальный дистрибьютор мировых производителей, обеспечивающий передние агровходы для максимальной продуктивности и устойчивого земледелия.
              </p>
            </motion.div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <category.icon size={24} className="text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {product}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
                      Смотреть продукцию
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-3xl font-serif font-bold mb-4">
                Нужна индивидуальная программа?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Наши агрономы помогут подобрать оптимальную комбинацию продуктов для ваших культур, состояния почвы и целей хозяйства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Получить коммерческое предложение
                </button>
                <button className="px-8 py-4 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 hover:scale-105 transition-all duration-300">
                  Смотреть каталог продукции
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default Products;