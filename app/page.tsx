'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsSection from '@/components/SkillsSection'
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
      </main>
      <Footer />
    </>
  )
}
