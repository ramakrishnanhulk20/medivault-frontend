import { useState } from 'react';

interface LoanApplication {
  id: number;
  patientAddress: string;
  loanType: string;
  amount: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  requiredThreshold: number;
}

export default function LoanApplicationsCard() {
  const [applications] = useState<LoanApplication[]>([
    {
      id: 1,
      patientAddress: '0x1234...5678',
      loanType: 'Personal Loan',
      amount: '$10,000',
      status: 'pending',
      submittedAt: '2 hours ago',
      requiredThreshold: 700,
    },
    {
      id: 2,
      patientAddress: '0xabcd...ef12',
      loanType: 'Mortgage',
      amount: '$250,000',
      status: 'pending',
      submittedAt: '5 hours ago',
      requiredThreshold: 750,
    },
    {
      id: 3,
      patientAddress: '0x9876...4321',
      loanType: 'Auto Loan',
      amount: '$35,000',
      status: 'approved',
      submittedAt: '1 day ago',
      requiredThreshold: 650,
    },
  ]);

  const [selectedApp, setSelectedApp] = useState<LoanApplication | null>(null);

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-warning-100 text-warning-600',
      approved: 'bg-success-100 text-success-600',
      rejected: 'bg-error-100 text-error-600',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const handleVerify = (app: LoanApplication) => {
    setSelectedApp(app);
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Loan Applications
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Review and verify pending applications
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-warning-100 text-warning-600 px-3 py-1 rounded-full text-sm font-medium">
            {applications.filter(a => a.status === 'pending').length} Pending
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="border-2 border-slate-200 rounded-xl p-6 hover:border-primary-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center text-white font-bold">
                  {app.patientAddress.slice(2, 4).toUpperCase()}
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-semibold text-slate-900">{app.loanType}</p>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 font-mono">{app.patientAddress}</p>
                  <p className="text-xs text-slate-500 mt-1">{app.submittedAt}</p>
                </div>
              </div>

              {/* Amount */}
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">{app.amount}</p>
                <p className="text-xs text-slate-500">Requested Amount</p>
              </div>
            </div>

            {/* Application Details */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="text-xs text-slate-600 mb-1">Loan Type</p>
                <p className="text-sm font-medium text-slate-900">{app.loanType}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Required Score</p>
                <p className="text-sm font-medium text-slate-900">{app.requiredThreshold}+</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Status</p>
                <p className="text-sm font-medium text-slate-900">{app.status}</p>
              </div>
            </div>

            {/* Actions */}
            {app.status === 'pending' && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleVerify(app)}
                  className="btn btn-primary flex-1"
                >
                  Verify Credit Score
                </button>
                <button className="btn bg-slate-100 text-slate-700 hover:bg-slate-200">
                  View Details
                </button>
                <button className="btn bg-error-100 text-error-600 hover:bg-error-200">
                  Reject
                </button>
              </div>
            )}

            {app.status === 'approved' && (
              <div className="flex items-center space-x-2 text-success-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Application Approved</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-slate-600">No loan applications yet</p>
          <p className="text-sm text-slate-500 mt-1">
            Applications will appear here when patients submit them
          </p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              {applications.filter(a => a.status === 'pending').length}
            </p>
            <p className="text-xs text-slate-600">Pending</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-success-600">
              {applications.filter(a => a.status === 'approved').length}
            </p>
            <p className="text-xs text-slate-600">Approved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-error-600">
              {applications.filter(a => a.status === 'rejected').length}
            </p>
            <p className="text-xs text-slate-600">Rejected</p>
          </div>
        </div>
      </div>

      {/* Selected Application Modal Overlay */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedApp(null)}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-xl font-heading font-bold text-slate-900 mb-4">
              Verify Application
            </h4>
            <p className="text-sm text-slate-600 mb-6">
              This would open the Credit Check form with pre-filled data for {selectedApp.patientAddress}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedApp(null)}
                className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 flex-1"
              >
                Cancel
              </button>
              <button className="btn btn-primary flex-1">
                Verify Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
