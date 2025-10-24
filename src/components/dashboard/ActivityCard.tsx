export default function ActivityCard() {
  const activities = [
    {
      id: 1,
      type: 'score_init',
      title: 'Score Initialized',
      description: 'Your health credit score was initialized',
      timestamp: new Date().toLocaleString(),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'text-primary-700 bg-primary-100',
    },
    {
      id: 2,
      type: 'wallet_connect',
      title: 'Wallet Connected',
      description: 'Successfully connected to Sepolia network',
      timestamp: new Date(Date.now() - 120000).toLocaleString(),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-success-700 bg-success-100',
    },
  ];

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Recent Activity
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Your latest transactions
          </p>
        </div>
        <button className="text-sm text-primary-700 hover:text-primary-500 font-medium">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors ${
              index !== activities.length - 1 ? 'border-b border-slate-100' : ''
            }`}
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.color}`}>
              {activity.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">
                    {activity.title}
                  </p>
                  <p className="text-sm text-slate-600">
                    {activity.description}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {activity.timestamp}
              </p>
            </div>

            {/* Action */}
            <button className="text-slate-400 hover:text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Empty State (shown when no activities) */}
      {activities.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-slate-600">No activity yet</p>
          <p className="text-sm text-slate-500 mt-1">
            Your transactions will appear here
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-primary-700 hover:text-primary-500 font-medium flex items-center space-x-1">
            <span>View on Etherscan</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-slate-500">Sepolia Testnet</span>
        </div>
      </div>
    </div>
  );
}
