# Video Upload Instructions

## Directory Structure

Your portfolio supports both **YouTube videos** and **self-hosted video files**. Here's how to set them up:

```
MyPortfolio/
├── public/
│   ├── projects/          # Project thumbnails and videos
│   │   ├── chat-thumb.jpg
│   │   ├── demo-video.mp4  # Self-hosted video files go here
│   │   └── ...
│   └── blog/              # Blog thumbnails
│       └── ...
```

## Adding Videos to Projects

### Option 1: YouTube Video (Recommended)

1. Upload your video to YouTube (make it unlisted if you don't want it public)
2. Get the embed URL format: `https://www.youtube.com/embed/VIDEO_ID`
3. In `/lib/projects.ts`, add it to your project:

```typescript
{
  slug: "my-project",
  title: "My Project",
  // ... other fields
  demoVideoUrl: "https://www.youtube.com/embed/VIDEO_ID", // YouTube embed URL
  // Leave demoVideoFile empty for YouTube videos
}
```

**To get YouTube embed URL:**
- Go to your YouTube video
- Click "Share" → "Embed"
- Copy the URL from the iframe src (looks like: `https://www.youtube.com/embed/VIDEO_ID`)

### Option 2: Self-Hosted Video File

1. Record your demo video (MP4 format recommended)
2. Optimize it for web:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or 1280x720
   - Max file size: 50MB (keep it under 20MB if possible)
3. Place the video file in `/public/projects/` folder:
   ```
   public/projects/demo-video.mp4
   ```
4. In `/lib/projects.ts`, add it to your project:

```typescript
{
  slug: "my-project",
  title: "My Project",
  // ... other fields
  demoVideoFile: "/projects/demo-video.mp4", // Self-hosted video path
  // Leave demoVideoUrl empty for self-hosted videos
}
```

**Video Optimization Tips:**
- Use HandBrake (free) to compress videos
- Or use online tools like CloudConvert
- Keep file sizes small for faster loading
- Use MP4 format for best browser compatibility

## Important Notes

1. **Use only ONE video option per project:**
   - Either `demoVideoUrl` (YouTube) OR `demoVideoFile` (self-hosted)
   - Don't use both for the same project

2. **Path format for self-hosted videos:**
   - Start with `/` (e.g., `/projects/video.mp4`)
   - Path is relative to the `public` folder

3. **Thumbnail images:**
   - Place in `/public/projects/` folder
   - Use JPG or PNG format
   - Recommended size: 1280x720px or 1920x1080px
   - Reference in project: `thumbnail: "/projects/my-thumb.jpg"`

## Example Project Entry

```typescript
{
  slug: "awesome-app",
  title: "Awesome App",
  shortDescription: "A cool app description",
  fullDescription: "Full description here...",
  thumbnail: "/projects/awesome-thumb.jpg",
  demoVideoUrl: "https://www.youtube.com/embed/abc123xyz", // YouTube option
  // OR
  // demoVideoFile: "/projects/awesome-demo.mp4", // Self-hosted option
  techStack: ["Next.js", "TypeScript"],
  liveUrl: "https://awesome-app.com",
  repoUrl: "https://github.com/you/awesome-app",
  year: 2025
}
```

## Updating Resume Link

1. Upload your resume PDF to Google Drive
2. Right-click the file → "Get link" → Set to "Anyone with the link"
3. Copy the share link
4. Open `/components/Navbar.tsx`
5. Find the Resume link (line ~35) and replace `YOUR_FILE_ID`:

```tsx
// Change this:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"

// To your actual Google Drive link:
href="https://drive.google.com/file/d/1ABC123xyz456DEF/view?usp=sharing"
```

**Alternative: Direct Download Link**
If you want a direct download link instead:
1. Get the shareable link from Google Drive
2. Replace `/view?usp=sharing` with `/uc?export=download`
3. Example: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`

