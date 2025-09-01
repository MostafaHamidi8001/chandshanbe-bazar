// sanity.client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // از dashboard یا sanity.config.js
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-09-01", // تاریخ امروز یا آخرین تاریخ API
  useCdn: false, // true برای داده‌های public
  token: process.env.SANITY_API_TOKEN
});
