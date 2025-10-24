interface QueryResult {
  id: number;
  query: string;
  patientCount: number;
  averageAge: number;
  averageBloodSugar: number;
  averageCholesterol: number;
  averageBMI: number;
  cost: number;
  timestamp: string;
}

interface QueryResultsCardProps {
  result: QueryResult;
}

export default function QueryResultsCard({ result }: QueryResultsCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Query Results
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Aggregate statistics from encrypted data
          </p>
        </div>
        <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>

      <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-success-900 mb-1">
              Query Executed Successfully
            </p>
            <p className="text-xs text-success-700">
              Found {result.patientCount} matching patients • Cost: ${result.cost.toFixed(2)} • {result.timestamp}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-4 mb-6">
        <p className="text-xs text-slate-600 mb-1">Query Parameters</p>
        <p className="text-sm font-mono text-slate-900">{result.query}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm text-accent-mint">Patients</span>
          </div>
          <p className="text-4xl font-bold mb-1">{result.patientCount}</p>
          <p className="text-xs text-accent-mint">Matching criteria</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-slate-600">Average Age</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{result.averageAge.toFixed(1)}</p>
          <p className="text-xs text-slate-600">Years</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm text-slate-600">Blood Sugar</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{result.averageBloodSugar.toFixed(1)}</p>
          <p className="text-xs text-slate-600">mg/dL</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm text-slate-600">Cholesterol</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{result.averageCholesterol.toFixed(1)}</p>
          <p className="text-xs text-slate-600">mg/dL</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-6 col-span-2">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <span className="text-sm text-slate-600">Average BMI</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{result.averageBMI.toFixed(1)}</p>
          <p className="text-xs text-slate-600">Body Mass Index</p>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-600">Patient Earnings</span>
          <span className="text-sm font-bold text-success-600">${(result.patientCount * 0.50).toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-600">Platform Fee (5%)</span>
          <span className="text-sm font-bold text-slate-900">${(result.cost * 0.05).toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-lg font-bold">
          <span className="text-slate-900">Total Cost</span>
          <span className="text-primary-700">${result.cost.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button className="btn btn-primary flex-1">
          Export Results
        </button>
        <button className="btn bg-slate-100 text-slate-700 hover:bg-slate-200">
          Share
        </button>
      </div>
    </div>
  );
}
