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
