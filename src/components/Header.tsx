import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { Link, useLocation } from 'react-router-dom';
    
    const Header = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const location = useLocation();
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navigation = [
        { name: 'Главная', href: '/' },
        { name: 'Продукция', href: '/products' },
        { name: 'Услуги', href: '/services' },
        { name: 'О компании', href: '/about' },
        { name: 'Контакты', href: '/contact' }
      ];
    
      const isActive = (href: string) => location.pathname === href;
    
      return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="font-serif font-bold text-xl text-gray-900">BioMaster</span>
              </Link>
    
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative font-medium transition-all duration-200 hover:text-green-600 ${
                      isActive(item.href) 
                        ? 'text-green-600' 
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>
    
              <div className="hidden md:flex items-center space-x-4">
                <button className="px-6 py-2 text-green-600 font-medium hover:text-green-700 transition-colors duration-200">
                  +7 (727) 123-45-67
                </button>
                <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Запросить консультацию
                </button>
              </div>
    
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
    
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <nav className="px-6 py-4 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium transition-colors duration-200 ${
                        isActive(item.href) 
                          ? 'text-green-600' 
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <button className="block w-full text-left text-green-600 font-medium">
                      +7 (727) 123-45-67
                    </button>
                    <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Запросить консультацию
                    </button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
      );
    };
    
    export default Header;