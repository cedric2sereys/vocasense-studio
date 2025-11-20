import { Zap, Globe, Shield, Code, Gauge, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-100ms latency for real-time transcription. Stream audio and get results instantly with our optimized pipeline.",
    color: "primary"
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Support users worldwide with accurate multilingual transcription. From English to Mandarin, Spanish to Arabic.",
    color: "success"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "GDPR compliant with European data centers. Your data is encrypted, never stored, and never used for training.",
    color: "primary"
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Simple REST and WebSocket APIs with SDKs for all major languages. Get started in minutes, not days.",
    color: "primary"
  },
  {
    icon: Gauge,
    title: "Scalable",
    description: "From prototype to millions of users. Our infrastructure scales automatically with your needs.",
    color: "success"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Active Discord community, regular events, and dedicated developer support. You're never alone.",
    color: "primary"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="text-success">ship faster</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for developers who want powerful speech-to-text without the complexity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 bg-card"
            >
              <CardContent className="pt-6">
                <div className={`mb-4 inline-flex p-3 ${feature.color === 'success' ? 'bg-success/10' : 'bg-accent/10'} rounded-lg ${feature.color === 'success' ? 'group-hover:bg-success/20' : 'group-hover:bg-accent/20'} transition-colors`}>
                  <feature.icon className={`h-6 w-6 ${feature.color === 'success' ? 'text-success' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title === "Lightning Fast" ? (
                    <>
                      Lightning Fast
                      <p className="text-muted-foreground font-normal text-base mt-2">
                        <span className="text-primary font-semibold">Sub-300ms latency</span> for real-time transcription. Stream audio and get results instantly with our optimized pipeline.
                      </p>
                    </>
                  ) : (
                    <>
                      {feature.title}
                      <p className="text-muted-foreground font-normal text-base mt-2">{feature.description}</p>
                    </>
                  )}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
