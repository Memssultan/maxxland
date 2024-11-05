import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const popularProducts = [
  {
    id: 1,
    name: "Керамогранит Marmo Classic",
    price: 1299,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Тумба для ванной Aqua Lux",
    price: 15999,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Кухонный гарнитур Modern",
    price: 89999,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Керамогранит Wood Style",
    price: 1499,
    image: "/placeholder.svg",
  },
]

export function PopularProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Популярные товары</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price} ₽</p>
                <Button className="w-full">Добавить в корзину</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}