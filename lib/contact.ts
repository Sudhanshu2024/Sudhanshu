import type { LucideIcon } from 'lucide-react'
import { Mail, Linkedin, Github } from 'lucide-react'

export type ContactLink = {
  icon: LucideIcon
  href: string
  label: string
}

export const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    href: 'mailto:sudhanshu14sinha@gmail.com?subject=PortfolioContact',
    label: 'sudhanshu14sinha@gmail.com',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sudhanshu-kumar-sinha-b58776210/',
    label: 'linkedin.com/in/Sudhanshu-kr-sinha',
  },
  {
    icon: Github,
    href: 'https://github.com/Sudhanshu2024',
    label: 'github.com/Sudhanshu',
  },
]

export const opportunities: string[] = [
  'Freelance & Contract work',
  'Startup & Business collaborations',
]

