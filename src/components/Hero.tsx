import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              Computer Science Student
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img 
              src={profilePhoto} 
              alt="Imane Basset" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-glow ring-4 ring-primary/20"
            />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Imane Basset</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A final-year Computer Science student at the University of Birmingham
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="shadow-glow"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:imanebasset22@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/imane-basset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ImaneBasset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </a>
    </section>
  );
};

export default Hero;
