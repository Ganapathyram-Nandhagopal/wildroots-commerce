import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, Leaf, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useProducts } from '@/contexts/ProductsContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </Card>
            </div>

            <div className="animate-slide-up">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="mb-8">
                <span className="font-playfair text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <Button
                size="lg"
                onClick={() => addToCart(product)}
                className="w-full md:w-auto mb-12 text-lg"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <div className="space-y-4 border-t pt-8">
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">100% Organic Ingredients</h3>
                    <p className="text-sm text-muted-foreground">
                      Made with certified organic botanicals and natural extracts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Cruelty-Free</h3>
                    <p className="text-sm text-muted-foreground">
                      Never tested on animals, ethically produced
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">
                      30-day satisfaction guarantee on all products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
