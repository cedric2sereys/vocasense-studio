import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free plan work?",
    answer: "The free plan includes 600 free minutes of transcription every month. No credit card required to get started.",
  },
  {
    question: "Which languages are supported?",
    answer: "We support 100+ languages with automatic language detection. This includes all major languages and many regional dialects.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we are GDPR compliant with European data centers. Your data is encrypted in transit and at rest, never stored permanently, and never used for training.",
  },
  {
    question: "What's the transcription accuracy?",
    answer: "Our models achieve 94% accuracy on average across all supported languages. Accuracy can be higher for major languages like English, Spanish, and French.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about VocaSense
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
