// src/utils/colorName.ts
const namedColors: Record<string, string> = {
  "#000000": "مشکی",
  "#000": "مشکی",
  "#ffffff": "سفید",
  "#fff": "سفید",
  "#ff0000": "قرمز",
  "#00ff00": "سبز",
  "#0000ff": "آبی",
  "#f44336": "قرمز",
  "#4caf50": "سبز",
  "#2196f3": "آبی",
  "#ffc107": "نارنجی",
  "#ff9800": "نارنجی",
  "#9c27b0": "بنفش",
  "#ff69b4": "صورتی",
  "#808080": "خاکستری",
  "#808000": "زیتونی",
  // می‌تونی هر رنگ رایج بیشتری اضافه کنی
};

function normalizeHex(hex: string) {
  if (!hex) return hex;
  const h = hex.trim().toLowerCase();
  // تبدیل کوتاه به بلند: #fff -> #ffffff
  if (/^#?[0-9a-f]{3}$/.test(h)) {
    const clean = h.replace("#", "");
    return (
      "#" +
      clean
        .split("")
        .map((c) => c + c)
        .join("")
    );
  }
  return h.startsWith("#") ? h : `#${h}`;
}

export function colorName(hex?: string): string {
  if (!hex) return "نامشخص";
  const norm = normalizeHex(hex);
  return namedColors[norm] || norm; // اگر نام نداشت، خود hex رو نشون بده یا "سایر"
}
