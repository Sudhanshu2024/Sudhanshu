export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary dark:bg-dark-bg">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent dark:border-accent-blue mb-4"></div>
        <p className="text-text-secondary dark:text-dark-text-secondary">Loading...</p>
      </div>
    </div>
  )
}

