export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  demoVideoUrl?: string; // YouTube embed URL (e.g., "https://www.youtube.com/embed/VIDEO_ID")
  demoVideoFile?: string; // Self-hosted video file path (e.g., "/projects/demo-video.mp4")
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  year: number;
};

export const projects: Project[] = [
   {
    slug: "AI-Voice Assistant",
    title: "AI Voice Assistant",
    shortDescription: "Voice-controlled AI assistant with real-time responses",
    fullDescription: "Developed an AI-powered voice assistant that processes user voice commands and provides real-time responses using speech-to-text and text-to-speech technologies. Integrated with various APIs to perform tasks such as setting reminders, fetching weather updates, and controlling smart home devices. Built with Next.js for the frontend and Node.js for the backend, utilizing WebSockets for real-time communication.",
    thumbnail: "/projects/ai-voice-asisstant.png",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["Next.js", "Python", "LiveKit Cloud", "TypeScript", "WebSockets"],
    liveUrl: "https://chat.example.com",
    repoUrl: "https://github.com/Sudhanshu2024/Voice-Assistance-AI",
    year: 2026
  },
  {
    slug: "chat-app",
    title: "Realtime Chat App",
    shortDescription: "Socket.io chat with typing indicators",
    fullDescription: "Built a fullstack chat application with real-time messaging, user presence, and message history. Implemented using Next.js API routes with PostgreSQL for persistent storage. Features include typing indicators, online status, message reactions, and end-to-end encryption for private conversations.",
    thumbnail: "/projects/chat-thumb.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "TypeScript"],
    liveUrl: "https://chat.example.com",
    repoUrl: "https://github.com/you/chat-app",
    year: 2025
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online store with payments",
    fullDescription: "Developed a comprehensive e-commerce platform with product catalog, shopping cart, checkout flow, and payment integration. Includes admin dashboard for inventory management, order tracking, and analytics. Built with Next.js, Stripe payments, and MongoDB for scalable product storage.",
    thumbnail: "/projects/ecommerce-thumb.jpg",
    techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://store.example.com",
    repoUrl: "https://github.com/you/ecommerce-platform",
    year: 2024
  },
  {
    slug: "task-manager",
    title: "Task Management Dashboard",
    shortDescription: "Kanban-style task organizer with collaboration",
    fullDescription: "Created a collaborative task management application with drag-and-drop Kanban boards, team collaboration features, and real-time updates. Users can create projects, assign tasks, set deadlines, and track progress. Features include file attachments, comments, and notifications.",
    thumbnail: "/projects/task-thumb.jpg",
    techStack: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    liveUrl: "https://tasks.example.com",
    repoUrl: "https://github.com/you/task-manager",
    year: 2024
  }
];
