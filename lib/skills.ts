export type SkillCategory = {
  id: string
  icon: string // Lucide icon name
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    icon: 'Code',
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'Java'],
  },
  {
    id: 'backend',
    icon: 'Database',
    title: 'Backend & Cloud',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'JWT Authentication',
      'RESTful APIs',
      'Stripe Integration',
      'Vercel',
      'AWS',
      'LiveKit Cloud',
      "CMS"
    ],
  },
  {
    id: 'frontend',
    icon: 'Layout',
    title: 'Frontend & Mobile',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'Windows Forms',
      'Framer',
    ],
  },
  {
    id: 'ai',
    icon: 'Brain',
    title: 'Data & AI',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Reinforcement Learning',
      'Neural Networks',
      'Algorithm Visualization',
      'Machine Learning',
      'OpenAI API',
      'n8n Automation',
    ],
  },
]
