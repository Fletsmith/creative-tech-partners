import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero px-6 py-20">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm">
          <Brain className="w-4 h-4 mr-2" />
          AI & Digital Marketing Strategist
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Turning Innovation Into 
          <span className="block">Measurable Results</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          I help tech startups and digital agencies leverage AI tools, modern web technologies, 
          and data-driven marketing to accelerate growth and solve complex business challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          
          <Button variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm">
            Let's Collaborate
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <span className="font-medium">React & AI Development</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-medium">Growth Marketing</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-medium">AI Automation</span>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </section>
  );
}