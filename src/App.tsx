import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Dashboard from './components/dashboard/Dashboard';
import LenderDashboard from './components/lender/LenderDashboard';
import ResearcherDashboard from './components/researcher/ResearcherDashboard';
import AnalyticsDashboard from './components/analytics/AnalyticsDashboard';
import ToastContainer from './components/notifications/ToastContainer';
import ScrollToTop from './components/common/ScrollToTop';

type ViewType = 'landing' | 'patient' | 'lender' | 'researcher' | 'analytics';

function App() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [currentView, setCurrentView] = useState<ViewType>('landing');

  const handleWalletConnect = (address: string) => {
    setWalletAddress(address);
    if (address && currentView === 'landing') {
      setCurrentView('patient');
    } else if (!address) {
      setCurrentView('landing');
    }
  };

  const handleConnectClick = () => {
    if (walletAddress) {
      setCurrentView('patient');
    } else {
      const connectButton = document.querySelector('button') as HTMLButtonElement;
      if (connectButton) {
        connectButton.click();
      }
    }
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onWalletConnect={handleWalletConnect} />
      
      {currentView !== 'landing' && walletAddress && (
        <div className="bg-white border-b border-slate-200 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-slate-600 hover:text-primary-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentView('patient')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === 'patient'
                    ? 'bg-primary-700 text-white scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setCurrentView('lender')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === 'lender'
                    ? 'bg-primary-700 text-white scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Lender
              </button>
              <button
                onClick={() => setCurrentView('researcher')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === 'researcher'
                    ? 'bg-primary-700 text-white scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Researcher
              </button>
              <button
                onClick={() => setCurrentView('analytics')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === 'analytics'
                    ? 'bg-primary-700 text-white scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Analytics
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'landing' && (
        <div className="animate-fade-in">
          <Hero 
            onConnectClick={handleConnectClick} 
            isConnected={!!walletAddress} 
          />
          <ValueProps />
          <HowItWorks />
          <Stats />
          <Footer />
        </div>
      )}

      {currentView === 'patient' && walletAddress && (
        <div className="animate-fade-in">
          <Dashboard address={walletAddress} />
        </div>
      )}

      {currentView === 'lender' && walletAddress && (
        <div className="animate-fade-in">
          <LenderDashboard />
        </div>
      )}

      {currentView === 'researcher' && walletAddress && (
        <div className="animate-fade-in">
          <ResearcherDashboard />
        </div>
      )}

      {currentView === 'analytics' && walletAddress && (
        <div className="animate-fade-in">
          <AnalyticsDashboard />
        </div>
      )}

      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}

export default App;
