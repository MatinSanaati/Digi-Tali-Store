import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import "./Contact.css";

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

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "نام الزامی است";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "ایمیل معتبر وارد کنید";
    if (!formData.message.trim()) newErrors.message = "پیام الزامی است";
    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // منطق ارسال به API (مثل axios.post)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      className="contact-page container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* عنوان اصلی */}
      <motion.h1 variants={sectionVariants} className="contact-page__title">
        تماس با DigiTali
      </motion.h1>
      <motion.p variants={sectionVariants} className="contact-page__intro">
        تیم ما ۲۴/۷ آماده مشاوره خرید محصولات دیجیتال، پشتیبانی فنی و پاسخ به
        سوالات شماست. با ما در ارتباط باشید!
      </motion.p>

      {/* اطلاعات تماس */}
      <motion.section className="contact-info card" variants={sectionVariants}>
        <h2>اطلاعات تماس</h2>
        <div className="contact-info__list">
          {[
            {
              icon: "📞",
              text: "شماره تماس: ۰۲۱-۱۲۳۴۵۶۷۸",
              subtext: "ساعات کاری: ۹ صبح تا ۹ شب",
              href: "tel:02112345678",
            },
            {
              icon: "✉️",
              text: "ایمیل: info@digitale-store.ir",
              subtext: "پاسخ در کمتر از ۲۴ ساعت",
              href: "mailto:info@digitale-store.ir",
            },
            {
              icon: "📍",
              text: "آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳",
              subtext: "دفتر مرکزی",
            },
            {
              icon: "💬",
              text: "واتساپ: ۰۹۱۲۳۴۵۶۷۸۹",
              href: "https://wa.me/989123456789",
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="contact-info__item"
              whileHover={{ x: 8 }}
            >
              <span className="contact-info__icon">{info.icon}</span>
              <div className="contact-info__details">
                {info.href ? (
                  <a href={info.href} className="contact-info__link">
                    {info.text}
                  </a>
                ) : (
                  <span>{info.text}</span>
                )}
                {info.subtext && (
                  <p className="contact-info__subtext">{info.subtext}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* فرم تماس */}
      <motion.section className="contact-form card" variants={sectionVariants}>
        <h2>ارسال پیام</h2>
        {submitted && (
          <motion.p
            className="contact-form__success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            پیام شما با موفقیت ارسال شد! به زودی پاسخ می‌دهیم.
          </motion.p>
        )}
        <form onSubmit={handleSubmit} className="contact-form__form">
          <motion.div variants={itemVariants} className="contact-form__field">
            <label htmlFor="name">نام کامل</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="نام و نام خانوادگی"
              required
              className={`contact-form__input ${errors.name ? "error" : ""}`}
            />
            {errors.name && (
              <span className="contact-form__error">{errors.name}</span>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="contact-form__field">
            <label htmlFor="email">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              required
              className={`contact-form__input ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <span className="contact-form__error">{errors.email}</span>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="contact-form__field">
            <label htmlFor="message">پیام شما</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="سوال، پیشنهاد یا درخواست مشاوره..."
              required
              className={`contact-form__textarea ${
                errors.message ? "error" : ""
              }`}
            />
            {errors.message && (
              <span className="contact-form__error">{errors.message}</span>
            )}
          </motion.div>
          <motion.button
            type="submit"
            className="btn btn-primary contact-form__submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ارسال پیام
          </motion.button>
        </form>
      </motion.section>

      {/* نقشه */}
      <motion.section className="contact-map card" variants={sectionVariants}>
        <h2>موقعیت ما روی نقشه</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828!2d51.409438!3d35.689197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00f0f5a0c2f7%3A0x4e4a4d6a0c0c8c3!2sValiasr+St%2C+Tehran%2C+Iran!5e0!3m2!1sen!2sus!4v1690000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map__iframe"
        ></iframe>
      </motion.section>

      {/* شبکه‌های اجتماعی */}
      <motion.section
        className="contact-social card"
        variants={sectionVariants}
      >
        <h2>ما را در شبکه‌های اجتماعی دنبال کنید</h2>
        <p>آخرین اخبار محصولات دیجیتال، تخفیف‌ها و بررسی‌ها را از دست ندهید!</p>
        <div className="contact-social__list">
          {[
            {
              icon: "📷",
              name: "اینستاگرام",
              href: "https://instagram.com/digitale_store",
            },
            {
              icon: "📱",
              name: "تلگرام",
              href: "https://t.me/digitale_store",
            },
            {
              icon: "🐦",
              name: "توییتر (X)",
              href: "https://x.com/digitale_store",
            },
            {
              icon: "🔗",
              name: "لینکدین",
              href: "https://linkedin.com/company/digitale-store",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social__item"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="contact-social__icon">{social.icon}</span>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
