export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-apps",
    title: "Building Scalable Next.js Applications",
    excerpt: "Lessons learned from building production-grade Next.js applications with TypeScript and modern patterns.",
    content: "Full blog content here...",
    date: "2025-01-15",
    author: "Sudhanshu Kumar Sinha",
    tags: ["Next.js", "TypeScript", "Web Development"],
    coverImage: "/blog/nextjs-cover.jpg"
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance in 2025",
    excerpt: "A deep dive into React performance optimization techniques, including memoization, code splitting, and rendering strategies.",
    content: "Full blog content here...",
    date: "2024-12-20",
    author: "Sudhanshu Kumar Sinha",
    tags: ["React", "Performance", "JavaScript"],
    coverImage: "/blog/react-cover.jpg"
  }
];
