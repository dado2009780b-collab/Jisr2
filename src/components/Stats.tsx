import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary tabular-nums">
      +{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      end: 500,
      arLabel: "شاب مستفيد",
      enLabel: "Youth Beneficiaries",
    },
    {
      end: 20,
      arLabel: "برنامج نشط",
      enLabel: "Active Programs",
    },
    {
      end: 15,
      arLabel: "منظمة شريكة",
      enLabel: "Partner Organizations",
    },
    {
      end: 5,
      arLabel: "سنوات من التأثير",
      enLabel: "Years of Impact",
      suffix: "",
      hidePlus: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl bg-white shadow-sm border border-border/40 hover:shadow-md transition-shadow"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary tabular-nums">
                {!stat.hidePlus && "+"}
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base font-medium text-gray-600 mt-2">
                {t(stat.arLabel, stat.enLabel)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
