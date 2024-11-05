import { ImprovedNavigation } from "@/components/improved-navigation"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImprovedNavigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">О нас</h1>
        <div className="prose max-w-none">
          <p>
            Компания &quot;Керамика и Мебель&quot; - ваш надежный партнер в создании уютного и стильного интерьера. Мы
            специализируемся на продаже высококачественного керамогранита, а также мебели для ванной и кухни.
          </p>
          <p>
            Наша миссия - помочь каждому клиенту воплотить в жизнь свои идеи по обустройству дома, предоставляя
            широкий ассортимент продукции и профессиональную консультацию.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Почему выбирают нас:</h2>
          <ul>
            <li>Более 10 лет опыта на рынке</li>
            <li>Широкий ассортимент продукции от ведущих производителей</li>
            <li>Профессиональные консультации и помощь в выборе</li>
            <li>Гарантия качества на все товары</li>
            <li>Удобная доставка и установка</li>
          </ul>
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