import { Card } from "@/components/ui/card";
import { Code, Cloud, Brain, Award } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Cloud,
    title: "DevOps",
    description: "Azure, Kubernetes, CI/CD pipelines"
  }, {
    icon: Code,
    title: "Development",
    description: "Full-stack web applications"
  }, {
    icon: Brain,
    title: "Teaching",
    description: "AI & Computer Science tutor"
  }, {
    icon: Award,
    title: "Athletics",
    description: "Taekwon-Do national team member"
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Computer Science student at the University of Birmingham, recently completed a placement as a DevOps Engineer at Hastings Direct. Currently a Teaching Assistant at the University of Birmingham.                                                                                                                
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-card hover:shadow-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student with a passion for DevOps and
                automation. Currently completing my industrial year at Hastings
                Direct, where I design CI/CD pipelines, deploy microservices on
                Azure, and optimize infrastructure processes.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-4">Languages</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Programming</p>
                  <p className="text-muted-foreground text-sm">
                    Java, JavaScript, Python, C, Bash/PowerShell, YAML, SQL
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Spoken</p>
                  <p className="text-muted-foreground text-sm">
                    Fluent in English, French, and Arabic
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(item => <Card key={item.title} className="p-6 text-center shadow-card hover:shadow-glow transition-smooth group">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;