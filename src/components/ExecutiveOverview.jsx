import React from 'react';
import { Award, Users, ShieldCheck, Cpu, BookOpen, ExternalLink, Sparkles, Building2, Globe } from 'lucide-react';

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
      {/* Executive Summary Card */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden border-blue-500/30">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Executive Summary & Strategic Brief</h2>
        </div>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed bg-gray-900/60 p-5 rounded-xl border border-gray-800">
          Analysis of <strong className="text-blue-400 font-semibold">21,126 unique alumni</strong> reveals a high-impact global talent network led by <strong className="text-emerald-400 font-semibold">27 innovative founders/co-founders</strong> and <strong className="text-amber-400 font-semibold">77 C-suite and executive leaders</strong> across enterprises like Microsoft, Optum, Morgan Stanley, GE, and Nomura. Advanced degree pathways highlight elite institution representation, including <strong className="text-pink-400 font-semibold">Columbia University Executive Education</strong> (Post Graduate Diploma in AI/ML) and <strong className="text-pink-400 font-semibold">Pennsylvania State University</strong> (Engineering Leadership & Innovation Management), complemented by premier global universities such as <strong className="text-purple-400 font-semibold">Carnegie Mellon University</strong>, <strong className="text-purple-400 font-semibold">Purdue University</strong>, and <strong className="text-purple-400 font-semibold">Georgia Institute of Technology</strong>.
          <br /><br />
          A robust technical cohort underpins the network: <strong className="text-blue-400 font-semibold">631 alumni</strong> specialize in frontier fields, driven by Biotech & Life Sciences (259), AI & Machine Learning (167), Cloud Computing & DevOps (130), Data Science (127), and VLSI & Semiconductors (65). <strong className="text-emerald-400 font-semibold">105 alumni</strong> drive academic research at institutions like Ruhr University Bochum and foreign laboratories. We identify <strong className="text-emerald-400 font-semibold">2,461 High-Potential Mentors</strong> ideal for startup incubation, technical advisory boards, and career development.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Unique Alumni</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">21,126</div>
          <div className="text-xs text-blue-400 mt-1 font-medium">100% Deduplicated</div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Mentorship Ready</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-400">2,461</div>
          <div className="text-xs text-gray-400 mt-1">High Potential Profiles</div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Founders & C-Suite</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-amber-400">104</div>
          <div className="text-xs text-gray-400 mt-1">27 Founders / 77 Execs</div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Frontier Tech Focus</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-extrabold text-purple-400">631</div>
          <div className="text-xs text-gray-400 mt-1">AI, Biotech, VLSI, Cloud</div>
        </div>
      </div>

      {/* Ivy League & Global University Spotlight */}
      <div className="glass-panel p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Ivy League & Top Global University Alumni</h3>
              <p className="text-xs text-gray-400">Alumni with advanced master's and executive qualifications from world-leading institutions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ivyAlumni.map((item, idx) => (
            <div key={idx} className="glass-card p-5 border border-pink-500/20 hover:border-pink-500/50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <div className="text-xs font-medium text-pink-400 mt-0.5">{item.role} • {item.org}</div>
                </div>
                <span className="badge badge-ivy">Top Global</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-800 text-xs space-y-1">
                <div className="text-gray-300">🎓 <strong className="text-white">{item.inst}</strong></div>
                <div className="text-gray-400">{item.degree}</div>
              </div>
              <div className="mt-3 flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                >
                  View LinkedIn Search <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Founders & Tech Leaders */}
      <div className="glass-panel p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Featured Startup Founders & Chief Tech Architects</h3>
              <p className="text-xs text-gray-400">Alumni pioneering ventures in Artificial Intelligence, EV Mobility, and HealthTech</p>
            </div>
          </div>
          <button
            onClick={onViewDirectory}
            className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
          >
            Explore All 21,126 Records &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredFounders.map((item, idx) => (
            <div key={idx} className="glass-card p-4 flex flex-col justify-between">
              <div>
                <span className="badge badge-high mb-2">{item.role}</span>
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <div className="text-xs font-semibold text-gray-300 mt-1">{item.org}</div>
                <div className="text-[11px] text-purple-400 mt-2 font-medium">⚡ {item.tech}</div>
              </div>
              <div className="mt-4 pt-2 border-t border-gray-800/80 flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  LinkedIn Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
