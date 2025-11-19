import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterBlog = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Newsletter */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest tutorials, product updates, and developer tips delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join 50,000+ developers. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          {/* Blog */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Latest from the Blog</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-accent font-semibold">Tutorial</span>
                  <h4 className="font-semibold text-foreground">Building Real-Time Voice Apps with React</h4>
                  <p className="text-sm text-muted-foreground">Nov 10, 2025</p>
                </div>
                <div>
                  <span className="text-xs text-accent font-semibold">Product Update</span>
                  <h4 className="font-semibold text-foreground">New: Enhanced Arabic Language Support</h4>
                  <p className="text-sm text-muted-foreground">Nov 5, 2025</p>
                </div>
                <div>
                  <span className="text-xs text-accent font-semibold">Engineering</span>
                  <h4 className="font-semibold text-foreground">Optimizing Transcription Latency</h4>
                  <p className="text-sm text-muted-foreground">Oct 28, 2025</p>
                </div>
              </div>
              <Button variant="link" className="p-0 mt-4">View all posts &gt;</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBlog;
