'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import { projects } from '@/lib/projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with Canvas Particles */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsGrid projects={projects} limit={6} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}
