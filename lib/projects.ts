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
    slug: "AI-Voice-Assistant",
    title: "AI Voice Assistant",
    shortDescription: "Voice-controlled AI assistant with real-time responses",
    fullDescription: "Developed an AI-powered voice assistant that processes user voice commands and provides real-time responses using speech-to-text and text-to-speech technologies. Integrated with various APIs to perform tasks such as setting reminders, fetching weather updates, and controlling smart home devices. Built with Next.js for the frontend and Node.js for the backend, utilizing WebSockets for real-time communication. The project showcases advanced AI capabilities and seamless user interaction through voice commands.<br><br>Key Features:<br>- Real-time voice recognition and response<br>- Integration with third-party APIs for extended functionality<br>- User-friendly interface with responsive design<br>- Secure handling of user data and privacy considerations",
    thumbnail: "/projects/ai-voice-asisstant.png",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["Next.js", "Python", "LiveKit Cloud", "TypeScript", "WebSockets"],
    liveUrl: "",
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
    slug: "Client-portfolio",
    title: "Client Portfolio",
    shortDescription: "Responsive portfolio website for a client",
    fullDescription: "Developed a responsive portfolio website for a client using Next.js and Tailwind CSS. The site features a modern design with smooth animations, interactive elements, and optimized performance. Includes sections for projects, skills, and contact information. Implemented the site with SEO best practices and integrated a contact form with email notifications.The project was delivered on time and received positive feedback from the client for its design and functionality.The portfolio effectively reflects the best features of Next.Js , with caching and server-side rendering for fast load times. The contents were easily managed through a headless CMS, allowing the client to update their projects and skills without needing technical knowledge. Although this was just a portfolio website, it showcases the capabilities of Next.Js in building fast, responsive, and user-friendly web applications and allowed me to work with a real client, enhancing my communication and project management skills.",
    thumbnail: "/projects/client-portfolio-thumb.jpg",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel", "Headless CMS"],
    liveUrl: "",
    repoUrl: "https://github.com/Sudhanshu2024/Client-portfolio",
    year: 2025
  },
  
];
