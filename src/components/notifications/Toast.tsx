import { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  description?: string;
  txHash?: string;
  onClose: (id: string) => void;
  duration?: number;
}

export default function Toast({ id, type, message, description, txHash, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success': 
        return {
          bg: 'bg-success-600',
          iconBg: 'bg-success-700',
          text: 'text-white'
        };
      case 'error': 
        return {
          bg: 'bg-error-600',
          iconBg: 'bg-error-700',
          text: 'text-white'
        };
      case 'warning': 
        return {
          bg: 'bg-warning-400',
          iconBg: 'bg-warning-500',
          text: 'text-slate-900'
        };
      case 'info': 
        return {
          bg: 'bg-primary-700',
          iconBg: 'bg-primary-900',
          text: 'text-white'
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`${styles.bg} ${styles.text} rounded-lg shadow-2xl p-4 mb-3 min-w-[320px] max-w-md animate-slide-in`}
    >
      <div className="flex items-start space-x-3">
        <div className={`${styles.iconBg} rounded-lg p-2 flex-shrink-0`}>
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold">{message}</p>
          {description && (
            <p className={`text-xs mt-1 ${type === 'warning' ? 'text-slate-800' : 'text-white/90'}`}>
              {description}
            </p>
          )}
          {txHash && (
            <a
              href={`https://sepolia.etherscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium mt-2 inline-flex items-center space-x-1 ${
                type === 'warning' ? 'text-slate-900 hover:text-slate-700' : 'text-white hover:text-white/80'
              }`}
            >
              <span>View on Etherscan</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <button
          onClick={() => onClose(id)}
          className={`flex-shrink-0 transition-colors ${
            type === 'warning' 
              ? 'text-slate-700 hover:text-slate-900' 
              : 'text-white/80 hover:text-white'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
