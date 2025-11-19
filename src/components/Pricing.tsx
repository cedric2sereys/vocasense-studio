import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "10 hours of transcription/month",
      "100+ languages",
      "Real-time streaming",
      "Community support",
      "Basic analytics",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing projects",
    features: [
      "100 hours of transcription/month",
      "Everything in Free",
      "Priority support",
      "Advanced analytics",
      "Custom vocabulary",
      "Webhook integration",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: [
      "Unlimited transcription",
      "Everything in Pro",
      "Dedicated support",
      "SLA guarantees",
      "Custom integrations",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Scale with flexible plans
          </p>
          <p className="text-xl text-muted-foreground mb-6">
            Affordable solutions for startups and independent developers
          </p>
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">Free</h3>
            <p className="text-muted-foreground mb-4">Developer-friendly pricing model</p>
            <p className="text-lg text-muted-foreground mb-8">
              Pay only for what you use. No hidden fees.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Compare plans
            </Button>
            <Button size="lg" variant="accent">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
