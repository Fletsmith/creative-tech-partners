import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, TrendingUp, Zap, Database, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      "ChatGPT & GPT-4 Integration",
      "Workflow Automation",
      "AI Analytics & Insights",
      "Machine Learning Tools",
      "Zapier & Make.com"
    ],
    color: "text-purple-600"
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: [
      "React & TypeScript",
      "Next.js & Tailwind CSS",
      "Node.js & APIs",
      "Database Design",
      "Performance Optimization"
    ],
    color: "text-blue-600"
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    skills: [
      "SEO & Content Strategy",
      "Google Ads & Analytics",
      "Conversion Optimization",
      "Growth Hacking",
      "Data-Driven Marketing"
    ],
    color: "text-green-600"
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-background">
            <Zap className="w-4 h-4 mr-2" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Excellence Meets <span className="text-primary">Strategic Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI integration, modern development, and growth marketing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies I Use Daily</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "OpenAI API", "React", "TypeScript", "Tailwind CSS", "Supabase",
              "Google Analytics", "Figma", "Webflow", "Notion", "Linear",
              "Stripe", "Vercel", "GitHub", "Docker", "PostgreSQL"
            ].map((tool) => (
              <Badge 
                key={tool} 
                variant="secondary" 
                className="px-4 py-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}