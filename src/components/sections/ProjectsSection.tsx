import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Customer Support Automation",
    description: "Built a complete chatbot system that reduced customer response time by 80% and handled 70% of inquiries automatically.",
    problem: "Manual support was overwhelming the team with 200+ daily tickets",
    solution: "Custom GPT-4 integration with knowledge base and CRM",
    results: ["80% faster response time", "70% automation rate", "$50k annual savings"],
    tools: ["OpenAI API", "React", "Node.js", "PostgreSQL", "Stripe"],
    category: "AI Automation"
  },
  {
    title: "SaaS Growth Analytics Dashboard",
    description: "Developed a comprehensive analytics platform that increased user retention by 45% through actionable insights.",
    problem: "Startup couldn't identify why users were churning",
    solution: "Custom dashboard with behavioral analytics and predictive modeling",
    results: ["45% increase in retention", "25% revenue growth", "Real-time insights"],
    tools: ["React", "D3.js", "Python", "MongoDB", "Mixpanel"],
    category: "Web Development"
  },
  {
    title: "Multi-Channel Marketing Automation",
    description: "Created a unified marketing system that generated 300% more qualified leads through intelligent campaign optimization.",
    problem: "Fragmented marketing efforts across multiple platforms",
    solution: "Automated workflow connecting email, social, and paid ads",
    results: ["300% more qualified leads", "60% cost reduction", "5x ROI improvement"],
    tools: ["Zapier", "HubSpot", "Google Ads", "Facebook API", "Analytics"],
    category: "Digital Marketing"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <FolderOpen className="w-4 h-4 mr-2" />
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Projects, <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some recent projects where I've helped teams achieve breakthrough results.
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="bg-primary/5 border-primary/20">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Case Study {index + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          Problem
                        </h4>
                        <p className="text-muted-foreground pl-4">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground pl-4">{project.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-muted">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="bg-muted/30 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">Key Results</h4>
                    </div>
                    
                    <div className="space-y-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Client satisfaction: 5/5 stars</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Case Studies
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}