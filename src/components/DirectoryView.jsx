import React, { useState, useMemo } from 'react';
import { Search, Filter, ExternalLink, ChevronLeft, ChevronRight, Sliders, Activity } from 'lucide-react';

export default function DirectoryView({ data, onSelectProfile }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMentorship, setSelectedMentorship] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [page, setPage] = useState(1);
  const pageSize = 50;

  // Filtered dataset
  const filteredData = useMemo(() => {
    let result = data;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(q);
        const roleMatch = item.current_role.toLowerCase().includes(q);
        const orgMatch = item.organization.toLowerCase().includes(q);
        const locMatch = item.location.toLowerCase().includes(q);
        const techMatch = item.tech_focus.some(t => t.toLowerCase().includes(q));
        const eduMatch = item.education.some(e => e.institution.toLowerCase().includes(q) || e.degree.toLowerCase().includes(q));
        return nameMatch || roleMatch || orgMatch || locMatch || techMatch || eduMatch;
      });
    }

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.categories.includes(selectedCategory));
    }

    if (selectedMentorship !== 'All') {
      result = result.filter((item) => item.mentorship_potential === selectedMentorship);
    }

    if (selectedTech !== 'All') {
      result = result.filter((item) => item.tech_focus.includes(selectedTech));
    }

    return result;
  }, [data, search, selectedCategory, selectedMentorship, selectedTech]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const currentPage = Math.min(page, totalPages);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleMentorshipChange = (val) => {
    setSelectedMentorship(val);
    setPage(1);
  };

  const categoriesList = [
    'All',
    'Founders / Co-founders',
    'C-suite or Senior Leadership',
    'PhD / Academic / Research-oriented',
    'Specific / Emerging / Future Technologies',
    'Corporate & Technology Professionals'
  ];

  const techList = [
    'All',
    'AI / Machine Learning',
    'Biotech & Life Sciences',
    'Cloud Computing & DevOps',
    'Data Science & Analytics',
    'VLSI & Semiconductor',
    'Embedded Systems & IoT',
    'Automotive & EV Tech',
    'Cybersecurity'
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Braun Hardware Filter Synthesizer Deck */}
      <div className="braun-panel-dark p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#2d3038] pb-3">
          <div className="flex items-center gap-3">
            <Sliders className="w-5 h-5 text-[#ff4d00]" />
            <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
              MODUL 02: HARDWARE SYNTHESIZER FILTER DECK
            </h3>
          </div>
          <span className="font-mono text-xs text-[#00e676] font-bold">MATCH SIGNAL: {filteredData.length.toLocaleString()} MODULES</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by name, role, company, skills, or university..."
              className="bg-[#141619] border border-[#2e3238] rounded-md text-white font-mono text-xs pl-10 pr-4 py-2.5 w-full outline-none focus:border-[#ff4d00]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-gray-400">MENTORSHIP:</span>
              <select
                value={selectedMentorship}
                onChange={(e) => handleMentorshipChange(e.target.value)}
                className="bg-[#141619] border border-[#2e3238] rounded-md text-white font-mono text-xs px-3 py-2 outline-none"
              >
                <option value="All">All Levels</option>
                <option value="High">High Value</option>
                <option value="Medium">Medium Value</option>
                <option value="Low">Low Value</option>
              </select>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-gray-400">TECH FOCUS:</span>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="bg-[#141619] border border-[#2e3238] rounded-md text-white font-mono text-xs px-3 py-2 outline-none"
              >
                {techList.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Module Selector Buttons */}
        <div className="flex overflow-x-auto gap-2 pt-2 border-t border-[#2d3038] no-scrollbar">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#ff4d00] text-white border-[#ff661a]'
                  : 'bg-[#141619] text-gray-400 border-[#2e3238] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Telemetry Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1e2025] border border-[#2d3038] px-5 py-3 rounded-lg font-mono text-xs">
        <div className="text-gray-300">
          FILTER TELEMETRY: Showing <strong className="text-white">{filteredData.length.toLocaleString()}</strong> unique alumni modules
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400">
            Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
          </span>

          <div className="flex items-center gap-1">
            <button
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="braun-btn text-xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="braun-btn text-xs"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modular Table */}
      <div className="braun-panel-dark overflow-hidden">
        <div className="overflow-x-auto">
          <table className="modular-table">
            <thead>
              <tr>
                <th>ALUMNUS MODULE & ROLE</th>
                <th>ORGANIZATION & SECTOR</th>
                <th>EDUCATION & QUALIFICATIONS</th>
                <th>CATEGORY & FOCUS</th>
                <th>LOCATION</th>
                <th>MENTOR VALUE</th>
                <th>LINKEDIN PATCH</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} onClick={() => onSelectProfile(item)}>
                  <td>
                    <div className="font-bold text-white text-sm">{item.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.current_role}</div>
                  </td>
                  <td>
                    <div className="font-medium text-gray-200 text-xs">{item.organization}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{item.industry}</div>
                  </td>
                  <td>
                    {item.education && item.education[0] ? (
                      <div>
                        <div className="text-xs text-gray-300 font-medium">{item.education[0].institution}</div>
                        <div className="text-[11px] text-gray-400">{item.education[0].degree} ({item.education[0].field})</div>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-500">unknown</span>
                    )}
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {item.categories.slice(0, 1).map((c, i) => (
                        <span key={i} className="badge-braun badge-csuite-val">{c}</span>
                      ))}
                      {item.tech_focus.slice(0, 1).map((t, i) => (
                        <span key={i} className="badge-braun badge-tech-val">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className="text-xs text-gray-400 font-mono">{item.location}</span>
                  </td>
                  <td>
                    <span
                      className={`badge-braun ${
                        item.mentorship_potential === 'High'
                          ? 'badge-high-val'
                          : item.mentorship_potential === 'Medium'
                          ? 'badge-tech-val'
                          : 'badge-csuite-val'
                      }`}
                    >
                      {item.mentorship_potential}
                    </span>
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <a
                      href={item.linkedin_url}
                      target="_blank"
                      rel="noreferrer"
                      className="braun-btn braun-btn-orange text-xs"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between bg-[#1e2025] border border-[#2d3038] px-5 py-4 rounded-lg font-mono text-xs">
        <div className="text-gray-400">
          Showing page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="braun-btn text-xs"
          >
            Previous
          </button>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="braun-btn braun-btn-orange text-xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
