import React from 'react';
import { X, ExternalLink, MapPin, GraduationCap, Cpu, Award, Sparkles } from 'lucide-react';

const CAT_COLORS = {
  'Founders / Co-founders':                     '#FF5500',
  'C-suite or Senior Leadership':               '#2979FF',
  'PhD / Academic / Research-oriented':         '#7C4DFF',
  'Specific / Emerging / Future Technologies':  '#00C853',
  'Corporate & Technology Professionals':       '#888882',
};

export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  const primaryCat = profile.categories?.[0];
  const accent = CAT_COLORS[primaryCat] || '#FF5500';
  const mentorColor = profile.mentorship_potential === 'High' ? '#00C853' : profile.mentorship_potential === 'Medium' ? '#FFB300' : '#888882';

  return (
    <div className="b-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 600,
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#F0F0EB',
          border: `1px solid ${accent}55`,
          borderRadius: 16,
          boxShadow: `0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px ${accent}30, inset 0 1px 0 rgba(255,255,255,0.85)`,
          position: 'relative',
        }}
        className="animate-in"
      >
        {/* Accent top light bar */}
        <div style={{
          height: 5,
          background: `linear-gradient(90deg, transparent 0%, ${accent} 20%, #fff 50%, ${accent} 80%, transparent 100%)`,
          borderRadius: '16px 16px 0 0',
          boxShadow: `0 0 12px ${accent}66`,
        }} />

        <div style={{ padding: '24px 28px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              {/* Knob avatar */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: `radial-gradient(circle at 35% 30%, ${accent}88 0%, ${accent}22 60%, #D8D8D2 100%)`,
                border: `3px solid ${accent}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22, color: '#1A1C1E',
                boxShadow: `0 4px 12px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)`,
              }}>
                {profile.name?.[0]}
              </div>

              <div>
                {/* Category badge */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
                  {profile.categories?.map((c, i) => (
                    <span key={i} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                      padding: '3px 8px', borderRadius: 3,
                      background: `${CAT_COLORS[c] || '#888'}18`,
                      color: CAT_COLORS[c] || '#888',
                      border: `1px solid ${CAT_COLORS[c] || '#888'}40`,
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
                <div style={{ fontWeight: 800, fontSize: 20, color: '#1A1C1E', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  {profile.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accent, marginTop: 4 }}>
                  {profile.current_role}
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(0,0,0,0.07)',
                border: '1px solid #C8C7C1',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#888882',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Meta info row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 14,
            padding: '12px 14px',
            background: 'rgba(0,0,0,0.04)',
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.07)',
            marginBottom: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#555552' }}>
              <Award size={12} style={{ color: accent }} />
              <strong>{profile.organization}</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#555552' }}>
              <MapPin size={12} style={{ color: '#888882' }} />
              {profile.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: mentorColor, boxShadow: `0 0 5px ${mentorColor}` }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: mentorColor, fontWeight: 600 }}>
                {profile.mentorship_potential} MENTOR VALUE
              </span>
            </div>
          </div>

          {/* LED light bar divider */}
          <div className="b-led-bar" style={{ marginBottom: 20 }} />

          {/* Education */}
          {profile.education?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888882',
                display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
              }}>
                <GraduationCap size={11} /> Education & Qualifications
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {profile.education.map((e, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 12px',
                    background: '#E8E8E2',
                    border: '1px solid #D8D8D2',
                    borderRadius: 6,
                    borderLeft: `3px solid ${accent}`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 12, color: '#1A1C1E' }}>{e.institution}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#888882', marginTop: 2 }}>
                        {e.degree} — {e.field}
                      </div>
                    </div>
                    {e.year && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: accent }}>{e.year}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Focus */}
          {profile.tech_focus?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888882',
                display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
              }}>
                <Cpu size={11} /> Technical Specializations
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {profile.tech_focus.map((t, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                    padding: '4px 10px', borderRadius: 4,
                    background: `${accent}15`, color: accent,
                    border: `1px solid ${accent}35`,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {profile.achievements?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888882',
                display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
              }}>
                <Sparkles size={11} /> Key Achievements
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {profile.achievements.map((a, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 8, alignItems: 'flex-start',
                    fontFamily: 'var(--font-mono)', fontSize: 11, color: '#555552', lineHeight: 1.5,
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: accent, marginTop: 4, flexShrink: 0,
                    }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{
            paddingTop: 16,
            borderTop: '1px solid rgba(0,0,0,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#AAAAA4', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {profile.has_direct_linkedin ? 'DIRECT LINKEDIN PROFILE' : 'LINKEDIN SEARCH QUERY'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#888882', marginTop: 2 }}>
                {profile.data_quality_note}
              </div>
            </div>

            <a
              href={profile.linkedin_url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                padding: '10px 20px',
                background: accent, color: '#fff',
                border: 'none', borderRadius: 6,
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: `0 4px 14px ${accent}44`,
                transition: 'all 0.15s ease',
              }}
            >
              Open Profile <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
