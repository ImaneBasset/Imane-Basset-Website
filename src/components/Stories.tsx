import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      title: "Google Cloud Summit London 2024",
      date: "November 2024",
      readTime: "5 min read",
      excerpt:
        "An incredible day exploring the latest in cloud technology, AI innovations, and networking with industry professionals at the Google Cloud Summit in London.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      tags: ["Cloud", "Networking", "AI"],
    },
    {
      title: "My DevOps Journey at Hastings Direct",
      date: "September 2024",
      readTime: "8 min read",
      excerpt:
        "Reflections on starting my DevOps placement, learning Azure pipelines, Kubernetes deployments, and the challenges of optimizing infrastructure at scale.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tags: ["DevOps", "Career", "Learning"],
    },
    {
      title: "Competing in the British University Taekwon-Do League",
      date: "March 2024",
      readTime: "6 min read",
      excerpt:
        "Balancing academics with athletics: my experience representing Birmingham at the BUTL national competition and the lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
      tags: ["Sports", "Personal Growth", "University"],
    },
  ];

  return (
    <section id="stories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Sharing experiences, insights, and adventures from my professional and personal journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-glow transition-smooth group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {story.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {story.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary"
                  >
                    Read Story
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More stories coming soon! Check back for updates on my latest adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
