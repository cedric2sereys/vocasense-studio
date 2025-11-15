import { Zap, Globe, Shield, Code, Gauge, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-100ms latency for real-time transcription. Stream audio and get results instantly with our optimized pipeline.",
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Support for over 100 languages with automatic language detection. Build truly global voice applications.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "GDPR compliant with European data centers. Your data is encrypted, never stored, and never used for training.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Simple REST and WebSocket APIs with SDKs for all major languages. Get started in minutes, not days.",
  },
  {
    icon: Gauge,
    title: "Scalable",
    description: "From prototype to millions of users. Our infrastructure scales automatically with your needs.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Active Discord community, regular events, and dedicated developer support. You're never alone.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything you need to build voice apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make voice integration seamless and scalable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 bg-card"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
