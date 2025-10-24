import PlatformStatsCard from './PlatformStatsCard';
import ActivityFeedCard from './ActivityFeedCard';

interface AnalyticsDashboardProps {
  address: string;
}

export default function AnalyticsDashboard({ address }: AnalyticsDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
            Platform Analytics
          </h1>
          <p className="text-slate-600">
            Real-time insights into MediVault ecosystem
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Stats */}
          <div className="lg:col-span-2">
            <PlatformStatsCard />
          </div>

          {/* Right Column - Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
