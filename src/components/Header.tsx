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
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-neon">
                <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-xl hidden sm:inline text-glow">GAME STORE</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#catalog"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#new"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                Новинки
              </a>
              <a
                href="#sales"
                className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                Скидки
              </a>
              <a
                href="#support"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Поддержка
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 flex-1 max-w-md">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск игр..."
                  className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

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
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/30">
                    <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center">
                      <Icon name="Image" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Cyberpunk 2077</h4>
                      <p className="text-sm text-muted-foreground">1999 ₽</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Trash2" size={18} />
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between mb-4">
                      <span className="font-bold">Итого:</span>
                      <span className="font-bold text-xl text-primary">5997 ₽</span>
                    </div>
                    <Button className="w-full font-bold">
                      <Icon name="CreditCard" size={18} className="mr-2" />
                      Оформить заказ
                    </Button>
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
