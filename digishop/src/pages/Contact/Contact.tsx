// src/pages/Contact.tsx
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌تونید منطق ارسال فرم به API رو اضافه کنید
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={sectionVariants}>تماس با DigiTali</motion.h1>
      <motion.p className="contact-page__intro" variants={sectionVariants}>
        ما همیشه آماده پاسخگویی به شما هستیم! از طریق فرم زیر یا اطلاعات تماس با
        ما در ارتباط باشید.
      </motion.p>

      {/* اطلاعات تماس */}
      <motion.div className="contact-info card" variants={sectionVariants}>
        <h2>اطلاعات تماس</h2>
        <div className="contact-info__list">
          {[
            {
              icon: "📞",
              text: "شماره تماس: ۰۲۱-۱۲۳۴۵۶۷۸",
              href: "tel:02112345678",
            },
            {
              icon: "✉️",
              text: "ایمیل: info@digitale-store.ir",
              href: "mailto:info@digitale-store.ir",
            },
            { icon: "📍", text: "آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳" },
          ].map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="contact-info__item"
            >
              <span className="contact-info__icon">{info.icon}</span>
              {info.href ? (
                <a href={info.href} className="contact-info__link">
                  {info.text}
                </a>
              ) : (
                <span>{info.text}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* فرم تماس */}
      <motion.div className="contact-form card" variants={sectionVariants}>
        <h2>ارسال پیام</h2>
        <form onSubmit={handleSubmit} className="contact-form__form">
          <motion.div variants={itemVariants}>
            <label htmlFor="name">نام</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="نام شما"
              required
              className="contact-form__input"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ایمیل شما"
              required
              className="contact-form__input"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message">پیام</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="پیام شما"
              required
              className="contact-form__textarea"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ارسال پیام
          </motion.button>
        </form>
      </motion.div>

      {/* نقشه */}
      <motion.div className="contact-map card" variants={sectionVariants}>
        <h2>موقعیت ما</h2>
        <img
          src="https://via.placeholder.com/600x300?text=Map+Placeholder"
          alt="نقشه موقعیت DigiTali"
          className="contact-map__image"
        />
        {/* برای نقشه واقعی، می‌تونید iframe گوگل مپ رو جایگزین کنید */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="contact-map__iframe"
          allowFullScreen
          loading="lazy"
        ></iframe> */}
      </motion.div>

      {/* شبکه‌های اجتماعی */}
      <motion.div className="contact-social card" variants={sectionVariants}>
        <h2>ما را دنبال کنید</h2>
        <div className="contact-social__list">
          {[
            {
              icon: "📷",
              name: "اینستاگرام",
              href: "https://instagram.com/digitale_store",
            },
            { icon: "📱", name: "تلگرام", href: "https://t.me/digitale_store" },
            {
              icon: "🐦",
              name: "توییتر",
              href: "https://x.com/digitale_store",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social__item btn btn-outline"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="contact-social__icon">{social.icon}</span>
              {social.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
