'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  onBack?: () => void;
}

export function ContactSection({ onBack }: ContactSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="contacts">
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

        <h2 className="text-4xl font-bold mb-6">Контакты</h2>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <p className="mb-6">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  ул. Мангилик ел 28, г. Астана
                </p>
                <p className="flex items-center ml-6 text-gray-600">
                  Show Room MaxxFine
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Аль-Фараби, 103, г. Алматы
                </p>
                <p className="flex items-center ml-6 text-gray-600">
                  Show Room MaxxFine
                </p>
              </div>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +7 771 768 9949
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                infomaxxfine.com
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-2">Часы работы:</h3>
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
              <p>Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection