import React, { useState, useEffect } from "react";
import { Menu, Users, Eye, Target, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const logoImg = "/assets/photo_2026-04-23_21-26-03_1776972378619.jpg";

const navLinks = [
  { id: "about",     ar: "من نحن",        en: "About Us",          icon: Users    },
  { id: "vision",    ar: "رؤيتنا",         en: "Our Vision",        icon: Eye      },
  { id: "goals",     ar: "أهدافنا",         en: "Our Goals",         icon: Target   },
  { id: "knowledge", ar: "مركز المعرفة",   en: "Knowledge Center",  icon: BookOpen },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleLang = () => setLanguage(language === "ar" ? "en" : "ar");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/97 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logoImg} alt="شعار مؤسسة جسر المعرفة" className="h-10 w-10 object-contain" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-teal-400 font-medium tracking-widest uppercase">مؤسسة</span>
              <span className="text-xl font-bold text-white tracking-tight">جسر المعرفة</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-white/90 hover:text-teal-400 transition-colors"
                data-testid={`link-${link.id}`}
              >
                {t(link.ar, link.en)}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLang}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
              data-testid="btn-toggle-lang"
            >
              {language === "ar" ? "EN" : "عربي"}
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side={language === "ar" ? "right" : "left"}
                className="w-[280px] sm:w-[340px] bg-[#0D1B2A] border-white/10 text-white flex flex-col"
              >
                {/* Sheet header */}
                <div className="flex items-center gap-3 mb-8 mt-2" dir={language === "ar" ? "rtl" : "ltr"}>
                  <img src={logoImg} alt="شعار" className="h-9 w-9 object-contain" />
                  <div className="leading-tight">
                    <p className="text-[10px] text-teal-400 font-medium uppercase tracking-widest">مؤسسة</p>
                    <p className="text-base font-bold">جسر المعرفة</p>
                  </div>
                </div>

                {/* Quick navigation label */}
                <p
                  className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-3"
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {t("الاختصارات", "Quick Navigation")}
                </p>

                {/* 2-column grid of nav cards */}
                <div className="grid grid-cols-2 gap-2.5" dir={language === "ar" ? "rtl" : "ltr"}>
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="flex flex-col items-start gap-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-2xl p-3.5 transition-all duration-200 group shadow-sm text-start"
                      >
                        <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-xl transition-colors">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-white/90 leading-tight">
                          {t(link.ar, link.en)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Lang toggle at bottom */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <button
                    onClick={toggleLang}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-2.5 text-sm text-gray-300 transition-all"
                  >
                    <span>{language === "ar" ? "Switch to English" : "التبديل للعربية"}</span>
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
