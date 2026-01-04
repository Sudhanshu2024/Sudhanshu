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
    href: 'https://www.linkedin.com/in/abdullah-james/',
    label: 'linkedin.com/in/abdullah-james',
  },
  {
    icon: Github,
    href: 'https://github.com/Absatron',
    label: 'github.com/Absatron',
  },
]

export const opportunities: string[] = [
  'Freelance & Contract work',
  'Startup & Business collaborations',
]

