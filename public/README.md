# /public

Static assets served at the root URL.

## Expected structure

```
/public
  /videos
    hero-hologram.mp4       ← hologram-clean.mp4 from your uploads
    hero-hologram-robot.mp4 ← hologram-robot.mp4 from your uploads
  /images
    og-image.png            ← Open Graph preview image (1200×630)
    favicon.ico
  /icons
    icon-192.png
    icon-512.png
```

## Cloudinary

Project images (screenshots, thumbnails) are stored in Cloudinary.
Upload via the Cloudinary dashboard or use `lib/cloudinary.ts`.
```
