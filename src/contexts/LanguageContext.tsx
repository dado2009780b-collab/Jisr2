import React, { createContext, useContext, useState } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ar: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (ar: string, en: string) => {
    return language === "ar" ? ar : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir="rtl" className="min-h-screen bg-background font-sans">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
