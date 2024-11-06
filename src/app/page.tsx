'use client'

import * as React from "react"
import { ImprovedNavigation } from "@/components/improved-navigation"
import { PopularProducts } from "@/components/popular-products"
import { CustomerReviews } from "@/components/customer-reviews"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/about-section"
import Image from "next/image"
import Link from "next/link"
import FeaturesSection from '@/components/ui/features-section'
import BrandsSection from '@/components/brands-section'
import ContactSection from '@/components/contact-section'

export default function HomePage() {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts')
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          {/* Hero section остается без изменений */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          
          <div className="container px-4 md:px-6 relative z-20">
           <div className="flex flex-col items-center space-y-1 text-center">
            <Image
             src="/logo.svg" // Укажите правильный путь к вашему логотипу
             alt="Логотип компании"
             width={200} // Настройте размер под ваш логотип
             height={100}
             className="mb-[-11rem]" // Добавляем отступ снизу
             />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Керамогранит и мебель для вашего дома
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Создайте уютное пространство с нашими качественными материалами и стильной мебелью
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Выбрать гарниту
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <AboutSection /> 
        <BrandsSection />
        <PopularProducts />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Качество и стиль для вашего интерьера
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Мы предлагаем широкий выбор керамогранита и мебели от ведущих производителей. 
                    Наши специалисты помогут вам создать идеальный интерьер.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomerReviews />
        <ContactSection />
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Керамика и Мебель. Все права защищены.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Условия использования
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Политика конфиденциальности
          </Link>
        </nav>
      </footer>
    </div>
  )
}