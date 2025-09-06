import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Globe, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Core Python", "Advanced Python", "JavaScript", "SQL"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "HTML", "CSS", "Django"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "MySQL", "Database Design"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["XGBoost", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLTK"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & Technologies",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Cloud Computing", "Salesforce", "Microsoft Technologies"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Django", "Git", "Data Visualization", "SAP BASIS"],
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const specializations = [
    {
      area: "Artificial Intelligence",
      level: "Advanced",
      description: "Machine Learning, Deep Learning, Neural Networks"
    },
    {
      area: "Data Science",
      level: "Advanced", 
      description: "Data Analysis, Statistical Modeling, Predictive Analytics"
    },
    {
      area: "Web Development",
      level: "Intermediate",
      description: "Full-stack development with React and Django"
    },
    {
      area: "Cloud Computing",
      level: "Intermediate",
      description: "Cloud architecture and deployment strategies"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI, data science, web development, and cloud technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                    <div className={`text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text`}>
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Areas of <span className="text-primary">Specialization</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{spec.area}</h4>
                    <Badge 
                      variant={spec.level === "Advanced" ? "default" : "secondary"}
                      className={spec.level === "Advanced" ? "bg-primary" : ""}
                    >
                      {spec.level}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Professional Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in artificial intelligence and data science, I specialize in developing 
                machine learning models, analyzing complex datasets, and building intelligent web applications. 
                My experience spans from data preprocessing and model training to deployment and optimization, 
                always with a focus on creating practical, real-world solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;