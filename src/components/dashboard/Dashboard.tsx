import ProfileCard from './ProfileCard';
import CreditScoreCard from './CreditScoreCard';
import DataSharingCard from './DataSharingCard';
import ActivityCard from './ActivityCard';

interface DashboardProps {
  address: string;
}

export default function Dashboard({ address }: DashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
            Patient Dashboard
          </h1>
          <p className="text-slate-600">
            Manage your encrypted health data and credit score
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1">
            <ProfileCard address={address} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Credit Score Card */}
            <CreditScoreCard />

            {/* Data Sharing Card */}
            <DataSharingCard />

            {/* Activity Card */}
            <ActivityCard />
          </div>
        </div>
      </div>
    </div>
  );
}
