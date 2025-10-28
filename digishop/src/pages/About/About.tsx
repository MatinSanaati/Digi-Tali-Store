import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const team = [
  {
    name: "علی رضایی",
    role: "مدیرعامل",
    image: "https://via.placeholder.com/120?text=علی",
  },
  {
    name: "سارا محمدی",
    role: "مدیر فنی",
    image: "https://via.placeholder.com/120?text=سارا",
  },
  {
    name: "محمد حسینی",
    role: "مدیر فروش",
    image: "https://via.placeholder.com/120?text=محمد",
  },
  {
    name: "فاطمه احمدی",
    role: "پشتیبانی مشتری",
    image: "https://via.placeholder.com/120?text=فاطمه",
  },
];

export default function About() {
  return (
    <motion.div
      className="about-page container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* عنوان اصلی */}
      <motion.h1 variants={sectionVariants} className="about-page__title">
        درباره DigiTali
      </motion.h1>

      {/* مقدمه */}
      <motion.section
        className="about-page__intro card"
        variants={sectionVariants}
      >
        <motion.img
          src="https://via.placeholder.com/800x400?text=DigiTali+Store"
          alt="فروشگاه دیجیتال DigiTali"
          className="about-page__intro-image"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <p className="about-page__intro-text">
          DigiTali یک فروشگاه معتبر و مطمئن در زمینه‌ی فروش کالاهای دیجیتال است
          که از سال ۱۴۰۰ با هدف ارائه‌ی بهترین محصولات و خدمات پس از فروش فعالیت
          خود را آغاز کرده است. ما در DigiTali به دنبال خلق تجربه‌ای متفاوت و
          لذت‌بخش برای مشتریان هستیم.
        </p>
      </motion.section>

      {/* ماموریت */}
      <motion.section
        className="about-page__mission card"
        variants={sectionVariants}
      >
        <h2>ماموریت ما</h2>
        <p>
          ارائه‌ی کالاهای اصل با گارانتی معتبر، قیمت منصفانه، و تجربه‌ی خریدی
          لذت‌بخش برای همه‌ی مشتریان عزیز. ما متعهد به کیفیت و اعتماد هستیم.
        </p>
      </motion.section>

      {/* ارزش‌ها */}
      <motion.section
        className="about-page__values card"
        variants={sectionVariants}
      >
        <h2>ارزش‌های ما</h2>
        <ul className="about-page__values-list">
          {[
            { icon: "Original Product", text: "اصالت کالا" },
            { icon: "24/7 Support", text: "پشتیبانی ۲۴/۷" },
            { icon: "Fast Delivery", text: "ارسال سریع" },
            { icon: "Customer Satisfaction", text: "رضایت مشتری" },
            { icon: "Secure Payment", text: "پرداخت امن" },
            { icon: "Warranty", text: "گارانتی معتبر" },
          ].map((value, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="about-page__value-item"
              whileHover={{ x: 8 }}
            >
              <span className="about-page__value-icon">{value.icon}</span>
              <span>{value.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* تیم ما */}
      <motion.section
        className="about-page__team card"
        variants={sectionVariants}
      >
        <h2>تیم ما</h2>
        <div className="about-page__team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="about-page__team-member"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="about-page__team-image"
              />
              <h3 className="about-page__team-name">{member.name}</h3>
              <p className="about-page__team-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* چشم‌انداز */}
      <motion.section
        className="about-page__vision card"
        variants={sectionVariants}
      >
        <h2>چشم‌انداز ما</h2>
        <p>
          تبدیل شدن به بزرگ‌ترین و معتبرترین پلتفرم فروش آنلاین کالاهای دیجیتال
          در ایران با تمرکز بر نوآوری، شفافیت و رضایت مشتری.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.div
        className="about-page__cta"
        variants={sectionVariants}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/contact" className="about-page__cta-btn">
          با ما در ارتباط باشید
        </Link>
        <Link to="/" className="about-page__cta-secondary">
          بازگشت به فروشگاه
        </Link>
      </motion.div>
    </motion.div>
  );
}
