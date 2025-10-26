// src/pages/Blog.tsx

import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-page container">
      <h1>بلاگ DigiTali</h1>
      <p className="blog-page__intro">جدیدترین مقالات و راهنماهای دیجیتال</p>
      <div className="blog-posts">
        <article className="blog-post card">
          <h2>بهترین گوشی‌های ۲۰۲۵ برای عکاسی</h2>
          <p>معرفی ۵ گوشی برتر با قابلیت‌های عکاسی حرفه‌ای...</p>
          <time>۱۴ اردیبهشت ۱۴۰۴</time>
        </article>
        <article className="blog-post card">
          <h2>چگونه تبلت مناسب برای کار انتخاب کنیم؟</h2>
          <p>راهنمای جامع برای انتخاب تبلت با توجه به نیازهای کاری...</p>
          <time>۵ اردیبهشت ۱۴۰۴</time>
        </article>
      </div>
    </div>
  );
}
