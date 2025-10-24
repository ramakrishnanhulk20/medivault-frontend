import { useState } from 'react';
import { toast } from '../../utils/toast';

export default function DataSharingCard() {
  const [isSharing, setIsSharing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    bloodSugar: '',
    cholesterol: '',
    bmi: '',
    consent1: false,
    consent2: false,
  });

  const handleStartSharing = () => {
    setShowForm(true);
    toast.info('Data Sharing', 'Fill in your health metrics to start earning');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent1 || !formData.consent2) {
      toast.warning('Consent Required', 'Please accept all consent terms to continue');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate encryption and blockchain submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSharing(true);
    setShowForm(false);
    setIsSubmitting(false);
    
    toast.success('Data Shared Successfully!', 'Your encrypted health data is now available for research', '0xabcd...ef12');
  };

  const handleOptOut = () => {
    toast.warning('Opt Out Confirmation', 'Are you sure you want to stop sharing data?');
    setTimeout(() => {
      setIsSharing(false);
      toast.info('Sharing Stopped', 'Your data is no longer available for research');
    }, 1500);
  };

  return (
    <div className="card animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Health Data Marketplace
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Share anonymized data and earn money
          </p>
        </div>
        <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {!isSharing && !showForm && (
        /* Not Sharing State */
        <div>
          {/* Status Card */}
          <div className="bg-slate-50 rounded-xl p-6 mb-6 text-center">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-heading font-semibold text-slate-900 mb-2">
              Not Currently Sharing
            </h4>
            <p className="text-slate-600 text-sm">
              Start sharing your health data to earn money from research queries
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-success-50 rounded-lg p-4">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm font-semibold text-success-900 mb-1">Earn $0.50</p>
              <p className="text-xs text-success-700">Per research query</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-sm font-semibold text-primary-900 mb-1">+10 Credit Boost</p>
              <p className="text-xs text-primary-700">Improve your score</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleStartSharing}
            className="btn btn-primary w-full"
          >
            Start Sharing Data
          </button>

          {/* Privacy Note */}
          <div className="mt-4 text-xs text-slate-500 text-center">
            All data is encrypted and anonymized. You maintain full control.
          </div>
        </div>
      )}

      {showForm && (
        /* Data Sharing Form */
        <form onSubmit={handleSubmit}>
          {/* Info Banner */}
          <div className="bg-primary-50 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-primary-900 mb-1">
                  Your Data Will Be Encrypted
                </p>
                <p className="text-xs text-primary-700 leading-relaxed">
                  Using Zama FHE, your health metrics will be encrypted before storage. Researchers can query aggregates without seeing your individual data.
                </p>
              </div>
            </div>
          </div>

          {/* Health Metrics */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Blood Sugar (mg/dL)
              </label>
              <input
                type="number"
                value={formData.bloodSugar}
                onChange={(e) => setFormData({...formData, bloodSugar: e.target.value})}
                className="input"
                placeholder="e.g., 95"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                value={formData.cholesterol}
                onChange={(e) => setFormData({...formData, cholesterol: e.target.value})}
                className="input"
                placeholder="e.g., 180"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                BMI (Body Mass Index)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.bmi}
                onChange={(e) => setFormData({...formData, bmi: e.target.value})}
                className="input"
                placeholder="e.g., 22.5"
                required
              />
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-3 mb-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.consent1}
                onChange={(e) => setFormData({...formData, consent1: e.target.checked})}
                className="mt-1"
              />
              <span className="text-sm text-slate-700">
                I consent to share my encrypted health data for research purposes
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.consent2}
                onChange={(e) => setFormData({...formData, consent2: e.target.checked})}
                className="mt-1"
              />
              <span className="text-sm text-slate-700">
                I understand that I will earn $0.50 per research query and can opt out anytime
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                toast.info('Form Cancelled', 'You can start sharing data anytime');
              }}
              className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary flex-1"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Encrypting & Sharing...
                </>
              ) : (
                'Encrypt & Share Data'
              )}
            </button>
          </div>
        </form>
      )}

      {isSharing && (
        /* Currently Sharing State */
        <div>
          {/* Status Card */}
          <div className="bg-gradient-to-br from-success-600 to-success-700 rounded-xl p-6 text-white mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold mb-1">Currently Sharing</h4>
                <p className="text-success-100 text-sm">Your data is available for research</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold">$0.00</p>
                <p className="text-success-100 text-xs">Earnings to Date</p>
              </div>
              <div>
                <p className="text-2xl font-bold">+10</p>
                <p className="text-success-100 text-xs">Credit Boost Applied</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-success-100 text-xs">Research Queries</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={handleOptOut}
            className="btn bg-error-100 text-error-600 hover:bg-error-200 w-full"
          >
            Opt Out of Sharing
          </button>

          {/* Note */}
          <p className="text-xs text-slate-500 text-center mt-4">
            You can stop sharing your data at any time without penalty
          </p>
        </div>
      )}
    </div>
  );
}
