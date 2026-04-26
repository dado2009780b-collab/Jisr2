import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Play, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Images ──────────────────────────────────────────────────────────────────
const img_ramadan_cover  = "/assets/photo_2026-04-26_05-09-38_1777173187636.jpg";
const img_ramadan_featured = "/assets/photo_2026-04-26_05-09-38_1777173516867.jpg";
const img_group          = "/assets/WhatsApp_Image_2026-04-23_at_9.12.40_PM_1777152816516.jpeg";
const img_speaker        = "/assets/WhatsApp_Image_2026-04-23_at_9.13.13_PM_1777152816515.jpeg";
const img_group_new      = "/assets/544f7593-f187-4ea0-b360-45bd1e5105ec_1777153532107.jpg";
const img_robotics       = "/assets/WhatsApp_Image_2026-04-23_at_9.12.43_PM_1777152816516.jpeg";
const img_ceremony       = "/assets/WhatsApp_Image_2026-04-23_at_9.13.02_PM_1777152816515.jpeg";
const img_traditional    = "/assets/WhatsApp_Image_2026-04-23_at_9.13.04_PM_1777152816515.jpeg";
const img_award          = "/assets/WhatsApp_Image_2026-04-23_at_9.13.15_PM_1777152816515.jpeg";
const img_joker_trophy   = "/assets/1b43fbea-b022-4457-9be4-8a7cc28f09e9_1777153532107.jpg";
const img_certs          = "/assets/ee0c84b9-5376-4c4e-94fe-6b287cb42c29_1777153532107.jpg";
const img_cert2          = "/assets/10be7261-3f87-4db2-a3d1-ed1914daa918_1777153532108.jpg";
const img_football1      = "/assets/football-1-D0Wxzphh_1777152778724.jpg";
const img_football2      = "/assets/football-2-CY1aQBAu_1777152778724.jpg";
const img_fc26           = "/assets/dd0edbb1-c177-44fc-9bde-eb3d9b05a9cf_1777153532108.jpg";
const img_football3      = "/assets/WhatsApp_Image_2026-04-26_at_1.49.37_AM_(2)_1777173187635.jpeg";
const img_football4      = "/assets/WhatsApp_Image_2026-04-26_at_1.49.37_AM_(1)_1777173187635.jpeg";
const img_football5      = "/assets/WhatsApp_Image_2026-04-26_at_1.49.37_AM_1777173187636.jpeg";

// ─── Videos ──────────────────────────────────────────────────────────────────
const videoRobotics = "/assets/فعالية_الروبوتات_1777152778723.mp4";
const videoTotal    = "/assets/اجمالي_الفعليات_1777152778723.mp4";
const videoChess1   = "/assets/WhatsApp_Video_2026-04-26_at_1.50.10_AM_1777173187636.mp4";
const videoChess2   = "/assets/WhatsApp_Video_2026-04-26_at_1.50.17_AM_1777173187636.mp4";
const videoChess3   = "/assets/WhatsApp_Video_2026-04-26_at_1.50.20_AM_1777173187637.mp4";

// ─── Types ───────────────────────────────────────────────────────────────────
type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

interface EventData {
  id: string;
  arTitle: string;
  enTitle: string;
  cover: string;
  bgVideo?: string;
  tag: string;
  media: MediaItem[];
}

// ─── Events data ─────────────────────────────────────────────────────────────
const events: EventData[] = [
  {
    id: "ramadan-featured",
    arTitle: "فعاليات رمضان 2026",
    enTitle: "Ramadan 2026 Events",
    cover: img_ramadan_featured,
    tag: "رمضان 2026",
    media: [
      { type: "image", src: img_ramadan_featured, alt: "كلمة الشباب على المنصة" },
      { type: "image", src: img_group,          alt: "الصورة الجماعية" },
      { type: "image", src: img_speaker,        alt: "كلمة الافتتاح" },
      { type: "image", src: img_group_new,      alt: "المشاركون في القاعة" },
      { type: "video", src: videoTotal,         label: "إجمالي فعاليات رمضان" },
    ],
  },
  {
    id: "robotics",
    arTitle: "يوم الروبوتات",
    enTitle: "Robotics Day",
    cover: img_robotics,
    bgVideo: videoRobotics,
    tag: "رمضان 2026",
    media: [
      { type: "image", src: img_robotics,   alt: "فعالية الروبوتات" },
      { type: "video", src: videoRobotics,  label: "فيديو يوم الروبوتات" },
    ],
  },
  {
    id: "closing",
    arTitle: "الحفل الختامي وتسليم الجوائز",
    enTitle: "Closing Ceremony & Awards",
    cover: img_joker_trophy,
    tag: "رمضان 2026",
    media: [
      { type: "image", src: img_ceremony,    alt: "تسليم الكأس" },
      { type: "image", src: img_traditional, alt: "المشاركون بالزي التقليدي" },
      { type: "image", src: img_joker_trophy, alt: "جائزة بطولة الجوكر" },
      { type: "image", src: img_certs,       alt: "تسليم شهادات التكريم" },
      { type: "image", src: img_cert2,       alt: "تسليم الشهادات" },
      { type: "image", src: img_award,       alt: "تسليم الجوائز" },
    ],
  },
  {
    id: "football",
    arTitle: "يوم كرة القدم",
    enTitle: "Football Day",
    cover: img_football1,
    tag: "رمضان 2026",
    media: [
      { type: "image", src: img_football1, alt: "فريق كرة القدم 1" },
      { type: "image", src: img_football2, alt: "فريق كرة القدم 2" },
      { type: "image", src: img_fc26,      alt: "منافسات FC26" },
      { type: "image", src: img_football3, alt: "لاعبون على أرضية الملعب" },
      { type: "image", src: img_football4, alt: "صورة جماعية للفريق" },
      { type: "image", src: img_football5, alt: "بطولة الأصدقاء 2026" },
    ],
  },
  {
    id: "chess",
    arTitle: "يوم الشطرنج",
    enTitle: "Chess Day",
    cover: img_award,
    bgVideo: videoChess1,
    tag: "رمضان 2026",
    media: [
      { type: "video", src: videoChess1, label: "فيديو الشطرنج 1" },
      { type: "video", src: videoChess2, label: "فيديو الشطرنج 2" },
      { type: "video", src: videoChess3, label: "فيديو الشطرنج 3" },
    ],
  },
];

// ─── Video background card helper ────────────────────────────────────────────
function VideoCard({
  ev,
  onClick,
  language,
}: {
  ev: EventData;
  onClick: () => void;
  language: "ar" | "en";
}) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative h-28 md:h-40 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {ev.bgVideo ? (
        <video
          ref={ref}
          src={ev.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={ev.cover}
          alt=""
          className="w-full h-full object-cover"
        />
      )}
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
      {/* play icon for video cards */}
      {ev.bgVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Play className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      {/* media count badge */}
      <div className="absolute bottom-1.5 right-1.5 bg-black/60 rounded-full px-2 py-0.5 flex items-center gap-1">
        <ImageIcon className="w-2.5 h-2.5 text-white" />
        <span className="text-white text-[10px]">{ev.media.filter(m => m.type === "image").length}</span>
        {ev.media.some(m => m.type === "video") && (
          <>
            <Play className="w-2.5 h-2.5 text-white" />
            <span className="text-white text-[10px]">{ev.media.filter(m => m.type === "video").length}</span>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Full-screen photo viewer ─────────────────────────────────────────────────
function PhotoViewer({
  images,
  startIndex,
  onClose,
}: {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  setIdx(i => (i + 1) % images.length);
      if (e.key === "ArrowRight") setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      <img
        src={images[idx].src}
        alt={images[idx].alt}
        className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg"
        onClick={e => e.stopPropagation()}
      />
      {images.length > 1 && (
        <div className="absolute bottom-3 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white scale-125" : "bg-white/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Event Gallery Modal ───────────────────────────────────────────────────────
function EventGallery({
  event,
  onClose,
  language,
}: {
  event: EventData;
  onClose: () => void;
  language: "ar" | "en";
}) {
  const [viewerImages, setViewerImages] = useState<{ src: string; alt: string }[]>([]);
  const [viewerIdx, setViewerIdx] = useState(0);

  const images = event.media.filter((m): m is { type: "image"; src: string; alt: string } => m.type === "image");
  const videos = event.media.filter((m): m is { type: "video"; src: string; label: string } => m.type === "video");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.97 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-3 md:inset-8 z-[110] bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 md:p-6 border-b border-gray-100 shrink-0">
          <div dir={language === "ar" ? "rtl" : "ltr"}>
            <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest block mb-0.5">{event.tag}</span>
            <h3 className="text-base md:text-2xl font-bold text-[#0D1B2A] leading-tight">
              {language === "ar" ? event.arTitle : event.enTitle}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 shrink-0 ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-5">
          {images.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2" dir={language === "ar" ? "rtl" : "ltr"}>
                <ImageIcon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  {language === "ar" ? `الصور (${images.length})` : `Photos (${images.length})`}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group relative"
                    onClick={() => { setViewerImages(images); setViewerIdx(i); }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 bg-white/90 rounded-full p-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-gray-700" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {videos.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2" dir={language === "ar" ? "rtl" : "ltr"}>
                <Play className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  {language === "ar" ? `الفيديوهات (${videos.length})` : `Videos (${videos.length})`}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {videos.map((vid, i) => (
                  <div key={i} className="rounded-xl md:rounded-2xl overflow-hidden bg-black">
                    <video
                      src={vid.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full max-h-56 md:max-h-64 object-contain"
                    >
                      <track kind="captions" />
                    </video>
                    <div className="px-3 py-2 bg-gray-50" dir={language === "ar" ? "rtl" : "ltr"}>
                      <p className="text-xs font-medium text-gray-700">{vid.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {viewerImages.length > 0 && (
        <PhotoViewer images={viewerImages} startIndex={viewerIdx} onClose={() => setViewerImages([])} />
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function KnowledgeCenter() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"activities" | "programs">("activities");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const [featured, ...rest] = events;

  return (
    <section id="knowledge" className="py-10 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 md:mb-12"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="space-y-2 md:space-y-3 max-w-2xl">
            <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">
              {t("مركز المعرفة", "Knowledge Center")}
            </p>
            <h2 className="text-xl md:text-5xl font-bold text-[#0D1B2A]">
              {t("آخر الأخبار والتحديثات", "Latest News & Updates")}
            </h2>
            <div className="w-14 md:w-20 h-1 md:h-1.5 bg-primary rounded-full" />
          </div>

          {/* Tab switcher */}
          <div className="flex gap-1.5 bg-white rounded-full p-1 border border-gray-200 self-start">
            {(["activities", "programs"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  activeTab === tab ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab === "activities" ? t("الأنشطة", "Activities") : t("البرامج", "Programs")}
              </button>
            ))}
          </div>
        </div>

        {/* ── Activities ── */}
        {activeTab === "activities" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 md:space-y-6"
          >
            {/* Featured card — video background */}
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-96 shadow-xl group cursor-pointer"
              onClick={() => setSelectedEvent(featured)}
              data-testid="activity-featured"
            >
              {/* bg media */}
              {featured.bgVideo ? (
                <video
                  src={featured.bgVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={featured.cover}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/40 to-[#0D1B2A]/10" />

              <div className="absolute bottom-0 inset-x-0 p-3 md:p-8" dir={language === "ar" ? "rtl" : "ltr"}>
                <span className="inline-block bg-primary text-white text-[10px] md:text-xs font-semibold px-2.5 py-0.5 md:px-3 md:py-1 rounded-full mb-1.5">
                  {featured.tag}
                </span>
                <h3 className="text-lg md:text-3xl font-bold text-white leading-snug">
                  {t(featured.arTitle, featured.enTitle)}
                </h3>
                <p className="text-gray-300 text-xs hidden md:block mt-1">
                  {t("اضغط لعرض الصور والفيديوهات", "Tap to view photos & videos")}
                </p>
              </div>

              <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
                <Play className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                <span className="text-white text-[10px] md:text-xs font-medium">
                  {featured.media.filter(m => m.type === "video").length} {t("فيديو", "video")}
                </span>
                <span className="text-white/50 text-[10px]">·</span>
                <ImageIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                <span className="text-white text-[10px] md:text-xs font-medium">
                  {featured.media.filter(m => m.type === "image").length} {t("صورة", "photos")}
                </span>
              </div>
            </div>

            {/* Grid — 2 cols mobile / 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
              {rest.map((ev, i) => (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedEvent(ev)}
                  data-testid={`activity-card-${ev.id}`}
                >
                  <VideoCard ev={ev} onClick={() => setSelectedEvent(ev)} language={language} />

                  <div className="p-2 md:p-4" dir={language === "ar" ? "rtl" : "ltr"}>
                    <span className="inline-block bg-primary/10 text-primary text-[9px] md:text-xs font-medium px-1.5 py-0.5 rounded-full mb-1">
                      {ev.tag}
                    </span>
                    <h4 className="font-bold text-[#0D1B2A] text-[11px] md:text-sm leading-snug">
                      {t(ev.arTitle, ev.enTitle)}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Programs ── */}
        {activeTab === "programs" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <div className="mb-5">
              <h3 className="text-base md:text-xl font-bold text-[#0D1B2A] mb-1.5">
                {t("الأخبار والموارد", "News & Resources")}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                {t(
                  "ابق على اطلاع بأحدث أنشطتنا وبرامجنا التدريبية ومواردنا التعليمية.",
                  "Stay updated with our latest activities, training programs, and educational resources."
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 flex flex-col items-center justify-center gap-2 text-center min-h-[120px]">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
                  <div>
                    <p className="font-bold text-[#0D1B2A] text-xs md:text-sm">{t("قريباً", "Coming Soon")}</p>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">{t("ترقبوا التحديثات.", "Stay tuned.")}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventGallery
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
