import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-20 md:py-32 bg-[#0D1B2A] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center text-teal-400 text-sm font-semibold tracking-wide uppercase px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/20">
              {t("الرؤية والرسالة", "Vision & Mission")}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              {t("إلى أين نتجه", "Where We Are Headed")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-teal-500/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-teal-400">{t("رؤيتنا", "Our Vision")}</h3>
                <div className="inline-block text-sm bg-white/10 px-3 py-1 rounded-full text-gray-300">
                  {t("مستقبل مليء بالإمكانيات", "A future full of possibilities")}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg pt-4">
                  {t(
                    "أن نصبح المنصة الرائدة في ليبيا لتمكين الشباب، حيث يمتلك كل شاب المهارات والثقة للمساهمة في اقتصاد قائم على المعرفة.",
                    "To become Libya's leading platform for youth empowerment, where every young person has the skills and confidence to contribute to a knowledge-based economy."
                  )}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-teal-500/50 transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-tr-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-teal-400">{t("رسالتنا", "Our Mission")}</h3>
                <div className="inline-block text-sm bg-white/10 px-3 py-1 rounded-full text-gray-300">
                  {t("التمكين من خلال العمل", "Empowerment through action")}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg pt-4">
                  {t(
                    "تقديم برامج تدريبية وموارد عالية الجودة وسهلة الوصول تزود الشباب الليبي بالمهارات المهنية وريادة الأعمال اللازمة للنجاح.",
                    "To provide high-quality, accessible training programs and resources that equip Libyan youth with the professional and entrepreneurial skills needed to succeed."
                  )}
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
