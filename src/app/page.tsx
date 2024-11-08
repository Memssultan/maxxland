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
  const [loadedVideos, setLoadedVideos] = React.useState<{ [key: number]: boolean }>({})
  const videoRefs = React.useRef<HTMLVideoElement[]>([])
  const previewRefs = React.useRef<HTMLVideoElement[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInitialLoad = React.useRef(true)

  const videos = [
    {
      src: "/3-n.mp4",
      lowQualitySrc: "/preview3.mp4"
    },
    {
      src: "/1-n.mp4",
      lowQualitySrc: "/preview1.mp4"
    },
    {
      src: "/2-n.mp4",
      lowQualitySrc: "/preview2.mp4"
    }
  ]

  const isVideoLoaded = (index: number) => {
    return loadedVideos[index] === true
  }

  const handleHighQualityLoad = (index: number) => {
    console.log(`Video ${index} loaded`)
    setLoadedVideos(prev => ({
      ...prev,
      [index]: true
    }))
  }

  React.useEffect(() => {
    if (isInitialLoad.current) {
      console.log('Initial load - starting to load all videos')
      videos.forEach((_, index) => {
        if (videoRefs.current[index]) {
          videoRefs.current[index].load()
        }
      })
      isInitialLoad.current = false
    }
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(`Playing video ${currentVideo}, loaded: ${isVideoLoaded(currentVideo)}`)
          if (isVideoLoaded(currentVideo)) {
            videoRefs.current[currentVideo]?.play()
          } else {
            previewRefs.current[currentVideo]?.play()
          }
        } else {
          videoRefs.current[currentVideo]?.pause()
          previewRefs.current[currentVideo]?.pause()
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [currentVideo, loadedVideos])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleVideoChange = (index: number) => {
    console.log(`Switching to video ${index}, loaded: ${isVideoLoaded(index)}`)
    const currentVideoEl = videoRefs.current[currentVideo]
    const currentPreviewEl = previewRefs.current[currentVideo]
    const nextVideoEl = videoRefs.current[index]
    const nextPreviewEl = previewRefs.current[index]
    
    currentVideoEl?.pause()
    currentPreviewEl?.pause()
    
    if (isVideoLoaded(index)) {
      nextVideoEl?.play()
    } else {
      nextPreviewEl?.play()
    }
    
    setCurrentVideo(index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        <section ref={containerRef} className="w-full py-8 md:py-16 lg:py-24 xl:py-40 relative overflow-hidden">
          {videos.map((video, index) => (
            <React.Fragment key={index}>
              {/* Превью видео */}
              <video
                ref={el => {
                  if (el) {
                    previewRefs.current[index] = el
                  }
                }}
                src={video.lowQualitySrc}
                preload="auto"
                muted
                loop
                playsInline
                onError={(e) => console.error(`Preview video ${index} error:`, e)}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentVideo === index && !isVideoLoaded(index) ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Высококачественное видео */}
              <video
                ref={el => {
                  if (el) {
                    videoRefs.current[index] = el
                    if (!isVideoLoaded(index)) {
                      el.load() // Принудительно начинаем загрузку
                    }
                  }
                }}
                src={video.src}
                preload="auto"
                muted
                loop
                playsInline
                onLoadedData={() => handleHighQualityLoad(index)}
                onError={(e) => console.error(`High quality video ${index} error:`, e)}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentVideo === index && isVideoLoaded(index) ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </React.Fragment>
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
                    onClick={() => handleVideoChange(index)}
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