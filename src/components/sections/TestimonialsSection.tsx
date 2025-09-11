import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    company: "Series A Startup",
    rating: 5,
    content: "Alex transformed our customer support with an AI system that handles 70% of our tickets automatically. The ROI was immediate and the implementation was flawless.",
    avatar: "SC",
    highlight: "70% automation achieved"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Growth",
    company: "Digital Agency",
    rating: 5,
    content: "Working with Alex on our growth dashboard was game-changing. User retention increased by 45% within two months. His technical and strategic insights are exceptional.",
    avatar: "MR",
    highlight: "45% retention increase"
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "E-commerce Platform",
    rating: 5,
    content: "Alex's marketing automation system generated 300% more qualified leads while cutting our costs in half. He truly understands how to blend technology with marketing strategy.",
    avatar: "EW",
    highlight: "300% lead increase"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-background">
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Partners Say About <span className="text-primary">Our Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real clients who've seen transformative results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className="bg-background shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Highlight */}
                <div className="mb-6">
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                    {testimonial.highlight}
                  </Badge>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
        
        {/* Additional social proof */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechFlow", "GrowthLab", "DataVision", "InnovateCorp", "ScaleUp"].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}