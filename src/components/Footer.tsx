import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
              The One PageLabs Agency
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting the future of digital experiences with AI-powered landing pages 
              that convert visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 bg-card rounded-lg hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Landing Pages</li>
              <li>E-commerce Sites</li>
              <li>SaaS Platforms</li>
              <li>Mobile Apps</li>
              <li>AI Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 The One PageLabs Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;