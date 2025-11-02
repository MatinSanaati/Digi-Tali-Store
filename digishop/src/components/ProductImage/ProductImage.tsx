import { useState, type CSSProperties } from "react";
import { getLocalImageByFileName } from "../../assets/productImages";

interface Props {
  src?: string; // URL خارجی (API)
  localFileName?: string; // مثال: "1.jpg"
  alt?: string;
  className?: string;
  style?: CSSProperties; // اگر خواستی override کنی
  size?: "small" | "medium" | "large"; // برای سایزهای پیشفرض
}

export default function ProductImage({
  src,
  localFileName,
  alt = "",
  className,
  style,
  size = "small",
}: Props) {
  const [error, setError] = useState(false);

  const local = getLocalImageByFileName(localFileName);

  const handleError = () => {
    setError(true);
  };

  const displaySrc = !src || error ? local : src;

  // استایل پیشفرض سایزهای کوچک، متوسط و بزرگ
  const defaultStyle: CSSProperties = {
    width: size === "small" ? 80 : size === "medium" ? 150 : 250,
    height: size === "small" ? 80 : size === "medium" ? 150 : 250,
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
  };

  return (
    <img
      src={displaySrc}
      alt={alt}
      onError={handleError}
      className={className}
      style={{ ...defaultStyle, ...style }}
      loading="lazy"
    />
  );
}
