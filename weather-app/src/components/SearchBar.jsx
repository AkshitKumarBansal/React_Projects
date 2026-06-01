import React from 'react'
import { Search, X, MapPin } from 'lucide-react' // 1. Added the missing import

function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <form className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray/60 w-5 h-5 group-focus-within:text-white transition-all" />          
          <input 
            type="text" 
            placeholder="Search for any city worldwide....."
            className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/15" 
          />
          {/* Conditional Rendering */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1 rounded-full hover:bg-white/10" type="button">
            <X className="w-4 h-4" />
          </button>
          {/* <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1 rounded-full hover:bg-white/10" type="button">
            <MapPin className="w-5 h-5" />
          </button> */}
        </div>
      </form>
      {/* Conditional Rendering */}
      <div className="absolute right-0 top-full left-0 mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50">
        {/* Conditional Rendering */}
        <div className="p-6 text-center text-white/70">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white mx-auto"></div>
          <p>Search Cities.....</p>
        </div>
        {/* Else */}
        <button className="w-full text-left px-6 py-4 hover:bg-white/10 transition-all duration-200 flex items-center justify-between group border-b border-white/10 last:border-b-0">
          <div className="font-medium text-white group-hover:text-white/90">
            City Name
            {/* Conditional Rendering */}
            <span>,City State</span>
          </div>
          <div className="text-sm text-white/60">Country</div>
          <Search className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar;