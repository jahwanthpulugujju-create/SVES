import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExecutiveOverview from './components/ExecutiveOverview';
import DirectoryView from './components/DirectoryView';
import LeadershipShowcase from './components/LeadershipShowcase';
import MentorshipMatchmaker from './components/MentorshipMatchmaker';
import DataAppendixView from './components/DataAppendixView';
import ProfileModal from './components/ProfileModal';
import { Loader2 } from 'lucide-react';

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
      <div className="min-h-screen bg-[#090d16] flex flex-col items-center justify-center text-white p-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <h2 className="text-lg font-bold">Loading Alumni Intelligence Dataset...</h2>
        <p className="text-xs text-gray-400 mt-1">Parsing 21,126 unique deduplicated alumni profiles</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalCount={data.length}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'overview' && (
          <ExecutiveOverview
            onSelectProfile={(p) => setSelectedProfile(p)}
            onViewDirectory={() => setActiveTab('directory')}
          />
        )}

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

        {activeTab === 'appendix' && (
          <DataAppendixView />
        )}
      </main>

      {/* Profile Modal Drawer */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}
