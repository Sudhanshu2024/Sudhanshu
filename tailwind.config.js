/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'bg-primary': '#ffffff',
        'bg-secondary': '#fafafa',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'border-primary': '#e5e7eb',
        'accent': '#0f172a',
        'accent-blue': '#3b82f6',
        // Dark mode colors (used via dark: prefix)
        'dark-bg': '#0f0f23',
        'dark-bg-secondary': '#1a1a2e',
        'dark-text': '#f8fafc',
        'dark-text-secondary': '#cbd5e1',
        'dark-border': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-md': ['4rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-sm': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
      },
    },
  },
  plugins: [],
}
