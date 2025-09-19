import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, Zap, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity Design",
      price: "From $2,500",
      duration: "2-3 weeks",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      features: [
        "Logo design & variations",
        "Brand color palette",
        "Typography selection",
        "Brand guidelines document",
        "Business card design",
        "3 revision rounds"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      price: "From $4,000",
      duration: "3-6 weeks",
      description: "Custom website development with modern design, responsive layout, and optimized performance.",
      features: [
        "Responsive web design",
        "Custom development",
        "SEO optimization",
        "Performance optimization",
        "Content management",
        "Ongoing support"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Design",
      price: "From $3,000",
      duration: "2-4 weeks",
      description: "User-centered design approach for web and mobile applications with focus on usability and conversion.",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design",
        "User testing",
        "Design system creation",
        "Handoff documentation"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Strategy",
      price: "From $1,500",
      duration: "1-2 weeks",
      description: "Comprehensive digital strategy consulting to align your brand with business objectives and market opportunities.",
      features: [
        "Market analysis",
        "Competitor research",
        "Brand positioning",
        "Digital roadmap",
        "Marketing strategy",
        "Performance metrics"
      ]
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Services & Pricing
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional design and development services tailored to help your business stand out in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-2xl font-bold text-accent">{service.price}</span>
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToBooking}
                    className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;