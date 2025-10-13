import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen font-inter">
      <Navigation />

      <section className="pt-32 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto animate-fade-in">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="font-playfair text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    rows={6}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Green Street<br />
                      Nature City, NC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@featherorganics.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h3 className="font-playfair text-xl font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
