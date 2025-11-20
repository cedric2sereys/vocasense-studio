import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Start building in <span className="text-success">minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get your free API key and start transcribing in 100+ languages. No credit card required. 600 free minutes every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="accent">
              Create Free Account
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join 50,000+ developers already using VocaSense
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
