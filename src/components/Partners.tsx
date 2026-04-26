import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
const lmusratiLogo = "/assets/photo_2026-04-23_21-26-00_1776972378620.jpg";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            {t("شركاء النجاح", "Partners in Success")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
            {t("الشركاء الاستراتيجيون", "Strategic Partners")}
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="flex justify-center">
          <motion.a
            href="https://Lmusrati.com.ly"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer w-64 h-36"
            data-testid="partner-lmusrati"
            aria-label="Lmusrati & Co"
          >
            <img
              src={lmusratiLogo}
              alt="Lmusrati & Co"
              className="max-h-20 max-w-full object-contain"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
