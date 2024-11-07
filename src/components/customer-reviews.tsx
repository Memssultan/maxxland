import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Анна С.",
    avatar: "/placeholder.svg",
    review: "Отличное качество керамогранита! Очень довольна покупкой и сервисом.",
    rating: 5,
  },
  {
    id: 2,
    name: "Иван П.",
    avatar: "/placeholder.svg",
    review: "Заказывал кухонный гарнитур, все доставили вовремя и установили качественно.",
    rating: 4,
  },
  {
    id: 3,
    name: "Елена М.",
    avatar: "/placeholder.svg",
    review: "Прекрасный выбор мебели для ванной. Консультанты помогли подобрать идеальный вариант.",
    rating: 5,
  },
]

export function CustomerReviews() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-red-700">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}