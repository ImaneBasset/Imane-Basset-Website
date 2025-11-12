import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "imanebasset22@gmail.com",
      href: "mailto:imanebasset22@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 (0)7362333379",
      href: "tel:+447362333379",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/imane-basset",
      href: "https://linkedin.com/in/imane-basset",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Birmingham, UK",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item) => (
              <Card
                key={item.label}
                className="p-6 shadow-card hover:shadow-glow transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium hover:text-primary transition-smooth"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 shadow-card text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a question, opportunity, or just want to say hi,
              I'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="shadow-glow"
              onClick={() => window.location.href = "mailto:imanebasset22@gmail.com"}
            >
              Send Me an Email
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
