// src/pages/About.tsx

import "./About.css";

export default function About() {
  return (
    <div className="about-page container">
      <h1>درباره ما</h1>
      <p className="about-page__intro">
        DigiTali یک فروشگاه معتبر و مطمئن در زمینه‌ی فروش کالاهای دیجیتال است که
        با هدف ارائه‌ی بهترین محصولات و خدمات پس از فروش، از سال ۱۴۰۰ فعالیت خود
        را آغاز کرده است.
      </p>
      <div className="about-page__mission">
        <h2>ماموریت ما</h2>
        <p>
          ارائه‌ی کالاهای اصل با گارانتی معتبر، قیمت منصفانه و تجربه‌ی خریدی
          لذت‌بخش برای همه‌ی مشتریان عزیز.
        </p>
      </div>
      <div className="about-page__values">
        <h2>ارزش‌های ما</h2>
        <ul>
          <li>✅ اصالت کالا</li>
          <li>✅ پشتیبانی ۲۴/۷</li>
          <li>✅ ارسال سریع</li>
          <li>✅ رضایت مشتری</li>
        </ul>
      </div>
    </div>
  );
}
