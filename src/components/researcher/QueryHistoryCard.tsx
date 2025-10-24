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

interface QueryHistoryCardProps {
  queries: QueryResult[];
}

export default function QueryHistoryCard({ queries }: QueryHistoryCardProps) {
  const totalSpent = queries.reduce((sum, q) => sum + q.cost, 0);
  const totalPatients = queries.reduce((sum, q) => sum + q.patientCount, 0);

  return (
    <div className="card h-fit sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900">
            Query History
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Recent research queries
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-primary-50 rounded-lg p-3">
          <p className="text-xs text-primary-700 mb-1">Total Queries</p>
          <p className="text-2xl font-bold text-primary-900">{queries.length}</p>
        </div>
        <div className="bg-success-50 rounded-lg p-3">
          <p className="text-xs text-success-700 mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-success-900">${totalSpent.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-3 mb-6">
        <p className="text-xs text-slate-600 mb-1">Total Patients Analyzed</p>
        <p className="text-2xl font-bold text-slate-900">{totalPatients}</p>
      </div>

      {queries.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-medium text-slate-600 uppercase">Recent Queries</p>
          {queries.slice(0, 5).map((query) => (
            <div
              key={query.id}
              className="border border-slate-200 rounded-lg p-3 hover:border-primary-700 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-900 truncate mb-1">
                    {query.query}
                  </p>
                  <p className="text-xs text-slate-600">{query.timestamp}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs text-slate-600">{query.patientCount}</span>
                </div>
                <span className="text-xs font-bold text-primary-700">${query.cost.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-sm text-slate-600">No queries yet</p>
          <p className="text-xs text-slate-500 mt-1">
            Execute a query to see results
          </p>
        </div>
      )}

      {queries.length > 5 && (
        <button className="text-sm text-primary-700 hover:text-primary-500 font-medium mt-4 w-full text-center">
          View All {queries.length} Queries
        </button>
      )}
    </div>
  );
}
