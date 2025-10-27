// src/pages/ProductList.tsx

import "./ProductList.css";
import { useState } from "react";
import { mockProducts } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const categories = ["mobile", "tablet", "accessory"] as const;

  return (
    <div className="product-list-page">
      <h2>فروشگاه کالای دیجیتال</h2>

      {/* جستجو */}
      <div className="product-list__search">
        <input
          type="text"
          placeholder="جستجوی محصول..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="product-list__search-input"
        />
      </div>

      {/* فیلتر دسته‌بندی */}
      <div className="product-list__filters">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`btn ${
            selectedCategory === null ? "btn-primary" : "btn-outline"
          }`}
        >
          همه
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn ${
              selectedCategory === cat ? "btn-primary" : "btn-outline"
            }`}
          >
            {cat === "mobile"
              ? "موبایل"
              : cat === "tablet"
              ? "تبلت"
              : "لوازم جانبی"}
          </button>
        ))}
      </div>

      {/* لیست محصولات */}
      {filteredProducts.length === 0 ? (
        <p className="product-list__empty">محصولی یافت نشد.</p>
      ) : (
        <div className="product-list__grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
