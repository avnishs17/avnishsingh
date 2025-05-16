import { Skeleton } from "@/components/ui/skeleton"

export function PageSkeleton() {
  return (
    <div className="w-full animate-pulse">
      {/* Header skeleton */}
      <div className="h-16 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Skeleton className="h-6 w-32" />
          <div className="ml-auto hidden md:flex gap-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Skeleton className="h-9 w-9 rounded-md" />
          </div>
        </div>
      </div>

      {/* Hero section skeleton */}
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Skeleton className="h-6 w-32 rounded-lg" />
            <Skeleton className="h-12 w-64 sm:w-96" />
            <Skeleton className="h-4 w-full max-w-md" />
            <Skeleton className="h-4 w-full max-w-md" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
    </div>
  )
}
