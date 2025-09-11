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
            Why I Do <span className="text-primary">What I Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a catalyst who helps teams turn technology into competitive advantage and measurable business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-4">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Starting as a digital marketing professional, I discovered my passion for bridging business strategy 
              with emerging technology. This curiosity led me to become an entrepreneur who helps teams harness 
              AI and modern web technologies to solve real business challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don't just fit into teams—I elevate them. My approach combines strategic marketing insight with 
              technical implementation, focusing on solutions that drive measurable growth and competitive advantage. 
              Every project is an opportunity to turn innovative ideas into business impact.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">What Drives Me</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Turning cutting-edge AI into practical business solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Collaborating with visionary teams who believe technology can change everything</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Creating measurable impact that fuels sustainable growth</span>
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
                    <h4 className="text-xl font-semibold mb-2">Approachable Futurist</h4>
                    <p className="text-muted-foreground">
                      I stay at the forefront of AI and emerging technologies, but always ground innovations 
                      in human-first solutions that teams can actually implement and scale.
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
                    <h4 className="text-xl font-semibold mb-2">Collaborative Catalyst</h4>
                    <p className="text-muted-foreground">
                      I don't just deliver projects—I elevate entire teams. Every collaboration focuses on 
                      partnership over solo achievement, creating lasting impact that extends beyond individual initiatives.
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