import React from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    
    export default function Services() {
      return (
        <div className="min-h-screen">
          <Header />
          <main className="pt-16">
            <section className="py-24 bg-gradient-to-b from-green-50 to-white">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  Скоро
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Контент для этой страницы будет сгенерирован с помощью Meku
                </p>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Агротехнологические услуги
                  </h2>
                  <p className="text-gray-600">
                    Подробные описания услуг и информация для записи будут доступны здесь.
                  </p>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
    }