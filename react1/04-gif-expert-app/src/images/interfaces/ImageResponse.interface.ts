import type { Image } from "./Image.interface";

export interface ImageResponse {
  success: boolean;
  message: string;
  count: number;
  total_pages: number;
  photos: Image[];
}
