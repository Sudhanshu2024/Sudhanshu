# Minimalist Developer Portfolio

A clean, fast, and minimalist portfolio built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm i && npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Adding New Projects

Simply add a new project object to the `projects` array in `/lib/projects.ts`:

```typescript
{
  slug: "your-project-slug",
  title: "Your Project Title",
  shortDescription: "Brief description",
  fullDescription: "Full detailed description...",
  thumbnail: "/projects/your-image.jpg",
  techStack: ["Next.js", "TypeScript"],
  liveUrl: "https://your-project.com",
  repoUrl: "https://github.com/you/repo",
  year: 2025
}
```

That's it! The project will automatically appear on the projects page and be accessible at `/projects/your-project-slug`.

## Project Structure

- `/app` - Next.js App Router pages
- `/lib` - Content data files (projects.ts, blogs.ts)
- `/public` - Static assets (images, etc.)
- `/components` - Reusable React components
