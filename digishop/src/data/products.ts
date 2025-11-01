// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  price: number; // به تومان
  image: string;
  category:
    | "mobile"
    | "tablet"
    | "accessory"
    | "laptop"
    | "headphone"
    | "monitor"
    | "smartwatch"
    | "computer_parts"
    | "digital_pen";
  colors?: string[]; // اضافه شده
  features?: string[]; // ویژگی‌ها
}

export const mockProducts: Product[] = [
  // Mobile
  {
    id: 1,
    name: "آیفون 15 پرو",
    price: 45000000,
    image: "https://via.placeholder.com/150?text=iPhone+15+Pro",
    category: "mobile",
    colors: ["#000000", "#ffffff", "#ff0000"],
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 2,
    name: "سامسونگ گلکسی S24",
    price: 38000000,
    image: "https://via.placeholder.com/150?text=Galaxy+S24",
    category: "mobile",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 3,
    name: "شیائومی 14 پرو",
    price: 32000000,
    image: "https://via.placeholder.com/150?text=Xiaomi+14+Pro",
    category: "mobile",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 4,
    name: "هواوی P60 پرو",
    price: 35000000,
    image: "https://via.placeholder.com/150?text=Huawei+P60+Pro",
    category: "mobile",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 5,
    name: "گوگل پیکسل 8",
    price: 30000000,
    image: "https://via.placeholder.com/150?text=Pixel+8",
    category: "mobile",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Tablet
  {
    id: 6,
    name: "آیپد پرو 12.9 اینچ M2",
    price: 52000000,
    image: "https://via.placeholder.com/150?text=iPad+Pro+M2",
    category: "tablet",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 7,
    name: "سامسونگ گلکسی تب S9",
    price: 35000000,
    image: "https://via.placeholder.com/150?text=Galaxy+Tab+S9",
    category: "tablet",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 8,
    name: "لنوو تب P11 پرو",
    price: 22000000,
    image: "https://via.placeholder.com/150?text=Lenovo+Tab+P11+Pro",
    category: "tablet",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 9,
    name: "مایکروسافت سرفیس گو 3",
    price: 28000000,
    image: "https://via.placeholder.com/150?text=Surface+Go+3",
    category: "tablet",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Accessory
  {
    id: 10,
    name: "کیف چرمی آیفون",
    price: 450000,
    image: "https://via.placeholder.com/150?text=Leather+Case",
    category: "accessory",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 11,
    name: "شارژر بی‌سیم 20 وات",
    price: 1200000,
    image: "https://via.placeholder.com/150?text=Wireless+Charger",
    category: "accessory",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 12,
    name: "کابل USB-C انکر",
    price: 350000,
    image: "https://via.placeholder.com/150?text=Anker+USB-C+Cable",
    category: "accessory",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 13,
    name: "پاوربانک شیائومی 20000mAh",
    price: 1500000,
    image: "https://via.placeholder.com/150?text=Xiaomi+PowerBank",
    category: "accessory",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Laptop
  {
    id: 14,
    name: "مک‌بوک ایر M2",
    price: 65000000,
    image: "https://via.placeholder.com/150?text=MacBook+Air+M2",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 15,
    name: "مک‌بوک پرو 16 اینچ M2 مکس",
    price: 120000000,
    image: "https://via.placeholder.com/150?text=MacBook+Pro+M2+Max",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 16,
    name: "لنوو تینک‌پد X1 کربن",
    price: 48000000,
    image: "https://via.placeholder.com/150?text=ThinkPad+X1+Carbon",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 17,
    name: "دل XPS 13",
    price: 55000000,
    image: "https://via.placeholder.com/150?text=Dell+XPS+13",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 18,
    name: "ایسوس ROG زفیروس G14",
    price: 60000000,
    image: "https://via.placeholder.com/150?text=Asus+ROG+Zephyrus+G14",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 19,
    name: "اچ‌پی اسپکتر x360",
    price: 52000000,
    image: "https://via.placeholder.com/150?text=HP+Spectre+x360",
    category: "laptop",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Headphone
  {
    id: 20,
    name: "ایرپادز پرو 2",
    price: 8500000,
    image: "https://via.placeholder.com/150?text=AirPods+Pro+2",
    category: "headphone",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 21,
    name: "هدفون سونی WH-1000XM5",
    price: 15000000,
    image: "https://via.placeholder.com/150?text=Sony+WH-1000XM5",
    category: "headphone",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 22,
    name: "بوز QuietComfort 45",
    price: 13500000,
    image: "https://via.placeholder.com/150?text=Bose+QC45",
    category: "headphone",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 23,
    name: "جی‌بی‌ال Live 660NC",
    price: 6500000,
    image: "https://via.placeholder.com/150?text=JBL+Live+660NC",
    category: "headphone",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Monitor
  {
    id: 24,
    name: "مانیتور سامسونگ Odyssey G7 32 اینچ",
    price: 25000000,
    image: "https://via.placeholder.com/150?text=Samsung+Odyssey+G7",
    category: "monitor",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 25,
    name: "مانیتور ال‌جی UltraGear 27 اینچ",
    price: 20000000,
    image: "https://via.placeholder.com/150?text=LG+UltraGear+27",
    category: "monitor",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 26,
    name: "مانیتور دل UltraSharp 27 اینچ",
    price: 28000000,
    image: "https://via.placeholder.com/150?text=Dell+UltraSharp+27",
    category: "monitor",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 27,
    name: "مانیتور ایسوس ProArt 32 اینچ",
    price: 32000000,
    image: "https://via.placeholder.com/150?text=Asus+ProArt+32",
    category: "monitor",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Smartwatch
  {
    id: 28,
    name: "اپل واچ سری 9",
    price: 18000000,
    image: "https://via.placeholder.com/150?text=Apple+Watch+Series+9",
    category: "smartwatch",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 29,
    name: "سامسونگ گلکسی واچ 6",
    price: 12000000,
    image: "https://via.placeholder.com/150?text=Galaxy+Watch+6",
    category: "smartwatch",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 30,
    name: "هواوی واچ GT 4",
    price: 8500000,
    image: "https://via.placeholder.com/150?text=Huawei+Watch+GT+4",
    category: "smartwatch",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 31,
    name: "شیائومی واچ S1",
    price: 6000000,
    image: "https://via.placeholder.com/150?text=Xiaomi+Watch+S1",
    category: "smartwatch",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Computer Parts
  {
    id: 32,
    name: "ماوس لاجیتک MX Master 3S",
    price: 4500000,
    image: "https://via.placeholder.com/150?text=Logitech+MX+Master+3S",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 33,
    name: "کیبورد مکانیکال کی‌کرون K8",
    price: 3500000,
    image: "https://via.placeholder.com/150?text=Keychron+K8",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 34,
    name: "فلش USB سندسک 128GB",
    price: 800000,
    image: "https://via.placeholder.com/150?text=SanDisk+128GB",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 35,
    name: "هارد اکسترنال وسترن دیجیتال 2TB",
    price: 3500000,
    image: "https://via.placeholder.com/150?text=WD+2TB+External",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 36,
    name: "رم کورسیر DDR4 16GB",
    price: 2500000,
    image: "https://via.placeholder.com/150?text=Corsair+16GB+RAM",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 37,
    name: "پردازنده اینتل Core i9-13900K",
    price: 22000000,
    image: "https://via.placeholder.com/150?text=Intel+i9-13900K",
    category: "computer_parts",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },

  // Digital Pen & Writing Tablet
  {
    id: 38,
    name: "اپل پنسل نسل 2",
    price: 5500000,
    image: "https://via.placeholder.com/150?text=Apple+Pencil+2",
    category: "digital_pen",
    colors: ["#000000", "#ffffff", "#ff0000"], // رنگ‌ها اضافه شدند
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 39,
    name: "قلم دیجیتال سامسونگ S Pen Pro",
    price: 3500000,
    image: "https://via.placeholder.com/150?text=Samsung+S+Pen+Pro",
    category: "digital_pen",
    colors: ["#000000", "#ffffff", "#ff0000"],
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 40,
    name: "تبلت نوت‌برداری Remarkable 2",
    price: 20000000,
    image: "https://via.placeholder.com/150?text=Remarkable+2",
    category: "digital_pen",
    colors: ["#000000", "#ffffff", "#ff0000"],
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
  {
    id: 41,
    name: "قرآن دیجیتال همراه قلم",
    price: 2500000,
    image: "https://via.placeholder.com/150?text=Digital+Quran+Pen",
    category: "digital_pen",
    colors: ["#000000", "#ffffff", "#ff0000"],
    features: [
      "صفحه نمایش 6.1 اینچ Super Retina",
      "پردازنده A17 Bionic",
      "دوربین 48 مگاپیکسل",
      "حافظه داخلی 256 گیگابایت",
    ],
  },
];
