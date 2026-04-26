import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Laptop, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();

  const projects = [
    {
      id: "lab",
      icon: <FlaskConical className="w-8 h-8" />,
      arTitle: "مختبر الابتكار",
      enTitle: "Innovation Lab",
      arDesc: "مساحة عمل مجهزة بأحدث التقنيات لتمكين الشباب من تحويل أفكارهم إلى نماذج أولية قابلة للتطبيق، مع توفير التوجيه التقني والدعم.",
      enDesc: "A workspace equipped with the latest technologies to enable youth to turn their ideas into viable prototypes, with technical guidance and support.",
      status: { ar: "نشط", en: "Active" }
    },
    {
      id: "platform",
      icon: <Laptop className="w-8 h-8" />,
      arTitle: "منصة التعلم الإلكتروني",
      enTitle: "E-Learning Platform",
      arDesc: "منصة رقمية متكاملة توفر دورات تدريبية وموارد تعليمية مجانية باللغة العربية لدعم التعلم الذاتي والمستمر.",
      enDesc: "An integrated digital platform providing free training courses and educational resources in Arabic to support self-paced and continuous learning.",
      status: { ar: "تحت التطوير", en: "In Development" }
    },
    {
      id: "mentorship",
      icon: <Compass className="w-8 h-8" />,
      arTitle: "برنامج الإرشاد المهني",
      enTitle: "Career Mentorship",
      arDesc: "مبادرة تربط بين الطلاب والخريجين الجدد مع محترفين وخبراء في سوق العمل لتقديم التوجيه والنصح المهني.",
      enDesc: "An initiative connecting students and new graduates with professionals and experts in the job market to provide career guidance and advice.",
      status: { ar: "نشط", en: "Active" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0D1B2A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold">
              {t("مشاريعنا", "Our Projects")}
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
            <p className="text-gray-300 text-lg mt-4 font-light leading-relaxed" dir={language === "ar" ? "rtl" : "ltr"}>
              {t(
                "نعمل على تنفيذ مشاريع استراتيجية تساهم في بناء بيئة داعمة للابتكار والتعلم المستمر في ليبيا.",
                "We implement strategic projects that contribute to building a supportive environment for innovation and continuous learning in Libya."
              )}
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-colors relative group"
              data-testid={`project-card-${proj.id}`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-primary/0 group-hover:bg-primary transition-colors rounded-b-md" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-primary">
                  {proj.icon}
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  proj.status.en === 'Active' 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-white/10 text-gray-300 border border-white/20'
                }`}>
                  {t(proj.status.ar, proj.status.en)}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
                {t(proj.arTitle, proj.enTitle)}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-light" dir={language === "ar" ? "rtl" : "ltr"}>
                {t(proj.arDesc, proj.enDesc)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
