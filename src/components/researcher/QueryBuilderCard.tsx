import { useState } from 'react';
import { toast } from '../../utils/toast';

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

interface QueryBuilderCardProps {
  onQuerySubmit: (result: QueryResult) => void;
}

export default function QueryBuilderCard({ onQuerySubmit }: QueryBuilderCardProps) {
  const [isQuerying, setIsQuerying] = useState(false);
  const [filters, setFilters] = useState({
    ageMin: '',
    ageMax: '',
    bmiMin: '',
    bmiMax: '',
    condition: 'all',
  });

  const handleQuery = async () => {
    setIsQuerying(true);
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const result: QueryResult = {
      id: Date.now(),
      query: `Age ${filters.ageMin}-${filters.ageMax}, BMI ${filters.bmiMin}-${filters.bmiMax}`,
      patientCount: Math.floor(Math.random() * 100) + 20,
      averageAge: parseFloat(filters.ageMin) + Math.random() * (parseFloat(filters.ageMax) - parseFloat(filters.ageMin)),
      averageBloodSugar: 90 + Math.random() * 30,
      averageCholesterol: 170 + Math.random() * 40,
      averageBMI: parseFloat(filters.bmiMin) + Math.random() * (parseFloat(filters.bmiMax) - parseFloat(filters.bmiMin)),
      cost: 25.50,
      timestamp: new Date().toLocaleString(),
    };
    
    onQuerySubmit(result);
    setIsQuerying(false);
    
    toast.success('Query Executed!', `Found ${result.patientCount} matching patients`, '0xabcd...ef12');
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Query Builder
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Build queries on encrypted patient data
          </p>
        </div>
        <div className="w-12 h-12 bg-primary-700/10 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="bg-primary-50 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-primary-900 mb-1">
              Privacy-Preserving Queries
            </p>
            <p className="text-xs text-primary-700 leading-relaxed">
              Your queries run on encrypted data. You only see aggregate statistics, never individual patient information. Patients earn $0.50 per query.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Age Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              value={filters.ageMin}
              onChange={(e) => setFilters({...filters, ageMin: e.target.value})}
              className="input"
              placeholder="Min (e.g., 25)"
            />
            <input
              type="number"
              value={filters.ageMax}
              onChange={(e) => setFilters({...filters, ageMax: e.target.value})}
              className="input"
              placeholder="Max (e.g., 45)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            BMI Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              step="0.1"
              value={filters.bmiMin}
              onChange={(e) => setFilters({...filters, bmiMin: e.target.value})}
              className="input"
              placeholder="Min (e.g., 18.5)"
            />
            <input
              type="number"
              step="0.1"
              value={filters.bmiMax}
              onChange={(e) => setFilters({...filters, bmiMax: e.target.value})}
              className="input"
              placeholder="Max (e.g., 30.0)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Health Condition
          </label>
          <select
            value={filters.condition}
            onChange={(e) => setFilters({...filters, condition: e.target.value})}
            className="input"
          >
            <option value="all">All Conditions</option>
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">Hypertension</option>
            <option value="heart-disease">Heart Disease</option>
            <option value="obesity">Obesity</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Metrics to Retrieve
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">Average Blood Sugar</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">Average Cholesterol</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">Average BMI</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">Patient Count</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Estimated Cost</p>
            <p className="text-xs text-slate-600">Per query execution</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary-700">$25.50</p>
            <p className="text-xs text-slate-600">~51 patients × $0.50</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleQuery}
        disabled={isQuerying || !filters.ageMin || !filters.ageMax || !filters.bmiMin || !filters.bmiMax}
        className="btn btn-primary w-full mt-6"
      >
        {isQuerying ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Executing Query on Blockchain...
          </>
        ) : (
          'Execute Query'
        )}
      </button>

      <div className="mt-4 text-xs text-slate-500 text-center">
        All queries are executed on encrypted data using Zama FHE
      </div>
    </div>
  );
}
