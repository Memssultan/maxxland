import React, { useState } from 'react';
import { Briefcase, Package, Umbrella, Coffee, Home, LucideIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardContent className="flex flex-col items-center text-center p-6 space-y-4 h-full">
          <motion.div 
            className="bg-primary/10 p-3 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Icon size={24} className="text-primary" />
          </motion.div>
          <h3 className="font-bold text-lg text-red-700">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-red-700 mt-4">
                Подробнее <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <p>{details}</p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const features: FeatureCardProps[] = [
    {
      icon: Briefcase,
      title: "Официальные представители",
      description: "У нас представлено Более 20 премиальных мировых брендов",
      details: "Мы являемся официальными представителями ведущих мировых производителей сантехники. Это гарантирует подлинность товаров, лучшие цены и полную поддержку производителя."
    },
    {
      icon: Package,
      title: "Большая экспозиция",
      description: "Самые крупные выставки в СНГ брендов INALCO, FMG, RIMADESIO, VALCUCINE",
      details: "Наша экспозиция позволяет вам увидеть и потрогать продукцию перед покупкой. Мы регулярно обновляем выставочные образцы, чтобы показать последние новинки и тренды в мире сантехники."
    },
    {
      icon: Umbrella,
      title: "Высокая экспертность команды",
      description: "100% ответственность за комплектацию заказа. У нас вы соберете заказ даже если комплектующие разных брендов",
      details: "Наши специалисты имеют многолетний опыт работы в сфере сантехники. Мы поможем вам подобрать оптимальное решение, учитывая ваши потребности и бюджет, и гарантируем полную совместимость всех компонентов."
    },
    {
      icon: Coffee,
      title: "Выгодное сотрудничество",
      description: "Персональные предложения для дизайнеров интерьера, архитекторов, декораторов",
      details: "Мы ценим профессионалов и предлагаем специальные условия сотрудничества для дизайнеров и архитекторов. Это включает в себя эксклюзивные скидки, приоритетное обслуживание и доступ к обучающим материалам."
    },
    {
      icon: Home,
      title: "Текстуры и 3д",
      description: "С радостью предоставим дизайнерам и проектировщикам 3д текстуры",
      details: "Вы можете заложить именно тот керамогранит или именно ту мебель в визуализацию проекта!"
    }
  ];

  const filteredFeatures = features.filter(feature => 
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Наши преимущества</h2>
          <div className="w-24 h-1 bg-red-700 rounded mb-8"></div>
          <Input
            type="text"
            placeholder="Поиск преимуществ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md w-full"
          />
        </motion.div>
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
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