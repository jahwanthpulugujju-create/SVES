import React, { useState, useMemo } from 'react';
import { Rocket, Award, BookOpen, ExternalLink, Building2, ChevronRight, Cpu, Globe, Star } from 'lucide-react';

export default function LeadershipShowcase({ data, onSelectProfile }) {
  const [activeSubtab, setActiveSubtab] = useState('founders');

  const founders = useMemo(() => data.filter((d) => d.categories.includes('Founders / Co-founders')), [data]);
  const csuite = useMemo(() => data.filter((d) => d.categories.includes('C-suite or Senior Leadership')), [data]);
  const academics = useMemo(() => data.filter((d) => d.categories.includes('PhD / Academic / Research-oriented')), [data]);
  const frontierTech = useMemo(() => data.filter((d) => d.categories.includes('Specific / Emerging / Future Technologies')), [data]);
  const highValueMentors = useMemo(() => data.filter((d) => d.mentorship_potential === 'High'), [data]);

  const currentList = activeSubtab === 'founders' ? founders : (activeSubtab === 'csuite' ? csuite : (activeSubtab === 'academics' ? academics : (activeSubtab === 'highval' ? highValueMentors : frontierTech)));

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Braun Subtab Deck Navigation */}
      <div className="flex overflow-x-auto gap-2 bg-[#1c1e22] border border-[#2e3238] p-2.5 rounded-lg no-scrollbar font-mono text-xs">
        <button
          onClick={() => setActiveSubtab('founders')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-bold transition-all border ${
            activeSubtab === 'founders'
              ? 'bg-[#ff4d00] text-white border-[#ff661a]'
              : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
          }`}
        >
          <Rocket className="w-3.5 h-3.5 text-[#ffaa00]" />
          FOUNDERS & CO-FOUNDERS ({founders.length})
        </button>

        <button
          onClick={() => setActiveSubtab('csuite')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-bold transition-all border ${
            activeSubtab === 'csuite'
              ? 'bg-[#ff4d00] text-white border-[#ff661a]'
              : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[#60a5fa]" />
          C-SUITE EXECUTIVES & VPS ({csuite.length})
        </button>

        <button
          onClick={() => setActiveSubtab('academics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-bold transition-all border ${
            activeSubtab === 'academics'
              ? 'bg-[#ff4d00] text-white border-[#ff661a]'
              : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#c084fc]" />
          PHD & ACADEMIC RESEARCHERS ({academics.length})
        </button>

        <button
          onClick={() => setActiveSubtab('highval')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-bold transition-all border ${
            activeSubtab === 'highval'
              ? 'bg-[#ff4d00] text-white border-[#ff661a]'
              : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
          }`}
        >
          <Star className="w-3.5 h-3.5 text-[#00e676]" />
          HIGH VALUE MENTORS ({highValueMentors.length})
        </button>

        <button
          onClick={() => setActiveSubtab('tech')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-md font-bold transition-all border ${
            activeSubtab === 'tech'
              ? 'bg-[#ff4d00] text-white border-[#ff661a]'
              : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-[#fbbf24]" />
          FRONTIER TECH PIONEERS ({frontierTech.length})
        </button>
      </div>

      {/* Industrial Hardware Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentList.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectProfile(item)}
            className="braun-panel p-5 cursor-pointer flex flex-col justify-between hover:border-[#ff4d00] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="badge-braun badge-high-val">{item.mentorship_potential} MENTOR VALUE</span>
                <span className="font-mono text-[11px] text-gray-600 font-bold">{item.location}</span>
              </div>

              <h4 className="font-bold text-[#1f2228] text-base">{item.name}</h4>
              <div className="font-mono text-xs font-bold text-[#ff4d00] mt-0.5">{item.current_role}</div>
              <div className="text-xs text-gray-700 font-semibold mt-1">{item.organization}</div>

              {item.tech_focus && item.tech_focus.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tech_focus.map((t, idx) => (
                    <span key={idx} className="badge-braun badge-tech-val">{t}</span>
                  ))}
                </div>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#bcbbb5] font-mono text-xs text-gray-700">
                  ⚡ {item.achievements[0]}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#bcbbb5] flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[11px] text-gray-600 font-bold">{item.seniority_notes}</span>
              <a
                href={item.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="braun-btn braun-btn-orange text-xs"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
