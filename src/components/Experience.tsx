import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Hastings Direct",
      role: "DevOps Placement Intern",
      period: "Sep 2024 – Aug 2025",
      location: "Hastings, UK",
      type: "work",
      achievements: [
        "Designed and implemented CI/CD pipelines in Azure DevOps, improving reliability and reducing delivery risks",
        "Deployed and maintained microservices on Microsoft Azure using Kubernetes (AKS), Helm, PowerShell, and YAML",
        "Optimized the Azure image build process, reducing the time by up to 80%",
        "Automated infrastructure and configuration tasks increasing repeatability",
      ],
      technologies: ["Azure DevOps", "Kubernetes", "Helm", "PowerShell", "YAML"],
    },
    {
      company: "Met Office",
      role: "IT Asset Management Intern",
      period: "Jul 2024 – Aug 2024",
      location: "Exeter, UK",
      type: "work",
      achievements: [
        "Supported the Hardware Asset Management (HAM) function with business-as-usual activities",
        "Participated in IT Asset Management department meetings to stay aligned on active projects",
      ],
      technologies: ["IT Asset Management", "HAM"],
    },
    {
      company: "University of Birmingham",
      role: "Teaching Assistant",
      period: "Sep 2023 – April 2024",
      location: "Birmingham, UK",
      type: "work",
      achievements: [
        "Facilitated tutorials (40-80 students), help sessions (10-15 students), and one-to-one support",
        "Taught Mathematical and Logical Foundations of Computer Science and AI modules",
        "Topics include propositional logic, predicate logic, Linear Regression, classification, and optimization",
      ],
      technologies: ["Teaching", "AI", "Logic", "Machine Learning"],
    },
  ];

  const education = [
    {
      institution: "University of Birmingham",
      degree: "BSc. Computer Science with Industrial Year",
      grade: "Expected First Class",
      period: "Sep 2022 – June 2026",
      location: "Birmingham, UK",
    },
    {
      institution: "Education First Oxford International School",
      degree: "University Foundation Year of Science and Technology",
      grade: "81%",
      period: "Sep 2021 – May 2022",
      location: "Oxford, UK",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-glow transition-smooth"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">
                        {exp.role}
                      </h4>
                      <p className="font-semibold text-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-glow transition-smooth"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-accent mb-1">
                        {edu.degree}
                      </h4>
                      <p className="font-semibold text-foreground mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Grade: {edu.grade}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
