import React, { useState, useMemo } from 'react';
import { ExternalLink, Target } from 'lucide-react';

const DOMAINS = [
  { id: 'ai',        label: 'AI / Machine Learning',  color: '#FF5500', tech: 'AI / Machine Learning'    },
  { id: 'biotech',   label: 'Biotech & Life Sci',      color: '#00C853', tech: 'Biotech & Life Sciences'  },
  { id: 'vlsi',      label: 'VLSI & Semicond.',        color: '#FFB300', tech: 'VLSI & Semiconductor'     },
  { id: 'cloud',     label: 'Cloud & DevOps',          color: '#2979FF', tech: 'Cloud Computing & DevOps' },
  { id: 'data',      label: 'Data Science',            color: '#7C4DFF', tech: 'Data Science & Analytics' },
  { id: 'embedded',  label: 'Embedded & IoT',          color: '#00BCD4', tech: 'Embedded Systems & IoT'   },
  { id: 'ev',        label: 'Automotive & EV',         color: '#E91E63', tech: 'Automotive & EV Tech'     },
  { id: 'founders',  label: 'Founders',                color: '#FF5500', tech: '__FOUNDERS__'              },
];

const S = {
  label: { fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888882' },
  panel: (extra = {}) => ({ background: '#F0F0EB', border: '1px solid #C8C7C1', borderRadius: 12, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 2px 8px rgba(0,0,0,0.10)', ...extra }),
  panelDark: (extra = {}) => ({ background: '#28292D', border: '1px solid #3E4047', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.35)', ...extra }),
};

export default function MentorshipMatchmaker({ data, onSelectProfile }) {
  const [activeDomain, setActiveDomain] = useState('ai');
  const domain = DOMAINS.find(d => d.id === activeDomain);

  const matches = useMemo(() => {
    return data.filter(a => {
      if (!a.mentorship_potential === 'High' && a.mentorship_potential !== 'High') return false;
      if (domain.tech === '__FOUNDERS__') return a.categories?.includes('Founders / Co-founders');
      return a.tech_focus?.includes(domain.tech) && a.mentorship_potential === 'High';
    });
  }, [data, domain]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '24px 0 48px', animation: 'fadeUp 0.35s ease both' }}>

      {/* ═══ HEADER MODULE ═══ */}
      <div style={{ ...S.panelDark({ padding: '20px 24px' }) }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <Target size={16} style={{ color: '#00C853' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: '#666860', textTransform: 'uppercase' }}>
            MODUL 04 // INNOVATION OFFICE MENTOR PATCH PANEL
          </span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 20, color: '#E8E8E2', marginBottom: 4 }}>
          High-Value Mentor Matching
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666860', lineHeight: 1.6 }}>
          Connect startup founders and researchers with verified High-Potential alumni advisors in your target domain.
        </p>
      </div>

      {/* ═══ DOMAIN PATCH MATRIX ═══ */}
      <div style={{ ...S.panel({ padding: 20 }) }}>
        <div style={{ ...S.label, marginBottom: 12 }}>Signal Domain Selector // Patch Matrix</div>
        {/* LED light bar */}
        <div className="b-led-bar" style={{ marginBottom: 14 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
          {DOMAINS.map(d => {
            const isActive = activeDomain === d.id;
            const count = d.tech === '__FOUNDERS__'
              ? data.filter(a => a.categories?.includes('Founders / Co-founders') && a.mentorship_potential === 'High').length
              : data.filter(a => a.tech_focus?.includes(d.tech) && a.mentorship_potential === 'High').length;

            return (
              <button
                key={d.id}
                onClick={() => setActiveDomain(d.id)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 6,
                  border: isActive ? `1px solid ${d.color}` : '1px solid #C8C7C1',
                  background: isActive ? `${d.color}15` : 'rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'left',
                  boxShadow: isActive ? `0 0 10px ${d.color}30, inset 0 1px 0 rgba(255,255,255,0.5)` : 'inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: d.color,
                    boxShadow: isActive ? `0 0 6px ${d.color}` : 'none',
                  }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: d.color, fontWeight: 600 }}>
                    {count}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: isActive ? d.color : '#666860' }}>
                  {d.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ MATCH RESULT HEADER ═══ */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#E8E8E2', borderRadius: 8, border: '1px solid #C8C7C1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: domain.color, boxShadow: `0 0 6px ${domain.color}` }} />
          <span style={{ ...S.label }}>
            SIGNAL VERIFIED // {matches.length} MENTOR MODULES IN {domain.label.toUpperCase()}
          </span>
        </div>
        {/* Mini faders */}
        <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 20 }}>
          {[60, 80, 100, 75, 50].map((h, i) => (
            <div key={i} style={{ width: 4, height: `${h}%`, background: domain.color, borderRadius: 1, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      {/* ═══ MENTOR CARD GRID ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {matches.map(alumnus => (
          <div
            key={alumnus.id}
            onClick={() => onSelectProfile(alumnus)}
            style={{
              ...S.panel({
                padding: 18, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: 12,
                transition: 'all 0.2s ease',
              }),
            }}
          >
            {/* Card accent cartridge bar */}
            <div style={{
              height: 3, background: domain.color,
              borderRadius: '3px 3px 0 0',
              marginTop: -18, marginLeft: -18, marginRight: -18, marginBottom: 0,
              boxShadow: `0 0 6px ${domain.color}55`,
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `radial-gradient(circle at 35% 30%, ${domain.color}66 0%, #E0E0DA 100%)`,
                  border: `2px solid ${domain.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: '#1A1C1E',
                }}>
                  {alumnus.name?.[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#1A1C1E' }}>{alumnus.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: domain.color, marginTop: 1 }}>
                    {alumnus.current_role}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="b-led b-led-green" />
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#555552' }}>
              {alumnus.organization}
            </div>

            {alumnus.education?.[0] && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#AAAAA4' }}>
                🎓 {alumnus.education[0].institution}
              </div>
            )}

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              paddingTop: 10, borderTop: '1px solid rgba(0,0,0,0.07)',
            }}>
              <span style={{ ...S.label, color: '#AAAAA4', fontSize: 8 }}>{alumnus.location}</span>
              <a
                href={alumnus.linkedin_url}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9, fontWeight: 600, padding: '4px 10px',
                  background: domain.color, color: '#fff',
                  border: 'none', borderRadius: 3,
                  cursor: 'pointer', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                Connect <ExternalLink size={9} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
