'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Script from 'next/script'

interface ContactSectionProps {
  onBack?: () => void;
}

export function ContactSection({ onBack }: ContactSectionProps) {
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
              className="w-full hover:bg-gray-100 transition-colors text-sm md:text-base"
              onClick={onBack}
            >
              Скрыть контакты
            </Button>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 text-red-700">
            Контакты
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-center max-w-2xl mx-auto px-4">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            <Card className="p-4 md:p-6">
              <CardContent className="p-0">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-700">Наши шоурумы</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="font-medium">г. Астана</p>
                        <p className="text-gray-600 text-sm md:text-base">проспект Мангилик Ел 28</p>
                        <p className="text-gray-500 text-sm">Showroom MaxxFine</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="font-medium">г. Алматы</p>
                        <p className="text-gray-600 text-sm md:text-base">проспект Аль-Фараби, 103</p>
                        <p className="text-gray-500 text-sm">Showroom MaxxFine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardContent className="p-0">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-700">Связаться с нами</h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="tel:+77717689949" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium text-sm md:text-base">+7 771 768 9949</span>
                  </a>

                  <a href="mailto:infomaxxfine.com" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-sm md:text-base">infokerama@bk.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

         {/* 2GIS Maps */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
  {/* Астана */}
  <Card className="p-1">
    <h3 className="text-lg font-semibold mb-2 px-4 pt-2 text-red-700"> Астана</h3>
    <div className="h-[170px] sm:h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden">
      <div id="map" className="w-full h-full"></div>
    </div>
  </Card>

  {/* Алматы */}
  <Card className="p-1">
    <h3 className="text-lg font-semibold mb-2 px-4 pt-2 text-red-700"> Алматы</h3>
    <div className="h-[170px] sm:h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden">
      <div id="map2" className="w-full h-full"></div>
    </div>
  </Card>
</div>

          {/* Мобильные кнопки быстрого доступа */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
            <div className="flex justify-around max-w-md mx-auto">
              <a 
                href="tel:+77717689949"
                className="flex flex-col items-center space-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs">Позвонить</span>
              </a>
              <a 
  href="https://wa.me/77717689949"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center space-y-1"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span className="text-xs">WhatsApp</span>
</a>
<a 
  href="https://www.instagram.com/maxxfine?igsh=amM3cGRhYTMxOTNt"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center space-y-1"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
  <span className="text-xs">Instagram</span>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection