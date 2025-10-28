import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./Blog.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  authorAvatar: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "بهترین گوشی‌های ۲۰۲۵ برای عکاسی حرفه‌ای",
    excerpt:
      "مقایسه ۵ گوشی برتر با دوربین‌های ۲۰۰ مگاپیکسلی، زوم ۱۰۰x و فیلم‌برداری ۸K — کدام برای شما مناسب است؟",
    date: "۱۴ اردیبهشت ۱۴۰۴",
    category: "نقد و بررسی",
    readTime: "۸ دقیقه",
    image: "https://via.placeholder.com/400x250?text=Camera+Phones+2025",
    author: "علی رضایی",
    authorAvatar: "https://via.placeholder.com/40?text=AR",
  },
  {
    id: 2,
    title: "راهنمای خرید تبلت: از دانشجو تا گرافیست",
    excerpt:
      "چگونه تبلتی انتخاب کنیم که هم برای یادداشت‌برداری و هم ادیت حرفه‌ای مناسب باشد؟ مقایسه iPad، Galaxy Tab و Surface.",
    date: "۱۰ اردیبهشت ۱۴۰۴",
    category: "راهنمای خرید",
    readTime: "۱۰ دقیقه",
    image: "https://via.placeholder.com/400x250?text=Tablet+Guide",
    author: "سارا محمدی",
    authorAvatar: "https://via.placeholder.com/40?text=SM",
  },
  {
    id: 3,
    title: "هدفون‌های بی‌سیم ۲۰۲۵: نویز کنسلینگ واقعی یا تبلیغ؟",
    excerpt:
      "تست ۷ هدفون پرچمدار با ANC تطبیقی، صدای Hi-Res و باتری ۶۰ ساعته — آیا ارزش قیمت دارند؟",
    date: "۵ اردیبهشت ۱۴۰۴",
    category: "نقد و بررسی",
    readTime: "۷ دقیقه",
    image: "https://via.placeholder.com/400x250?text=Headphones+2025",
    author: "محمد حسینی",
    authorAvatar: "https://via.placeholder.com/40?text=MH",
  },
  {
    id: 4,
    title: "چرا SSD NVMe بخریم؟ تفاوت با HDD و SATA",
    excerpt:
      "سرعت بوت ۵ ثانیه‌ای، لود بازی زیر ۲ ثانیه — چرا باید همین امروز هارد قدیمی رو کنار بذارید؟",
    date: "۱ اردیبهشت ۱۴۰۴",
    category: "تکنولوژی",
    readTime: "۶ دقیقه",
    image: "https://via.placeholder.com/400x250?text=SSD+vs+HDD",
    author: "فاطمه احمدی",
    authorAvatar: "https://via.placeholder.com/40?text=FA",
  },
];

const categories = [
  { id: "all", name: "همه مقالات" },
  { id: "tech", name: "تکنولوژی" },
  { id: "buying-guide", name: "راهنمای خرید" },
  { id: "reviews", name: "نقد و بررسی" },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="blog-page container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* عنوان اصلی */}
      <motion.h1 variants={sectionVariants} className="blog-page__title">
        بلاگ DigiTali
      </motion.h1>
      <motion.p variants={sectionVariants} className="blog-page__intro">
        آخرین اخبار، راهنماها و بررسی‌های تخصصی محصولات دیجیتال — به‌روز باشید،
        هوشمندانه خرید کنید
      </motion.p>

      {/* دسته‌بندی‌ها */}
      <motion.section
        className="blog-page__categories card"
        variants={sectionVariants}
      >
        <h2>دسته‌بندی مقالات</h2>
        <div className="blog-page__categories-list">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={itemVariants}
              className={`btn ${
                selectedCategory === cat.id ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* جستجو */}
      <motion.section
        className="blog-page__search card"
        variants={sectionVariants}
      >
        <div className="blog-page__search-wrapper">
          <input
            type="text"
            placeholder="جستجو در مقالات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="blog-page__search-input"
          />
          <button className="btn btn-primary blog-page__search-btn">
            جستجو
          </button>
        </div>
      </motion.section>

      {/* پست‌ها */}
      <motion.section className="blog-posts" variants={sectionVariants}>
        {filteredPosts.length === 0 ? (
          <motion.p
            className="blog-page__no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            مقاله‌ای با این مشخصات یافت نشد
          </motion.p>
        ) : (
          filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-post card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "var(--shadow-lg)" }}
              layout
            >
              <div className="blog-post__image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-post__image"
                />
                <span className="blog-post__category-tag">{post.category}</span>
              </div>

              <div className="blog-post__content">
                <header className="blog-post__header">
                  <h2 className="blog-post__title">{post.title}</h2>
                  <div className="blog-post__meta">
                    <div className="blog-post__author">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="blog-post__author-avatar"
                      />
                      <span>{post.author}</span>
                    </div>
                    <time className="blog-post__date">{post.date}</time>
                    <span className="blog-post__read-time">
                      {post.readTime}
                    </span>
                  </div>
                </header>

                <p className="blog-post__excerpt">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="btn btn-primary blog-post__read-more"
                >
                  ادامه مطلب
                </Link>
              </div>
            </motion.article>
          ))
        )}
      </motion.section>

      {/* CTA خبرنامه */}
      <motion.section
        className="blog-page__newsletter card"
        variants={sectionVariants}
      >
        <h2>خبرنامه هفتگی DigiTali</h2>
        <p>
          هر هفته بهترین مقالات، تخفیف‌ها و اخبار تکنولوژی رو مستقیم تو ایمیلت
          دریافت کن
        </p>
        <form className="blog-page__newsletter-form">
          <input
            type="email"
            placeholder="ایمیل شما"
            className="blog-page__newsletter-input"
          />
          <button type="submit" className="btn btn-primary">
            اشتراک
          </button>
        </form>
      </motion.section>
    </motion.div>
  );
}
