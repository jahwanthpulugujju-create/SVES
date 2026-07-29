import React from 'react';
import { Users, ShieldCheck, Briefcase, Award, Rocket, GraduationCap, FileText, Sliders, Cpu, Activity } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount, highMentorshipCount, founderCount, csuiteCount }) {
  const tabs = [
    { id: 'overview', label: 'MODUL 01: EXECUTIVE OVERVIEW', icon: LayoutDashboardIcon },
    { id: 'directory', label: `MODUL 02: DIRECTORY (${totalCount?.toLocaleString() || 0})`, icon: Users },
    { id: 'leadership', label: 'MODUL 03: FOUNDERS & C-SUITE', icon: Award },
    { id: 'mentorship', label: 'MODUL 04: MENTORSHIP MATCH', icon: Rocket },
    { id: 'appendix', label: 'MODUL 05: DATA SPECIFICATION', icon: FileText }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#141619] border-b border-[#2b2e35] shadow-2xl">
      {/* Top Braun Metal Rack Bar */}
      <div className="bg-[#1e2025] border-b border-[#2d3038] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-bold text-[#888c96] tracking-widest uppercase">
            BRAUN SYSTEM LE 2026 // ALUMNI ANALYTICS RACK
          </span>
          <div className="flex items-center gap-1.5">
            <span className="led-indicator-dot led-green animate-glow"></span>
            <span className="font-mono text-[10px] text-[#34d399] uppercase font-bold">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Top Warm LED Tube Graphic */}
        <div className="hidden md:flex items-center gap-3">
          <span className="font-mono text-[10px] text-gray-400">SIGNAL LEVEL</span>
          <div className="w-32 led-tube-warm"></div>
        </div>
      </div>

      {/* Main Control Console Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Modular Speaker/Logo Block */}
            <div className="w-12 h-12 bg-[#22252c] rounded-lg border border-[#3b3e47] flex items-center justify-center shadow-inner relative">
              <div className="w-8 h-8 speaker-grille-dark flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#ff4d00]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-black text-white tracking-tight font-mono">
                  BRAUN ALUMNI RACK 74
                </h1>
                <span className="badge-braun badge-founder-val">PRO EDITION</span>
              </div>
              <p className="text-xs text-[#9ca3af] font-mono mt-0.5">
                Deduplicated Entity Intelligence • 21,126 Alumni Modules Loaded
              </p>
            </div>
          </div>

          {/* Industrial Metric Modules */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-[#1c1e22] border border-[#2e3238] px-3.5 py-2 rounded-lg flex items-center gap-3 shadow-md">
              <div className="rotary-knob">
                <div className="rotary-knob-notch"></div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-[#9ca3af] uppercase tracking-wider font-bold">UNIQUE ALUMNI</div>
                <div className="font-mono text-sm font-black text-white">21,126</div>
              </div>
            </div>

            <div className="bg-[#1c1e22] border border-[#2e3238] px-3.5 py-2 rounded-lg flex items-center gap-3 shadow-md">
              <div className="led-indicator-dot led-green"></div>
              <div>
                <div className="font-mono text-[9px] text-[#9ca3af] uppercase tracking-wider font-bold">HIGH MENTOR READY</div>
                <div className="font-mono text-sm font-black text-[#00e676]">2,461</div>
              </div>
            </div>

            <div className="bg-[#1c1e22] border border-[#2e3238] px-3.5 py-2 rounded-lg flex items-center gap-3 shadow-md">
              <div className="led-indicator-dot led-orange"></div>
              <div>
                <div className="font-mono text-[9px] text-[#9ca3af] uppercase tracking-wider font-bold">FOUNDERS & EXECS</div>
                <div className="font-mono text-sm font-black text-[#ff661a]">104</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Module Cartridges */}
        <div className="flex overflow-x-auto gap-2 mt-5 pt-3 border-t border-[#2a2d34] no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-md font-mono text-xs font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#ff4d00] text-white border-[#ff661a] shadow-lg shadow-[#ff4d00]/30'
                    : 'bg-[#1c1e22] text-[#9ca3af] border-[#2e3238] hover:text-white hover:bg-[#252830]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function LayoutDashboardIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"/>
      <rect width="7" height="5" x="14" y="3" rx="1"/>
      <rect width="7" height="9" x="14" y="12" rx="1"/>
      <rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
  );
}
