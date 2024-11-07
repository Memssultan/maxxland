'use client'

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

export default function HomePage() {
  const [currentVideo, setCurrentVideo] = React.useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)
  const videoRefs = React.useRef<HTMLVideoElement[]>([])

  const videos = [
    {
      src: "/3.webm",
      poster: "/poster3.jpg",
      preload: "metadata" as const
    },
    {
      src: "/1.webm",
      poster: "/poster1.jpg",
      preload: "none" as const
    },
    {
      src: "/2.webm",
      poster: "/poster2.jpg",
      preload: "none" as const
    }
  ]

  React.useEffect(() => {
    const preloadNextVideo = () => {
      const nextIndex = (currentVideo + 1) % videos.length
      if (videoRefs.current[nextIndex]) {
        videoRefs.current[nextIndex].preload = "auto"
      }
    }

    if (isVideoLoaded) {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => {
          const next = (prev + 1) % videos.length
          preloadNextVideo()
          return next
        })
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [currentVideo, isVideoLoaded])

  const handleVideoLoaded = (index: number) => {
    if (index === 0) {
      setIsVideoLoaded(true)
    }
  }

  const handleVideoSwitch = (index: number) => {
    setCurrentVideo(index)
    if (videoRefs.current[index]) {
      videoRefs.current[index].preload = "auto"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-40 relative overflow-hidden">
          {videos.map((video, index) => (
            <video
              key={video.src}
              ref={el => {
                if (el) {
                  videoRefs.current[index] = el
                }
              }}
              autoPlay
              muted
              loop
              playsInline
              preload={video.preload}
              poster={video.poster}
              onLoadedData={() => handleVideoLoaded(index)}
              className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
                currentVideo === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ))}
          
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/logo.svg"
                alt="Логотип компании"
                width={200}
                height={100}
                className="mb-4 md:mb-[-11rem]"
                priority
              />
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Керамогранит и мебель для вашего дома
                </h1>
                <p className="mx-auto max-w-[700px] text-sm md:text-base text-gray-300 md:text-xl">
                  Создайте уютное пространство с нашими качественными материалами и стильной мебелью
                </p>
              </div>
              <div className="space-x-4 mb-8 md:mb-16">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Выбрать гарнитур
                </Button>
              </div>
              
              <div className="flex space-x-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleVideoSwitch(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentVideo === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Switch to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
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