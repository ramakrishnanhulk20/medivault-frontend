import QueryBuilderCard from './QueryBuilderCard';
import QueryResultsCard from './QueryResultsCard';
import QueryHistoryCard from './QueryHistoryCard';
import { useState } from 'react';

interface ResearcherDashboardProps {
  address: string;
}

export interface QueryResult {
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

export default function ResearcherDashboard({ address }: ResearcherDashboardProps) {
  const [queryResults, setQueryResults] = useState<QueryResult[]>([]);

  const handleQuerySubmit = (result: QueryResult) => {
    setQueryResults([result, ...queryResults]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
            Researcher Portal
          </h1>
          <p className="text-slate-600">
            Query encrypted health data while preserving patient privacy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <QueryBuilderCard onQuerySubmit={handleQuerySubmit} />
            {queryResults.length > 0 && <QueryResultsCard result={queryResults[0]} />}
          </div>

          <div className="lg:col-span-1">
            <QueryHistoryCard queries={queryResults} />
          </div>
        </div>
      </div>
    </div>
  );
}
