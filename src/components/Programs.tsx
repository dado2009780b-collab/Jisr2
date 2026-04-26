import React from "react";
import { motion } from "framer-motion";
import { Monitor, Briefcase, TrendingUp, GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Programs() {
  const { language, t } = useLanguage();

  const programs = [
    {
      id: "digital",
      icon: <Monitor className="w-8 h-8" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      arTitle: "الريادة الرقمية",
      enTitle: "Digital Leadership",
      arDesc: "برنامج متكامل يهدف إلى تزويد الشباب بالمهارات التقنية الحديثة، من البرمجة إلى تصميم واجهات المستخدم وتحليل البيانات.",
      enDesc: "An integrated program aimed at equipping youth with modern technical skills, from programming to UI design and data analysis.",
      tags: { ar: ["برمجة", "تصميم", "بيانات"], en: ["Coding", "Design", "Data"] },
      stats: { ar: "٦ أشهر | ١٢٠ مشارك", en: "6 Months | 120 Participants" }
    },
    {
      id: "professional",
      icon: <Briefcase className="w-8 h-8" />,
      color: "text-[#0D1B2A]",
      bgColor: "bg-[#0D1B2A]/10",
      arTitle: "التطوير المهني",
      enTitle: "Professional Development",
      arDesc: "ورش عمل مكثفة لبناء المهارات الشخصية والمهنية اللازمة للنجاح في بيئة العمل الحديثة، كالتواصل والقيادة.",
      enDesc: "Intensive workshops to build the soft and professional skills needed for success in modern work environments, such as communication and leadership.",
      tags: { ar: ["قيادة", "تواصل", "إدارة"], en: ["Leadership", "Comms", "Management"] },
      stats: { ar: "٣ أشهر | ٢٠٠ مشارك", en: "3 Months | 200 Participants" }
    },
    {
      id: "entrepreneurship",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      arTitle: "ريادة الأعمال",
      enTitle: "Entrepreneurship",
      arDesc: "حاضنة أفكار لدعم المشاريع الناشئة، توفر التوجيه والإرشاد لتحويل الأفكار المبتكرة إلى شركات ناجحة ومستدامة.",
      enDesc: "An incubator to support startups, providing mentorship and guidance to turn innovative ideas into successful, sustainable companies.",
      tags: { ar: ["تخطيط", "تمويل", "تسويق"], en: ["Planning", "Funding", "Marketing"] },
      stats: { ar: "٩ أشهر | ٥٠ مشارك", en: "9 Months | 50 Participants" }
    },
    {
      id: "academic",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "text-[#0D1B2A]",
      bgColor: "bg-[#0D1B2A]/10",
      arTitle: "التعليم الأكاديمي",
      enTitle: "Academic Education",
      arDesc: "برامج دعم أكاديمي بالتعاون مع الجامعات لتطوير المناهج وجسر الفجوة بين الدراسة النظرية والتطبيق العملي.",
      enDesc: "Academic support programs in collaboration with universities to develop curricula and bridge the gap between theoretical study and practical application.",
      tags: { ar: ["مناهج", "أبحاث", "منح"], en: ["Curricula", "Research", "Scholarships"] },
      stats: { ar: "مستمر | ٣٠٠+ مشارك", en: "Ongoing | 300+ Participants" }
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A]">
              {t("برامجنا", "Our Programs")}
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
            <p className="text-gray-600 text-lg mt-4" dir={language === "ar" ? "rtl" : "ltr"} lang={language === "ar" ? "ar" : "en"}>
              {t(
                "نصمم برامجنا بعناية لتلبي احتياجات الشباب وتواكب التطورات السريعة في سوق العمل المحلي والعالمي.",
                "We carefully design our programs to meet the needs of youth and keep pace with rapid developments in local and global markets."
              )}
            </p>
          </div>
          <Button variant="outline" className="shrink-0" onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })}>
            {t("سجل الآن", "Apply Now")}
            {language === "ar" ? <ArrowLeft className="w-4 h-4 ml-2 mr-0" /> : <ArrowRight className="w-4 h-4 mr-2 ml-0" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              data-testid={`program-card-${prog.id}`}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${prog.bgColor} ${prog.color}`}>
                    {prog.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {t(prog.stats.ar, prog.stats.en)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3" dir={language === "ar" ? "rtl" : "ltr"}>
                  {t(prog.arTitle, prog.enTitle)}
                </h3>
                
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed" dir={language === "ar" ? "rtl" : "ltr"}>
                  {t(prog.arDesc, prog.enDesc)}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100" dir={language === "ar" ? "rtl" : "ltr"}>
                  {t(prog.tags.ar, prog.tags.en).map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
