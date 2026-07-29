import React from 'react';
import { Users, Award, Rocket, GraduationCap } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount }) {
  return (
    <header className="sves-navbar sticky top-4 z-40 shadow-sm mb-6">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('directory')}>
        <div className="w-10 h-10 bg-[#1F2326] text-white font-black rounded-lg flex items-center justify-center font-mono text-xl">
          S
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="sves-logo-title">SVES ALUMNI</span>
            <span className="w-2 h-2 rounded-full bg-[#39C16E] animate-pulse"></span>
          </div>
          <p className="sves-logo-tagline font-mono">
            {totalCount?.toLocaleString() || '21,126'} Unique Alumni Profiles
          </p>
        </div>
      </div>

      {/* Primary Alumni Nav Tabs */}
      <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('directory')}
          className={`sves-nav-link flex items-center gap-1.5 ${activeTab === 'directory' ? 'active' : ''}`}
        >
          <Users className="w-4 h-4 text-[#FF6B00]" />
          Alumni Directory ({totalCount?.toLocaleString() || '21,126'})
        </button>

        <button
          onClick={() => setActiveTab('leadership')}
          className={`sves-nav-link flex items-center gap-1.5 ${activeTab === 'leadership' ? 'active' : ''}`}
        >
          <Award className="w-4 h-4 text-[#39C16E]" />
          Founders & C-Suite
        </button>

        <button
          onClick={() => setActiveTab('mentorship')}
          className={`sves-nav-link flex items-center gap-1.5 ${activeTab === 'mentorship' ? 'active' : ''}`}
        >
          <Rocket className="w-4 h-4 text-[#FF6B00]" />
          Mentorship Match
        </button>
      </nav>
    </header>
  );
}
