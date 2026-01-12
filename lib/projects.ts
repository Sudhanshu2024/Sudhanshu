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
    slug: "AI-Football-Analytics",
    title: "AI Football Analysis Dashboard",
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
  slug: "AI-automated-job-hunting",
  title: "AI Automated Job Hunting",
  shortDescription: "AI-powered n8n workflow for automated job discovery, resume matching, and smart notifications",
  fullDescription: `
    <p>
      <b>AI Automated Job Hunting</b> is an end-to-end, AI-driven automation platform designed to streamline and personalize the job search process.
      The system leverages <b>n8n, AI/LLMs, Google Sheets, and Telegram Bot integration</b> to eliminate manual job searching and surface only highly relevant opportunities.
    </p>

    <p>
      The workflow is <b>scheduled to trigger automatically at a fixed time every day</b>, ensuring continuous job discovery without user intervention.
      Once triggered, the automation executes a multi-step intelligent pipeline.
    </p>

    <p><b>Workflow Overview:</b></p>

    <ul>
      <li>
        <b>Resume Fetching & Parsing</b><br>
        Automatically fetches the candidate’s resume from a predefined source and parses it to extract skills, experience, and key competencies.
      </li>
      <br>

      <li>
        <b>Dynamic Job Search Configuration</b><br>
        Reads job preferences such as keywords, locations, experience level, job type, and remote preferences from Google Sheets and dynamically constructs LinkedIn job search URLs.
      </li>
      <br>

      <li>
        <b>Job Description Analysis</b><br>
        Processes job descriptions from LinkedIn URLs and analyzes role requirements using AI for accurate comparison.
      </li>
      <br>

      <li>
        <b>AI Resume–Job Matching</b><br>
        Compares the resume against each job description and calculates a <b>resume matching score (%)</b> based on skill relevance and experience alignment.
      </li>
      <br>

      <li>
        <b>AI-Generated Cover Letter</b><br>
        Generates a <b>personalized cover letter</b> for each job by combining resume data, job description, and company context.
      </li>
      <br>

      <li>
        <b>Results Storage & Tracking</b><br>
        Appends structured results—including job title, company name, job URL, matching score, generated cover letter, and execution timestamp—into a Results Google Sheet.
      </li>
      <br>

      <li>
        <b>Telegram Bot Notification</b><br>
        Sends real-time Telegram notifications when the resume matching score is <b>greater than 50%</b>, ensuring only high-quality opportunities are surfaced.
      </li>
    </ul>

    <p><b>Key Highlights:</b></p>

    <ul>
      <li>Fully automated daily job discovery</li>
      <li>AI-based resume–job relevance scoring</li>
      <li>Personalized cover letter generation</li>
      <li>Google Sheets as a dynamic control and tracking layer</li>
      <li>Telegram Bot integration for instant notifications</li>
      <li>Human-in-the-loop decision-making for applications</li>
    </ul>

    <p>
      <b>Impact:</b><br>
      This project transforms job hunting from a repetitive manual task into an <b>intelligent, AI-powered workflow</b>, significantly improving efficiency, relevance, and application quality.
    </p>
  `,
  thumbnail: "/projects/n8n.png",
  demoVideoUrl: "/projects/n8ndemo.mp4",
  techStack: [
    "n8n",
    "AI / LLMs",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Google Sheets API",
    "Telegram Bot API"
  ],
  liveUrl: "",
  repoUrl: "",
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
