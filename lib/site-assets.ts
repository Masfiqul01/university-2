// ============================================================
// KKJSTU SITE ASSETS
// ------------------------------------------------------------
// এই ফাইল থেকে logo এবং সব website image-এর link সহজে পরিবর্তন
// করতে পারবে। কোনো local image রাখতে চাইলে নিচের default path-টাই রাখো।
// Direct online image ব্যবহার করতে চাইলে ওই value-তে https://... URL বসাও।
// ============================================================

export const LOGO_URL = ""

export const IMAGE_URLS: Record<string, string> = {
  "/images/hero-campus.png": "/images/hero-campus.png",
  "/images/admissions-building.png": "/images/admissions-building.png",
  "/images/campus-library.png": "/images/campus-library.png",
  "/images/campus-green.png": "/images/campus-green.png",
  "/images/campus-sports.png": "/images/campus-sports.png",
  "/images/campus-activities.png": "/images/campus-activities.png",
  "/images/news-1.png": "/images/news-1.png",
  "/images/news-2.png": "/images/news-2.png",
  "/images/news-3.png": "/images/news-3.png",
  "/images/news-4.png": "/images/news-4.png",
}

// Code-এর অন্য জায়গা থেকে image path দিলে এই helper আগে সেট করা
// custom URL থাকলে সেটা ব্যবহার করবে, না থাকলে original local image রাখবে।
export function imageUrl(path?: string) {
  if (!path) return "/placeholder.svg"
  return IMAGE_URLS[path] || path
}
