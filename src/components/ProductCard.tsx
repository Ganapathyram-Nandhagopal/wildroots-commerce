import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart, Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <div className="mb-2">
            <span className="text-xs font-inter font-medium text-muted-foreground uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-muted-foreground">
            {product.reviews} reviews
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full group/btn"
          size="lg"
        >
          <ShoppingBag className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
