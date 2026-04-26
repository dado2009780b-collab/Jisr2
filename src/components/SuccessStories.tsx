import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SuccessStories() {
  const { language, t } = useLanguage();

  const stories = [
    {
      id: 1,
      arName: "أحمد المريمي",
      enName: "Ahmad Al-Maryami",
      arRole: "خريج الريادة الرقمية",
      enRole: "Digital Leadership Alumnus",
      arQuote: "برنامج الريادة الرقمية لم يعلمني البرمجة فحسب، بل منحني الثقة لإطلاق مشروعي الخاص. أنا الآن أدير فريقاً من ٥ مطورين ونخدم عملاء في جميع أنحاء المنطقة.",
      enQuote: "The Digital Leadership program didn't just teach me coding; it gave me the confidence to launch my own project. I now manage a team of 5 developers serving clients across the region.",
      initials: "AM"
    },
    {
      id: 2,
      arName: "فاطمة الزروق",
      enName: "Fatima Al-Zarouq",
      arRole: "خريجة ريادة الأعمال",
      enRole: "Entrepreneurship Alumna",
      arQuote: "كان الإرشاد الذي تلقيته في حاضنة الأعمال نقطة التحول لمشروعي. من فكرة بسيطة على ورق إلى شركة ناشئة حصلت على تمويلها الأولي بفضل توجيهات خبراء جسر المعرفة.",
      enQuote: "The mentorship I received at the incubator was the turning point for my project. From a simple idea on paper to a startup that secured its seed funding thanks to the guidance of Knowledge Bridge experts.",
      initials: "FZ"
    },
    {
      id: 3,
      arName: "يوسف بوبكر",
      enName: "Yusuf Bou-Bakr",
      arRole: "مشارك في التطوير المهني",
      enRole: "Professional Dev Participant",
      arQuote: "المهارات التي اكتسبتها في ورش العمل غيرت مساري المهني تماماً. تعلمت كيف أسوق لمهاراتي وأتواصل بفعالية، مما ساعدني في الحصول على وظيفة أحلامي في شركة دولية.",
      enQuote: "The skills I gained in the workshops completely changed my career path. I learned how to market my skills and communicate effectively, helping me land my dream job at an international company.",
      initials: "YB"
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-br from-[#0D1B2A] to-[#1a365d] text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            {t("قصص النجاح", "Success Stories")}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg font-light" dir={language === "ar" ? "rtl" : "ltr"}>
            {t(
              "أثرنا يقاس بنجاحات شبابنا. تعرف على قصص ملهمة لخريجي برامجنا الذين يصنعون التغيير اليوم.",
              "Our impact is measured by the successes of our youth. Meet inspiring stories of our alumni who are creating change today."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors relative flex flex-col"
              data-testid={`story-card-${story.id}`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/30 rotate-180 rtl:rotate-0" />
              
              <div className="flex-grow pt-4 pb-8">
                <p className="text-gray-200 leading-relaxed italic relative z-10" dir={language === "ar" ? "rtl" : "ltr"} lang={language === "ar" ? "ar" : "en"}>
                  "{t(story.arQuote, story.enQuote)}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10" dir={language === "ar" ? "rtl" : "ltr"}>
                <Avatar className="h-12 w-12 border-2 border-primary/50">
                  <AvatarFallback className="bg-[#0D1B2A] text-white font-semibold">
                    {story.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {t(story.arName, story.enName)}
                  </h4>
                  <p className="text-primary text-sm font-medium">
                    {t(story.arRole, story.enRole)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
