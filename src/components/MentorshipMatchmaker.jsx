import React, { useState, useMemo } from 'react';
import { Rocket, Target, ShieldCheck, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

export default function MentorshipMatchmaker({ data, onSelectProfile }) {
  const [targetTech, setTargetTech] = useState('AI / Machine Learning');

  const techDomains = [
    'AI / Machine Learning',
    'Biotech & Life Sciences',
    'VLSI & Semiconductor',
    'Cloud Computing & DevOps',
    'Data Science & Analytics',
    'Embedded Systems & IoT',
    'Automotive & EV Tech',
    'Founders / Startups',
    'Cybersecurity'
  ];

  const matchedAlumni = useMemo(() => {
    return data.filter((item) => {
      const isHigh = item.mentorship_potential === 'High';
      if (!isHigh) return false;

      if (targetTech === 'Founders / Startups') {
        return item.categories.includes('Founders / Co-founders');
      }

      return item.tech_focus.includes(targetTech);
    });
  }, [data, targetTech]);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="glass-panel p-6 border-emerald-500/30">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Innovation Office Mentorship Matchmaker</h2>
        </div>
        <p className="text-xs text-gray-300">
          Match target technology verticals and startup incubation domains with verified High-Potential Alumni mentors for advisory boards, incubation programs, and student mentoring.
        </p>

        {/* Domain Selector */}
        <div className="flex overflow-x-auto gap-2 mt-5 pt-2 border-t border-gray-800 no-scrollbar">
          {techDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setTargetTech(domain)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                targetTech === domain
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                  : 'bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between glass-card px-5 py-3">
        <div className="text-xs font-semibold text-gray-300 flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-emerald-400" />
          Found <strong className="text-emerald-400">{matchedAlumni.length}</strong> High Mentorship Ready Alumni in <span className="text-white">{targetTech}</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matchedAlumni.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectProfile(item)}
            className="glass-card p-5 cursor-pointer flex flex-col justify-between hover:border-emerald-500/50"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="badge badge-high">High Mentorship Ready</span>
                <span className="text-[11px] text-gray-500">{item.location}</span>
              </div>

              <h4 className="font-bold text-white text-base">{item.name}</h4>
              <div className="text-xs font-semibold text-emerald-400 mt-0.5">{item.current_role}</div>
              <div className="text-xs text-gray-300 font-medium mt-1">{item.organization}</div>

              {item.education && item.education[0] && (
                <div className="text-[11px] text-gray-400 mt-2">
                  🎓 {item.education[0].institution} ({item.education[0].degree})
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <span className="text-[11px] text-gray-400">{item.seniority_notes}</span>
              <a
                href={item.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
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
