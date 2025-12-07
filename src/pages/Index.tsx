import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const games: any[] = [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="Package" size={48} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Каталог пуст</h2>
          <p className="text-muted-foreground max-w-md">
            Здесь скоро появятся лучшие игры. Следите за обновлениями!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;