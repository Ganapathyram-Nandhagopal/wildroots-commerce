import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="font-playfair text-xl font-bold">Feather Organics</span>
            </div>
            <p className="font-inter text-sm opacity-90">
              Premium organic products crafted with nature in mind. Sustainable, eco-friendly, and beautifully natural.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span>123 Green Street, Nature City</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <span>hello@featherorganics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-inter text-sm opacity-90">
            © {new Date().getFullYear()} Feather Organics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
