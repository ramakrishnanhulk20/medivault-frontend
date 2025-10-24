interface Verification {
  id: number;
  patientAddress: string;
  threshold: number;
  result: boolean;
  timestamp: string;
  txHash: string;
}

export default function VerificationHistoryCard() {
  const verifications: Verification[] = [
    {
      id: 1,
      patientAddress: '0x1234...5678',
      threshold: 700,
      result: true,
      timestamp: '2 hours ago',
      txHash: '0xabcd...ef12',
    },
    {
      id: 2,
      patientAddress: '0xabcd...ef12',
      threshold: 750,
      result: false,
      timestamp: '1 day ago',
      txHash: '0x1234...5678',
    },
    {
      id: 3,
      patientAddress: '0x9876...4321',
      threshold: 650,
      result: true,
      timestamp: '2 days ago',
      txHash: '0x9999...0000',
    },
  ];

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Verification History
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Past credit score verifications
          </p>
        </div>
        <button className="text-sm text-primary-700 hover:text-primary-500 font-medium">
          Export Report
        </button>
      </div>

      {/* Verifications List */}
      <div className="space-y-3">
        {verifications.map((verification) => (
          <div
            key={verification.id}
            className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              {/* Left Side */}
              <div className="flex items-center space-x-4">
                {/* Result Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  verification.result ? 'bg-success-100' : 'bg-error-100'
                }`}>
                  {verification.result ? (
                    <svg className="w-5 h-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-error-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-mono text-sm text-slate-900">
                      {verification.patientAddress}
                    </p>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      verification.result
                        ? 'bg-success-100 text-success-600'
                        : 'bg-error-100 text-error-600'
                    }`}>
                      {verification.result ? 'APPROVED' : 'REJECTED'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Threshold: {verification.threshold}+ • {verification.timestamp}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center space-x-3">
                {/* Transaction Hash */}
                <a
                  href={`https://sepolia.etherscan.io/tx/${verification.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary-700 hover:text-primary-500 flex items-center space-x-1"
                >
                  <span>{verification.txHash}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Menu Button */}
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {verifications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-slate-600">No verifications yet</p>
          <p className="text-sm text-slate-500 mt-1">
            Your verification history will appear here
          </p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">{verifications.length}</p>
            <p className="text-xs text-slate-600">Total Verifications</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-success-600">
              {verifications.filter(v => v.result).length}
            </p>
            <p className="text-xs text-slate-600">Approved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-error-600">
              {verifications.filter(v => !v.result).length}
            </p>
            <p className="text-xs text-slate-600">Rejected</p>
          </div>
        </div>
      </div>
    </div>
  );
}
