import React from 'react'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay*/}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/weather-bg.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-black-20">
          
        </div>
        
      </div>
      <div className="relative z-10 px-4 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                Weather App
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Pro</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience weather like never before with real-time data, beautiful visuals, and precise forecasts for any location worldwide.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row item-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
