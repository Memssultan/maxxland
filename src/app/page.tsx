import * as React from "react"
import { ImprovedNavigation } from "@/components/improved-navigation"
import { PopularProducts } from "@/components/popular-products"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import { CustomerReviews } from "@/components/customer-reviews"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import FeaturesSection from '@/components/ui/features-section';

export default function HomePage() {
 return (
   <div className="flex flex-col min-h-screen">
     <ImprovedNavigation />
     <main className="flex-1">
       {/* Hero Section с видео */}
       <section className="w-full py-6 px-4 md:px-6">
         <div className="container mx-auto rounded-lg overflow-hidden relative">
           <video
             autoPlay
             muted
             loop
             playsInline
             className="w-full h-[600px] object-cover z-0"
           >
             <source src="/background.mp4" type="video/mp4" />
           </video>
           
           <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
           
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-20 px-6">
             <div className="max-w-[600px]">
               <h1 className="text-4xl font-bold text-white mb-4">
                 Запишитесь на онлайн-экскурсию
               </h1>
               <p className="text-gray-200 text-lg mb-6">
                 Большой | экспертный подбор изделий для вашего проекта
               </p>
               <Button className="bg-red-600 text-white hover:bg-red-700">
                 ЗАПИШИТЕСЬ НА ОНЛАЙН-ЭКСКУРСИЮ
               </Button>
             </div>
           </div>

           {/* Dots navigation */}
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
             <button className="w-2 h-2 rounded-full bg-red-600"></button>
             <button className="w-2 h-2 rounded-full bg-white/50"></button>
             <button className="w-2 h-2 rounded-full bg-white/50"></button>
           </div>
         </div>
       </section>

       <FeaturesSection />

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
               <div className="flex flex-col gap-2 min-[400px]:flex-row">
                 <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                   Наш каталог
                 </Button>
                 <Button
                   className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                   variant="outline"
                 >
                   Связаться с нами
                 </Button>
               </div>
             </div>
             <div className="flex items-center justify-center">
               <Image
                 alt="Hero"
                 className="aspect-video overflow-hidden rounded-xl object-cover"
                 height="550"
                 src="/placeholder.svg"
                 width="550"
               />
             </div>
           </div>
         </div>
       </section>

       <CustomerReviews />
       <ImprovedContactForm />
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