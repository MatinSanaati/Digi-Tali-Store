import { useState, useEffect, useRef } from "react";
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
  const [[page], setPage] = useState<[number, number]>([0, 0]);
  const sliderRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const slideCount = slides.length;

  useEffect(() => {
    sliderRef.current = window.setInterval(() => {
      setPage(([currentPage]) => {
        const nextPage = (currentPage + 1) % slideCount;
        return [nextPage, 1];
      });
    }, 8000);

    return () => {
      if (sliderRef.current !== null) {
        window.clearInterval(sliderRef.current);
      }
    };
  }, [slideCount]);

  const pauseAutoPlay = () => {
    if (sliderRef.current !== null) {
      window.clearInterval(sliderRef.current);
      sliderRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    if (sliderRef.current === null) {
      sliderRef.current = window.setInterval(() => {
        setPage(([currentPage]) => {
          const nextPage = (currentPage + 1) % slideCount;
          return [nextPage, 1];
        });
      }, 8000);
    }
  };

  const paginate = (newPage: number) => {
    pauseAutoPlay();
    const newDirection = newPage > page ? 1 : -1;
    setPage([newPage, newDirection]);
    setTimeout(resumeAutoPlay, 9000);
  };

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipeThreshold = 100;

    if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 300) {
      if (offset > 0 || velocity > 0) {
        paginate((page - 1 + slideCount) % slideCount);
      } else {
        paginate((page + 1) % slideCount);
      }
    } else {
      resumeAutoPlay();
    }
  };

  const goToNext = () => paginate((page + 1) % slideCount);
  const goToPrev = () => paginate((page - 1 + slideCount) % slideCount);

  const slideVariants = {
    enter: { opacity: 0, x: "100%" },
    center: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <div
      className="auto-slider"
      onMouseEnter={() => {
        pauseAutoPlay();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        resumeAutoPlay();
        setIsHovered(false);
      }}
    >
      <motion.div
        className="auto-slider__track"
        animate={{ x: `-${page * 100}%` }}
        transition={{ type: "spring", stiffness: 150, damping: 50, mass: 1 }}
        drag="x"
        dragConstraints={{ left: -(slideCount - 1) * 100, right: 0 }}
        dragElastic={0.1}
        onDragEnd={onDragEnd}
        style={{ width: `${slideCount * 100}%` }}
      >
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            className="auto-slider__slide"
            variants={slideVariants}
            initial="enter"
            animate={idx === page ? "center" : "exit"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="auto-slider__image"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.7 : 0.85 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="auto-slider__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="auto-slider__content card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="auto-slider__title">{slide.title}</h3>
              <p className="auto-slider__description">{slide.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="auto-slider__nav auto-slider__nav--prev btn"
        onClick={goToPrev}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        &larr;
      </motion.button>
      <motion.button
        className="auto-slider__nav auto-slider__nav--next btn"
        onClick={goToNext}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        &rarr;
      </motion.button>

      <motion.div
        className="auto-slider__indicators"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => paginate(idx)}
            className={`auto-slider__indicator ${idx === page ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
