'use client'

import React, { useState } from 'react';
import { 
  Building2, 
  LayoutGrid, 
  Award, 
  Users, 
  Shapes, 
  GalleryHorizontalEnd,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardContent className="flex flex-col items-center text-center p-3 sm:p-4 space-y-2 sm:space-y-3 h-full">
          <motion.div className="bg-primary/10 p-2 rounded-full">
            <Icon size={16} className="text-primary" />
          </motion.div>
          <h3 className="text-sm sm:text-base text-red-700 font-playfair">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground flex-grow font-playfair">{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-red-700 mt-1 sm:mt-2 text-xs sm:text-sm px-2 py-1 h-auto font-playfair">
                Подробнее <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-playfair">{title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm font-playfair">{details}</p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Building2,
      title: "Официальные представители",
      description: "У нас представлено Более 20 премиальных мировых брендов",
      details: "Уникальный выбор премиальной мебели для ванной комнаты, гостиной и кухни."
    },
    {
      icon: LayoutGrid,
      title: "Большая экспозиция",
      description: "Самые крупные выставки в СНГ брендов INALCO, FMG, RIMADESIO, VALCUCINE",
      details: "Наша экспозиция позволяет вам увидеть и потрогать продукцию перед покупкой. Мы регулярно обновляем выставочные образцы, чтобы показать последние новинки и тренды в мире сантехники."
    },
    {
      icon: Award,
      title: "Высокая экспертность команды",
      description: "100% ответственность за комплектацию заказа. У нас вы соберете заказ даже если комплектующие разных брендов",
      details: "Наши специалисты имеют многолетний опыт работы в сфере сантехники. Мы поможем вам подобрать оптимальное решение, учитывая ваши потребности и бюджет, и гарантируем полную совместимость всех компонентов."
    },
    {
      icon: Users,
      title: "Выгодное сотрудничество",
      description: "Персональные предложения для дизайнеров интерьера, архитекторов, декораторов",
      details: "Мы ценим профессионалов и предлагаем специальные условия сотрудничества для дизайнеров и архитекторов. Это включает в себя эксклюзивные скидки, приоритетное обслуживание и доступ к обучающим материалам."
    },
    {
      icon: Shapes,
      title: "Текстуры и 3д",
      description: "С радостью предоставим дизайнерам и проектировщикам 3д текстуры",
      details: "Вы можете заложить именно тот керамогранит или именно ту мебель в визуализацию проекта!"
    },
    {
      icon: GalleryHorizontalEnd,
      title: "Система лояльности",
      description: "Особое внимание к постоянным клиентам",
      details: "Постоянные клиенты могут пользоваться специальными выгодными предложениями, что делает покупки еще более приятными."
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-primary mb-2 sm:mb-3 font-playfair-bold">Наши преимущества</h2>
          <div className="w-12 sm:w-16 h-1 bg-red-700 rounded mb-4 sm:mb-6"></div>
        </motion.div>
        <AnimatePresence>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  details={feature.details}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesSection;