import React from 'react';
import { Users, Star, Cpu } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, totalCount }) {
  const tabs = [
    { id: 'overview',    label: 'Overview',   icon: null },
    { id: 'directory',   label: 'Directory',  icon: null },
    { id: 'leadership',  label: 'Founders & Execs', icon: null },
    { id: 'mentorship',  label: 'Mentor Match', icon: null },
  ];

  return (
    <header style={{
      background: '#E8E8E2',
      borderBottom: '1px solid #C8C7C1',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 12px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
    }}>
      {/* Top strip — LED light bar */}
      <div style={{
        height: 5,
        background: 'linear-gradient(90deg, #28292D 0%, #444 5%, #FFB300 15%, #fff9e0 22%, #FFB300 30%, #555 50%, #FFB300 70%, #fff9e0 78%, #FFB300 85%, #444 95%, #28292D 100%)',
        boxShadow: '0 0 10px rgba(255,179,0,0.35)',
      }} />

      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        gap: 24,
      }}>
        {/* Brand — BRAUN-style logotype */}
        <div
          onClick={() => setActiveTab('overview')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {/* OLED-style logo display */}
          <div style={{
            background: '#0D1010',
            border: '2px solid #333',
            borderRadius: 6,
            padding: '6px 10px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.06em',
            color: '#C8D8C0',
            lineHeight: 1,
            boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.8), 0 0 0 1px #1A1C1A',
            userSelect: 'none',
          }}>
            <div style={{ fontSize: 10, letterSpacing: '0.16em', color: '#7A9070', marginBottom: 2 }}>SVES</div>
            <div>ALUMNI</div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', color: '#1A1C1E', lineHeight: 1 }}>
              MODUL SYSTEM
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              letterSpacing: '0.14em',
              color: '#888882',
              marginTop: 3,
              textTransform: 'uppercase',
            }}>
              {(totalCount || 21126).toLocaleString()} UNIQUE ALUMNI
            </div>
          </div>
        </div>

        {/* Nav Tabs — Hardware-style selector tabs */}
        <nav style={{ display: 'flex', gap: 4 }} role="navigation">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '7px 14px',
                  borderRadius: 5,
                  border: isActive ? '1px solid #C0B0A0' : '1px solid transparent',
                  background: isActive
                    ? 'linear-gradient(180deg, #F8F8F3 0%, #EAEAE4 100%)'
                    : 'transparent',
                  color: isActive ? '#1A1C1E' : '#888882',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.12)'
                    : 'none',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
              >
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 20,
                    height: 2,
                    background: 'var(--b-orange)',
                    borderRadius: 1,
                    boxShadow: '0 0 4px var(--b-orange)',
                  }} />
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right side — Status indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          {/* VU Meter */}
          <div className="b-vu" style={{ height: 28, gap: 2 }}>
            {[35, 55, 80, 100, 90, 65, 40, 25].map((h, i) => (
              <div
                key={i}
                className="b-vu-bar"
                style={{
                  height: `${h}%`,
                  width: 4,
                  background: h > 80 ? 'var(--b-orange)' : h > 50 ? 'var(--b-amber)' : 'var(--b-green)',
                  boxShadow: h > 80 ? '0 0 4px var(--b-orange)' : 'none',
                }}
              />
            ))}
          </div>

          {/* Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div className="b-led b-led-green animate-pulse-led" />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              letterSpacing: '0.1em',
              color: '#888882',
              textTransform: 'uppercase',
            }}>
              ONLINE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
