interface ErrorFallbackProps {
  error?: Error;
}

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="card text-center animate-scale-in">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-error-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
            Oops! Something went wrong
          </h2>
          
          {/* Description */}
          <p className="text-slate-600 mb-6">
            We encountered an unexpected error. Don't worry, your data is safe.
          </p>

          {/* Error Details (in dev) */}
          {error && import.meta.env.DEV && (
            <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
              <p className="text-xs font-mono text-error-600 break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleReload}
              className="btn btn-primary w-full"
            >
              Reload Page
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 w-full"
            >
              Go to Home
            </button>
          </div>

          {/* Help Text */}
          <p className="text-xs text-slate-500 mt-6">
            If the problem persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
}
