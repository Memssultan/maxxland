import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-dialog"

const popularProducts = [
  {
    id: 1,
    name: "Керамогранит Petra Crema Abujardado",
    description: "Идеальный отделочный материал для полов/стен, каминов и бассейнов",
    image: "/logos/p1.png",
  },
  {
    id: 2,
    name: "Керамогранит Atalaia Super Blanco DT",
    description: "Идеальный отделочный материал для полов/стен, каминов и бассейнов",
    image: "/logos/p2.png",
  },
  {
    id: 3,
    name: "Подвесной унитаз KOMODO от Antonio Lupi",
    description: "Унитаз из композитного материала Flumood от фабрики №1",
    image: "/logos/p3.png",
  },
  {
    id: 4,
    name: "Смесители Zuchetti Pan S",
    description: "великолепная коллекция способная органично вписаться в любой современный интерьер",
    image: "/logos/p4.png",
  },
]

export function PopularProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl tracking-tighter sm:text-4xl md:text-5xl  font-bold">Популярные товары</h2>
          <p className="mt-4 text-gray-500  font-sans">Эксклюзивная коллекция премиальной сантехники и отделочных материалов</p>
        </div>
        
        {/* Desktop version */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-sm md:text-lg mb-2  font-sans">{product.name}</h3>
                {product.description && (
                  <p className="text-sm text-gray-500  font-sans">{product.description}</p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile version */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {popularProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-xs leading-tight mb-1  font-sans">{product.name}</h3>
                  {product.description && (
                    <p className="text-xs text-gray-500  font-sans">{product.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}