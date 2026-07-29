import React from 'react';
import { X, ExternalLink, GraduationCap, Briefcase, MapPin, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="braun-panel-dark w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative border-[#ff4d00]/40 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Close Tactile Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-[#141619] rounded-full border border-[#2e3238] transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Profile Header Block */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`badge-braun ${
                profile.mentorship_potential === 'High'
                  ? 'badge-high-val'
                  : profile.mentorship_potential === 'Medium'
                  ? 'badge-tech-val'
                  : 'badge-csuite-val'
              }`}
            >
              {profile.mentorship_potential} MENTOR VALUE
            </span>

            {profile.categories.map((c, idx) => (
              <span key={idx} className="badge-braun badge-csuite-val">{c}</span>
            ))}
          </div>

          <h2 className="text-2xl font-black text-white font-mono">{profile.name}</h2>
          <div className="text-sm font-bold text-[#ff4d00] font-mono mt-1">{profile.current_role}</div>
          <div className="text-xs text-gray-300 font-medium mt-0.5">{profile.organization} • {profile.industry}</div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mt-3 pt-3 border-t border-[#2d3038]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00e676]" />
              <span>{profile.seniority_notes}</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-3 pt-4 border-t border-[#2d3038]">
          <h3 className="font-mono text-xs font-bold text-white flex items-center gap-2 tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-[#ff4d00]" /> EDUCATION & QUALIFICATION MODULES
          </h3>

          <div className="space-y-2">
            {profile.education && profile.education.map((edu, idx) => (
              <div key={idx} className="braun-panel p-3 text-xs flex justify-between items-center font-mono">
                <div>
                  <div className="font-bold text-[#1f2228]">{edu.institution}</div>
                  <div className="text-gray-600 mt-0.5">{edu.degree} — {edu.field}</div>
                </div>
                {edu.year && <span className="text-[#ff4d00] font-bold">{edu.year}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Focus Areas */}
        {profile.tech_focus && profile.tech_focus.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-[#2d3038]">
            <h3 className="font-mono text-xs font-bold text-white flex items-center gap-2 tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" /> TECHNICAL FOCUS SPECIALIZATIONS
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {profile.tech_focus.map((t, idx) => (
                <span key={idx} className="badge-braun badge-tech-val">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Key Achievements */}
        {profile.achievements && profile.achievements.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-[#2d3038]">
            <h3 className="font-mono text-xs font-bold text-white flex items-center gap-2 tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#ffaa00]" /> KEY ACHIEVEMENTS & HIGHLIGHTS
            </h3>
            <ul className="list-disc list-inside font-mono text-xs text-gray-300 space-y-1">
              {profile.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        )}

        {/* LinkedIn Link CTA */}
        <div className="pt-4 border-t border-[#2d3038] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="text-[11px] text-gray-500">
            <strong>DATA NOTE:</strong> {profile.data_quality_note}
          </div>

          <a
            href={profile.linkedin_url}
            target="_blank"
            rel="noreferrer"
            className="braun-btn braun-btn-orange text-xs w-full sm:w-auto text-center justify-center"
          >
            {profile.has_direct_linkedin ? 'OPEN LINKEDIN PROFILE' : 'SEARCH LINKEDIN PROFILE'} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
