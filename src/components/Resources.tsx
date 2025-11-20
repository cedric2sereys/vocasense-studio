import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code2, Rocket, BookOpen } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Resources for <span className="text-primary">developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate VocaSense into your application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">API Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete reference guides, endpoints, and authentication
              </p>
              <Button variant="link" className="p-0 h-auto">
                View Docs &gt;
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Start Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get up and running in under 5 minutes
              </p>
              <Button variant="link" className="p-0 h-auto">
                Start Now &gt;
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Code Examples</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sample implementations in Python, Node.js, React, and more
              </p>
              <Button variant="link" className="p-0 h-auto">
                Browse Examples &gt;
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step guides for common use cases and integrations
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Tutorials &gt;
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
