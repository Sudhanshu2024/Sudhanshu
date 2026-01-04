export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-bg-secondary dark:bg-dark-bg-secondary rounded-lg mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-bg-secondary dark:bg-dark-bg-secondary rounded w-3/4"></div>
        <div className="h-4 bg-bg-secondary dark:bg-dark-bg-secondary rounded w-1/2"></div>
      </div>
    </div>
  )
}

