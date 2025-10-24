export default function ActivityFeedCard() {
  const activities = [
    {
      id: 1,
      type: 'data_share',
      user: '0x1234...5678',
      action: 'shared health data',
      time: '2 minutes ago',
      icon: '📊',
      color: 'bg-success-100 text-success-600',
    },
    {
      id: 2,
      type: 'query',
      user: '0xabcd...ef12',
      action: 'executed research query',
      time: '5 minutes ago',
      icon: '🔬',
      color: 'bg-primary-100 text-primary-700',
    },
    {
      id: 3,
      type: 'credit_check',
      user: '0x9876...4321',
      action: 'verified credit threshold',
      time: '12 minutes ago',
      icon: '✅',
      color: 'bg-accent-cyan/20 text-primary-700',
    },
    {
      id: 4,
      type: 'score_init',
      user: '0x5555...6666',
      action: 'initialized credit score',
      time: '18 minutes ago',
      icon: '🎯',
      color: 'bg-warning-100 text-warning-600',
    },
    {
      id: 5,
      type: 'data_share',
      user: '0x7777...8888',
      action: 'shared health data',
      time: '25 minutes ago',
      icon: '📊',
      color: 'bg-success-100 text-success-600',
    },
    {
      id: 6,
      type: 'query',
      user: '0x3333...4444',
      action: 'executed research query',
      time: '32 minutes ago',
      icon: '🔬',
      color: 'bg-primary-100 text-primary-700',
    },
    {
      id: 7,
      type: 'loan_approval',
      user: '0x2222...1111',
      action: 'approved loan application',
      time: '45 minutes ago',
      icon: '💰',
      color: 'bg-success-100 text-success-600',
    },
  ];

  return (
    <div className="card h-fit sticky top-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900">
            Live Activity
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Real-time platform events
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-success-600 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-600">Live</span>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border border-slate-200 rounded-lg p-3 hover:border-primary-700 transition-colors"
          >
            <div className="flex items-start space-x-3">
              {/* Icon */}
              <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0 text-lg`}>
                {activity.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm text-slate-900">
                    <span className="font-mono text-xs">{activity.user}</span>
                  </p>
                </div>
                <p className="text-xs text-slate-600 mb-1">{activity.action}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>

              {/* Action Indicator */}
              <div className="flex-shrink-0">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <button className="text-sm text-primary-700 hover:text-primary-500 font-medium mt-4 w-full text-center">
        View All Activity
      </button>
    </div>
  );
}
