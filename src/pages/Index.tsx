import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Playground from "@/components/Playground";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Playground />
        <Resources />
        <Testimonials />
        <Community />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
