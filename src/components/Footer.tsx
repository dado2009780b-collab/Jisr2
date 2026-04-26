import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const logoImg = "/assets/photo_2026-04-23_21-26-03_1776972378619.jpg";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: "about",     ar: "الجسر (من نحن)",    en: "The Bridge (About Us)" },
    { id: "vision",    ar: "رؤيتنا",             en: "Our Vision" },
    { id: "goals",     ar: "مجالات التركيز",     en: "Focus Areas" },
    { id: "knowledge", ar: "مركز المعرفة",       en: "Knowledge Center" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1420] text-gray-300 pt-10 border-t border-white/5">

      {/* ── Social Follow Banner ─────────────────────────────────────────── */}
      <div className="border-b border-white/10 pb-10 mb-10">
        <div className="container mx-auto px-4 md:px-6">
          <p
            className="text-center text-white font-bold text-lg mb-6"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {t("تابعنا على منصات التواصل الاجتماعي", "Follow Us on Social Media")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18ay8VPVS6/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1565d8] text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-[#1877F2]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1877F2]/30 min-w-[200px]"
              dir="ltr"
            >
              <FacebookIcon className="w-6 h-6 shrink-0" />
              <span>Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jisr_almaerifa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[200px]"
              style={{
                background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                boxShadow: "0 4px 24px rgba(220,39,67,0.25)",
              }}
              dir="ltr"
            >
              <InstagramIcon className="w-6 h-6 shrink-0" />
              <span>Instagram</span>
            </a>

          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-4" dir={language === "ar" ? "rtl" : "ltr"}>
            <div className="flex items-center gap-3 mb-2">
              <img src={logoImg} alt="شعار جسر المعرفة" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-xs text-teal-400 font-medium">مؤسسة</p>
                <p className="text-lg font-bold text-white">جسر المعرفة</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              {t(
                "تمكين الشباب الليبي من خلال التعليم والابتكار والتطوير المهني. بناء جسور تربط المعرفة بالفرص.",
                "Empowering Libyan youth through education, innovation, and professional development. Building bridges connecting knowledge to opportunity."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div dir={language === "ar" ? "rtl" : "ltr"}>
            <h4 className="text-white font-bold mb-6">{t("روابط سريعة", "Quick Links")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {t(link.ar, link.en)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div dir={language === "ar" ? "rtl" : "ltr"}>
            <h4 className="text-white font-bold mb-6">{t("اتصل بنا", "Contact Us")}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:Jesr.alma3refa@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  dir="ltr"
                >
                  Jesr.alma3refa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:0919393503"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  dir="ltr"
                >
                  0919393503
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">
                  {t("طرابلس، ليبيا", "Tripoli, Libya")}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div
          className="pt-6 border-t border-white/10 text-center text-sm text-gray-500"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <p>
            &copy; {currentYear} {t("مؤسسة جسر المعرفة. جميع الحقوق محفوظة.", "Knowledge Bridge Foundation. All rights reserved.")}
          </p>
        </div>

      </div>

      <div className="h-6" />
    </footer>
  );
}
