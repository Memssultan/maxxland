'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="contacts">
       <div className="container mx-auto px-4">
       <h2 className="text-4xl font-bold mb-6">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
          <div>
            <p className="mb-6">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
            </p>
            
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                ул. Примерная, д. 123, г. Москва, 123456
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +7 (123) 456-78-90
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                info@keramika-mebel.ru
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-2">Часы работы:</h3>
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
              <p>Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>

          {/* Правая колонка с формой */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-6">
              У вас есть вопросы? Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.
            </p>
            <form className="grid gap-4">
              <Input placeholder="Имя" type="text" required />
              <Input placeholder="Email" type="email" required />
              <Input placeholder="Телефон" type="tel" />
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тему обращения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Общий вопрос</SelectItem>
                  <SelectItem value="order">Вопрос по заказу</SelectItem>
                  <SelectItem value="product">Вопрос по товару</SelectItem>
                  <SelectItem value="complaint">Жалоба</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Сообщение" required />
              <Button type="submit" className="w-full">Отправить</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <ContactSection />
      </main>
      <footer>
        {/* Ваш футер */}
      </footer>
    </div>
  )
}