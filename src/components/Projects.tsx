import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Unitrack",
      description:
        "Built a personal web app to track university grades and predict degree classification, integrating Canvas LMS to automatically fetch module-specific grades. Implemented interactive D3.js charts to visualize performance trends.",
      technologies: ["Next.js", "React", "Tailwind CSS", "D3.js", "Canvas LMS API"],
      icon: "📊",
    },
    {
      title: "StarStories",
      description:
        "Developed an interactive full-stack web application that generates AI-powered bedtime stories for children. Features include traditional and custom story carousels, and an 'Add Your Own Story' feature for user-created narratives.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Stable Diffusion API", "Jhipster"],
      icon: "⭐",
    },
    {
      title: "Spotify Playlist Archiver",
      description:
        "Created a Python script to automatically archive Spotify's Discover Weekly playlists with weekly execution scheduled on PythonAnywhere. Integrated the Spotify API with refresh tokens for secure playlist backup.",
      technologies: ["Python", "Spotify API", "PythonAnywhere"],
      icon: "🎵",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and creativity
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-glow transition-smooth group flex flex-col"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-sm text-primary">
                  <span className="flex items-center gap-1 hover:underline cursor-pointer">
                    <Code2 size={16} />
                    View Code
                  </span>
                  <span className="flex items-center gap-1 hover:underline cursor-pointer">
                    <ExternalLink size={16} />
                    Live Demo
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
