import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, BarChart3, Home, Mail } from "lucide-react";
import rainfallBg from "@/assets/rainfall-bg.jpg";
import iplBg from "@/assets/ipl-bg.jpg";
import houseBg from "@/assets/house-bg.jpg";
import spamBg from "@/assets/spam-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Rainfall Prediction Using XGBoost",
      description: "Developed a machine learning model to predict rainfall using historical weather data, improving prediction accuracy by utilizing the XGBoost algorithm. The project involved comprehensive data preprocessing, model training, and performance evaluation.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Python", "XGBoost", "Pandas", "Data Science", "Weather Analysis"],
      category: "Machine Learning",
      gradient: "from-blue-500 to-cyan-500",
      backgroundImage: rainfallBg
    },
    {
      title: "IPL Analysis Dashboard",
      description: "Comprehensive analysis of Indian Premier League data using Python libraries. The project uncovers insights about team performance, player statistics, match outcomes, and key trends through interactive visualizations.",
      icon: <BarChart3 className="h-6 w-6" />,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization"],
      category: "Data Analysis",
      gradient: "from-purple-500 to-pink-500",
      backgroundImage: iplBg
    },
    {
      title: "House Price Prediction",
      description: "Built a comprehensive regression model to predict house prices based on features like location, size, number of rooms, and other property characteristics. Implemented advanced feature engineering and data visualization techniques.",
      icon: <Home className="h-6 w-6" />,
      technologies: ["Python", "Scikit-learn", "Linear Regression", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      gradient: "from-green-500 to-teal-500",
      backgroundImage: houseBg
    },
    {
      title: "Spam Email Classifier",
      description: "Developed an intelligent email classification system using Natural Language Processing to identify spam emails. Implemented text preprocessing, TF-IDF vectorization, and Naive Bayes classification for accurate results.",
      icon: <Mail className="h-6 w-6" />,
      technologies: ["Python", "NLTK", "Scikit-learn", "NLP", "Naive Bayes"],
      category: "NLP",
      gradient: "from-orange-500 to-red-500",
      backgroundImage: spamBg
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in AI, machine learning, and data science through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
              />
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                    <div className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`}>
                      {project.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="portfolio" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      // In a real project, these would link to actual repositories
                      console.log(`View ${project.title} details`);
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline_portfolio" 
                    size="sm"
                    onClick={() => {
                      // In a real project, these would link to GitHub repositories
                      console.log(`View ${project.title} code`);
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            variant="portfolio" 
            size="lg"
            onClick={() => window.open("mailto:giridhargujju@gmail.com")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;