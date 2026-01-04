import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl font-black text-text-primary dark:text-dark-text mb-4">404</h1>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-accent dark:bg-accent-blue text-white font-medium rounded-lg hover:bg-accent/90 dark:hover:bg-accent-blue/90 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </main>
    </>
  )
}
