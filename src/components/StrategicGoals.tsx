import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Lightbulb, Users, Globe, FlaskConical, Leaf, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const goals = [
  {
    icon: Briefcase,
    arTitle: "التأهيل المهني",
    enTitle: "Professional Qualification",
    arDesc: "تقديم برامج تدريبية معتمدة تلبي المعايير الدولية وتؤهل الشباب لسوق العمل.",
    enDesc: "Providing certified training programs that meet international standards and qualify youth for the labor market.",
  },
  {
    icon: Lightbulb,
    arTitle: "دعم الابتكار",
    enTitle: "Innovation Support",
    arDesc: "تعزيز الإبداع والتفكير الريادي من خلال برامج الاحتضان والإرشاد.",
    enDesc: "Fostering creativity and entrepreneurial thinking through incubation and mentorship programs.",
  },
  {
    icon: Users,
    arTitle: "بناء المجتمع",
    enTitle: "Community Building",
    arDesc: "إنشاء شبكات من المهنيين الشباب الذين يدعمون ويلهمون بعضهم في جميع أنحاء ليبيا.",
    enDesc: "Creating networks of young professionals who support and inspire each other across Libya.",
  },
  {
    icon: Globe,
    arTitle: "الشراكات الدولية",
    enTitle: "International Partnerships",
    arDesc: "ربط الشباب الليبي بالمنظمات العالمية والجامعات وقادة الصناعة.",
    enDesc: "Connecting Libyan youth with global organizations, universities, and industry leaders.",
  },
  {
    icon: FlaskConical,
    arTitle: "البحث والتطوير",
    enTitle: "Research & Development",
    arDesc: "إجراء البحوث لتحديد فجوات المهارات وتطوير حلول تعليمية مستهدفة.",
    enDesc: "Conducting research to identify skills gaps and develop targeted educational solutions.",
  },
  {
    icon: Leaf,
    arTitle: "التنمية المستدامة",
    enTitle: "Sustainable Development",
    arDesc: "مواءمة جميع المبادرات مع أهداف التنمية المستدامة للأمم المتحدة لتحقيق تأثير دائم.",
    enDesc: "Aligning all initiatives with the UN Sustainable Development Goals for lasting impact.",
  },
];

// Mobile accordion card
function GoalCardMobile({
  goal,
  idx,
  language,
  t,
}: {
  goal: typeof goals[0];
  idx: number;
  language: "ar" | "en";
  t: (ar: string, en: string) => string;
}) {
  const [open, setOpen] = useState(false);
  const Icon = goal.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: (idx % 2) * 0.06 }}
      className="bg-gray-50 rounded-2xl border border-border/50 overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 p-3 text-start"
      >
        <div className="p-2 bg-primary/10 text-primary rounded-xl shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <span className="flex-1 font-bold text-[#0D1B2A] text-xs leading-tight">
          {t(goal.arTitle, goal.enTitle)}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-3 pb-3 text-gray-600 text-[11px] leading-relaxed">
              {t(goal.arDesc, goal.enDesc)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function StrategicGoals() {
  const { language, t } = useLanguage();

  return (
    <section id="goals" className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-16"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="space-y-2 md:space-y-4 max-w-2xl">
            <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">
              {t("مجالات التركيز", "Focus Areas")}
            </p>
            <h2 className="text-xl md:text-5xl font-bold text-[#0D1B2A]">
              {t("أهدافنا الاستراتيجية", "Our Strategic Goals")}
            </h2>
            <div className="w-14 md:w-20 h-1 md:h-1.5 bg-primary rounded-full" />
            <p className="text-gray-600 text-sm md:text-lg">
              {t(
                "ست ركائز توجه كل مبادرة وشراكة وبرنامج نقوم به.",
                "Six pillars guide every initiative, partnership, and program we undertake."
              )}
            </p>
          </div>
        </div>

        {/* ── Mobile: Accordion (2-col grid of accordion cards) ── */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {goals.map((goal, idx) => (
            <GoalCardMobile key={idx} goal={goal} idx={idx} language={language} t={t} />
          ))}
        </div>

        {/* ── Desktop: Full cards always visible ── */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.08 }}
                className="bg-gray-50 rounded-3xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                data-testid={`goal-card-${idx}`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-2xl shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D1B2A] mt-2">
                      {t(goal.arTitle, goal.enTitle)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t(goal.arDesc, goal.enDesc)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
