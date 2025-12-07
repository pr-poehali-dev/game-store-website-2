import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const games = [
    {
      id: 1,
      title: 'Разбан аккаунта',
      price: 50,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop',
      rating: 5,
      reviewCount: 342,
      genre: 'Услуга',
      isNew: true,
      reviews: [
        {
          id: 1,
          author: 'Игрок2024',
          rating: 5,
          text: 'Разбанили за 10 минут! Отличный сервис, рекомендую.',
          date: '07.12.2024',
        },
        {
          id: 2,
          author: 'ProGamer',
          rating: 5,
          text: 'Быстро и качественно, аккаунт вернули без проблем.',
          date: '06.12.2024',
        },
        {
          id: 3,
          author: 'Максим_228',
          rating: 5,
          text: 'Думал аккаунт потерян навсегда, но ребята помогли!',
          date: '05.12.2024',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;