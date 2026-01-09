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
    slug: "Football-Analytics",
    title: "Football Analytics Dashboard",
    shortDescription: "Real-time analytics for football teams and players",
    fullDescription: "<span style='color:#2563eb; font-weight:600;'>Building</span> a football analytics dashboard focused on understanding how real-time data can be collected, processed, and visualized for teams and players.<br><br>Currently, the project is in an active development and learning phase, where I am exploring different modules required to build a scalable and reliable analytics system. The goal is to aggregate data from live match feeds and historical datasets to generate meaningful insights around player performance, team tactics, and match outcomes.<br><br>I am experimenting with data modeling, WebSocket-based real-time updates, and interactive visualizations using D3.js to better understand how large volumes of sports data can be represented clearly and intuitively.<br><br><strong>Planned Features & Learning Goals:</strong><br>- Real-time data ingestion during live matches using Socket.io<br>- Interactive charts and dashboards for performance analysis<br>- PostgreSQL-based data storage for historical insights<br>- Role-based access and authentication concepts<br>- Custom analytics views and report generation<br><br>This project serves as a hands-on learning experience to deepen my understanding of real-time systems, data visualization, and full-stack architecture while gradually evolving into a complete analytics platform.",

    thumbnail: "/projects/football-analytical.webp",
    demoVideoUrl: "",
    techStack: ["RoboFlow", "Python", "PostgreSQL", "TypeScript","Pytorch","cv2", "D3.js"],
    liveUrl: "",
    repoUrl: "https://github.com/Sudhanshu2024/football-analysis",
    year: 2025
  },
   {
    slug: "AI-Voice-Assistant",
    title: "AI Voice Assistant",
    shortDescription: "Voice-controlled AI assistant with real-time responses",
    fullDescription: "Developed an AI-powered voice assistant that processes user voice commands and provides real-time responses using speech-to-text and text-to-speech technologies. Integrated with various APIs to perform tasks such as setting reminders, fetching weather updates, and controlling smart home devices. Built with Next.js for the frontend and Node.js for the backend, utilizing WebSockets for real-time communication. The project showcases advanced AI capabilities and seamless user interaction through voice commands.<br><br>Key Features:<br>- Real-time voice recognition and response<br>- Integration with third-party APIs for extended functionality<br>- User-friendly interface with responsive design<br>- Secure handling of user data and privacy considerations",
    thumbnail: "/projects/ai-voice-asisstant.png",
    demoVideoFile:"/projects/ai-voice-assistant.mp4",
    techStack: ["Next.js", "Python", "LiveKit Cloud", "TypeScript", "WebSockets"],
    liveUrl: "",
    repoUrl: "https://github.com/Sudhanshu2024/Voice-Assistance-AI",
    year: 2026
  },
  
  {
    slug: "Client-portfolio",
    title: "Client Portfolio",
    shortDescription: "Responsive portfolio website for a client",
    fullDescription: "Developed a responsive portfolio website for a client using Next.js and Tailwind CSS. The site features a modern design with smooth animations, interactive elements, and optimized performance.<br> Includes sections for projects, skills, and contact information. Implemented the site with SEO best practices and integrated a contact form with email notifications.The project was delivered on time and received positive feedback from the client for its design and functionality.<br>The portfolio effectively reflects the best features of Next.Js , with caching and server-side rendering for fast load times. The contents were easily managed through a headless CMS, allowing the client to update their projects and skills without needing technical knowledge.<br> Although this was just a portfolio website, it showcases the capabilities of Next.Js in building fast, responsive, and user-friendly web applications and allowed me to work with a real client, enhancing my communication and project management skills.",
    thumbnail: "/projects/client-portfolio.png",
    demoVideoUrl: "",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel", "Headless CMS"],
    liveUrl: "",
    repoUrl: "https://github.com/Sudhanshu2024/Client-portfolio",
    year: 2025
  },
  
];
