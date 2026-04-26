import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Team() {
  const { language, t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      arName: "د. محمد العربي",
      enName: "Dr. Mohammad Al-Arabi",
      arTitle: "المدير التنفيذي",
      enTitle: "Executive Director",
      arBio: "أكثر من ١٥ عاماً من الخبرة في إدارة المنظمات غير الربحية وتطوير السياسات التعليمية في المنطقة.",
      enBio: "Over 15 years of experience in managing non-profits and developing educational policies in the region.",
      initials: "MA"
    },
    {
      id: 2,
      arName: "نور الهدى السالم",
      enName: "Nour Al-Huda Al-Salem",
      arTitle: "مديرة البرامج",
      enTitle: "Programs Director",
      arBio: "متخصصة في تصميم المناهج وبناء القدرات الشبابية، عملت مع عدة منظمات دولية.",
      enBio: "Specializes in curriculum design and youth capacity building, has worked with several international organizations.",
      initials: "NS"
    },
    {
      id: 3,
      arName: "خالد البوسيفي",
      enName: "Khalid Al-Bousifi",
      arTitle: "مدير التكنولوجيا",
      enTitle: "Technology Director",
      arBio: "رائد أعمال تقني يقود جهود التحول الرقمي ومختبر الابتكار في المؤسسة.",
      enBio: "Tech entrepreneur leading the digital transformation efforts and the innovation lab at the foundation.",
      initials: "KB"
    },
    {
      id: 4,
      arName: "ليلى المقرحي",
      enName: "Layla Al-Muqrahi",
      arTitle: "مديرة الشراكات",
      enTitle: "Partnerships Director",
      arBio: "خبيرة في بناء العلاقات الاستراتيجية وحشد الموارد لدعم المشاريع المجتمعية المستدامة.",
      enBio: "Expert in building strategic relationships and resource mobilization to support sustainable community projects.",
      initials: "LM"
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A]">
            {t("فريقنا", "Our Team")}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg" dir={language === "ar" ? "rtl" : "ltr"}>
            {t(
              "نخبة من الخبراء والشغوفين الذين يعملون بتفانٍ لتحقيق رؤية ورسالة مؤسسة جسر المعرفة.",
              "A select group of passionate experts working with dedication to achieve the vision and mission of Knowledge Bridge Foundation."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              data-testid={`team-member-${member.id}`}
            >
              <Avatar className="h-24 w-24 mx-auto mb-6 border-4 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-xl font-bold text-[#0D1B2A] mb-1" dir={language === "ar" ? "rtl" : "ltr"}>
                {t(member.arName, member.enName)}
              </h3>
              
              <p className="text-primary font-medium text-sm mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
                {t(member.arTitle, member.enTitle)}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed" dir={language === "ar" ? "rtl" : "ltr"}>
                {t(member.arBio, member.enBio)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
