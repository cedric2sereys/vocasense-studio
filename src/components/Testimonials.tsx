import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, VoiceFlow AI",
    content: "VocaSense cut our integration time from weeks to hours. The API is incredibly intuitive and the latency is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer, Podify",
    content: "Finally, a speech-to-text API that actually respects privacy. GDPR compliance out of the box was a game-changer for our European customers.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Founder, Meeting Bot",
    content: "The multilingual support is phenomenal. We went from supporting 5 languages to 100+ overnight. Our users love it.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what teams are building with VocaSense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
