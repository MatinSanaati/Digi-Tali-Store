// src/components/Footer/Footer.tsx
import { motion, type Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="site-footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container footer-container">
        <div className="footer-grid">
          {/* بخش نمونه کار */}
          <motion.div className="footer-disclaimer" variants={itemVariants}>
            <Link
              to="/"
              className={`footer__logo ${isHome ? "footer__logo--active" : ""}`}
            >
              DigiTali
            </Link>
            <p className="footer-subtitle">فروشگاه دیجیتال حرفه‌ای</p>
            <div className="disclaimer-box">
              <p>
                <strong>توجه:</strong> این وب‌سایت صرفاً یک{" "}
                <strong>نمونه کار</strong> است و به‌صورت رسمی فعالیت نمی‌کند.
              </p>
              <p>
                هیچ‌یک از محصولات، قیمت‌ها، تصاویر یا اطلاعات موجود در این سایت
                واقعی نبوده و صرفاً برای نمایش مهارت‌های توسعه فرانت‌اند طراحی
                شده است.
              </p>
            </div>
          </motion.div>

          {/* لینک‌های سریع */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h4>لینک‌های سریع</h4>
            <ul>
              <li>
                <Link to="/about">درباره ما</Link>
              </li>
              <li>
                <Link to="/blog">بلاگ</Link>
              </li>
              <li>
                <Link to="/contact">تماس با ما</Link>
              </li>
              <li>
                <Link to="/privacy">حریم خصوصی</Link>
              </li>
              <li>
                <Link to="/terms">شرایط استفاده</Link>
              </li>
            </ul>
          </motion.div>

          {/* شبکه‌های اجتماعی */}
          <motion.div className="footer-social" variants={itemVariants}>
            <h4>ما را دنبال کنید</h4>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="social-icon">i</i> اینستاگرام
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="social-icon">i</i> تلگرام
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="social-icon">i</i> لینکدین
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="social-icon">i</i> واتس آپ
              </a>
            </div>
          </motion.div>
        </div>

        {/* کپی‌رایت */}
        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {currentYear} DigiTali. تمامی حقوق محفوظ است.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
