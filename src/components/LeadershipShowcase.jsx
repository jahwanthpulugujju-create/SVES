import React, { useState, useMemo } from 'react';
import { Rocket, Award, BookOpen, ExternalLink, Building2, ChevronRight } from 'lucide-react';

export default function LeadershipShowcase({ data, onSelectProfile }) {
  const [activeSubtab, setActiveSubtab] = useState('founders');

  const founders = useMemo(() => data.filter((d) => d.categories.includes('Founders / Co-founders')), [data]);
  const csuite = useMemo(() => data.filter((d) => d.categories.includes('C-suite or Senior Leadership')), [data]);
  const academics = useMemo(() => data.filter((d) => d.categories.includes('PhD / Academic / Research-oriented')), [data]);
  const frontierTech = useMemo(() => data.filter((d) => d.categories.includes('Specific / Emerging / Future Technologies')), [data]);

  const currentList = activeSubtab === 'founders' ? founders : (activeSubtab === 'csuite' ? csuite : (activeSubtab === 'academics' ? academics : frontierTech));

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Subtab Navigation */}
      <div className="flex overflow-x-auto gap-3 glass-panel p-2 no-scrollbar">
        <button
          onClick={() => setActiveSubtab('founders')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
            activeSubtab === 'founders'
              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Rocket className="w-4 h-4 text-amber-400" />
          Founders & Co-Founders ({founders.length})
        </button>

        <button
          onClick={() => setActiveSubtab('csuite')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
            activeSubtab === 'csuite'
              ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4 text-blue-400" />
          C-Suite Executives & VPs ({csuite.length})
        </button>

        <button
          onClick={() => setActiveSubtab('academics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
            activeSubtab === 'academics'
              ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-400" />
          PhD & Academic Researchers ({academics.length})
        </button>

        <button
          onClick={() => setActiveSubtab('tech')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
            activeSubtab === 'tech'
              ? 'bg-purple-500/20 border border-purple-500/40 text-purple-300'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Building2 className="w-4 h-4 text-purple-400" />
          Emerging Tech Pioneers ({frontierTech.length})
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentList.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectProfile(item)}
            className="glass-card p-5 cursor-pointer flex flex-col justify-between hover:border-blue-500/40"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="badge badge-high">{item.mentorship_potential} Mentorship</span>
                <span className="text-[11px] text-gray-500">{item.location}</span>
              </div>

              <h4 className="font-bold text-white text-base">{item.name}</h4>
              <div className="text-xs font-semibold text-blue-400 mt-0.5">{item.current_role}</div>
              <div className="text-xs text-gray-300 font-medium mt-1">{item.organization}</div>

              {item.tech_focus && item.tech_focus.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tech_focus.map((t, idx) => (
                    <span key={idx} className="badge badge-tech">{t}</span>
                  ))}
                </div>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-800 text-xs text-gray-400">
                  ⚡ {item.achievements[0]}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <span className="text-[11px] text-gray-500">{item.seniority_notes}</span>
              <a
                href={item.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
              >
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
