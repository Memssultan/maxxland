'use client'

import * as React from "react"
import { ImprovedNavigation } from "@/components/improved-navigation"
import { PopularProducts } from "@/components/popular-products"
import { CustomerReviews } from "@/components/customer-reviews"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import Image from "next/image"
import Link from "next/link"
import FeaturesSection from '@/components/ui/features-section'
import BrandsSection from '@/components/brands-section'

export default function HomePage() {
  const [showContactSection, setShowContactSection] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-40 relative overflow-hidden">
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
                src="/logo.svg"
                alt="Логотип компании"
                width={200}
                height={100}
                className="mb-[-11rem]"
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

        {/* Sections */}
        <FeaturesSection />
        <AboutSection />
        <BrandsSection />
        <PopularProducts />
        <CustomerReviews />

        {/* Contact Forms with Animation */}
        <div className="relative">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              showContactSection ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
            }`}
          >
            <ImprovedContactForm onShowContacts={() => setShowContactSection(true)} />
          </div>

          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              showContactSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <ContactSection onBack={() => setShowContactSection(false)} />
          </div>
        </div>
      </main>
      
      {/* Footer */}
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