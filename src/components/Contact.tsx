import React from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8" dir={language === "ar" ? "rtl" : "ltr"}>
            <div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                {t("تواصل معنا", "Contact Us")}
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "نحن دائماً مستعدون للاستماع لأفكاركم واستفساراتكم. يمكنكم التواصل معنا عبر القنوات التالية أو بزيارة مقرنا الرئيسي.",
                  "We are always ready to listen to your ideas and inquiries. You can reach us through the following channels or visit our headquarters."
                )}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D1B2A] mb-1">{t("العنوان", "Address")}</h4>
                  <p className="text-gray-600">{t("شارع النصر، طرابلس، ليبيا", "Al-Nasr St, Tripoli, Libya")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D1B2A] mb-1">{t("البريد الإلكتروني", "Email")}</h4>
                  <p className="text-gray-600" dir="ltr">info@jisralmareifa.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D1B2A] mb-1">{t("الهاتف", "Phone")}</h4>
                  <p className="text-gray-600" dir="ltr">+218 91 234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100" dir={language === "ar" ? "rtl" : "ltr"}>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">
              {t("إرسال رسالة سريعة", "Send a quick message")}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t("الاسم", "Name")}</label>
                  <Input placeholder={t("الاسم", "Name")} className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t("البريد", "Email")}</label>
                  <Input type="email" placeholder="Email" className="bg-white text-left rtl:text-right" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t("الموضوع", "Subject")}</label>
                <Input placeholder={t("موضوع الرسالة", "Subject")} className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t("الرسالة", "Message")}</label>
                <Textarea placeholder={t("اكتب رسالتك هنا...", "Write your message here...")} className="bg-white min-h-[120px] resize-none" />
              </div>
              <Button type="button" className="w-full">
                {t("إرسال", "Send")}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
