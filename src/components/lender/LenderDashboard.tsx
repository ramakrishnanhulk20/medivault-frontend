import CreditCheckCard from './CreditCheckCard';
import LoanApplicationsCard from './LoanApplicationsCard';
import VerificationHistoryCard from './VerificationHistoryCard';

export default function LenderDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
            Lender Portal
          </h1>
          <p className="text-slate-600">
            Verify credit scores without compromising patient privacy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CreditCheckCard />
            <LoanApplicationsCard />
          </div>

          <div className="lg:col-span-1">
            <VerificationHistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
