import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Linkedin, Github, Download, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Brainstorm Your <span className="text-primary">Next Big Idea</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn innovative technology into business growth? Whether you need a strategic partner, 
            technical catalyst, or collaborative team member, I'd love to explore how we can create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your.email@company.com" className="bg-background" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What's this about?" className="bg-background" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project, goals, and how I can help..."
                      className="min-h-32 bg-background"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  I typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info & Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Direct Contact
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">frankdofour@gmail.com</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Time zone</p>
                    <p className="font-medium">PST (UTC-8)</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Direct Email
                </Button>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Find Me Online</h4>
                
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Portfolio
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Why Work With Me?</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client satisfaction</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average project ROI</span>
                    <span className="font-semibold">300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-semibold">&lt; 24h</span>
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