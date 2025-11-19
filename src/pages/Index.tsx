import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";
import Features from "@/components/Features";
import ClientPortfolio from "@/components/ClientPortfolio";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import NewsletterBlog from "@/components/NewsletterBlog";
import Resources from "@/components/Resources";
import Sandbox from "@/components/Sandbox";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Playground />
        <Features />
        <ClientPortfolio />
        <CTA />
        <Testimonials />
        <Community />
        <NewsletterBlog />
        <Resources />
        <Sandbox />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
