import React from "react";
import { motion } from "framer-motion";
import { Globe, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LongTermImpact() {
  const { language, t } = useLanguage();

  const impactItems = [
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      arTitle: "اقتصاد المعرفة",
      enTitle: "Knowledge Economy",
      arDesc: "المساهمة في انتقال ليبيا إلى اقتصاد قائم على المعرفة من خلال تزويد الشباب بمهارات المستقبل.",
      enDesc: "Contributing to Libya's transition to a knowledge-based economy by equipping youth with the skills of the future.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      arTitle: "نمو مستدام",
      enTitle: "Sustainable Growth",
      arDesc: "ضمان استمرار تأثيرنا من خلال برامج قابلة للتوسع وشبكات مجتمعية مستدامة ذاتياً.",
      enDesc: "Ensuring the continuity of our impact through scalable programs and self-sustaining community networks.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      arTitle: "أثر شامل",
      enTitle: "Inclusive Impact",
      arDesc: "الوصول إلى الشباب في جميع مناطق ليبيا، بغض النظر عن الخلفية أو الظروف.",
      enDesc: "Reaching youth across all regions of Libya, regardless of background or circumstances.",
    },
  ];

  return (
    <section id="vision" className="py-10 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">
            {t("رؤيتنا", "Our Vision")}
          </p>
          <h2 className="text-xl md:text-5xl font-bold text-[#0D1B2A]">
            {t("أثر طويل المدى", "Long-Term Impact")}
          </h2>
          <div className="w-14 md:w-20 h-1 md:h-1.5 bg-primary rounded-full mx-auto" />
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            {t(
              "نتصور ليبيا حيث يتمتع كل شاب بفرصة تحويل معرفته إلى عمل ذي معنى.",
              "We envision a Libya where every young person has the opportunity to turn their knowledge into meaningful work."
            )}
          </p>
        </div>

        {/* Cards — 2 cols on mobile (last card centered), 3 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {impactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className={`bg-white rounded-2xl md:rounded-3xl p-3 md:p-8 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden${
                idx === 2 ? " col-span-2 md:col-span-1" : ""
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-2 md:space-y-4">
                <div className="p-2 md:p-3 bg-primary/10 text-primary rounded-xl md:rounded-2xl w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xs md:text-xl font-bold text-[#0D1B2A] leading-tight">
                  {t(item.arTitle, item.enTitle)}
                </h3>
                <p className="text-gray-600 text-[11px] md:text-base leading-relaxed">
                  {t(item.arDesc, item.enDesc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
