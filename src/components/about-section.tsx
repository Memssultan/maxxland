'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <>
      {/* Preload изображений */}
      <link
        rel="preload"
        href="/kitchen.jpg"
        as="image"
      />
      <link
        rel="preload"
        href="/livingroom.jpg"
        as="image"
      />
      <link
        rel="preload"
        href="/livingroom2.jpg"
        as="image"
      />
      
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-red-700">О компании MaxxFine</h2>
          <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 text-red-700">
              <TabsTrigger 
                value="about"
                className="text-sm sm:text-base data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                О нас
              </TabsTrigger>
              <TabsTrigger 
                value="why"
                className="text-sm sm:text-base data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Почему мы
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  {/* О компании с изображением */}
                  <div className="mb-6">
                    <div className="relative w-full h-[100px] sm:h-[150px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/kitchen.jpg"
                        alt="Современная кухня"
                        fill
                        sizes="(max-width: 640px) 100vw, 800px"
                        quality={85}
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEwMy0vMC0qLSwsKSg4ODQ1NygtLkJJQkU3OTo6OiowPlNCREZEODj/2wBDAR"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                      <Building className="h-6 w-6 text-gray-900 mt-1" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Наша компания</h3>
                        <p className="text-sm sm:text-base">
                          Компания "MaxxFine" - ваш надежный партнер в создании уютного и стильного интерьера. Мы
                          специализируемся на продаже высококачественного керамогранита, а также мебели для ванной и кухни.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Наша миссия с изображением */}
                  <div>
                    <div className="relative w-full h-[100px] sm:h-[150px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/livingroom.jpg"
                        alt="Современная гостиная"
                        fill
                        sizes="(max-width: 640px) 100vw, 800px"
                        quality={85}
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEwMy0vMC0qLSwsKSg4ODQ1NygtLkJJQkU3OTo6OiowPlNCREZEODj/2wBDAR"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                      <Users className="h-6 w-6 text-gray-900 mt-1" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Наша миссия</h3>
                        <p className="text-sm sm:text-base">
                          Помочь каждому клиенту воплотить в жизнь свои идеи по обустройству дома, предоставляя
                          широкий ассортимент продукции и профессиональную консультацию.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="why">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="relative w-full h-[100px] sm:h-[150px] rounded-lg overflow-hidden mb-6">
                    <Image
                      src="/212.png"
                      alt="Интерьер гостиной"
                      fill
                      sizes="(max-width: 640px) 100vw, 800px"
                      quality={85}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEwMy0vMC0qLSwsKSg4ODQ1NygtLkJJQkU3OTo6OiowPlNCREZEODj/2wBDAR"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Почему выбирают нас:</h3>
                  <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                    {[
                      "Более 5 лет опыта на рынке",
                      "Широкий ассортимент продукции от ведущих производителей",
                      "Профессиональные консультации и помощь в выборе",
                      "Гарантия качества на все товары",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default AboutSection