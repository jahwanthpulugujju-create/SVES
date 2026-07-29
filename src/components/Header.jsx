import React from 'react';
import { Users, ShieldCheck, Briefcase, Award, Rocket, GraduationCap, Search, FileText } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount, highMentorshipCount, founderCount, csuiteCount }) {
  const tabs = [
    { id: 'overview', label: 'Executive Overview', icon: LayoutDashboardIcon },
    { id: 'directory', label: `Alumni Directory (${totalCount?.toLocaleString() || 0})`, icon: Users },
    { id: 'leadership', label: 'Founders & C-Suite', icon: Award },
    { id: 'mentorship', label: 'Mentorship Matchmaker', icon: Rocket },
    { id: 'appendix', label: 'Methodology & Appendix', icon: FileText }
  ];

  return (
    <header className="border-b border-gray-800 bg-[#0d1322]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-400">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                  Alumni Analytics & Talent Intelligence Hub
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">
                  Comprehensive Categorization & LinkedIn Profile Audit • 21,126 Unique Alumni Records
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="glass-card px-3 py-1.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Total Unique</div>
                <div className="text-xs font-bold text-white">21,126</div>
              </div>
            </div>

            <div className="glass-card px-3 py-1.5 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">High Mentor Potential</div>
                <div className="text-xs font-bold text-emerald-400">2,461</div>
              </div>
            </div>

            <div className="glass-card px-3 py-1.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Founders & C-Suite</div>
                <div className="text-xs font-bold text-amber-400">104</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto gap-2 mt-5 pt-2 border-t border-gray-800/60 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
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
