import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const BrandsSection: React.FC = () => {
  const brands = [
    { 
      name: 'KERAMA MARAZZI', 
      logo: '/brands/kerama.png',
      category: 'Керамогранит',
      country: 'Россия' 
    },
    { 
      name: 'LAPARET', 
      logo: '/brands/laparet.png',
      category: 'Керамогранит',
      country: 'Россия'
    },
    { 
      name: 'GESSI', 
      logo: '/brands/gessi.png',
      category: 'Сантехника',
      country: 'Италия'
    },
    { 
      name: 'MARAZZI', 
      logo: '/brands/marazzi.png',
      category: 'Керамогранит',
      country: 'Италия'
    },
    { 
      name: 'GARDENIA', 
      logo: '/brands/gardenia.png',
      category: 'Керамогранит',
      country: 'Италия'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Наши бренды</h2>
            <p className="text-gray-600 max-w-2xl">
              Мы тщательно отбираем производителей, чтобы предложить вам лучшее соотношение цены и качества. 
              Работаем напрямую с фабриками, что гарантирует подлинность продукции и лучшие цены.
            </p>
          </div>
          <Link 
            href="/brands" 
            className="mt-4 md:mt-0 inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            Смотреть все бренды
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="relative w-full h-24 mb-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{brand.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100">
                      {brand.category}
                    </Badge>
                    <Badge variant="outline" className="text-gray-500">
                      {brand.country}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;