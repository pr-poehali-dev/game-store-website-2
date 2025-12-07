import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-neon">
                <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-glow">GAME STORE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Крупнейший магазин цифровых игр в России. Быстро, безопасно, выгодно.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover:border-primary/50">
                <Icon name="Twitter" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="hover:border-primary/50">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="hover:border-primary/50">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="hover:border-primary/50">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Скидки
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Топ продаж
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Предзаказы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Помощь</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Служба поддержки
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Как купить
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Способы оплаты
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Возврат средств
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Рассылка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь и получайте уведомления о скидках и новинках
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email" className="bg-background" />
              <Button size="icon" className="shrink-0">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Game Store. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
