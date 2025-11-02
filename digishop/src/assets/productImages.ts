// src/assets/productImages.ts

// ⭐ Vite 5 new syntax
const images = import.meta.glob("./products/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

/**
 * خروجی: Record<string, string>   // filename -> url
 * key های معمول: "./products/1.jpg"
 */
const imagesMap: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
  const fileName = path.split("/").pop(); // "1.jpg"
  // @ts-ignore
  imagesMap[fileName as string] = (mod as any).default;
});

export function getLocalImageByFileName(fileName?: string) {
  if (!fileName)
    return imagesMap["placeholder.png"] || Object.values(imagesMap)[0];
  return (
    imagesMap[fileName] ||
    imagesMap["placeholder.png"] ||
    Object.values(imagesMap)[0]
  );
}

export default imagesMap;
