import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-neon">
                <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-xl hidden sm:inline text-glow">GREEN RUSSIA SHOP</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#catalog"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <button
                onClick={() => window.open('https://t.me/straxdoksmaks', '_blank')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Поддержка
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}