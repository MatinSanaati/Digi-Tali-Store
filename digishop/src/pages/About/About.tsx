// src/pages/About.tsx
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={sectionVariants}>درباره DigiTali</motion.h1>
      <motion.div className="about-page__intro card" variants={sectionVariants}>
        <img
          src="https://via.placeholder.com/600x300?text=DigiTali+Store"
          alt="DigiTali Store"
          className="about-page__intro-image"
        />
        <p>
          DigiTali یک فروشگاه معتبر و مطمئن در زمینه‌ی فروش کالاهای دیجیتال است
          که از سال ۱۴۰۰ با هدف ارائه‌ی بهترین محصولات و خدمات پس از فروش فعالیت
          خود را آغاز کرده است. ما در DigiTali به دنبال خلق تجربه‌ای متفاوت و
          لذت‌بخش برای مشتریان هستیم.
        </p>
      </motion.div>

      <motion.div
        className="about-page__mission card"
        variants={sectionVariants}
      >
        <h2>ماموریت ما</h2>
        <p>
          ارائه‌ی کالاهای اصل با گارانتی معتبر، قیمت منصفانه، و تجربه‌ی خریدی
          لذت‌بخش برای همه‌ی مشتریان عزیز. ما متعهد به کیفیت و اعتماد هستیم.
        </p>
      </motion.div>

      <motion.div
        className="about-page__values card"
        variants={sectionVariants}
      >
        <h2>ارزش‌های ما</h2>
        <ul className="about-page__values-list">
          {[
            { icon: "✅", text: "اصالت کالا" },
            { icon: "🕒", text: "پشتیبانی ۲۴/۷" },
            { icon: "🚚", text: "ارسال سریع" },
            { icon: "😊", text: "رضایت مشتری" },
          ].map((value, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="about-page__value-item"
            >
              <span className="about-page__value-icon">{value.icon}</span>
              {value.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="about-page__vision card"
        variants={sectionVariants}
      >
        <h2>چشم‌انداز ما</h2>
        <p>
          تبدیل شدن به بزرگ‌ترین و معتبرترین پلتفرم فروش آنلاین کالاهای دیجیتال
          در ایران با تمرکز بر نوآوری و رضایت مشتری.
        </p>
      </motion.div>

      <motion.div className="about-page__cta" variants={sectionVariants}>
        <Link to="/contact" className="btn btn-primary">
          با ما تماس بگیرید
        </Link>
      </motion.div>
    </motion.div>
  );
}
