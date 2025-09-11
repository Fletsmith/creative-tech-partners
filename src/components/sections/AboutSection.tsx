import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lightbulb, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <User className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Passion Meets <span className="text-primary">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a tech consultant who bridges the gap between cutting-edge innovation and real business impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-4">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a passion for both technology and entrepreneurship, I've spent years helping organizations 
              harness the power of AI and digital innovation. My unique background combines deep technical 
              expertise with strategic marketing insight.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that the best solutions come from understanding both the technical possibilities 
              and the human needs behind every project. Whether it's implementing AI workflows or 
              crafting growth strategies, I focus on delivering measurable outcomes.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">What Drives Me</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Solving complex problems with elegant, scalable solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Building meaningful partnerships with forward-thinking teams</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Creating technology that makes a real difference</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Innovation Mindset</h4>
                    <p className="text-muted-foreground">
                      Always exploring the latest AI tools and technologies to find creative solutions 
                      that give my clients a competitive edge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Results-Driven</h4>
                    <p className="text-muted-foreground">
                      Every project is measured by its impact. I focus on delivering tangible ROI 
                      through data-driven strategies and proven methodologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}