import React, { useState, useMemo } from 'react';
import { Rocket, Target, ShieldCheck, ExternalLink, Sparkles, UserCheck, Cpu, Sliders } from 'lucide-react';

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
      {/* Braun Hardware Patching Panel Header */}
      <div className="braun-panel-dark p-6">
        <div className="flex items-center justify-between border-b border-[#2d3038] pb-3 mb-3">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-[#00b359]" />
            <h2 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
              MODUL 04: INNOVATION OFFICE MENTORSHIP PATCH PANEL
            </h2>
          </div>
          <span className="font-mono text-xs text-[#00e676] font-bold">[PATCH MATRIX ACTIVE]</span>
        </div>

        <p className="font-mono text-xs text-gray-300">
          Connect target domain signals with verified High-Potential Alumni mentors for advisory boards, startup incubation, and specialized research guidance.
        </p>

        {/* Modular Domain Selector Matrix */}
        <div className="flex overflow-x-auto gap-2 mt-5 pt-3 border-t border-[#2d3038] no-scrollbar font-mono text-xs">
          {techDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setTargetTech(domain)}
              className={`px-3.5 py-2 rounded-md font-bold whitespace-nowrap transition-all border ${
                targetTech === domain
                  ? 'bg-[#00b359] text-white border-[#00e676] shadow-lg shadow-[#00b359]/30'
                  : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Results Signal Telemetry Bar */}
      <div className="flex items-center justify-between bg-[#1e2025] border border-[#2d3038] px-5 py-3 rounded-lg font-mono text-xs">
        <div className="text-gray-300 flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-[#00e676]" />
          SIGNAL VERIFIED: Found <strong className="text-[#00e676]">{matchedAlumni.length}</strong> High Mentor Modules in <span className="text-white">{targetTech}</span>
        </div>
      </div>

      {/* Hardware Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matchedAlumni.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectProfile(item)}
            className="braun-panel p-5 cursor-pointer flex flex-col justify-between hover:border-[#00b359] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="badge-braun badge-high-val">HIGH MENTOR VALUE</span>
                <span className="font-mono text-[11px] text-gray-600 font-bold">{item.location}</span>
              </div>

              <h4 className="font-bold text-[#1f2228] text-base">{item.name}</h4>
              <div className="font-mono text-xs font-bold text-[#00b359] mt-0.5">{item.current_role}</div>
              <div className="text-xs text-gray-700 font-semibold mt-1">{item.organization}</div>

              {item.education && item.education[0] && (
                <div className="font-mono text-[11px] text-gray-600 mt-2">
                  🎓 {item.education[0].institution} ({item.education[0].degree})
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#bcbbb5] flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[11px] text-gray-600 font-bold">{item.seniority_notes}</span>
              <a
                href={item.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="braun-btn braun-btn-green text-xs"
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
