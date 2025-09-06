import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "giridhargujju@gmail.com",
      href: "mailto:giridhargujju@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(+91) 89788 55042",
      href: "tel:+918978855042"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "gujju-giridhar",
      href: "https://www.linkedin.com/in/gujju-giridhar-0704b4249"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "giridhargujju3",
      href: "https://github.com/giridhargujju3"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a conversation about AI and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with fellow developers, potential employers, and anyone 
                interested in AI and data science. Whether you have a project in mind, want to discuss 
                opportunities, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <div className="text-primary">
                          {contact.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline_portfolio" 
                  size="icon"
                  onClick={() => window.open("https://www.linkedin.com/in/gujju-giridhar-0704b4249", "_blank")}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline_portfolio" 
                  size="icon"
                  onClick={() => window.open("https://github.com/giridhargujju3", "_blank")}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline_portfolio" 
                  size="icon"
                  onClick={() => { window.location.href = "mailto:giridhargujju@gmail.com"; }}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently open to new opportunities and exciting projects. 
                      Let's discuss how we can work together to bring your ideas to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="portfolio" 
                      size="lg" 
                      className="w-full"
                      onClick={() => { window.location.href = "mailto:giridhargujju@gmail.com?subject=Project Inquiry"; }}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Start a Conversation
                    </Button>
                    
                    <Button 
                      variant="outline_portfolio" 
                      size="lg" 
                      className="w-full"
                      onClick={() => { window.location.href = "tel:+918978855042"; }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Response time: Usually within 24 hours
                    </p>
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