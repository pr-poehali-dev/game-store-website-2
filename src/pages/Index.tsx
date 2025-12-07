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
      title: 'Cyberpunk 2077',
      price: 2999,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
      rating: 4,
      reviewCount: 2847,
      genre: 'RPG',
      isNew: false,
      reviews: [
        {
          id: 1,
          author: 'Игрок123',
          rating: 5,
          text: 'Потрясающая графика и захватывающий сюжет! Лучшая игра года.',
          date: '15.11.2024',
        },
        {
          id: 2,
          author: 'Геймер_Про',
          rating: 4,
          text: 'Отличная игра, но были баги на старте. Сейчас все исправлено.',
          date: '10.11.2024',
        },
        {
          id: 3,
          author: 'Максим К.',
          rating: 5,
          text: 'Погружение в мир игры просто невероятное!',
          date: '05.11.2024',
        },
      ],
    },
    {
      id: 2,
      title: 'Elden Ring',
      price: 3499,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
      rating: 5,
      reviewCount: 5124,
      genre: 'Action RPG',
      isNew: true,
      reviews: [
        {
          id: 1,
          author: 'DarkSoul99',
          rating: 5,
          text: 'Шедевр от FromSoftware! Сложно, но невероятно затягивает.',
          date: '20.11.2024',
        },
        {
          id: 2,
          author: 'Рыцарь',
          rating: 5,
          text: 'Лучшая soulslike игра. Огромный открытый мир.',
          date: '18.11.2024',
        },
      ],
    },
    {
      id: 3,
      title: 'Grand Theft Auto V',
      price: 1999,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop',
      rating: 5,
      reviewCount: 8953,
      genre: 'Action',
      isNew: false,
      reviews: [
        {
          id: 1,
          author: 'Виктор М.',
          rating: 5,
          text: 'Классика жанра! До сих пор актуальна.',
          date: '25.11.2024',
        },
        {
          id: 2,
          author: 'Gamer2000',
          rating: 5,
          text: 'Онлайн режим - просто огонь!',
          date: '22.11.2024',
        },
      ],
    },
    {
      id: 4,
      title: 'Red Dead Redemption 2',
      price: 2499,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      rating: 5,
      reviewCount: 6734,
      genre: 'Action',
      isNew: false,
      reviews: [
        {
          id: 1,
          author: 'Ковбой',
          rating: 5,
          text: 'Лучшая история в играх! Мир живой и детализированный.',
          date: '28.11.2024',
        },
      ],
    },
    {
      id: 5,
      title: 'Hogwarts Legacy',
      price: 3999,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      rating: 4,
      reviewCount: 3456,
      genre: 'RPG',
      isNew: true,
      reviews: [
        {
          id: 1,
          author: 'Волшебник',
          rating: 4,
          text: 'Отличная игра для фанатов Гарри Поттера!',
          date: '01.12.2024',
        },
        {
          id: 2,
          author: 'МагияПро',
          rating: 5,
          text: 'Хогвартс выглядит потрясающе! Мечта детства сбылась.',
          date: '30.11.2024',
        },
      ],
    },
    {
      id: 6,
      title: 'Starfield',
      price: 4499,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      rating: 4,
      reviewCount: 2891,
      genre: 'RPG',
      isNew: true,
      reviews: [
        {
          id: 1,
          author: 'Космонавт',
          rating: 4,
          text: 'Грандиозный масштаб космоса! Много контента.',
          date: '03.12.2024',
        },
      ],
    },
    {
      id: 7,
      title: 'Baldurs Gate 3',
      price: 3299,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=400&fit=crop',
      rating: 5,
      reviewCount: 7823,
      genre: 'RPG',
      isNew: false,
      reviews: [
        {
          id: 1,
          author: 'RPGFan',
          rating: 5,
          text: 'Лучшая RPG 2024 года! Невероятная свобода выбора.',
          date: '05.12.2024',
        },
        {
          id: 2,
          author: 'Приключенец',
          rating: 5,
          text: 'Каждое прохождение уникально. Шедевр!',
          date: '02.12.2024',
        },
      ],
    },
    {
      id: 8,
      title: 'Call of Duty: Modern Warfare III',
      price: 4999,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
      rating: 4,
      reviewCount: 4567,
      genre: 'FPS',
      isNew: true,
      reviews: [
        {
          id: 1,
          author: 'Снайпер_228',
          rating: 4,
          text: 'Отличный мультиплеер! Динамичный геймплей.',
          date: '06.12.2024',
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
