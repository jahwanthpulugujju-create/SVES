import React from 'react';
import { ArrowUpRight, Calendar, Users, Briefcase, Award, CheckCircle2, ChevronRight, Activity, Globe, Sparkles, ExternalLink } from 'lucide-react';

export default function ExecutiveOverview({ onSelectProfile, onViewDirectory, setActiveTab }) {
  const upcomingEvents = [
    {
      date: "AUG 24",
      title: "SVES Alumni Fireside Chat",
      loc: "Online • 7:00 PM",
      status: "green"
    },
    {
      date: "AUG 30",
      title: "Innovation in Healthcare",
      loc: "Boston, MA • 6:00 PM",
      status: "green"
    },
    {
      date: "SEP 05",
      title: "Annual Alumni Summit",
      loc: "New York, NY • All Day",
      status: "orange"
    }
  ];

  const featuredAlumni = [
    {
      name: "Arianna K.",
      title: "CTO, SpaceX '19",
      field: "Aerospace",
      status: "green"
    },
    {
      name: "David L.",
      title: "Co-founder, Meridian",
      field: "Finance '14",
      status: "green"
    },
    {
      name: "Priya S.",
      title: "Head of AI, Google",
      field: "Computer Science '12",
      status: "green"
    }
  ];

  const latestOpportunities = [
    {
      title: "Product Manager",
      company: "Stripe",
      loc: "San Francisco, CA",
      status: "green"
    },
    {
      title: "Research Scientist",
      company: "OpenAI",
      loc: "Remote",
      status: "green"
    },
    {
      title: "Summer Internship",
      company: "BioNTech",
      loc: "New York, NY",
      status: "green"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* 1. HERO UNIT (MATCHING SECTION 1 & 2 OF DESIGN SPEC) */}
      <div className="sves-hero-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d6d6cd] rounded-full text-[11px] font-mono font-bold text-[#44474a]">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>
            <span>CONNECTING ALUMNI. BUILDING TOMORROW.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1F2326] tracking-tight leading-[1.05]">
            STRONGER TOGETHER.<br />
            BOLDER TOMORROWS.
          </h1>

          <p className="text-base text-[#4b4f54] leading-relaxed max-w-xl">
            SVES connects alumni, empowers students, and builds a community of innovators shaping a better future. Access 21,126+ verified profiles, mentorship matching, and career opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('directory')}
              className="sves-orange-btn"
            >
              Explore the Network <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              className="sves-secondary-btn"
            >
              Join SVES
            </button>
          </div>
        </div>

        {/* Right Braun Hardware Control Console */}
        <div className="lg:col-span-5">
          <div className="bg-[#1F2326] p-6 rounded-2xl border-4 border-[#33383d] shadow-2xl relative">
            {/* Top CRT Display Screen */}
            <div className="sves-crt-unit mb-6 p-5">
              <div className="flex items-center justify-between text-xs mb-3 text-[#39C16E]">
                <span className="font-bold tracking-wider">SVES CONSOLE // ACTIVE</span>
                <span className="w-2 h-2 rounded-full bg-[#39C16E] animate-ping"></span>
              </div>
              <div className="text-lg font-black tracking-widest text-[#39C16E] leading-snug">
                CONNECTED<br />
                INNOVATING<br />
                MAKING AN IMPACT
              </div>
              <div className="mt-4 pt-2 border-t border-[#39C16E]/30 text-[10px] font-mono text-gray-400 flex justify-between">
                <span>SYSTEM VERSION 2.4</span>
                <span className="font-bold text-[#39C16E]">SVES-SYS</span>
              </div>
            </div>

            {/* Hardware Controls & Faders */}
            <div className="grid grid-cols-2 gap-4 items-center bg-[#151719] p-4 rounded-xl border border-[#2b2f34]">
              {/* Aluminum Rotary Dial */}
              <div className="flex flex-col items-center justify-center p-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4d4cc] to-[#999990] border-2 border-[#555] relative flex items-center justify-center shadow-lg">
                  <div className="w-1 h-4 bg-[#FF6B00] absolute top-1 rounded-full"></div>
                  <div className="w-8 h-8 rounded-full bg-[#1F2326] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#39C16E]"></div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-gray-400 mt-2">VOLUME / GAIN</span>
              </div>

              {/* Linear Fader Sliders */}
              <div className="space-y-3 font-mono text-[10px] text-gray-400">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>CONNECT</span>
                    <span className="text-[#39C16E]">100%</span>
                  </div>
                  <div className="sves-fader-track">
                    <div className="sves-fader-knob" style={{ left: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>SUPPORT</span>
                    <span className="text-[#FF6B00]">92%</span>
                  </div>
                  <div className="sves-fader-track">
                    <div className="sves-fader-knob" style={{ left: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS & METRICS BAR (MATCHING SECTION 2 OF SPEC) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="sves-stat-box">
          <div className="sves-stat-value">12,500+</div>
          <div className="sves-stat-label">Alumni</div>
        </div>

        <div className="sves-stat-box">
          <div className="sves-stat-value">340+</div>
          <div className="sves-stat-label">Mentors</div>
        </div>

        <div className="sves-stat-box">
          <div className="sves-stat-value">850+</div>
          <div className="sves-stat-label">Events</div>
        </div>

        <div className="sves-stat-box">
          <div className="sves-stat-value">98%</div>
          <div className="sves-stat-label">Satisfaction</div>
        </div>

        {/* Audio VU Spectrum Display Module */}
        <div className="sves-stat-box flex flex-col justify-between col-span-2 md:col-span-1 bg-[#151719] text-white border-[#2b2f34]">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span>NETWORK VU</span>
            <span className="text-[#39C16E] font-bold">ONLINE</span>
          </div>
          <div className="sves-vu-meter my-1">
            <div className="sves-vu-bar" style={{ height: '40%' }}></div>
            <div className="sves-vu-bar" style={{ height: '70%' }}></div>
            <div className="sves-vu-bar" style={{ height: '90%' }}></div>
            <div className="sves-vu-bar" style={{ height: '60%' }}></div>
            <div className="sves-vu-bar" style={{ height: '100%' }}></div>
            <div className="sves-vu-bar" style={{ height: '80%' }}></div>
            <div className="sves-vu-bar" style={{ height: '50%' }}></div>
            <div className="sves-vu-bar" style={{ height: '95%' }}></div>
          </div>
          <div className="text-[9px] font-mono text-gray-500 text-center">TELEMETRY BAND</div>
        </div>
      </div>

      {/* 3. CONTENT MODULES (UPCOMING EVENTS, FEATURED ALUMNI, LATEST OPPORTUNITIES) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Events Module */}
        <div className="sves-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-[#e5e5dc] pb-3">
              <h3 className="font-bold text-[#1F2326] text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF6B00]" /> Upcoming Events
              </h3>
              <button onClick={() => setActiveTab('events')} className="text-xs font-bold text-[#666a6e] hover:text-[#1F2326]">
                View All &rarr;
              </button>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#f6f6f0] transition-all">
                  <div className="w-12 h-12 bg-[#1F2326] text-white rounded-lg flex flex-col items-center justify-center font-mono text-[10px] font-bold leading-tight">
                    <span>{item.date.split(' ')[0]}</span>
                    <span className="text-base text-[#39C16E]">{item.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-[#1F2326] text-xs truncate">{item.title}</h4>
                      <span className={`status-dot ${item.status === 'green' ? 'status-dot-green' : 'status-dot-orange'}`}></span>
                    </div>
                    <p className="text-[11px] text-[#666a6e] mt-0.5">{item.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Alumni Module */}
        <div className="sves-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-[#e5e5dc] pb-3">
              <h3 className="font-bold text-[#1F2326] text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-[#39C16E]" /> Featured Alumni
              </h3>
              <button onClick={() => setActiveTab('directory')} className="text-xs font-bold text-[#666a6e] hover:text-[#1F2326]">
                View All &rarr;
              </button>
            </div>

            <div className="space-y-3">
              {featuredAlumni.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#f6f6f0] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#1F2326] text-white font-bold flex items-center justify-center font-mono text-sm border-2 border-[#9FA3A5]">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#1F2326] text-xs">{item.name}</h4>
                      <span className="status-dot status-dot-green"></span>
                    </div>
                    <p className="text-[11px] text-[#44474a] font-medium mt-0.5">{item.title}</p>
                    <p className="text-[10px] text-[#777a7e] font-mono">{item.field}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Opportunities Module */}
        <div className="sves-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-[#e5e5dc] pb-3">
              <h3 className="font-bold text-[#1F2326] text-base flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#FF6B00]" /> Latest Opportunities
              </h3>
              <button onClick={() => setActiveTab('opportunities')} className="text-xs font-bold text-[#666a6e] hover:text-[#1F2326]">
                View All &rarr;
              </button>
            </div>

            <div className="space-y-3">
              {latestOpportunities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#f6f6f0] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#e3e3dc] text-[#1F2326] font-bold flex items-center justify-center font-mono text-xs border border-[#cfcfc7]">
                    {item.company.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#1F2326] text-xs">{item.title}</h4>
                      <span className="status-dot status-dot-green"></span>
                    </div>
                    <p className="text-[11px] text-[#44474a] font-medium mt-0.5">{item.company}</p>
                    <p className="text-[10px] text-[#777a7e] font-mono">{item.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
