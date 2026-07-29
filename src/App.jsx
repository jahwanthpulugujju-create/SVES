import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DirectoryView from './components/DirectoryView';
import LeadershipShowcase from './components/LeadershipShowcase';
import MentorshipMatchmaker from './components/MentorshipMatchmaker';
import ProfileModal from './components/ProfileModal';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('directory'); // Default directly to Alumni Directory
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
        <p className="text-xs text-gray-500 mt-1">Parsing 21,126 Unique Alumni Profiles</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F2EE] text-[#1F2326] py-6 px-2 sm:px-4">
      {/* Outer Container Frame */}
      <div className="poster-frame">
        {/* Streamlined Alumni Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          totalCount={data.length}
        />

        {/* Primary View Focus: Alumni Directory (21,126 Records) */}
        <main>
          {activeTab === 'directory' && (
            <DirectoryView
              data={data}
              onSelectProfile={(p) => setSelectedProfile(p)}
            />
          )}

          {activeTab === 'leadership' && (
            <LeadershipShowcase
              data={data}
              onSelectProfile={(p) => setSelectedProfile(p)}
            />
          )}

          {activeTab === 'mentorship' && (
            <MentorshipMatchmaker
              data={data}
              onSelectProfile={(p) => setSelectedProfile(p)}
            />
          )}
        </main>

        {/* Clean Footer Bar */}
        <footer className="mt-12 pt-6 border-t border-[#dcdcd5] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666a6e]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1F2326]">SVES ALUMNI NETWORK</span>
            <span>•</span>
            <span className="status-dot status-dot-green"></span>
            <span>21,126 UNIQUE PROFILES LOADED</span>
          </div>

          <div className="bg-[#1F2326] text-white py-2 px-4 rounded-xl text-[11px] flex items-center gap-2 border border-[#33383d]">
            <span>Connecting Alumni. Building Tomorrow.</span>
          </div>
        </footer>
      </div>

      {/* Profile Detail Modal Drawer */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}
