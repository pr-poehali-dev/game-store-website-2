import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [cartCount] = useState(0);

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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-xs animate-pulse-glow">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  <div className="text-center py-12 text-muted-foreground">
                    <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Корзина пуста</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}