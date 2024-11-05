'use client'

import React from 'react'

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">О нас</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Компания &quot;MaxxFine&quot; - ваш надежный партнер в создании уютного и стильного интерьера. Мы
              специализируемся на продаже высококачественного керамогранита, а также мебели для ванной и кухни.
            </p>
            <p className="text-lg mb-6">
              Наша миссия - помочь каждому клиенту воплотить в жизнь свои идеи по обустройству дома, предоставляя
              широкий ассортимент продукции и профессиональную консультацию.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Почему выбирают нас:</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Более 10 лет опыта на рынке</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Широкий ассортимент продукции от ведущих производителей</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Профессиональные консультации и помощь в выборе</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Гарантия качества на все товары</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Удобная доставка и установка</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection