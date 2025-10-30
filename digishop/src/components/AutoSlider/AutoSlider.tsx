import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import "./AutoSlider.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_SL1500_.jpg",
    title: "آیفون 15 پرو",
    description: "طراحی تیتانیومی، دوربین پیشرفته و تراشه A17 Pro",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_SL1500_.jpg",
    title: "گلکسی S24 الترا",
    description:
      "صفحه‌نمایش 6.8 اینچی، دوربین 200 مگاپیکسلی و هوش مصنوعی پیشرفته",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SL1500_.jpg",
    title: "آیپد پرو M2",
    description:
      "صفحه‌نمایش Liquid Retina XDR، تراشه M2 و پشتیبانی از Apple Pencil",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    title: "ایربادز پرو 2",
    description: "لغو نویز فعال، صدای غنی و طراحی ارگونومیک",
  },
];

export default function AutoSlider() {
  const [current, setCurrent] = useState<number>(0);
  const slideCount = slides.length;
  const intervalRef = useRef<number | null>(null);

  // ثابت کردن توابع با useCallback برای جلوگیری از هشدارهای ESLint
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, 5000);
    }
  }, [slideCount]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // اجرای خودکار اسلایدر یک بار در mount و cleanup درست
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // مدیریت Drag/Swipe
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = 100;

    if (offset > threshold || velocity > 300) {
      prevSlide();
    } else if (offset < -threshold || velocity < -300) {
      nextSlide();
    }
  };

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % slideCount),
    [slideCount]
  );
  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount),
    [slideCount]
  );

  return (
    <div
      className="auto-slider"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <motion.div
        className="auto-slider__track"
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ left: -100 * (slideCount - 1), right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${current * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
        style={{ width: `${slideCount * 100}%` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="auto-slider__slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="auto-slider__image"
            />
            <div className="auto-slider__content">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <button className="auto-slider__nav prev" onClick={prevSlide}>
        &#10095;
      </button>
      <button className="auto-slider__nav next" onClick={nextSlide}>
        &#10094;
      </button>

      <div className="auto-slider__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
