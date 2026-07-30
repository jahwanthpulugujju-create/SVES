import React, { useState, useMemo } from 'react';
import { Rocket, Award, BookOpen, Cpu, Star, ExternalLink } from 'lucide-react';

const S = {
  label: { fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888882' },
  panel: (extra = {}) => ({ background: '#F0F0EB', border: '1px solid #C8C7C1', borderRadius: 12, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 2px 8px rgba(0,0,0,0.10)', ...extra }),
  panelDark: (extra = {}) => ({ background: '#28292D', border: '1px solid #3E4047', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.35)', ...extra }),
};

const SUB_TABS = [
  { id: 'founders',  label: 'Founders',   icon: Rocket,     accent: '#FF5500', cat: 'Founders / Co-founders' },
  { id: 'csuite',    label: 'C-Suite',    icon: Award,      accent: '#2979FF', cat: 'C-suite or Senior Leadership' },
  { id: 'academic',  label: 'PhD / Acad', icon: BookOpen,   accent: '#7C4DFF', cat: 'PhD / Academic / Research-oriented' },
  { id: 'tech',      label: 'Frontier Tech', icon: Cpu,     accent: '#00C853', cat: 'Specific / Emerging / Future Technologies' },
  { id: 'highval',   label: 'High-Value', icon: Star,       accent: '#FFB300', cat: '__HIGH__' },
];

function AlumniCard({ alumnus, accent, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onSelect(alumnus)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...S.panel({
          padding: 18,
          cursor: 'pointer',
          borderColor: hovered ? accent : '#C8C7C1',
          boxShadow: hovered
            ? `inset 0 1px 0 rgba(255,255,255,0.85), 0 6px 20px rgba(0,0,0,0.15), 0 0 0 1px ${accent}40`
            : 'inset 0 1px 0 rgba(255,255,255,0.85), 0 2px 8px rgba(0,0,0,0.10)',
          transition: 'all 0.2s ease',
          display: 'flex', flexDirection: 'column', gap: 12,
        }),
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Avatar knob */}
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: `radial-gradient(circle at 35% 30%, ${accent}88 0%, ${accent}22 60%, #E0E0DA 100%)`,
            border: `2px solid ${accent}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: '#1A1C1E',
          }}>
            {alumnus.name?.[0] || '?'}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#1A1C1E', lineHeight: 1.2 }}>{alumnus.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: accent, marginTop: 2 }}>
              {alumnus.current_role}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', align: 'center' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: alumnus.mentorship_potential === 'High' ? '#00C853' : '#FFB300',
            boxShadow: `0 0 5px ${alumnus.mentorship_potential === 'High' ? '#00C853' : '#FFB300'}`,
          }} />
        </div>
      </div>

      {/* Org + Location */}
      <div>
        <div style={{ fontWeight: 600, fontSize: 12, color: '#555552' }}>{alumnus.organization}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#AAAAA4', marginTop: 2 }}>
          {alumnus.location}
        </div>
      </div>

      {/* Tech tags */}
      {alumnus.tech_focus?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {alumnus.tech_focus.slice(0, 2).map((t, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              padding: '2px 7px',
              background: `${accent}15`,
              color: accent,
              border: `1px solid ${accent}35`,
              borderRadius: 3,
            }}>
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Bottom row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 10, borderTop: '1px solid rgba(0,0,0,0.07)',
      }}>
        <span style={{ ...S.label, color: '#AAAAA4', fontSize: 8 }}>{alumnus.seniority_notes}</span>
        <a
          href={alumnus.linkedin_url}
          target="_blank"
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9, fontWeight: 600, padding: '4px 10px',
            background: accent, color: '#fff',
            border: 'none', borderRadius: 3,
            cursor: 'pointer', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 4,
            boxShadow: `0 0 8px ${accent}44`,
          }}
        >
          LinkedIn <ExternalLink size={9} />
        </a>
      </div>
    </div>
  );
}

export default function LeadershipShowcase({ data, onSelectProfile }) {
  const [activeSubTab, setActiveSubTab] = useState('founders');

  const currentSubTab = SUB_TABS.find(t => t.id === activeSubTab);

  const list = useMemo(() => {
    if (activeSubTab === 'highval') return data.filter(d => d.mentorship_potential === 'High');
    return data.filter(d => d.categories?.includes(currentSubTab.cat));
  }, [data, activeSubTab, currentSubTab]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '24px 0 48px', animation: 'fadeUp 0.35s ease both' }}>

      {/* ═══ TAB SELECTOR — Hardware selector buttons ═══ */}
      <div style={{
        ...S.panel({ padding: '14px 20px' }),
        display: 'flex', gap: 6, overflowX: 'auto',
      }} className="no-scrollbar">
        {SUB_TABS.map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          const count = tab.id === 'highval'
            ? data.filter(d => d.mentorship_potential === 'High').length
            : data.filter(d => d.categories?.includes(tab.cat)).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '8px 14px',
                borderRadius: 5,
                border: isActive ? `1px solid ${tab.accent}` : '1px solid #C8C7C1',
                background: isActive ? tab.accent : 'rgba(0,0,0,0.04)',
                color: isActive ? '#fff' : '#666860',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: 6,
                boxShadow: isActive ? `0 0 10px ${tab.accent}44, inset 0 1px 0 rgba(255,255,255,0.2)` : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon size={11} />
              {tab.label}
              <span style={{
                background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.1)',
                padding: '1px 6px', borderRadius: 10,
                fontSize: 8,
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ═══ RESULT HEADER BAR ═══ */}
      <div style={{
        ...S.panelDark({ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }),
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="b-led" style={{ background: currentSubTab.accent, boxShadow: `0 0 6px ${currentSubTab.accent}` }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: '#888882', textTransform: 'uppercase' }}>
            {currentSubTab.label} // {list.length} modules loaded
          </span>
        </div>
        {/* Mini VU meter */}
        <div className="b-vu" style={{ height: 20, gap: 2 }}>
          {[60, 40, 80, 100, 70].map((h, i) => (
            <div key={i} style={{
              width: 4, height: `${h}%`, borderRadius: 1,
              background: currentSubTab.accent, opacity: 0.7,
            }} />
          ))}
        </div>
      </div>

      {/* ═══ CARDS GRID ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {list.map(alumnus => (
          <AlumniCard
            key={alumnus.id}
            alumnus={alumnus}
            accent={currentSubTab.accent}
            onSelect={onSelectProfile}
          />
        ))}
      </div>
    </div>
  );
}
