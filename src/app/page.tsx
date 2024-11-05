import * as React from "react"
import { ImprovedNavigation } from "@/components/improved-navigation"
import { PopularProducts } from "@/components/popular-products"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import { CustomerReviews } from "@/components/customer-reviews"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  MaxxFine-Керамогранит и мебель для вашего дома
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Создайте уютное пространство с нашими качественными материалами и стильной мебелью
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Посмотреть каталог</Button>
                <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>

        <PopularProducts />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Наши категории</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Керамогранит"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio:  "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl font-bold">Керамогранит</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Мебель для ванной"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl font-bold">Мебель для ванной</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Кухонная мебель"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl font-bold">Кухонная мебель</h3>
                </div>
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