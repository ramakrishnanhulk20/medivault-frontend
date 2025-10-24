import { useState } from 'react';
import { toast } from '../../utils/toast';

export default function CreditScoreCard() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInitialize = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsInitialized(true);
    setIsLoading(false);
    
    // Show success notification
    toast.success('Score Initialized!', 'Your credit score has been created and encrypted', '0x1234...5678');
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Show success notification
    toast.success('Score Updated!', 'Your health credit score has been refreshed');
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Your MediScore
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Encrypted health credit score
          </p>
        </div>
        <div className="w-12 h-12 bg-primary-700/10 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      {!isInitialized ? (
        /* Not Initialized State */
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h4 className="text-xl font-heading font-semibold text-slate-900 mb-2">
            No Score Yet
          </h4>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Initialize your encrypted health credit score to start building your financial reputation.
          </p>
          <button
            onClick={handleInitialize}
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Initializing...
              </>
            ) : (
              'Initialize Score'
            )}
          </button>
        </div>
      ) : (
        /* Initialized State */
        <div>
          {/* Score Display */}
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 text-white mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium text-accent-mint">ENCRYPTED</span>
              </div>
              
              <div className="mb-2">
                <div className="text-6xl font-heading font-bold mb-2">
                  ████████
                </div>
                <p className="text-accent-mint text-sm">
                  Score Hidden - Only you can decrypt
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/20">
                <div>
                  <p className="text-accent-mint text-xs mb-1">Risk Level</p>
                  <p className="font-bold">████</p>
                </div>
                <div>
                  <p className="text-accent-mint text-xs mb-1">Last Updated</p>
                  <p className="font-bold text-sm">Just now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-success-100 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm font-medium text-success-900">Boost Available</span>
              </div>
              <p className="text-2xl font-bold text-success-900">+10</p>
              <p className="text-xs text-success-700">Share data to boost</p>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-slate-900">Updates</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">1</p>
              <p className="text-xs text-slate-600">Total score updates</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className="btn btn-primary flex-1"
            >
              {isLoading ? 'Updating...' : 'Update Score'}
            </button>
            <button className="btn bg-slate-100 text-slate-700 hover:bg-slate-200">
              View Details
            </button>
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 bg-slate-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-slate-900 mb-1">
                  Fully Encrypted
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your score is encrypted using Zama FHE. Only you can decrypt and view the actual value. Lenders can only verify if you meet their threshold.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
