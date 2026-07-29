import React from 'react';
import { Users, Calendar, Briefcase, Award, Rocket, GraduationCap, LayoutGrid } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount }) {
  return (
    <header className="sves-navbar sticky top-4 z-40 shadow-sm">
      {/* Brand Logo & Tagline */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
        <div className="w-10 h-10 bg-[#1F2326] text-white font-black rounded-lg flex items-center justify-center font-mono text-xl">
          S
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="sves-logo-title">SVES</span>
            <span className="w-2 h-2 rounded-full bg-[#39C16E] animate-pulse"></span>
          </div>
          <p className="sves-logo-tagline font-mono">
            Connecting Alumni. Building Tomorrow.
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-1">
        <button
          onClick={() => setActiveTab('overview')}
          className={`sves-nav-link ${activeTab === 'overview' ? 'active' : ''}`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab('directory')}
          className={`sves-nav-link ${activeTab === 'directory' ? 'active' : ''}`}
        >
          Alumni ({totalCount?.toLocaleString() || '21,126'})
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`sves-nav-link ${activeTab === 'events' ? 'active' : ''}`}
        >
          Events
        </button>

        <button
          onClick={() => setActiveTab('mentorship')}
          className={`sves-nav-link ${activeTab === 'mentorship' ? 'active' : ''}`}
        >
          Mentorship
        </button>

        <button
          onClick={() => setActiveTab('opportunities')}
          className={`sves-nav-link ${activeTab === 'opportunities' ? 'active' : ''}`}
        >
          Opportunities
        </button>

        <button
          onClick={() => setActiveTab('design-system')}
          className={`sves-nav-link ${activeTab === 'design-system' ? 'active' : ''}`}
        >
          Design System
        </button>
      </nav>

      {/* Action CTA & Status Indicator */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-[#666a6e] px-3 py-1.5 bg-[#e8e8e1] rounded-md">
          <span className="status-dot status-dot-green"></span>
          <span>STATUS: ACTIVE</span>
        </div>

        <button className="sves-btn-dark py-2 px-5 font-mono text-xs font-bold text-white bg-[#1F2326] hover:bg-[#33383d] rounded-full transition-all">
          Log In
        </button>
      </div>
    </header>
  );
}
