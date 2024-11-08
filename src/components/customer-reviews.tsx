import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Марлен С.",
    avatar: "/placeholder.svg",
    review: "Лучший выбор по керамограниту! Все шикарно! Также радует отношение персонала к клиентам 👍🏻",
    rating: 5,
  },
  {
    id: 2,
    name: "Владимир Г.",
    avatar: "/placeholder.svg",
    review: "Милый персонал , широкий ассортимент",
    rating: 5,
  },
  {
    id: 3,
    name: "Варвара С.",
    avatar: "/placeholder.svg",
    review: "Отличный салон с приветливым персоналом . Выбор и качество продукции на высоте! Ни разу не пожалели, что обратились именно к вам",
    rating: 5,
  },
]

export function CustomerReviews() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-red-700">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews