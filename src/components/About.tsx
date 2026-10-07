import { Card } from "@/components/ui/card";
import { Award, Lightbulb, BookOpen, Plane } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Award,
    title: "Taekwondo",
    description: "Student national team member"
  }, {
    icon: Lightbulb,
    title: "Building",
    description: "Turning ideas into useful things"
  }, {
    icon: BookOpen,
    title: "Learning",
    description: "Always curious, always learning"
  }, {
    icon: Plane,
    title: "Exploring",
    description: "Travelling & discovering new places"
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Final-year Computer Science student at the University of Birmingham.
            <br />
            I love building useful tools, solving problems, and learning along the
            way. Outside of university, you&apos;ll usually find me practising Taekwondo,
            working on a new idea, or travelling.
          </p>

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
