import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const popularProducts = [
  {
    id: 1,
    name: "Керамогранит Petra Crema abujardado",
    image: "/logos/p1.png",
  },
  {
    id: 2,
    name: "Керамогранит Atalaia Super Blanco DT",
    image: "/logos/p2.png",
  },
  {
    id: 3,
    name: "Безободковый унитаз Antonio Lupi Komodo",
    image: "/logos/p3.png",
  },
  {
    id: 4,
    name: "Смесители Zuchetti Pan S",
    image: "/logos/p4.png",
  },
]

export function PopularProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">Популярные товары</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold text-sm md:text-lg mb-2">{product.name}</h3>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}