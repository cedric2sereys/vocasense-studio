import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, BookOpen, Github } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Join the community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with developers building the future of voice-enabled applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MessageSquare className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Join Discord</h3>
              <p className="text-muted-foreground mb-4">
                Join 5,000+ developers in real-time discussions
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
              <Github className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-muted-foreground mb-4">
                Contribute to our SDKs and tools. Browse sample projects and implementation examples.
              </p>
              <Button variant="outline">View on Github</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Follow us on Social</h3>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <MessageSquare className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
