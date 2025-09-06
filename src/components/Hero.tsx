import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground">Gujju</span>
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Giridhar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
              Python Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              B.Tech graduate in Computer Science (AI & Data Science) passionate about machine learning, 
              data analysis, and building intelligent solutions. Experienced in Python, Django, React, 
              and cloud technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="portfolio" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="outline_portfolio" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open("mailto:giridhargujju@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>giridhargujju@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>(+91) 89788 55042</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;