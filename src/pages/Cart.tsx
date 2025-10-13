import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useOrders } from '@/contexts/OrdersContext';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    addOrder({
      customerName: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cartTotal
    });

    clearCart();
    setCheckoutOpen(false);
    setCustomerInfo({ name: '', email: '', phone: '' });
    toast.success('Order placed successfully!');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen font-inter">
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-24 h-24 text-muted mx-auto mb-6" />
            <h1 className="font-playfair text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our premium organic products
            </p>
            <Button asChild size="lg">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </section>
        <Footer />
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
              Continue Shopping
            </Link>
          </Button>

          <h1 className="font-playfair text-5xl font-bold mb-8 animate-fade-in">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="p-6 animate-fade-in">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-playfair text-xl font-semibold mb-1 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-playfair text-2xl font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              <Button variant="outline" onClick={clearCart} className="w-full">
                Clear Cart
              </Button>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 animate-slide-up">
                <h2 className="font-playfair text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping</span>
                    <span className="font-semibold text-primary">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full mb-4" onClick={() => setCheckoutOpen(true)}>
                  Proceed to Checkout
                </Button>
                
                <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Checkout</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCheckout} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between text-lg font-bold mb-4">
                          <span>Total:</span>
                          <span className="text-primary">${cartTotal.toFixed(2)}</span>
                        </div>
                        <Button type="submit" className="w-full">
                          Place Order
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                
                <p className="text-sm text-muted-foreground text-center">
                  Free shipping on all orders
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
