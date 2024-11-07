'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import Script from 'next/script'

interface ContactSectionProps {
  onBack?: () => void;
}

export function ContactSection({ onBack }: ContactSectionProps) {
  React.useEffect(() => {
    const initMap = () => {
      if ((window as any).DG) {
        const map = (window as any).DG.map('map', {
          center: [51.11087, 71.4334], // Точные координаты
          zoom: 17
        });

        (window as any).DG.marker([51.11087, 71.4334])
          .addTo(map)
          .bindPopup('MaxxFine Show Room<br>проспект Мангилик Ел 28');
      }
    };

    if ((window as any).DG) {
      initMap();
    } else {
      window.addEventListener('DGScriptReady', initMap);
    }

    return () => {
      window.removeEventListener('DGScriptReady', initMap);
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="contacts">
      <Script 
        src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"
        onLoad={() => {
          (window as any).DG.then(() => {
            window.dispatchEvent(new Event('DGScriptReady'));
          });
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="w-full max-w-[550px] mx-auto mb-8">
          {onBack && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onBack}
            >
              Скрыть контакты
            </Button>
          )}
        </div>

        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
        <p className="text-base mb-8">
          Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
        </p>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-start">
              <span className="text-pink-500 mr-2 text-lg">•</span>
              <span>проспект Мангилик Ел 28, г. Астана</span>
            </div>
            <div className="ml-5 text-gray-600">
              Show Room MaxxFine
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-start">
              <span className="text-pink-500 mr-2 text-lg">•</span>
              <span>Аль-Фараби, 103, г. Алматы</span>
            </div>
            <div className="ml-5 text-gray-600">
              Show Room MaxxFine
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+7 771 768 9949</span>
          </div>

          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>infomaxxfine.com</span>
          </div>
        </div>

        {/* 2GIS Map */}
        <div className="h-[300px] max-w-[800px] mx-auto bg-gray-100 rounded-lg overflow-hidden mt-8">
          <div id="map" className="w-full h-full"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection