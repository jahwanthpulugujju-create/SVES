import React, { useState, useMemo } from 'react';
import { Search, Filter, ExternalLink, ChevronLeft, ChevronRight, Download, CheckCircle2 } from 'lucide-react';

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

  // Reset page when filters change
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
      {/* Controls Bar */}
      <div className="glass-panel p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by name, role, company, skills, or university..."
              className="input-dark pl-10 w-full"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-400">Mentorship:</span>
              <select
                value={selectedMentorship}
                onChange={(e) => handleMentorshipChange(e.target.value)}
                className="input-dark text-xs py-2"
              >
                <option value="All">All Levels</option>
                <option value="High">High Potential</option>
                <option value="Medium">Medium Potential</option>
                <option value="Low">Low Potential</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-400">Tech Focus:</span>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="input-dark text-xs py-2"
              >
                {techList.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex overflow-x-auto gap-2 pt-2 border-t border-gray-800/80 no-scrollbar">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600/30 border border-blue-500 text-blue-300'
                  : 'bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Meta & Pagination Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card px-5 py-3">
        <div className="text-xs text-gray-400 font-medium">
          Showing <strong className="text-white">{filteredData.length.toLocaleString()}</strong> unique alumni profiles
          {filteredData.length !== data.length && ` (filtered from ${data.length.toLocaleString()})`}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">
            Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
          </span>

          <div className="flex items-center gap-1">
            <button
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="p-1.5 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Alumnus Name & Role</th>
                <th>Organization & Industry</th>
                <th>Education & Institution</th>
                <th>Category & Focus</th>
                <th>Location</th>
                <th>Mentorship</th>
                <th>LinkedIn Profile</th>
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
                        <span key={i} className="badge badge-category">{c}</span>
                      ))}
                      {item.tech_focus.slice(0, 1).map((t, i) => (
                        <span key={i} className="badge badge-tech">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className="text-xs text-gray-400">{item.location}</span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        item.mentorship_potential === 'High'
                          ? 'badge-high'
                          : item.mentorship_potential === 'Medium'
                          ? 'badge-medium'
                          : 'badge-low'
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
                      className="px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all"
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
      <div className="flex items-center justify-between glass-card px-5 py-4">
        <div className="text-xs text-gray-400">
          Showing page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="btn-secondary text-xs"
          >
            Previous
          </button>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="btn-primary text-xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
