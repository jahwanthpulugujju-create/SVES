import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExecutiveOverview from './components/ExecutiveOverview';
import DirectoryView from './components/DirectoryView';
import EventsView from './components/EventsView';
import MentorshipMatchmaker from './components/MentorshipMatchmaker';
import OpportunitiesView from './components/OpportunitiesView';
import DesignSystemView from './components/DesignSystemView';
import ProfileModal from './components/ProfileModal';
import { Loader2, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch('/alumni_data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load alumni data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F2F2EE] flex flex-col items-center justify-center text-[#1F2326] p-4 font-mono">
        <Loader2 className="w-10 h-10 text-[#FF6B00] animate-spin mb-4" />
        <h2 className="text-lg font-bold">LOADING SVES ALUMNI DATASET...</h2>
        <p className="text-xs text-gray-500 mt-1">21,126 Deduplicated Profiles System Active</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F2EE] text-[#1F2326] py-6 px-2 sm:px-4">
      {/* Main SVES Poster Outer Frame */}
      <div className="poster-frame">
        {/* Navigation Bar Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          totalCount={data.length}
        />

        {/* Main Section Views */}
        <main>
          {activeTab === 'overview' && (
            <ExecutiveOverview
              onSelectProfile={(p) => setSelectedProfile(p)}
              onViewDirectory={() => setActiveTab('directory')}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'directory' && (
            <DirectoryView
              data={data}
              onSelectProfile={(p) => setSelectedProfile(p)}
            />
          )}

          {activeTab === 'events' && (
            <EventsView />
          )}

          {activeTab === 'mentorship' && (
            <MentorshipMatchmaker
              data={data}
              onSelectProfile={(p) => setSelectedProfile(p)}
            />
          )}

          {activeTab === 'opportunities' && (
            <OpportunitiesView />
          )}

          {activeTab === 'design-system' && (
            <DesignSystemView />
          )}
        </main>

        {/* Poster Bottom Footer Bar (Matching Spec Poster) */}
        <footer className="mt-12 pt-6 border-t border-[#dcdcd5] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666a6e]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1F2326]">SVES 05</span>
            <span>•</span>
            <span className="status-dot status-dot-green"></span>
            <span>SYSTEM STATUS: ACTIVE</span>
          </div>

          <div className="font-bold text-[#1F2326] uppercase tracking-wider">
            BUILDING CONNECTIONS THAT LAST
          </div>

          <div className="bg-[#1F2326] text-white py-2 px-4 rounded-xl text-[11px] flex items-center gap-2 border border-[#33383d]">
            <span>Built for Alumni. Designed for Tomorrow.</span>
          </div>
        </footer>
      </div>

      {/* Profile Detail Drawer Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}
