'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border-primary dark:border-dark-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-black mb-4 md:mb-0 text-accent dark:text-accent-blue hover:scale-105 transition-transform duration-300">
            &lt;Dev/&gt;
          </div>

          {/* Copyright */}
          <div className="text-text-secondary dark:text-dark-text-secondary text-sm md:text-base text-center md:text-right">
            © {year} Sudhanshu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
