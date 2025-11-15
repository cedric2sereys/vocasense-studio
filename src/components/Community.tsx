import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, BookOpen, Github } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Join our developer community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with developers building voice-enabled apps. Get help, share projects, and shape the future of VocaSense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MessageSquare className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Discord Community</h3>
              <p className="text-muted-foreground mb-4">
                Join 50,000+ developers in our Discord server. Get instant help, share projects, and connect with the team.
              </p>
              <Button variant="outline">Join Discord</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Developer Events</h3>
              <p className="text-muted-foreground mb-4">
                Regular Q&A sessions, workshops, and hackathons. Learn from experts and showcase your projects.
              </p>
              <Button variant="outline">View Calendar</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <BookOpen className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Blog & Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                In-depth tutorials, best practices, and product updates. Stay ahead with the latest in voice tech.
              </p>
              <Button variant="outline">Read Blog</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Github className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-muted-foreground mb-4">
                Contribute to our SDKs and tools. Browse sample projects and implementation examples.
              </p>
              <Button variant="outline">View on GitHub</Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-muted-foreground mb-6">
                Get weekly technical content, product updates, and exclusive early access to new features.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent">Subscribe</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Community;
