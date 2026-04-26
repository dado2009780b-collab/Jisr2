import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LongTermImpact from "@/components/LongTermImpact";
import StrategicGoals from "@/components/StrategicGoals";
import KnowledgeCenter from "@/components/KnowledgeCenter";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <LongTermImpact />
        <StrategicGoals />
        <KnowledgeCenter />
        <Partners />
      </main>
      <Footer />

      <Button
        variant="default"
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
