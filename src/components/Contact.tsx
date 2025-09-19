import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@portfolio.com",
      link: "mailto:hello@portfolio.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "https://instagram.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear about your vision and explore how we can bring it to life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 text-accent rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-foreground hover:text-accent transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-lg group"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-primary text-white shadow-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Every great project begins with a conversation. Let's discuss your ideas, goals, and how I can help bring your vision to reality.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    variant="secondary"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300"
                  >
                    Schedule Free Consultation
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    onClick={() => window.open('mailto:hello@portfolio.com', '_blank')}
                  >
                    Send Quick Email
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">150+</div>
                      <div className="text-sm text-white/80">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">8+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;