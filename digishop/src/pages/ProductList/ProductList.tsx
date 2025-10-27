// src/pages/ProductList.tsx
import "./ProductList.css";
import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { mockProducts } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "mobile",
    "tablet",
    "accessory",
    "laptop",
    "headphone",
    "monitor",
    "smartwatch",
    "computer_parts",
    "digital_pen",
  ] as const;

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categoryNames: Record<string, string> = {
    mobile: "موبایل",
    tablet: "تبلت",
    accessory: "لوازم جانبی",
    laptop: "لپ‌تاپ",
    headphone: "هدفون",
    monitor: "مانیتور",
    smartwatch: "ساعت هوشمند",
    computer_parts: "قطعات کامپیوتر",
    digital_pen: "قلم دیجیتال",
  };

  // کلید پویا برای گرید
  const gridKey = `${searchTerm}-${selectedCategory || "all"}`;

  // انیمیشن‌ها
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const searchVariants: Variants = {
    idle: { scale: 1 },
    focus: { scale: 1.02, boxShadow: "0 0 8px var(--color-primary)" },
  };

  return (
    <motion.div
      className="product-list-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>فروشگاه کالای دیجیتال</motion.h2>

      {/* جست و جو */}
      <motion.div
        className="product-list__search"
        variants={searchVariants}
        initial="idle"
        whileFocus="focus"
      >
        <div className="product-list__search-wrapper">
          <input
            type="text"
            placeholder="جستجوی محصول . . ."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="product-list__search-input"
          />
          {searchTerm && (
            <motion.button
              className="product-list__clear-button"
              onClick={() => setSearchTerm("")}
              whileHover={{
                scale: 1.2,
                rotate: 90,
              }}
              whileTap={{ scale: 0.85, rotate: 90 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
                transition: { duration: 0.4, repeat: 1 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              ✕
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* فیلتر دسته‌بندی */}
      <motion.div
        className="product-list__filters"
        variants={containerVariants}
      >
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`product-list__filter-btn ${
            selectedCategory === null ? "btn-primary" : "btn-outline"
          }`}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          همه
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`product-list__filter-btn ${
              selectedCategory === cat ? "btn-primary" : "btn-outline"
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoryNames[cat]}
          </motion.button>
        ))}
      </motion.div>

      {/* لیست محصولات */}
      {filteredProducts.length === 0 ? (
        <motion.p
          className="product-list__empty"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          محصولی یافت نشد . . !
        </motion.p>
      ) : (
        <motion.div
          key={gridKey}
          className="product-list__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants} layout>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
