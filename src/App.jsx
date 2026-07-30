import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExecutiveOverview from './components/ExecutiveOverview';
import DirectoryView from './components/DirectoryView';
import LeadershipShowcase from './components/LeadershipShowcase';
import MentorshipMatchmaker from './components/MentorshipMatchmaker';
import ProfileModal from './components/ProfileModal';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [data, setData]                   = useState([]);
  const [loading, setLoading]             = useState(true);
  const [activeTab, setActiveTab]         = useState('overview');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch('/alumni_data.json')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#DDDDD7',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        gap: 16,
      }}>
        {/* Fake hardware loading module */}
        <div style={{
          background: '#F0F0EB',
          border: '1px solid #C8C7C1',
          borderRadius: 12,
          padding: '32px 48px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 8px 30px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          textAlign: 'center',
        }}>
          {/* OLED display loading */}
          <div style={{
            background: '#0A0F0A', border: '2px solid #1A1C1A', borderRadius: 8,
            padding: '16px 24px', width: 220,
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 0 0 3px #2A2C28',
            fontFamily: 'var(--font-mono)',
          }}>
            <div style={{ fontSize: 9, letterSpacing: '0.14em', color: '#4A6A42', marginBottom: 6 }}>SVES SYSTEM BOOT</div>
            <Loader2 size={18} style={{ color: '#B8D4B0', animation: 'spin 1s linear infinite', marginBottom: 6 }} />
            <div style={{ fontSize: 11, color: '#B8D4B0', letterSpacing: '0.06em' }}>LOADING ALUMNI DATA</div>
          </div>

          {/* LED bar loading indicator */}
          <div style={{ width: 220, height: 6, background: '#D0D0CA', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: 'var(--b-amber)',
              borderRadius: 3,
              boxShadow: '0 0 8px var(--b-amber)',
              animation: 'loadBar 1.5s ease-in-out infinite',
            }} />
          </div>

          <div style={{ fontSize: 9, letterSpacing: '0.12em', color: '#888882', textTransform: 'uppercase' }}>
            Parsing 21,126 unique profiles...
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes loadBar { 0% { width: 0%; } 50% { width: 70%; } 100% { width: 100%; } }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#D8D8D2' }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} totalCount={data.length} />

      {/* Main content area with max-width container */}
      <main style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {activeTab === 'overview' && (
          <ExecutiveOverview
            onSelectProfile={setSelectedProfile}
            onViewDirectory={() => setActiveTab('directory')}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'directory' && (
          <DirectoryView data={data} onSelectProfile={setSelectedProfile} />
        )}
        {activeTab === 'leadership' && (
          <LeadershipShowcase data={data} onSelectProfile={setSelectedProfile} />
        )}
        {activeTab === 'mentorship' && (
          <MentorshipMatchmaker data={data} onSelectProfile={setSelectedProfile} />
        )}
      </main>

      {/* Footer module strip */}
      <footer style={{
        background: '#28292D',
        borderTop: '1px solid #3E4047',
        marginTop: 40,
        padding: '16px 24px',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              background: '#0D1010', border: '1px solid #333', borderRadius: 4,
              padding: '4px 8px', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#8AB890',
              letterSpacing: '0.1em',
            }}>
              SVES MODUL 05
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <div className="b-led b-led-green animate-pulse-led" />
              <div className="b-led b-led-orange" />
              <div className="b-led b-led-red" />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#666860', letterSpacing: '0.1em' }}>
              SYSTEM STATUS: ONLINE // 21,126 PROFILES INDEXED
            </span>
          </div>

          {/* VU meter footer */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 18 }}>
            {[40, 70, 90, 60, 100, 80, 50, 65, 30, 75].map((h, i) => (
              <div key={i} style={{
                width: 4, height: `${h}%`, borderRadius: 1,
                background: h > 80 ? '#FF5500' : h > 50 ? '#FFB300' : '#00C853',
                opacity: 0.7,
              }} />
            ))}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#444840', letterSpacing: '0.1em' }}>
            BUILDING CONNECTIONS THAT LAST
          </div>
        </div>
      </footer>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
}
