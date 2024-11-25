'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 text-center text-red-700 font-bold">
 О компании MaxxFine
</h2>
        
        <Tabs defaultValue="about" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 text-red-700 mb-4">
            <TabsTrigger 
              value="about"
              className="px-2 py-2 text-sm md:text-base data-[state=active]:bg-red-700 data-[state=active]:text-white transition-colors font-sans"
            >
              О нас
            </TabsTrigger>
            <TabsTrigger 
              value="why"
              className="px-2 py-2 text-sm md:text-base data-[state=active]:bg-red-700 data-[state=active]:text-white transition-colors font-sans"
            >
              Почему мы
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 md:p-6 space-y-6 md:space-y-8">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                  <div className="flex items-center space-x-3 md:space-x-0 mb-4 md:mb-0">
                    <div className="bg-red-50 p-2 md:p-3 rounded-lg">
                      <Building className="h-5 w-5 md:h-6 md:w-6 text-red-700 font-sans" />
                    </div>
                    <h3 className="text-lg md:text-xl md:hidden font-sans">Наша компания</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="hidden md:block text-xl mb-3 font-sans">Наша компания</h3>
                    <p className="text-sm md:text-base text-gray-700 font-sans">
                      Компания "MaxxFine" - ваш надежный партнер в создании уютного и стильного интерьера. Мы
                      специализируемся на продаже высококачественного керамогранита, а также мебели для ванной и кухни.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                  <div className="flex items-center space-x-3 md:space-x-0 mb-4 md:mb-0">
                    <div className="bg-red-50 p-2 md:p-3 rounded-lg">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-red-700" />
                    </div>
                    <h3 className="text-lg md:text-xl md:hidden font-sans">Наша миссия</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="hidden md:block text-xl mb-3 font-sans">Наша миссия</h3>
                    <p className="text-sm md:text-base text-gray-700 font-sans">
                      Помочь каждому клиенту воплотить в жизнь свои идеи по обустройству дома, предоставляя
                      широкий ассортимент продукции и профессиональную консультацию.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="why">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl mb-4 md:mb-6 font-sans">Почему выбирают нас:</h3>
                <div className="grid gap-3 md:gap-4">
                  {[
                    "Более 5 лет опыта на рынке",
                    "Широкий ассортимент продукции от ведущих производителей",
                    "Профессиональные консультации и помощь в выборе",
                    "Гарантия качества на все товары",
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 bg-red-50 p-3 md:p-4 rounded-lg
                        hover:bg-red-100 transition-colors duration-200"
                    >
                      <CheckCircle className="h-5 w-5 text-red-700 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700 font-playfair">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default AboutSection