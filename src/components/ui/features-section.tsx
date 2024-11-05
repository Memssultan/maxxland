import React from 'react';
import { Briefcase, Package, Umbrella, Coffee, Home, LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="font-bold text-lg text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Briefcase,
      title: "Официальные представители",
      description: "У нас представлено более 300 мировых брендов сантехники"
    },
    {
      icon: Package,
      title: "Большая экспозиция",
      description: "Самые крупные выставки брендов Ideal Stansard, Simas, Salini, Hansgrohe, The Artceram, Tece"
    },
    {
      icon: Umbrella,
      title: "Высокая экспертность команды",
      description: "100% ответственность за комплектацию заказа. У нас вы соберете заказ даже если комплектующие разных брендов"
    },
    {
      icon: Coffee,
      title: "Выгодное сотрудничество",
      description: "Персональные предложения для дизайнеров интерьера, архитекторов, декораторов"
    },
    {
      icon: Home,
      title: "Собственный склад",
      description: "Храним ваши товары БЕСПЛАТНО на собственном складе"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;