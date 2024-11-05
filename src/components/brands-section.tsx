import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-primary">Наши бренды</h2>
            <p className="text-muted-foreground">
              Мы тщательно отбираем производителей, чтобы предложить вам лучшее соотношение цены и качества. 
              Работаем напрямую с фабриками, что гарантирует подлинность продукции и лучшие цены.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/brands">
              Смотреть все бренды
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative w-full h-24 mb-4 bg-white rounded-md overflow-hidden">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2 filter group-hover:brightness-110 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-primary">{brand.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      {brand.category}
                    </Badge>
                    <Badge variant="outline">
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