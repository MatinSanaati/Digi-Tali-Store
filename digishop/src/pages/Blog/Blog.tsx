// src/pages/Blog.tsx
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
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

  const blogCategories = [
    { id: "tech", name: "تکنولوژی" },
    { id: "buying-guide", name: "راهنمای خرید" },
    { id: "reviews", name: "نقد و بررسی" },
  ];

  return (
    <motion.div
      className="blog-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={sectionVariants}>بلاگ DigiTali</motion.h1>
      <motion.p className="blog-page__intro" variants={sectionVariants}>
        جدیدترین مقالات و راهنماهای دیجیتال برای به‌روز ماندن با تکنولوژی
      </motion.p>

      {/* بخش دسته‌بندی‌ها */}
      <motion.div
        className="blog-page__categories card"
        variants={sectionVariants}
      >
        <h2>دسته‌بندی‌ها</h2>
        <div className="blog-page__categories-list">
          {blogCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="blog-page__category-item"
            >
              <Link
                to={`/blog?category=${category.id}`}
                className="btn btn-outline"
              >
                {category.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* بخش جستجو */}
      <motion.div className="blog-page__search card" variants={sectionVariants}>
        <input
          type="text"
          placeholder="جستجوی مقالات..."
          className="blog-page__search-input"
        />
        <button className="btn btn-primary">جستجو</button>
      </motion.div>

      {/* پست‌های بلاگ */}
      <motion.div className="blog-posts" variants={sectionVariants}>
        {[
          {
            id: 1,
            title: "بهترین گوشی‌های ۲۰۲۵ برای عکاسی",
            excerpt: "معرفی ۵ گوشی برتر با قابلیت‌های عکاسی حرفه‌ای...",
            date: "۱۴ اردیبهشت ۱۴۰۴",
            image: "https://via.placeholder.com/300x200?text=Best+Phones+2025",
          },
          {
            id: 2,
            title: "چگونه تبلت مناسب برای کار انتخاب کنیم؟",
            excerpt: "راهنمای جامع برای انتخاب تبلت با توجه به نیازهای کاری...",
            date: "۵ اردیبهشت ۱۴۰۴",
            image: "https://via.placeholder.com/300x200?text=Tablet+Guide",
          },
          {
            id: 3,
            title: "بررسی هدفون‌های بی‌سیم ۲۰۲۵",
            excerpt: "مقایسه بهترین هدفون‌های بی‌سیم سال با فناوری‌های جدید...",
            date: "۲۰ فروردین ۱۴۰۴",
            image:
              "https://via.placeholder.com/300x200?text=Wireless+Headphones",
          },
        ].map((post) => (
          <motion.article
            key={post.id}
            className="blog-post card"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "var(--shadow-md)" }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="blog-post__image"
            />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <time>{post.date}</time>
            <Link
              to={`/blog/${post.id}`}
              className="btn btn-primary blog-post__read-more"
            >
              خواندن ادامه
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA نهایی */}
      <motion.div className="blog-page__cta" variants={sectionVariants}>
        <Link to="/newsletter" className="btn btn-primary">
          اشتراک در خبرنامه
        </Link>
      </motion.div>
    </motion.div>
  );
}
