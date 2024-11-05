import React from 'react';
import { Briefcase, Package, Umbrella, Coffee, Home, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 space-y-3">
    <div className="text-red-600">
      <Icon size={24} />
    </div>
    <h3 className="font-medium text-lg">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
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
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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