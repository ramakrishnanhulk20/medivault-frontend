interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'circle' | 'button';
  className?: string;
}

export default function LoadingSkeleton({ type = 'card', className = '' }: LoadingSkeletonProps) {
  const baseClass = 'animate-pulse bg-slate-200 rounded';
  
  if (type === 'circle') {
    return <div className={`${baseClass} rounded-full ${className}`}></div>;
  }
  
  if (type === 'text') {
    return <div className={`${baseClass} h-4 ${className}`}></div>;
  }
  
  if (type === 'button') {
    return <div className={`${baseClass} h-10 ${className}`}></div>;
  }
  
  // Default card skeleton
  return (
    <div className={`card ${className}`}>
      <div className="animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-slate-200 rounded w-1/3"></div>
          <div className="h-10 w-10 bg-slate-200 rounded-lg"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          <div className="h-4 bg-slate-200 rounded w-4/6"></div>
        </div>
        <div className="mt-6 h-10 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="card">
      <div className="animate-pulse space-y-4">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-slate-200 rounded-xl"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-3 bg-slate-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 bg-slate-200 rounded w-full"></div>
          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-slate-200 rounded-lg"></div>
          <div className="h-20 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export function StatSkeleton() {
  return (
    <div className="card">
      <div className="animate-pulse">
        <div className="h-3 bg-slate-200 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}
