import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { id: 'all', label: 'Все игры', icon: 'Grid3x3' },
    { id: 'new', label: 'Новинки', icon: 'Sparkles' },
    { id: 'discount', label: 'Скидки', icon: 'Percent' },
    { id: 'top', label: 'Топ продаж', icon: 'TrendingUp' },
    { id: 'action', label: 'Экшен', icon: 'Swords' },
    { id: 'rpg', label: 'RPG', icon: 'Wand2' },
    { id: 'strategy', label: 'Стратегии', icon: 'Target' },
  ];

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              className={`shrink-0 font-medium transition-all ${
                activeFilter === filter.id
                  ? 'glow-neon'
                  : 'hover:border-primary/50'
              }`}
            >
              <Icon name={filter.icon} size={16} className="mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Package" size={16} />
            <span>Найдено: <Badge variant="secondary">127 игр</Badge></span>
          </div>
          <Button variant="ghost" size="sm" className="text-sm">
            <Icon name="SlidersHorizontal" size={16} className="mr-2" />
            Фильтры
          </Button>
        </div>
      </div>
    </div>
  );
}
