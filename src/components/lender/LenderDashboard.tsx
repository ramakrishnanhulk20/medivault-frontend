import CreditCheckCard from './CreditCheckCard';
import LoanApplicationsCard from './LoanApplicationsCard';
import VerificationHistoryCard from './VerificationHistoryCard';

interface LenderDashboardProps {
  address: string;
}

export default function LenderDashboard({ address }: LenderDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
            Lender Portal
          </h1>
          <p className="text-slate-600">
            Verify credit scores without revealing patient data
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="space-y-6">
          
          {/* Credit Check Card */}
          <CreditCheckCard />

          {/* Loan Applications */}
          <LoanApplicationsCard />

          {/* Verification History */}
          <VerificationHistoryCard />
        </div>
      </div>
    </div>
  );
}
