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
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2 bg-primary/10 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
              </div>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2 bg-success/10 rounded-lg">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Latest from the Blog</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-success font-semibold">Tutorial</span>
                  <h4 className="font-semibold text-foreground">Building Real-Time Voice Apps with React</h4>
                  <p className="text-sm text-muted-foreground">Nov 10, 2025</p>
                </div>
                <div>
                  <span className="text-xs text-success font-semibold">Product Update</span>
                  <h4 className="font-semibold text-foreground">New: Enhanced Arabic Language Support</h4>
                  <p className="text-sm text-muted-foreground">Nov 5, 2025</p>
                </div>
                <div>
                  <span className="text-xs text-success font-semibold">Engineering</span>
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
