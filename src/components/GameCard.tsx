import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface GameCardProps {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
  genre: string;
  isNew?: boolean;
  reviews: Review[];
}

export default function GameCard({
  title,
  price,
  discount,
  image,
  rating,
  reviewCount,
  genre,
  isNew,
  reviews,
}: GameCardProps) {
  const [showReviews, setShowReviews] = useState(false);
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name={star <= rating ? 'Star' : 'Star'}
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="group overflow-hidden border-2 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 glow-neon-hover">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold animate-pulse-glow">
            НОВИНКА
          </Badge>
        )}
        {discount && (
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-bold text-lg">
            -{discount}%
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <Badge variant="outline" className="shrink-0 text-xs">
            {genre}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {renderStars(rating)}
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            ({reviewCount} отзывов)
            <Icon name={showReviews ? 'ChevronUp' : 'ChevronDown'} size={14} />
          </button>
        </div>

        {showReviews && (
          <div className="space-y-2 animate-fade-in max-h-48 overflow-y-auto">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-3 rounded-lg bg-muted/50 border border-border/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{review.author}</span>
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{review.text}</p>
                <span className="text-xs text-muted-foreground/70">{review.date}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-baseline gap-2 pt-2">
          {discount ? (
            <>
              <span className="text-2xl font-bold text-primary text-glow">
                {finalPrice.toFixed(2)} ₽
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {price.toFixed(2)} ₽
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-foreground">{price.toFixed(2)} ₽</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full font-bold text-base group-hover:glow-neon transition-all"
          onClick={() => window.open('https://t.me/straxdoksmaks', '_blank')}
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          КУПИТЬ
        </Button>
      </CardFooter>
    </Card>
  );
}