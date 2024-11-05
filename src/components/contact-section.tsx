import { ImprovedNavigation } from "@/components/improved-navigation"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

// В файле /app/contact/page.tsx переименуйте его в ContactSection:
export function ContactSection() {
  return (
    <section id="contacts" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Левая колонка с контактной информацией */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Контакты</h2>
            <p className="mb-6">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным способом:
            </p>
            
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                ул. Примерная, д. 123, г. Москва, 123456
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +7 (123) 456-78-90
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                info@keramika-mebel.ru
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-2">Часы работы:</h3>
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
              <p>Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>

          {/* Правая колонка с формой */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-6">
              У вас есть вопросы? Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.
            </p>
            <ImprovedContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// Также оставьте страницу для прямого доступа
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1">
        <ContactSection />
      </main>
      <footer>
        {/* Ваш футер */}
      </footer>
    </div>
  )
}