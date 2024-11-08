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
     logo: '/logos/cielo.svg',
     url: 'https://www.ceramicacielo.it/ru',
   },
   { 
     logo: '/logos/fmg.png',
     url: 'https://www.irisfmg.com/'
   },
   { 
     logo: '/logos/bertocci.png',
     url: 'https://www.bertocci.it/'
   },
   {
     logo: '/logos/antoniolupi.jpeg',
     url: 'https://www.antoniolupi.it/en/'
   },
   {
     logo: '/logos/zucchetti.jpeg',
     url: 'https://www.zucchettidesign.it/en'
   },
   {
    logo: '/logos/toto.jpeg',
    url: 'https://www.toto.com/en/design/'
   },
   {
    logo: '/logos/rimadesio.jpg',
    url: 'https://www.rimadesio.it/ru/'
   },
   {
    logo: '/logos/gessi.svg',
    url: 'https://www.gessi.com/en'
   },
   {
    logo: '/logos/lafabbrica.svg',
    url: 'https://www.lafabbrica.it/en/'
   },
   {
    logo: '/logos/inalco.svg',
    url: 'https://www.inalco.global/ru'
   },
   {
    logo: 'logos/mutina.svg',
    url: 'https://www.mutina.it/en'
   },

 ];

 return (
   <section id="brands" className="py-8 sm:py-12 md:py-16 bg-background">
     <div className="container mx-auto px-4">
       <div className="flex flex-col items-center mb-8 sm:mb-12">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-4">Наши бренды</h2>
         <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl">
           Мы тщательно отбираем производителей, чтобы предложить вам лучшее соотношение цены и качества. 
           Работаем напрямую с фабриками, что гарантирует подлинность продукции и лучшие цены.
         </p>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
         {brands.map((brand, index) => (
           <div key={index} className="p-2 sm:p-4">
             <a 
               href={brand.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="block cursor-pointer transform transition-transform hover:-translate-y-1 active:translate-y-0"
             >
               <div className="relative w-full aspect-square">
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