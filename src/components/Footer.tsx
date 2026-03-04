import React from 'react';
    import { Link } from 'react-router-dom';
    import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
    
    const Footer = () => {
      return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <span className="font-serif font-bold text-xl">BioMaster</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Полные агротехнологические решения, повышающие урожайность, улучшающие плодородие почвы и уменьшающие потери питательных веществ.
                </p>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                    <Facebook size={20} />
                  </button>
                  <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                    <Instagram size={20} />
                  </button>
                  <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
    
              <div>
                <h3 className="font-semibold text-lg mb-4">Продукция</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/products" className="hover:text-green-400 transition-colors duration-200">Семена и гибриды</Link></li>
                  <li><Link to="/products" className="hover:text-green-400 transition-colors duration-200">Средства защиты растений</Link></li>
                  <li><Link to="/products" className="hover:text-green-400 transition-colors duration-200">Удобрения</Link></li>
                  <li><Link to="/products" className="hover:text-green-400 transition-colors duration-200">Биостимуляторы</Link></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-semibold text-lg mb-4">Услуги</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/services" className="hover:text-green-400 transition-colors duration-200">Агрономическая поддержка</Link></li>
                  <li><Link to="/services" className="hover:text-green-400 transition-colors duration-200">Анализ почвы</Link></li>
                  <li><Link to="/services" className="hover:text-green-400 transition-colors duration-200">Дрон-услуги</Link></li>
                  <li><Link to="/services" className="hover:text-green-400 transition-colors duration-200">Обучающие программы</Link></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-semibold text-lg mb-4">Контакты</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} />
                    <span>+7 (727) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} />
                    <span>info@biomaster.kz</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="mt-1" />
                    <span>Алматы, Казахстан<br />просп. Достык, 123</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2026 BioMaster. Все права защищены.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-200">
                  Политика конфиденциальности
                </Link>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-200">
                  Условия использования
                </Link>
              </div>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;