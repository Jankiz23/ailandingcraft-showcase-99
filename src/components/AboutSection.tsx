import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Us</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner Images */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/78f9004d-313c-4b54-9590-bb820ad0a4cb.png" 
                  alt="Founder of The One PageLabs Agency" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/f66f0d28-9d01-41da-9f32-3d53b7a9a280.png" 
                  alt="CEO of The One PageLabs Agency" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="p-8 bg-card-gradient border-border">
                <h3 className="text-3xl font-bold text-foreground mb-6">Meet Our Founders</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Welcome to The One PageLabs Agency. We're passionate about creating digital experiences 
                  that not only look stunning but drive real business results.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in web design and development, we founded this agency with 
                  a simple mission: to help businesses transform their online presence through 
                  high-converting landing pages and modern web solutions powered by creativity and experience.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every project is a partnership. We work closely with each client to understand 
                  their vision and bring it to life with cutting-edge technology and creative design.
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card-gradient border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 bg-card-gradient border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;