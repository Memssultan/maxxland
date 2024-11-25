'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Script from 'next/script'

interface ContactSectionProps {
  onBack?: () => void;
}

export function ContactSection({ onBack }: ContactSectionProps) {
  // Эффект для карт
  React.useEffect(() => {
    const initMaps = () => {
      if ((window as any).DG) {
        // Карта Астаны
        const mapAstana = (window as any).DG.map('map', {
          center: [51.11087, 71.4334],
          zoom: 17,
          fullscreenControl: false,
          zoomControl: true
        });

        (window as any).DG.marker([51.11087, 71.4334])
          .addTo(mapAstana)
          .bindPopup('MaxxFine Show Room<br>проспект Мангилик Ел 28');

        // Карта Алматы с обновленными координатами
        const mapAlmaty = (window as any).DG.map('map2', {
          center: [43.20576, 76.91278],
          zoom: 17,
          fullscreenControl: false,
          zoomControl: true
        });

        (window as any).DG.marker([43.20576, 76.91278])
          .addTo(mapAlmaty)
          .bindPopup('MaxxFine Show Room<br>проспект Аль-Фараби, 103');
      }
    };

    if ((window as any).DG) {
      initMaps();
    } else {
      window.addEventListener('DGScriptReady', initMaps);
    }

    return () => {
      window.removeEventListener('DGScriptReady', initMaps);
    };
  }, []);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50" id="contacts">
      <Script 
        src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"
        onLoad={() => {
          (window as any).DG.then(() => {
            window.dispatchEvent(new Event('DGScriptReady'));
          });
        }}
      />
      
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="w-full max-w-[550px] mx-auto mb-6 md:mb-8">
          {onBack && (
            <Button 
              variant="outline" 
              className="w-full hover:bg-gray-100 transition-colors text-sm md:text-base font-playfair"
              onClick={onBack}
            >
              Скрыть контакты
            </Button>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 text-red-700 font-playfair-bold">
            Контакты
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-center max-w-2xl mx-auto px-4 font-playfair">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            <Card className="p-4 md:p-6">
              <CardContent className="p-0">
                <h3 className="text-lg md:text-xl mb-4 text-red-700 font-playfair">Наши шоурумы</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="font-slanty">г. Астана</p>
                        <p className="text-gray-600 text-sm md:text-base font-playfair">проспект Мангилик Ел 28</p>
                        <p className="text-gray-500 text-sm font-playfair">Showroom MaxxFine</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="font-slanty">г. Алматы</p>
                        <p className="text-gray-600 text-sm md:text-base font-playfair">проспект Аль-Фараби, 103</p>
                        <p className="text-gray-500 text-sm font-playfair">Showroom MaxxFine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardContent className="p-0">
                <h3 className="text-lg md:text-xl mb-4 text-red-700 font-playfair">Связаться с нами</h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="tel:+77717689949" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm md:text-base font-playfair">+7 771 768 9949</span>
                  </a>

                  <a href="mailto:infokerama@bk.ru" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm md:text-base font-playfair">infokerama@bk.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 2GIS Maps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Астана */}
            <Card className="p-1">
              <h3 className="text-lg mb-2 px-4 pt-2 text-red-700 font-playfair">Астана</h3>
              <div className="h-[170px] sm:h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden">
                <div id="map" className="w-full h-full"></div>
              </div>
            </Card>

            {/* Алматы */}
            <Card className="p-1">
              <h3 className="text-lg mb-2 px-4 pt-2 text-red-700 font-playfair">Алматы</h3>
              <div className="h-[170px] sm:h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden">
                <div id="map2" className="w-full h-full"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection