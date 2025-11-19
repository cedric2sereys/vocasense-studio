import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Start building in minutes
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
