'use client'

import { contactLinks, opportunities } from '@/lib/contact'
import CanvasParticles from './CanvasParticles'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-bg-primary dark:bg-dark-bg">
      {/* Interactive Particles Background */}
      <CanvasParticles className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header - Word-by-word glow */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text">
              {["Let's", 'Connect'].map((word, i) => (
                <span
                  key={i}
                  className="hover:text-accent dark:hover:text-accent-blue hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] dark:hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block mx-1"
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary">
              {['Ready', 'to', 'collaborate', 'on', 'your', 'next', 'project?'].map((word, i) => (
                <span
                  key={i}
                  className="hover:text-text-primary dark:hover:text-dark-text hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] dark:hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] hover:scale-105 transition-all duration-300 cursor-default inline-block mx-[1px]"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-20 max-w-3xl mx-auto">
            {/* Contact Links */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text">
                {['Get', 'in', 'Touch'].map((word, i) => (
                  <span
                    key={i}
                    className="hover:text-accent dark:hover:text-accent-blue hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.8)] dark:hover:drop-shadow-[0_0_16px_rgba(96,165,250,0.8)] hover:scale-110 transition-all duration-300 cursor-default inline-block"
                  >
                    {word}
                    {i < 2 && ' '}
                  </span>
                ))}
              </h3>
              <div className="space-y-6">
                {contactLinks.map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:text-accent dark:hover:text-accent-blue transition-all duration-300"
                  >
                    <div className="p-2 bg-accent/10 dark:bg-accent-blue/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent dark:text-accent-blue group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent-blue transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text">
                {['Open', 'to', 'Opportunities'].map((word, i) => (
                  <span
                    key={i}
                    className="hover:text-accent dark:hover:text-accent-blue hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.8)] dark:hover:drop-shadow-[0_0_16px_rgba(96,165,250,0.8)] hover:scale-110 transition-all duration-300 cursor-default inline-block"
                  >
                    {word}
                    {i < 2 && ' '}
                  </span>
                ))}
              </h3>
              <div className="space-y-3">
                {opportunities.map((opportunity, i) => (
                  <div
                    key={i}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.8)] dark:hover:drop-shadow-[0_0_16px_rgba(96,165,250,0.8)] transition-all duration-300 cursor-default py-2"
                  >
                    - {opportunity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

