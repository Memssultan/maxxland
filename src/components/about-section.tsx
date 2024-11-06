'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-red-700">О компании MaxxFine</h2>
        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 text-red-700">
            <TabsTrigger 
              value="about"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              О нас
            </TabsTrigger>
            <TabsTrigger 
              value="why"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Почему мы
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-gray-900 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Наша компания</h3>
                    <p className="text-lg mb-4">
                      Компания "MaxxFine" - ваш надежный партнер в создании уютного и стильного интерьера. Мы
                      специализируемся на продаже высококачественного керамогранита, а также мебели для ванной и кухни.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-6">
                  <Users className="h-6 w-6 text-gray-900 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Наша миссия</h3>
                    <p className="text-lg">
                      Помочь каждому клиенту воплотить в жизнь свои идеи по обустройству дома, предоставляя
                      широкий ассортимент продукции и профессиональную консультацию.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="why">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Почему выбирают нас:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Более 10 лет опыта на рынке",
                    "Широкий ассортимент продукции от ведущих производителей",
                    "Профессиональные консультации и помощь в выборе",
                    "Гарантия качества на все товары",
                    "Удобная доставка и установка"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default AboutSection