// src/components/CategoriesSection/CategoriesSection.tsx
import { useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";
import { mockProducts } from "../../data/products";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  const dragControls = useDragControls();
  const scrollRef = useRef<HTMLDivElement>(null);

  // انتخاب یک محصول نمونه از هر دسته‌بندی
  const categoryProducts = categories
    .map((category) => {
      const product = mockProducts.find((p) => p.category === category.id);
      return { category, product };
    })
    .filter((item) => item.product !== undefined); // فقط دسته‌بندی‌هایی که محصول دارن

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // غیرفعال کردن انتخاب متن موقع درگ
  useEffect(() => {
    const preventTextSelection = (e: Event) => {
      e.preventDefault();
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("selectstart", preventTextSelection);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener(
          "selectstart",
          preventTextSelection
        );
      }
    };
  }, []);

  return (
    <section className="categories-section">
      <div className="categories-section__header">
        <h2>دسته‌بندی‌ محصولات</h2>
        <Link to="/products" className="categories-section__view-all">
          مشاهده همه
        </Link>
      </div>
      <motion.div
        ref={scrollRef}
        className="categories-section__scroll-container"
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: -1000, right: 0 }} // محدود کردن درگ
        dragElastic={0.2} // نرمی درگ
        whileDrag={{ cursor: "pointer" }} // تغییر کرسر موقع درگ
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="categories-section__grid">
          {categoryProducts.map(({ category, product }) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="category-card-wrapper"
            >
              <Link
                to={`/products?category=${category.id}`}
                className="category-card card"
              >
                <span className="category-card__icon">{category.icon}</span>
                <h3 className="category-card__title">{category.name}</h3>
                {product && (
                  <div className="category-card__product">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="category-card__product-image"
                    />
                    <div className="category-card__product-info">
                      <p className="category-card__product-name">
                        {product.name}
                      </p>
                      <p className="category-card__product-price">
                        {product.price.toLocaleString()} تومان
                      </p>
                      <p className="category-card__product-category">
                        دسته‌بندی: {category.name}
                      </p>
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
