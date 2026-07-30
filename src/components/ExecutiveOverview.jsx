import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

/* Animated counter hook */
function useCounter(target, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setVal(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return val;
}

const S = {
  page: { display: 'flex', flexDirection: 'column', gap: 20, padding: '24px 0 40px', animation: 'fadeUp 0.35s ease both' },

  /* Row helpers */
  row: (gap = 16) => ({ display: 'flex', gap, flexWrap: 'wrap' }),
  col: (flex = 1) => ({ flex }),

  /* Panel */
  panel: (extra = {}) => ({
    background: '#F0F0EB',
    border: '1px solid #C8C7C1',
    borderRadius: 12,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 2px 8px rgba(0,0,0,0.10)',
    ...extra,
  }),

  panelDark: (extra = {}) => ({
    background: '#28292D',
    border: '1px solid #3E4047',
    borderRadius: 12,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.35)',
    color: '#BDBDB8',
    ...extra,
  }),

  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#888882',
  },
};

/* ── OLED-style screen readout with scanlines ── */
function Screen({ children, style = {} }) {
  return (
    <div style={{
      background: '#0A0F0A',
      border: '2px solid #1A1C1A',
      borderRadius: 8,
      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8), 0 0 0 3px #2A2C28, 0 0 0 4px #3A3C38',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* scanlines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        zIndex: 1, pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}

/* ── Rotary Knob SVG ── */
function Knob({ size = 48, label, color = '#FF5500' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #6A6C70 0%, #3A3C40 40%, #28292D 100%)',
        border: '2px solid #1A1C1E',
        boxShadow: '0 3px 10px rgba(0,0,0,0.55), inset 0 1px 2px rgba(255,255,255,0.12)',
        position: 'relative',
        cursor: 'pointer',
      }}>
        {/* indicator dot */}
        <div style={{
          position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)',
          width: size > 40 ? 4 : 3, height: size > 40 ? 12 : 8,
          background: color, borderRadius: 2,
          boxShadow: `0 0 5px ${color}`,
        }} />
        {/* center reflective rim */}
        <div style={{
          position: 'absolute', inset: 6, borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          border: '1px solid rgba(255,255,255,0.08)',
        }} />
      </div>
      {label && <span style={{ ...S.label, fontSize: 8 }}>{label}</span>}
    </div>
  );
}

/* ── Category stat card ── */
function StatCard({ icon, title, value, subtitle, accent }) {
  const counter = useCounter(value);
  return (
    <div style={{
      ...S.panel({ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minWidth: 160 }),
    }}>
      {/* label strip */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ ...S.label }}>{title}</span>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: accent,
          boxShadow: `0 0 6px ${accent}`,
        }} />
      </div>

      {/* big number */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 32,
        color: '#1A1C1E',
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}>
        {counter.toLocaleString()}
      </div>

      {/* sub text */}
      <div style={{ ...S.label, color: '#AAAAA4' }}>{subtitle}</div>

      {/* accent bar */}
      <div style={{
        height: 3,
        borderRadius: 2,
        background: accent,
        width: '100%',
        opacity: 0.4,
      }} />
    </div>
  );
}

/* ── Fader visual ── */
function Fader({ label, pct = 65, color = '#FF5500', height = 80 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
      <span style={{ ...S.label, fontSize: 8 }}>{Math.round(pct)}%</span>
      <div style={{
        width: 8, height, background: '#1A1C1A',
        borderRadius: 4, position: 'relative',
        boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.6)',
        border: '1px solid #111',
      }}>
        {/* fill */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: `${pct}%`,
          background: color,
          borderRadius: 3,
          boxShadow: `0 0 6px ${color}66`,
          transition: 'height 1s ease',
        }} />
        {/* knob */}
        <div style={{
          position: 'absolute',
          top: `${100 - pct}%`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 22, height: 13,
          background: 'linear-gradient(180deg, #D8D8D2 0%, #AEAEA8 100%)',
          border: '1px solid #888',
          borderRadius: 3,
          boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: '70%', height: 1, background: color }} />
        </div>
      </div>
      <span style={{ ...S.label, fontSize: 8 }}>{label}</span>
    </div>
  );
}

