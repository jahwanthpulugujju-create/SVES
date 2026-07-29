import React from 'react';
import { Palette, Type, Sliders, Layout, ShieldCheck, CheckCircle2, Layers, Smartphone, Monitor, Tablet } from 'lucide-react';

export default function DesignSystemView() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Banner */}
      <div className="sves-card bg-[#1F2326] text-white border-[#33383d]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="sves-badge sves-badge-orange mb-2">DESIGN SYSTEM & SPECIFICATION POSTER</span>
            <h2 className="text-2xl font-black tracking-tight text-white">SVES UI Kit & Design Tokens</h2>
            <p className="text-xs text-gray-400 mt-1 font-mono">
              Complete design system specs matching the 10 reference poster sections.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#39C16E]">
            <CheckCircle2 className="w-4 h-4" /> COMPONENT CONTRACT VERIFIED
          </div>
        </div>
      </div>

      {/* 1. Design Brief & Visual Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Design Brief */}
        <div className="sves-card">
          <h3 className="font-bold text-[#1F2326] text-base mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FF6B00]" /> 1. Design Brief & Goals
          </h3>
          <div className="space-y-3 text-xs text-[#4b4f54]">
            <p><strong>About SVES:</strong> SVES is an alumni network and innovation community focused on building meaningful connections, sharing opportunities, and empowering the next generation.</p>
            <p><strong>Target Audience:</strong> Students, alumni, mentors, and industry leaders who value collaboration and innovation.</p>
            <p><strong>Core Features:</strong> Alumni Directory & Search, Events & Communities, Mentorship Matching, Career Board, News & Insights.</p>
            <p><strong>Retro Inspiration:</strong> Inspired by Braun modular systems from the 1960s-80s — clean, functional, and human-centered. Tactile UI with bold simplicity.</p>
          </div>
        </div>

        {/* Visual Language Palette */}
        <div className="sves-card">
          <h3 className="font-bold text-[#1F2326] text-base mb-3 flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#39C16E]" /> 2. Color Palette & Typography
          </h3>

          <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono font-bold mb-4">
            <div className="p-3 rounded-lg bg-[#F2F2EE] border border-[#d2d2c8] text-[#1F2326]">
              Off-White<br />#F2F2EE
            </div>
            <div className="p-3 rounded-lg bg-[#1F2326] text-white">
              Charcoal<br />#1F2326
            </div>
            <div className="p-3 rounded-lg bg-[#9FA3A5] text-white">
              Gray<br />#9FA3A5
            </div>
            <div className="p-3 rounded-lg bg-[#FF6B00] text-white">
              Orange<br />#FF6B00
            </div>
            <div className="p-3 rounded-lg bg-[#39C16E] text-white">
              Green<br />#39C16E
            </div>
          </div>

          <div className="space-y-2 text-xs text-[#4b4f54]">
            <div><strong>Typography Headings:</strong> Inter (Bold / Medium / Regular)</div>
            <div><strong>Typography System / Mono:</strong> Space Mono / JetBrains Mono</div>
            <div><strong>Texture & Style:</strong> Soft shadows, rounded edges, perforated grilles, fader sliders, tactile knobs.</div>
          </div>
        </div>
      </div>

      {/* 2. UI Kit Components Showcase (Section 8) */}
      <div className="sves-card">
        <h3 className="font-bold text-[#1F2326] text-base mb-4 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-[#FF6B00]" /> Section 8: UI Kit Components Showcase
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Buttons & Tags */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-500">Buttons & Badges</div>
            <div className="flex flex-wrap gap-2">
              <button className="sves-orange-btn text-xs">Button Primary</button>
              <button className="sves-secondary-btn text-xs py-2 px-4">Button Secondary</button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="sves-badge sves-badge-green">Active Tag</span>
              <span className="sves-badge sves-badge-orange">Featured Tag</span>
              <span className="sves-badge sves-badge-gray">Standard Tag</span>
            </div>
          </div>

          {/* Input Controls */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-500">Input Fields & Toggles</div>
            <input
              type="text"
              placeholder="Input field placeholder..."
              className="w-full p-2 bg-[#f4f4ef] border border-[#d2d2c8] rounded-md text-xs outline-none"
              readOnly
            />
            <div className="flex items-center justify-between text-xs text-gray-700">
              <span>Tactile Switch</span>
              <div className="w-10 h-5 bg-[#39C16E] rounded-full relative p-0.5">
                <div className="w-4 h-4 bg-white rounded-full ml-auto shadow"></div>
              </div>
            </div>
          </div>

          {/* Braun Control Console Graphic Card */}
          <div className="bg-[#1F2326] p-4 rounded-xl text-white font-mono text-xs">
            <div className="flex justify-between text-[10px] text-[#39C16E] mb-2 font-bold">
              <span>SYNCING CONNECTION</span>
              <span className="w-2 h-2 rounded-full bg-[#39C16E] animate-ping"></span>
            </div>
            <div className="space-y-2">
              <div className="sves-fader-track">
                <div className="sves-fader-knob" style={{ left: '50%' }}></div>
              </div>
              <div className="sves-fader-track">
                <div className="sves-fader-knob" style={{ left: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Responsive Breakpoints (Section 10) */}
      <div className="sves-card">
        <h3 className="font-bold text-[#1F2326] text-base mb-4 flex items-center gap-2">
          <Monitor className="w-4 h-4 text-[#39C16E]" /> Section 10: Responsive Breakpoints Specs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono text-xs">
          <div className="p-4 bg-[#f6f6f0] border border-[#e1e1d8] rounded-xl">
            <Smartphone className="w-6 h-6 mx-auto mb-2 text-[#FF6B00]" />
            <div className="font-bold text-[#1F2326]">Mobile</div>
            <div className="text-gray-500">320px — 767px</div>
          </div>

          <div className="p-4 bg-[#f6f6f0] border border-[#e1e1d8] rounded-xl">
            <Tablet className="w-6 h-6 mx-auto mb-2 text-[#39C16E]" />
            <div className="font-bold text-[#1F2326]">Tablet</div>
            <div className="text-gray-500">768px — 1024px</div>
          </div>

          <div className="p-4 bg-[#f6f6f0] border border-[#e1e1d8] rounded-xl">
            <Monitor className="w-6 h-6 mx-auto mb-2 text-[#1F2326]" />
            <div className="font-bold text-[#1F2326]">Desktop</div>
            <div className="text-gray-500">1025px+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
