import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80dvh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[hsl(210,60%,8%)] text-white pt-20 pb-20 md:pb-0"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bridge-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 25 50 50 100 T 100 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
              <path d="M0 50 Q 50 0 100 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bridge-pattern)" />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-primary backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 rtl:ml-2 rtl:mr-0 animate-pulse" />
            {t("مؤسسة غير ربحية ليبية", "Libyan Non-profit Organization")}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {t("الجسر نحو مستقبل أكثر إشراقاً", "The Bridge Toward a Brighter Future")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {t(
              "مؤسسة جسر المعرفة هي منظمة ليبية غير ربحية مكرسة لسد الفجوة بين التعليم والفرص المهنية، أسسها الشباب من أجل الشباب، وتؤمن بأن كل شاب ليبي يستحق الوصول إلى تدريب عالمي المستوى والإرشاد والأدوات اللازمة لدفع الابتكار في مجتمعاتهم.",
              "Knowledge Bridge Foundation is a Libyan non-profit dedicated to closing the gap between education and professional opportunities, founded by youth for youth, believing every young Libyan deserves access to world-class training, mentorship, and the tools to drive innovation in their communities."
            )}
          </motion.p>

          <motion.div variants={itemVariants} className="mx-auto max-w-xl">
            <blockquote
              className="border-r-4 border-teal-400 pr-4 text-teal-300 italic text-lg font-medium text-right"
              dir="rtl"
            >
              {t(
                "من الشباب، للشباب — بناء جسور تربط المعرفة بالفرص",
                "From Youth, For Youth — Bridging Knowledge and Opportunity"
              )}
            </blockquote>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        data-testid="btn-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
