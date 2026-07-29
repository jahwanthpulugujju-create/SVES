import React from 'react';
import { Award, Users, ShieldCheck, Cpu, BookOpen, ExternalLink, Sparkles, Building2, Globe, Terminal, Gauge } from 'lucide-react';

export default function ExecutiveOverview({ onSelectProfile, onViewDirectory }) {
  const ivyAlumni = [
    {
      name: "Hari K. Kapparapu",
      role: "Associate Director",
      org: "Alcon Research (Medical Devices)",
      inst: "Columbia University Executive Education",
      degree: "Post Graduate Diploma (AI/ML)",
      past: "General Electric (GE), HCL America, L&T",
      link: "https://www.linkedin.com/search/results/all/?keywords=Hari%20K%20Kapparapu"
    },
    {
      name: "Dhrishika Rai",
      role: "Project Manager",
      org: "Aims Community College",
      inst: "Pennsylvania State University",
      degree: "Masters in Engineering Leadership & Innovation",
      past: "Project Leadership",
      link: "https://www.linkedin.com/search/results/all/?keywords=Dhrishika%20Rai"
    },
    {
      name: "Vineela Suri",
      role: "Product Manager",
      org: "Microsoft",
      inst: "Carnegie Mellon University (CMU)",
      degree: "MS in Product Management",
      past: "Product Leadership at Enterprise Tech",
      link: "https://www.linkedin.com/search/results/all/?keywords=Vineela%20Suri"
    },
    {
      name: "Sai Laya Mallineni",
      role: "Software Developer",
      org: "PayPal",
      inst: "Purdue University",
      degree: "MS in Computer Science",
      past: "FinTech & Cloud Engineering",
      link: "https://www.linkedin.com/search/results/all/?keywords=Sai%20Laya%20Mallineni"
    }
  ];

  const featuredFounders = [
    {
      name: "Sumedh Sonkamble",
      role: "Founder & CEO",
      org: "Neurom Innovations Pvt Ltd",
      tech: "AI & Neurotech Innovations",
      link: "https://www.linkedin.com/in/sumedh"
    },
    {
      name: "Kumar Prasad Telikepalli",
      role: "Founder & Group CTO",
      org: "Matter",
      tech: "EV Mobility & Clean Tech",
      link: "https://www.linkedin.com/search/results/all/?keywords=Kumar%20Prasad%20Telikepalli"
    },
    {
      name: "Sowmya Darapaneni",
      role: "Co-Founder & CEO",
      org: "Avinya Neurotech Private Limited",
      tech: "Medical Devices & HealthTech",
      link: "https://www.linkedin.com/search/results/all/?keywords=Sowmya%20Darapaneni"
    },
    {
      name: "Chennapragada Sai Sathvik",
      role: "Chief Architect",
      org: "Olynk.AI",
      tech: "Generative AI Systems",
      link: "https://www.linkedin.com/in/chennapragada-sathvik/"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Braun Hardware Panel with CRT Terminal Summary */}
      <div className="braun-panel-dark p-6 md:p-8 relative">
        <div className="flex items-center justify-between mb-4 border-b border-[#2d3038] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#ff4d00] shadow-[0_0_8px_#ff4d00]"></div>
            <h2 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
              MODUL 01: SYSTEM EXECUTIVE TERMINAL
            </h2>
          </div>
          <span className="font-mono text-xs text-[#34d399]">[STATUS: ONLINE]</span>
        </div>

        {/* CRT Green Terminal Display */}
        <div className="crt-terminal p-5 md:p-6">
          <div className="flex items-center gap-2 mb-3 text-xs text-[#34d399] border-b border-[#10b981]/30 pb-2">
            <Terminal className="w-4 h-4" />
            <span className="font-bold">EXECUTIVE_SUMMARY_TELEMETRY.LOG (188 WORDS)</span>
          </div>

          <p className="text-xs md:text-sm leading-relaxed text-[#34d399] space-y-2 font-mono">
            Analysis of <strong className="text-white underline">21,126 unique alumni</strong> reveals a high-impact global talent network led by <strong className="text-white underline">27 innovative founders/co-founders</strong> and <strong className="text-white underline">77 C-suite and executive leaders</strong> across enterprises like Microsoft, Optum, Morgan Stanley, GE, and Nomura. Advanced degree pathways highlight elite institution representation, including <strong className="text-white underline">Columbia University Executive Education</strong> (Post Graduate Diploma in AI/ML) and <strong className="text-white underline">Pennsylvania State University</strong> (Engineering Leadership & Innovation Management), complemented by premier global universities such as <strong className="text-white underline">Carnegie Mellon University</strong>, <strong className="text-white underline">Purdue University</strong>, and <strong className="text-white underline">Georgia Institute of Technology</strong>.
            <br /><br />
            A robust technical cohort underpins the network: <strong className="text-white underline">631 alumni</strong> specialize in frontier fields, driven by Biotech & Life Sciences (259), AI & Machine Learning (167), Cloud Computing & DevOps (130), Data Science (127), and VLSI & Semiconductors (65). <strong className="text-white underline">105 alumni</strong> drive academic research at institutions like Ruhr University Bochum and foreign laboratories. We identify <strong className="text-white underline">2,461 High-Potential Mentors</strong> ideal for startup incubation, technical advisory boards, and career development.
          </p>
        </div>
      </div>

      {/* Industrial Metric Hardware Module Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="braun-panel p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#6b7280]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">TOTAL UNIQUE ALUMNI</span>
            <Users className="w-4 h-4 text-[#ff4d00]" />
          </div>
          <div className="font-mono text-2xl font-black text-[#1f2228] mt-2">21,126</div>
          <div className="font-mono text-[10px] text-[#00b359] font-bold mt-1">100% DEDUPLICATED</div>
        </div>

        <div className="braun-panel p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#6b7280]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">HIGH MENTOR READY</span>
            <ShieldCheck className="w-4 h-4 text-[#00b359]" />
          </div>
          <div className="font-mono text-2xl font-black text-[#00b359] mt-2">2,461</div>
          <div className="font-mono text-[10px] text-[#6b7280] font-bold mt-1">HIGH VALUE PROFILES</div>
        </div>

        <div className="braun-panel p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#6b7280]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">FOUNDERS & EXECS</span>
            <Award className="w-4 h-4 text-[#ff4d00]" />
          </div>
          <div className="font-mono text-2xl font-black text-[#ff4d00] mt-2">104</div>
          <div className="font-mono text-[10px] text-[#6b7280] font-bold mt-1">27 FOUNDERS / 77 EXECS</div>
        </div>

        <div className="braun-panel p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#6b7280]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">FRONTIER TECH SPECIALISTS</span>
            <Cpu className="w-4 h-4 text-[#2563eb]" />
          </div>
          <div className="font-mono text-2xl font-black text-[#2563eb] mt-2">631</div>
          <div className="font-mono text-[10px] text-[#6b7280] font-bold mt-1">AI, BIOTECH, VLSI, CLOUD</div>
        </div>
      </div>

      {/* Ivy League & Top Global Universities Panel */}
      <div className="braun-panel-dark p-6">
        <div className="flex items-center justify-between mb-6 border-b border-[#2d3038] pb-3">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#ff4d00]" />
            <div>
              <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
                IVY LEAGUE & TOP GLOBAL UNIVERSITY MODULES
              </h3>
              <p className="text-xs text-gray-400 font-mono">Advanced Master's & Doctoral Qualifications</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ivyAlumni.map((item, idx) => (
            <div key={idx} className="braun-panel p-4 hover:border-[#ff4d00] transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-[#1f2228] text-base">{item.name}</h4>
                  <div className="font-mono text-xs font-semibold text-[#ff4d00] mt-0.5">{item.role} • {item.org}</div>
                </div>
                <span className="badge-braun badge-founder-val">IVY / GLOBAL TIER-1</span>
              </div>
              <div className="mt-3 pt-3 border-t border-[#bcbbb5] text-xs font-mono space-y-1">
                <div className="text-[#1f2228]">🎓 <strong>{item.inst}</strong></div>
                <div className="text-gray-600">{item.degree}</div>
              </div>
              <div className="mt-3 flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="braun-btn braun-btn-orange text-xs"
                >
                  LinkedIn Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Founders & Tech Leaders */}
      <div className="braun-panel-dark p-6">
        <div className="flex items-center justify-between mb-6 border-b border-[#2d3038] pb-3">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-[#00b359]" />
            <div>
              <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
                FEATURED STARTUP FOUNDERS & CHIEF ARCHITECTS
              </h3>
              <p className="text-xs text-gray-400 font-mono">Ventures in Artificial Intelligence, EV Mobility, and HealthTech</p>
            </div>
          </div>
          <button
            onClick={onViewDirectory}
            className="braun-btn text-xs font-mono"
          >
            ALL 21,126 MODULES &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredFounders.map((item, idx) => (
            <div key={idx} className="braun-panel p-4 flex flex-col justify-between">
              <div>
                <span className="badge-braun badge-high-val mb-2 inline-block">{item.role}</span>
                <h4 className="font-bold text-[#1f2228] text-sm">{item.name}</h4>
                <div className="text-xs font-semibold text-gray-700 mt-1">{item.org}</div>
                <div className="font-mono text-[11px] text-[#ff4d00] mt-2 font-bold">⚡ {item.tech}</div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#bcbbb5] flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="braun-btn text-xs"
                >
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
