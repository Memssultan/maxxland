import React from 'react';
import Image from 'next/image';

const BrandsSection: React.FC = () => {
 const brands = [
   { 
     logo: '/logos/devon.jpg', 
     url: 'https://www.devon-devon.com/eu/'
   }, 
   {  
     logo: '/logos/fantini.png', 
     url: 'https://www.fantini.it/ru-ww'
   }, 
   { 
     logo: '/logos/cielo.jpg',
     url: 'https://www.ceramicacielo.it/ru',
   },
   { 
     logo: '/logos/fmg.png',
     url: 'https://www.irisfmg.com/'
   },
   { 
     logo: '/logos/bertocci.png',
     url: 'https://www.bertocci.it/'
   }
 ];

 return (
   <section className="py-16 bg-background">
     <div className="container mx-auto px-4">
       <div className="flex flex-col items-center mb-12">
         <h2 className="text-3xl font-bold text-center text-primary mb-4">Наши бренды</h2>
         <p className="text-muted-foreground text-center max-w-2xl">
           Мы тщательно отбираем производителей, чтобы предложить вам лучшее соотношение цены и качества. 
           Работаем напрямую с фабриками, что гарантирует подлинность продукции и лучшие цены.
         </p>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
         {brands.map((brand, index) => (
           <div key={index} className="p-6">
             <a 
               href={brand.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="block cursor-pointer transform transition-transform hover:-translate-y-1 active:translate-y-0"
             >
               <div className="relative w-full h-24">
                 <Image
                   src={brand.logo}
                   alt="Brand logo"
                   fill
                   className="object-contain"
                 />
               </div>
             </a>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

export default BrandsSection;