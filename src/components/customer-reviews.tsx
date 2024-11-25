import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Марлен С.",
    avatar: "/placeholder.svg",
    review: "Лучший выбор по керамограниту! Все шикарно! Также радует отношение персонала к клиентам 👍🏻",
    rating: 5,
    date: "15 октября 2024",
  },
  {
    id: 2,
    name: "Владимир Г.",
    avatar: "/placeholder.svg",
    review: "Милый персонал , широкий ассортимент",
    rating: 5,
    date: "2 ноября 2024",
  },
  {
    id: 3,
    name: "Варвара С.",
    avatar: "/placeholder.svg",
    review: "Отличный салон с приветливым персоналом . Выбор и качество продукции на высоте! Ни разу не пожалели, что обратились именно к вам",
    rating: 5,
    date: "8 ноября 2024",
  },
]

export function CustomerReviews() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = React.useState(0)
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100
    setScrollPosition(scrollPercentage)
  }

  return (
    <section className="w-full py-6 md:py-12 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
      <h2 className="text-xl md:text-3xl lg:text-4xl tracking-tighter text-center mb-6 md:mb-12 text-red-700  font-bold">Отзывы наших клиентов</h2>

        {/* Mobile version */}
        <div className="block md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar"
            onScroll={handleScroll}
          >
            {reviews.map((review) => (
              <Card 
                key={review.id} 
                className="flex-none w-[85vw] max-w-sm snap-center transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-10 h-10 border-2 border-red-100">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-red-50 text-red-700 text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm  font-sans">{review.name}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-4 font-sans">{review.review}</p>
                  <div className="flex items-center text-gray-400 text-xs mt-4 pt-3 border-t  font-sans">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Scroll progress indicator */}
          <div className="h-1 bg-gray-200 rounded-full mx-auto max-w-xs mt-2">
            <div 
              className="h-full bg-red-700 rounded-full transition-all duration-300"
              style={{ width: `${scrollPosition}%` }}
            />
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-red-100">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-red-50 text-red-700">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-sans">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4  font-sans">{review.review}</p>
                <div className="flex items-center text-gray-400 text-sm mt-4 pt-3 border-t  font-sans">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default CustomerReviews