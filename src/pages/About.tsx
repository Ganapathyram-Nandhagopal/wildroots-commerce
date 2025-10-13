import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, Heart, Users, Award } from 'lucide-react';
import aboutBanner from '@/assets/about-banner.jpg';

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground animate-fade-in">
            Our Story
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16 animate-slide-up">
            <h2 className="font-playfair text-4xl font-bold mb-6 text-center">
              Crafted by Nature, Perfected by Care
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Feather Organics was born from a simple belief: that the best products come from nature, 
              treated with respect and care. We started our journey in 2018, dedicated to creating premium 
              organic products that honor both the earth and those who use them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every product we create is a testament to our commitment to sustainability, quality, and 
              natural beauty. We source our ingredients from certified organic farms, work with ethical 
              suppliers, and never compromise on our values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted/30 p-8 rounded-lg animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide the highest quality organic products while protecting our planet and 
                supporting sustainable farming practices worldwide.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Sustainability, transparency, and compassion guide everything we do. We believe in 
                honest products and honest business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                We support local communities and fair trade practices in everything we do
              </p>
            </div>

            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Certified Quality</h3>
              <p className="text-muted-foreground">
                All our products are certified organic and rigorously tested for purity
              </p>
            </div>

            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Sustainable packaging and carbon-neutral shipping on every order
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
