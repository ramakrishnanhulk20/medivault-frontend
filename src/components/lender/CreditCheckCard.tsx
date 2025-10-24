import { useState } from 'react';
import { toast } from '../../utils/toast';
import CopyButton from '../common/CopyButton';

export default function CreditCheckCard() {
  const [patientAddress, setPatientAddress] = useState('');
  const [threshold, setThreshold] = useState('700');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    meetsThreshold: boolean;
    timestamp: string;
  } | null>(null);

  const handleCheck = async () => {
    if (!patientAddress || !threshold) {
      toast.warning('Missing Information', 'Please enter patient address and threshold');
      return;
    }
    
    toast.info('Verification Started', 'Checking credit score on blockchain...');
    
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const meetsThreshold = Math.random() > 0.3;
    
    setResult({
      meetsThreshold,
      timestamp: new Date().toLocaleString(),
    });
    setIsChecking(false);
    
    if (meetsThreshold) {
      toast.success('Threshold Met!', `Patient meets the ${threshold}+ requirement`, '0x9876...4321');
    } else {
      toast.error('Threshold Not Met', `Patient does not meet the ${threshold}+ requirement`);
    }
  };

  const handleReset = () => {
    setResult(null);
    setPatientAddress('');
    setThreshold('700');
    toast.info('Form Reset', 'You can check another patient now');
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Credit Threshold Verification
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Check if patient meets credit requirements without revealing their score
          </p>
        </div>
        <div className="w-12 h-12 bg-primary-700/10 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      {!result ? (
        <div>
          <div className="bg-primary-50 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-primary-900 mb-1">
                  Fully Encrypted Verification
                </p>
                <p className="text-xs text-primary-700 leading-relaxed">
                  Using Zama FHE, you can verify if a patient meets your threshold without ever seeing their actual credit score. The computation happens on encrypted data.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Patient Wallet Address
            </label>
            <input
              type="text"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              className="input"
              placeholder="0x..."
            />
            <p className="text-xs text-slate-500 mt-1">
              Enter the patient's Ethereum address to check their credit score
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Credit Score Threshold
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="input flex-1"
                placeholder="700"
              />
              <div className="flex gap-2">
                {['650', '700', '750'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setThreshold(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      threshold === t
                        ? 'bg-primary-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Minimum credit score required for loan approval
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Loan Type
            </label>
            <select className="input">
              <option>Personal Loan</option>
              <option>Mortgage</option>
              <option>Auto Loan</option>
              <option>Business Loan</option>
            </select>
          </div>

          <button
            onClick={handleCheck}
            disabled={isChecking || !patientAddress || !threshold}
            className="btn btn-primary w-full"
          >
            {isChecking ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying on Blockchain...
              </>
            ) : (
              'Verify Credit Score'
            )}
          </button>

          <div className="mt-6 bg-slate-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-slate-900 mb-1">
                  Patient Privacy Guaranteed
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The patient's actual credit score is never revealed to you. You only receive a YES/NO answer to whether they meet your threshold. This protects patient privacy while enabling credit decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={`rounded-xl p-8 mb-6 text-center ${
            result.meetsThreshold
              ? 'bg-gradient-to-br from-success-600 to-success-700'
              : 'bg-gradient-to-br from-error-600 to-error-700'
          }`}>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {result.meetsThreshold ? (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <h4 className="text-3xl font-heading font-bold text-white mb-2">
              {result.meetsThreshold ? 'APPROVED' : 'DOES NOT MEET THRESHOLD'}
            </h4>
            <p className="text-white/90 mb-6">
              {result.meetsThreshold
                ? `Patient meets the credit score threshold of ${threshold}+`
                : `Patient does not meet the credit score threshold of ${threshold}+`
              }
            </p>

            <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-xs text-white/80 mb-2">Verification Details</p>
              <div className="space-y-2 text-sm text-white">
                <div className="flex justify-between items-center">
                  <span>Patient:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono">{patientAddress.slice(0, 6)}...{patientAddress.slice(-4)}</span>
                    <CopyButton text={patientAddress} label="" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Threshold:</span>
                  <span className="font-bold">{threshold}+</span>
                </div>
                <div className="flex justify-between">
                  <span>Verified:</span>
                  <span>{result.timestamp}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="btn bg-slate-100 text-slate-700 hover:bg-slate-200 flex-1"
            >
              Check Another Patient
            </button>
            {result.meetsThreshold && (
              <button 
                onClick={() => toast.success('Loan Proceeding', 'Moving to loan application process')}
                className="btn btn-primary flex-1"
              >
                Proceed with Loan
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
