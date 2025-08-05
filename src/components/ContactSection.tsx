import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-accent-gradient bg-clip-text text-transparent">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="bg-background/50 border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="bg-background/50 border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-background/50 border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <Input 
                  type="text" 
                  placeholder="Landing Page, E-commerce, SaaS..."
                  className="bg-background/50 border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="bg-background/50 border-border min-h-32"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-card-gradient border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground">hello@theonepageabs.com</p>
                  <p className="text-muted-foreground">projects@theonepageabs.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">123 Innovation Street</p>
                  <p className="text-muted-foreground">San Francisco, CA 94107</p>
                </div>
              </div>
            </Card>

            <div className="text-center pt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Ready to get started?
              </h4>
              <p className="text-muted-foreground mb-6">
                Book a free consultation call and let's discuss your project.
              </p>
              <Button variant="gradient" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;