/* ── Alumni mini profile row ── */
function AlumniRow({ name, role, org, status = 'green', link }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '9px 0',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
    }}>
      {/* avatar */}
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #6A6C70 0%, #3A3C40 100%)',
        border: '2px solid #C8C7C1',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, color: '#C8C8C2',
        flexShrink: 0,
      }}>
        {name[0]}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: '#1A1C1E', lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#888882', marginTop: 2 }}>
          {role} · {org}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div className={`b-led ${status === 'green' ? 'b-led-green' : 'b-led-orange'}`} />
        <a href={link} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ color: '#888', display: 'flex' }}>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

export default function ExecutiveOverview({ onSelectProfile, onViewDirectory, setActiveTab }) {
  const totalCount = useCounter(21126, 2500);

  const statCards = [
    { icon: '🚀', title: 'Founders', value: 27,   subtitle: 'Active Company Founders',   accent: '#FF5500' },
    { icon: '👔', title: 'C-Suite & Execs', value: 77, subtitle: 'Senior Executive Leaders', accent: '#2979FF' },
    { icon: '🔬', title: 'PhD & Academic', value: 105, subtitle: 'Researchers & Professors',  accent: '#7C4DFF' },
    { icon: '⚡', title: 'Frontier Tech', value: 631, subtitle: 'AI · Biotech · VLSI · Cloud', accent: '#00C853' },
  ];

  const featuredAlumni = [
    { name: 'Vineela Suri',         role: 'Product Manager', org: 'Microsoft', link: 'https://linkedin.com/search/results/all/?keywords=Vineela+Suri+Shri+Vishnu' },
    { name: 'Sumedh Sonkamble',     role: 'Founder & CEO',   org: 'Neurom Innovations', link: 'https://linkedin.com/search/results/all/?keywords=Sumedh+Sonkamble' },
    { name: 'Kumar Prasad T.',      role: 'Founder & CTO',   org: 'Matter EV', link: 'https://linkedin.com/search/results/all/?keywords=Kumar+Prasad+Telikepalli' },
    { name: 'Sowmya Darapaneni',    role: 'Co-Founder & CEO',org: 'Avinya Neurotech', link: 'https://linkedin.com/search/results/all/?keywords=Sowmya+Darapaneni' },
  ];

  const techBreakdown = [
    { label: 'Biotech & Life Sci', pct: 41, count: 259, color: '#00C853' },
    { label: 'AI & Machine Lrng',  pct: 26, count: 167, color: '#FF5500' },
    { label: 'Cloud & DevOps',     pct: 21, count: 130, color: '#2979FF' },
    { label: 'Data Science',       pct: 20, count: 127, color: '#7C4DFF' },
    { label: 'VLSI & Semicond.',   pct: 10, count: 65,  color: '#FFB300' },
  ];

  return (
    <div style={S.page}>
      {/* ═══ ROW 1: HERO MODULE ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'stretch' }}>
        {/* Hero CRT Screen */}
        <Screen style={{ padding: 36, minHeight: 220 }}>
          {/* CRT flicker header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div className="b-led b-led-green animate-pulse-led" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: '#4A6A42', textTransform: 'uppercase' }}>
              SVES // ALUMNI TELEMETRY // SYSTEM ACTIVE
            </span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', color: '#B8D4B0' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#6A9A62', marginBottom: 8 }}>
              NETWORK POPULATION READOUT:
            </div>
            <div style={{
              fontSize: 72, fontWeight: 700,
              color: '#C8E4C0',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              textShadow: '0 0 30px rgba(180,220,170,0.4)',
            }}>
              {totalCount.toLocaleString()}
            </div>
            <div style={{ fontSize: 14, letterSpacing: '0.2em', color: '#5A8A52', marginTop: 6 }}>
              UNIQUE ALUMNI PROFILES
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 20 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>42+</div>
                <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#5A8A52' }}>COUNTRIES</div>
              </div>
              <div style={{ width: 1, background: '#1E3A1A' }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>98%</div>
                <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#5A8A52' }}>SATISFACTION</div>
              </div>
              <div style={{ width: 1, background: '#1E3A1A' }} />
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>315</div>
                <div style={{ fontSize: 9, letterSpacing: '0.1em', color: '#5A8A52' }}>STARTUPS</div>
              </div>
            </div>
          </div>
        </Screen>

        {/* Right: hardware controls column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 140 }}>
          {/* Rotary knobs module */}
          <div style={{ ...S.panel({ padding: 16 }) }}>
            <div style={{ ...S.label, marginBottom: 12 }}>GAIN CONTROL</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Knob size={44} label="REACH" color="#FF5500" />
              <Knob size={44} label="SIGNAL" color="#00C853" />
            </div>
          </div>

          {/* Faders module */}
          <div style={{ ...S.panel({ padding: 16, flex: 1, display: 'flex', flexDirection: 'column' }) }}>
            <div style={{ ...S.label, marginBottom: 12 }}>CATEGORY MIX</div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flex: 1, alignItems: 'flex-start', paddingTop: 8 }}>
              <Fader label="FOUND" pct={20}  height={90} color="#FF5500" />
              <Fader label="EXEC"  pct={33}  height={90} color="#2979FF" />
              <Fader label="PHD"   pct={48}  height={90} color="#7C4DFF" />
              <Fader label="TECH"  pct={100} height={90} color="#00C853" />
            </div>
          </div>

          {/* LED indicator strip */}
          <div style={{ ...S.panel({ padding: 12 }) }}>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
              <div className="b-led b-led-green" />
              <div className="b-led b-led-orange" />
              <div className="b-led b-led-amber" />
              <div className="b-led b-led-red" />
              <div className="b-led b-led-green animate-pulse-led" />
            </div>
            <div style={{ ...S.label, textAlign: 'center', marginTop: 6, fontSize: 8 }}>MODUL STATUS</div>
          </div>
        </div>
      </div>

      {/* ═══ ROW 2: STAT CARDS ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
        {statCards.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* ═══ ROW 3: FEATURED ALUMNI + TECH BREAKDOWN ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Featured Alumni Module */}
        <div style={{ ...S.panel({ padding: 20 }) }}>
          <div className="b-module-header">
            <span className="b-module-title">Featured Alumni Profiles</span>
            <button
              onClick={() => setActiveTab('directory')}
              className="b-btn b-btn-ghost"
              style={{ fontSize: 9, padding: '5px 10px' }}
            >
              ALL {totalCount.toLocaleString()} →
            </button>
          </div>

          {featuredAlumni.map((a, i) => (
            <AlumniRow key={i} {...a} />
          ))}
        </div>

        {/* Tech Breakdown Module */}
        <div style={{ ...S.panel({ padding: 20 }) }}>
          <div className="b-module-header">
            <span className="b-module-title">Frontier Tech Distribution</span>
            <span style={{ ...S.label, color: '#00C853' }}>631 TOTAL</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {techBreakdown.map((t, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#555552' }}>{t.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, color: '#1A1C1E' }}>
                    {t.count}
                  </span>
                </div>
                <div style={{ height: 5, background: '#D8D8D2', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${t.pct}%`,
                    background: t.color,
                    borderRadius: 3,
                    boxShadow: `0 0 4px ${t.color}66`,
                    transition: 'width 1.2s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Perforated grille decoration */}
          <div className="b-grille" style={{ height: 48, marginTop: 16 }} />
        </div>
      </div>

      {/* ═══ ROW 4: CTA MODULE ═══ */}
      <div style={{ ...S.panelDark({ padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }) }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: '#666860', marginBottom: 6 }}>
            FULL DATABASE ACCESS
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#E8E8E2', letterSpacing: '-0.01em' }}>
            Browse All 21,126 Alumni Profiles
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="b-btn b-btn-orange" onClick={() => setActiveTab('directory')}>
            Open Directory <ArrowUpRight size={14} />
          </button>
          <button className="b-btn b-btn-dark" onClick={() => setActiveTab('mentorship')}>
            Mentor Match
          </button>
        </div>
      </div>
    </div>
  );
}
