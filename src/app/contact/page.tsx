import { ImprovedNavigation } from "@/components/improved-navigation"
import { ImprovedContactForm } from "@/components/improved-contact-form"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Контакты</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором продукции. Свяжитесь с нами любым удобным
              способом:
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>ул. Примерная, д. 123, г. Москва, 123456</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@keramika-mebel.ru</span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Часы работы:</h2>
              <p>Понедельник - Пятница: 9:00 - 20:00</p>
              <p>Суббота - Воскресенье: 10:00 - 18:00</p>
            </div>
          </div>
          <div>
            <ImprovedContactForm />
          </div>
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 Керамика и Мебель. Все права защищены.</p>
          <nav className="flex gap-4">
            <Link className="text-sm text-gray-500 hover:underline" href="/terms">
              Условия использования
            </Link>
            <Link className="text-sm text-gray-500 hover:underline" href="/privacy">
              Политика конфиденциальности
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}