import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-5 md:space-y-8"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <div className="space-y-2 md:space-y-4">
              <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">
                {t("الجسر", "The Bridge")}
              </p>
              <h2 className="text-2xl md:text-5xl font-bold text-[#0D1B2A]">
                {t("من نحن", "About Us")}
              </h2>
              <div className="w-14 md:w-20 h-1 md:h-1.5 bg-primary rounded-full" />
            </div>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              {t(
                "تأسست مؤسسة جسر المعرفة بهدف واحد: تمكين الشباب الليبي بالمهارات والمعرفة والشبكات التي يحتاجونها لبناء مستقبل مزدهر.",
                "Knowledge Bridge Foundation was established with a single purpose: empowering Libyan youth with the skills, knowledge, and networks they need to build a prosperous future."
              )}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B2A] text-sm md:text-lg mb-1 md:mb-2">
                    {t("من الشباب، للشباب", "From Youth, For Youth")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t(
                      "نحن منظمة يقودها الشباب وتفهم التحديات التي يواجهها الجيل القادم في ليبيا. يصمم فريقنا من المهنيين والمعلمين الشباب برامج تعالج فجوات المهارات الحقيقية.",
                      "We are a youth-led organization that understands the challenges facing the next generation in Libya. Our team of young professionals and educators design programs that address real skills gaps."
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B2A] text-sm md:text-lg mb-1 md:mb-2">
                    {t("منهجيتنا", "Our Methodology")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t(
                      "نجمع بين أفضل الممارسات الدولية والرؤى المحلية، لإنشاء برامج تدريبية ذات صلة عالمية وتجاوب ثقافي.",
                      "We combine best international practices with local insights to create training programs that are globally relevant and culturally responsive."
                    )}
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="border-r-4 border-primary pr-4 py-2 bg-primary/5 rounded-l-lg">
              <div className="flex gap-2 items-start">
                <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-primary font-semibold text-sm md:text-lg italic">
                  {t(
                    "كل جسر يبدأ باتصال واحد. ونحن نبني الآلاف.",
                    "Every bridge starts with one connection. We're building thousands."
                  )}
                </p>
              </div>
            </blockquote>
          </motion.div>

          {/* Vision/Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mt-2 md:mt-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-[#0D1B2A]/10 rounded-[2rem] blur-2xl -z-10" />

            <div className="grid gap-3 md:gap-6">
              {/* Vision Card */}
              <div className="bg-[#0D1B2A] text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl relative overflow-hidden group" dir={language === "ar" ? "rtl" : "ltr"}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-xs text-teal-400 font-medium uppercase tracking-widest mb-1">
                        {t("مستقبل مليء بالإمكانيات", "A Future Full of Potential")}
                      </p>
                      <h3 className="text-lg md:text-2xl font-bold">{t("رؤيتنا", "Our Vision")}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    {t(
                      "أن نصبح المنصة الرائدة في ليبيا لتمكين الشباب، حيث يمتلك كل شاب المهارات والثقة للمساهمة في اقتصاد قائم على المعرفة.",
                      "To become the leading platform in Libya for youth empowerment, where every young person possesses the skills and confidence to contribute to a knowledge-based economy."
                    )}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-primary text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl relative overflow-hidden group" dir={language === "ar" ? "rtl" : "ltr"}>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full -z-0 transition-transform group-hover:scale-110" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-8 h-8 text-white" />
                    <div>
                      <p className="text-xs text-white/70 font-medium uppercase tracking-widest mb-1">
                        {t("التمكين من خلال العمل", "Empowerment Through Action")}
                      </p>
                      <h3 className="text-lg md:text-2xl font-bold">{t("رسالتنا", "Our Mission")}</h3>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-xs md:text-sm">
                    {t(
                      "تقديم برامج تدريبية وموارد عالية الجودة وسهلة الوصول تزود الشباب الليبي بالمهارات المهنية وريادة الأعمال اللازمة للنجاح.",
                      "Providing high-quality, accessible training programs and resources that equip Libyan youth with the professional and entrepreneurial skills needed for success."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
