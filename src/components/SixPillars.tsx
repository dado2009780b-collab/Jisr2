import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Lightbulb, Users, Globe2, Beaker, Leaf } from "lucide-react";

export default function SixPillars() {
  const { t } = useLanguage();

  const pillars = [
    { ar: "التأهيل المهني", en: "Professional Training", icon: <BookOpen className="w-6 h-6" /> },
    { ar: "دعم الابتكار", en: "Innovation Support", icon: <Lightbulb className="w-6 h-6" /> },
    { ar: "بناء المجتمع", en: "Community Building", icon: <Users className="w-6 h-6" /> },
    { ar: "الشراكات الدولية", en: "International Partnerships", icon: <Globe2 className="w-6 h-6" /> },
    { ar: "البحث والتطوير", en: "Research & Development", icon: <Beaker className="w-6 h-6" /> },
    { ar: "التنمية المستدامة", en: "Sustainable Development", icon: <Leaf className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-[#0D1B2A] text-white border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center text-teal-400 text-sm font-semibold tracking-wide uppercase px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/20">
              {t("الأهداف الاستراتيجية", "Strategic Goals")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("ركائز التأثير الستة", "The Six Pillars of Impact")}
            </h2>
          </div>

          <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
            <div className="flex items-center justify-start md:justify-center gap-4 min-w-max px-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl min-w-[180px] text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-teal-400">
                    {pillar.icon}
                  </div>
                  <span className="font-bold whitespace-nowrap">
                    {t(pillar.ar, pillar.en)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); rounded: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(45,212,191,0.3); rounded: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(45,212,191,0.5); }
      `}} />
    </section>
  );
}
