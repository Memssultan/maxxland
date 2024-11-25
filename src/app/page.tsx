'use client'

import { ContactForm } from '@/components/contact-form'
import * as React from "react"
import { ImprovedNavigation } from "@/components/improved-navigation"
import { PopularProducts } from "@/components/popular-products"
import { CustomerReviews } from "@/components/customer-reviews"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import Link from "next/link"
import FeaturesSection from '@/components/ui/features-section'
import BrandsSection from '@/components/brands-section'
import { HeightIcon, WidthIcon } from '@radix-ui/react-icons'
import BitrixForm from '../components/BitrixForm'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Head from "next/head";

<Head><link rel="canonical" href="https://maxxfine.kz/" /></Head>

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isFormOpen, setIsFormOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const touchStartX = React.useRef<number | null>(null)

  const slides = [
    {
      src: "/T1.jpg",
      alt: "Slide 1"
    },
    {
      src: "/T2.jpg",
      alt: "Slide 2"
    },
    {
      src: "/T3.jpg",
      alt: "Slide 3"
    }
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diffX = touchEndX - touchStartX.current

    const minSwipeDistance = 50

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
      } else {
        setCurrentSlide(prev => (prev + 1) % slides.length)
      }
    }

    touchStartX.current = null
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        <section 
          ref={containerRef} 
          className="w-full py-8 md:py-16 lg:py-24 xl:py-40 relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </div>
          ))}
          
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center -translate-y-[10px]">
              <div className="relative flex flex-col items-center mt-5">
                <Image
                  src="/logo.svg"
                  alt="Логотип компании"
                  width={100}
                  height={80}
                  className="mb-1"
                  priority
                />
              </div>
              <div className="space-y-4">
  <div className="transition-opacity duration-500 flex flex-col items-center">
    <span className="text-white text-[8px] md:text-[10px] tracking-widest font-light -translate-y-[120px] ">
      TIMELESS DESIGN
    </span>
  </div>
</div>
              
              <div className="flex space-x-2 -translate-y-[-200px]">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Switch to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Логотип Rima */}


              <div className="relative -translate-y-[-33px] mb-4">
                <Image
                  src="/logos/rima.PNG"
                  alt="Rima logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>
              
              {/* Кнопка Подробнее */}
              <button 
                onClick={() => setIsFormOpen(true)}
                className="mt-4 -translate-y-[-1px] inline-flex items-center justify-center px-6 py-2 border border-red-700 bg-red-700 text-white text-sm hover:bg-red-800 hover:border-red-800 transition-colors duration-200"
              >
                Подробнее
              </button>
            </div>
          </div>
        </section>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <BitrixForm />
          </DialogContent>
        </Dialog>

        <FeaturesSection />
        <AboutSection />
        <BrandsSection />
        <PopularProducts />
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