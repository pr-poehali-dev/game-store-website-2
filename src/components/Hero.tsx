import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDE1NSwgMTM1LCAyNDUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Новая коллекция 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Лучшие игры <br />
            <span className="text-glow bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              по лучшим ценам
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи игр для PC, PlayStation, Xbox и Nintendo Switch. 
            Мгновенная доставка, гарантия лучшей цены и круглосуточная поддержка.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="font-bold text-lg px-8 glow-neon group">
              <Icon name="TrendingUp" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              Популярное
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-8 border-2">
              <Icon name="Percent" size={20} className="mr-2" />
              Скидки до 80%
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow">10K+</div>
              <div className="text-sm text-muted-foreground">Игр в каталоге</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-secondary text-glow">500K+</div>
              <div className="text-sm text-muted-foreground">Довольных игроков</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent text-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" />
    </section>
  );
}
