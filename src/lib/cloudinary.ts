import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

/** Get optimised image URL from Cloudinary public_id */
export function getImageUrl(
  publicId: string,
  options: { width?: number; height?: number; quality?: number } = {}
): string {
  const { width = 800, height, quality = "auto" } = options;
  return cloudinary.url(publicId, {
    transformation: [
      {
        width,
        height,
        crop: "fill",
        quality,
        fetch_format: "auto",
      },
    ],
  });
}
