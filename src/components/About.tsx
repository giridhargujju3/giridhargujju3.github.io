import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Target, MapPin, Globe, Linkedin } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "Kakinada Institute of Engineering and Technology",
      degree: "B.Tech in Computer Science (AI & Data Science)",
      year: "May 2024",
      location: "Andhra Pradesh"
    },
    {
      institution: "NRI Junior College",
      degree: "Intermediate (Science)",
      year: "May 2020"
    },
    {
      institution: "ZP High School",
      degree: "State Board Secondary Education",
      year: "April 2018"
    }
  ];

  const currentExperience = [
    {
      role: "Automation Engineering and Full Stack Developer",
      company: "Sierraedge AI Private Limited",
      employmentType: "Full-time",
      duration: "01/Feb/2024 - Present",
      description:
        "Working on automation solutions and full-stack development projects, implementing scalable solutions using modern technologies.",
      website: "https://sierraedge.ai/",
      linkedin: "https://www.linkedin.com/company/sierraedge-ai/",
      locationLabel: "Bengaluru, Karnataka, India",
      locationUrl:
        "https://www.google.com/maps?q=193%20Kothanur%20Royal%20County%2C%20Lyt%20Jambu%20Savari%20Dinne%2C%20JP%20Nagar%20VIII%20phase%2C%20Bangalore-560076%2C%20Karnataka%2C%20India"
    }
  ];

  const internships = [
    {
      role: "IBM SkillsBuild Internship",
      company: "Artificial Intelligence - Machine Learning",
      duration: "6 weeks",
      description:
        "Engaged in comprehensive AI and ML training, developing practical skills through project-based learning."
    },
    {
      role: "Salesforce Developer Virtual Internship",
      company: "Salesforce Platform Development",
      duration: "8 weeks",
      description:
        "Completed various modules on development within the Salesforce platform, focusing on CRM solutions."
    },
    {
      role: "Virtual Internship in AI-ML",
      company: "Advanced Machine Learning",
      duration: "10 weeks",
      description:
        "Participated in rigorous online training program, enhancing abilities in advanced ML techniques and AI."
    }
  ];

  const certifications = [
    "Salesforce Developer Certification",
    "Basic Coding in Python by Unstop",
    "Machine Learning with Go by Infosys",
    "Artificial Intelligence Job Simulation by Cognizant",
    "Cloud Foundations by Great Learning",
    "Python for Machine Learning by Great Learning"
  ];

  const training = [
    {
      title: "Certified as a Python Full Stack Developer",
      institution: "Sathya Technologies",
      duration: "6 months",
      locationLabel: "SR Nagar, Hyderabad",
      locationUrl:
        "https://www.google.com/maps?q=Sri%20Sai%20Arcade%2C%20Door%20No.%207-1-455%2C%202nd%20Floor%2C%20Satyam%20Theatre%20Rd%2C%20Beside%20Aditya%20Trade%20Centre%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500038"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging AI and data science to create innovative solutions
          </p>
        </div>

        {/* Objective */}
        <Card className="mb-12 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eager to join a forward-thinking company that encourages professional growth and innovation, where I can
                  leverage my skills in artificial intelligence, data science, and cloud computing to contribute effectively to the team's success.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience & Internships Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {currentExperience.map((exp, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="text-muted-foreground text-sm">{exp.duration}</span>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                        {exp.employmentType}
                      </span>
                      <div className="ml-auto flex items-center gap-2">
                        {/* Location icon only; click opens map with full address */}
                        <a
                          href={exp.locationUrl}
                          target="_blank"
                          rel="noreferrer"
                          title={exp.locationLabel}
                          className="text-muted-foreground hover:text-primary"
                        >
                          <MapPin className="h-4 w-4" />
                        </a>
                        {/* Company website */}
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noreferrer"
                          title="Company website"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                        {/* LinkedIn */}
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          title="LinkedIn"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Internships</h3>
            </div>
            <div className="space-y-4">
              {internships.map((exp, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="text-muted-foreground text-sm">{exp.duration}</span>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Training</h3>
          </div>
          <div className="space-y-4">
            {training.map((t, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground">{t.title}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>{t.institution}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-muted-foreground text-sm">{t.duration}</span>
                    <div className="ml-auto flex items-center gap-2">
                      {/* Location icon only; click opens map with full address */}
                      <a
                        href={t.locationUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={t.locationLabel}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <MapPin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-muted-foreground text-sm">{edu.location}</span>
                    <span className="text-muted-foreground text-sm">{edu.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-center">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NCC Activity */}
        <Card className="mt-8 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h4 className="font-semibold text-primary mb-2">National Cadet Corps (NCC)</h4>
            <p className="text-muted-foreground">
              Awarded 'B' Certificate, participated in various camps and events promoting discipline and leadership skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
