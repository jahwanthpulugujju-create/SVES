import React from 'react';
import { X, ExternalLink, GraduationCap, Briefcase, MapPin, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative border-blue-500/40" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800/60 rounded-full transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`badge ${
                profile.mentorship_potential === 'High'
                  ? 'badge-high'
                  : profile.mentorship_potential === 'Medium'
                  ? 'badge-medium'
                  : 'badge-low'
              }`}
            >
              {profile.mentorship_potential} Mentorship Readiness
            </span>

            {profile.categories.map((c, idx) => (
              <span key={idx} className="badge badge-category">{c}</span>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-white">{profile.name}</h2>
          <div className="text-sm font-semibold text-blue-400 mt-1">{profile.current_role}</div>
          <div className="text-xs text-gray-300 font-medium mt-0.5">{profile.organization} • {profile.industry}</div>

          <div className="flex items-center gap-4 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-800">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.seniority_notes}</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-3 pt-4 border-t border-gray-800">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-400" /> Education & Qualifications
          </h3>

          <div className="space-y-2">
            {profile.education && profile.education.map((edu, idx) => (
              <div key={idx} className="glass-card p-3 text-xs flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">{edu.institution}</div>
                  <div className="text-gray-400 mt-0.5">{edu.degree} — {edu.field}</div>
                </div>
                {edu.year && <span className="text-blue-400 font-semibold">{edu.year}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Focus Areas */}
        {profile.tech_focus && profile.tech_focus.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> Technical Specializations
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {profile.tech_focus.map((t, idx) => (
                <span key={idx} className="badge badge-tech">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {profile.achievements && profile.achievements.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" /> Key Achievements & Highlights
            </h3>
            <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
              {profile.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        )}

        {/* LinkedIn Link CTA & Notes */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-gray-500">
            <strong>Data Note:</strong> {profile.data_quality_note}
          </div>

          <a
            href={profile.linkedin_url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs w-full sm:w-auto text-center justify-center"
          >
            {profile.has_direct_linkedin ? 'Open LinkedIn Profile' : 'Search Profile on LinkedIn'} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
