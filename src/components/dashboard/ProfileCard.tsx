import CopyButton from '../common/CopyButton';

interface ProfileCardProps {
  address: string;
}

export default function ProfileCard({ address }: ProfileCardProps) {
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const memberSince = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });

  return (
    <div className="card sticky top-6 animate-fade-in">
      {/* Profile Header */}
      <div className="text-center mb-6">
        {/* Avatar */}
        <div className="w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 animate-scale-in">
          {address.slice(2, 4).toUpperCase()}
        </div>
        
        {/* Address with Copy */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <h3 className="text-lg font-heading font-semibold text-slate-900">
            {shortAddress}
          </h3>
          <CopyButton text={address} label="Address" />
        </div>
        
        <p className="text-sm text-slate-600">
          Member since {memberSince}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition-colors">
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-slate-600">Credit Score</span>
          </div>
          <p className="text-xl font-bold text-slate-900">Encrypted</p>
        </div>

        <div className="bg-success-50 rounded-lg p-3 hover:bg-success-100 transition-colors">
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xs text-slate-600">Pending Boost</span>
          </div>
          <p className="text-xl font-bold text-success-600">+10</p>
        </div>

        <div className="bg-accent-cyan/10 rounded-lg p-3 hover:bg-accent-cyan/20 transition-colors">
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-slate-600">Total Earned</span>
          </div>
          <p className="text-xl font-bold text-primary-700">$0.00</p>
        </div>

        <div className="bg-warning-50 rounded-lg p-3 hover:bg-warning-100 transition-colors">
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-warning-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs text-slate-600">Data Shares</span>
          </div>
          <p className="text-xl font-bold text-warning-600">0</p>
        </div>
      </div>

      {/* Network Info */}
      <div className="border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-600">Network</span>
          <span className="text-sm font-medium text-slate-900">Sepolia</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">Status</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success-600">Connected</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-2">
        <button className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 w-full text-sm">
          View on Etherscan
        </button>
        <button className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 w-full text-sm">
          Export Data
        </button>
      </div>
    </div>
  );
}
