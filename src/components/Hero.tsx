import { motion } from 'framer-motion';

interface HeroProps {
  onConnectClick: () => void;
  isConnected: boolean;
}

export default function Hero({ onConnectClick, isConnected }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-700/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-primary-700/10 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium text-primary-700">
                Powered by Zama FHE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
              Your Health Data,
              <br />
              <span className="text-primary-700">Your Financial Power</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed">
              Build credit from health responsibility. Share anonymously with researchers. 
              Earn rewards. All fully encrypted with homomorphic encryption.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {!isConnected ? (
                <button
                  onClick={onConnectClick}
                  className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-primary-700/30 hover:shadow-xl hover:shadow-primary-700/40 transition-all"
                >
                  Connect Wallet to Get Started
                </button>
              ) : (
                <button
                  onClick={onConnectClick}
                  className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-primary-700/30 hover:shadow-xl hover:shadow-primary-700/40 transition-all"
                >
                  Go to Dashboard
                </button>
              )}
              
              <a
                href="#how-it-works"
                className="btn bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-50 text-lg px-8 py-4 transition-all"
              >
                Learn How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-600">End-to-end encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-600">No signup required</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative px-8"
          >
            <div className="relative rounded-2xl overflow-visible shadow-2xl shadow-slate-900/20">
              {/* Main card */}
              <div className="aspect-square bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl flex items-center justify-center p-12 relative">
                <div className="text-center space-y-4">
                  <svg className="w-32 h-32 mx-auto text-accent-cyan opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="space-y-2">
                    <p className="text-2xl font-heading font-bold text-white">
                      Fully Encrypted
                    </p>
                    <p className="text-accent-cyan text-sm">
                      Your data stays private, always
                    </p>
                  </div>
                </div>

                {/* Floating stats cards - NOW INSIDE THE BOX */}
                <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-xl p-4 border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">+24</p>
                      <p className="text-xs text-slate-600">Credit Boost Points</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 bg-white rounded-xl shadow-xl p-4 border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">100%</p>
                      <p className="text-xs text-slate-600">Private & Secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Testnet disclaimer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-warning-100 border border-warning-600 rounded-lg px-4 py-2">
          <p className="text-xs text-warning-600 font-medium">
            Sepolia Testnet - Demo Environment
          </p>
        </div>
      </div>
    </section>
  );
}
