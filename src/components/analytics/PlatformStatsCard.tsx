export default function PlatformStatsCard() {
  const stats = {
    totalPatients: 247,
    totalLenders: 18,
    totalResearchers: 52,
    totalEarnings: 12430,
    totalQueries: 1829,
    avgCreditBoost: 24,
    totalDataShared: 189,
    platformRevenue: 8950,
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.totalPatients}</p>
              <p className="text-xs text-slate-600">Total Patients</p>
            </div>
          </div>
          <div className="flex items-center text-success-600 text-xs">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+12% this month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">${(stats.totalEarnings / 1000).toFixed(1)}K</p>
              <p className="text-xs text-slate-600">Total Earnings</p>
            </div>
          </div>
          <div className="flex items-center text-success-600 text-xs">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+8% this month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.totalQueries}</p>
              <p className="text-xs text-slate-600">Research Queries</p>
            </div>
          </div>
          <div className="flex items-center text-success-600 text-xs">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+24% this month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-warning-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">+{stats.avgCreditBoost}</p>
              <p className="text-xs text-slate-600">Avg Credit Boost</p>
            </div>
          </div>
          <div className="flex items-center text-success-600 text-xs">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+5% this month</span>
          </div>
        </div>
      </div>

      {/* Detailed Stats Card */}
      <div className="card">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">
          Ecosystem Overview
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Patient Participation</span>
                <span className="text-sm font-bold text-slate-900">76%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-700 rounded-full" style={{width: '76%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Data Sharing Rate</span>
                <span className="text-sm font-bold text-slate-900">64%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-success-600 rounded-full" style={{width: '64%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Lender Adoption</span>
                <span className="text-sm font-bold text-slate-900">42%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-accent-cyan rounded-full" style={{width: '42%'}}></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-600">Active Lenders</span>
              <span className="text-lg font-bold text-slate-900">{stats.totalLenders}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-600">Active Researchers</span>
              <span className="text-lg font-bold text-slate-900">{stats.totalResearchers}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-600">Data Shares</span>
              <span className="text-lg font-bold text-slate-900">{stats.totalDataShared}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="card bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-heading font-bold mb-1">Platform Revenue</h3>
            <p className="text-accent-mint text-sm">Total earnings from fees</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-3xl font-bold mb-1">${(stats.platformRevenue / 1000).toFixed(1)}K</p>
            <p className="text-accent-mint text-xs">This Month</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">5%</p>
            <p className="text-accent-mint text-xs">Platform Fee</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">$0.50</p>
            <p className="text-accent-mint text-xs">Per Query</p>
          </div>
        </div>
      </div>
    </div>
  );
}
