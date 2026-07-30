import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react';

const CATEGORIES = ['All', 'Founders / Co-founders', 'C-suite or Senior Leadership', 'PhD / Academic / Research-oriented', 'Specific / Emerging / Future Technologies', 'Corporate & Technology Professionals'];
const TECH_FILTERS = ['All Tech', 'AI / Machine Learning', 'Biotech & Life Sciences', 'Cloud Computing & DevOps', 'Data Science & Analytics', 'VLSI & Semiconductor', 'Embedded Systems & IoT', 'Automotive & EV Tech', 'Cybersecurity'];
const MENTOR_FILTERS = ['All', 'High', 'Medium', 'Low'];

const S = {
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#888882',
  },
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
    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
    ...extra,
  }),
};

function ChipRow({ options, active, onSelect, accentColor = '#FF5500' }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 6, overflowX: 'auto' }} className="no-scrollbar">
      {options.map(opt => {
        const isActive = active === opt;
        return (
          <button
            key={opt}
            onClick={() => onSelect(isActive ? options[0] : opt)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: 4,
              border: isActive ? `1px solid ${accentColor}` : '1px solid #C8C7C1',
              background: isActive ? accentColor : 'rgba(0,0,0,0.04)',
              color: isActive ? '#fff' : '#666860',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: isActive ? `0 0 8px ${accentColor}44` : 'none',
              transition: 'all 0.15s ease',
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function CategoryBadge({ cat }) {
  const map = {
    'Founders / Co-founders':                   { color: '#FF5500', label: 'FOUNDER' },
    'C-suite or Senior Leadership':             { color: '#2979FF', label: 'C-SUITE' },
    'PhD / Academic / Research-oriented':       { color: '#7C4DFF', label: 'ACADEMIC' },
    'Specific / Emerging / Future Technologies':{ color: '#00C853', label: 'TECH' },
    'Corporate & Technology Professionals':     { color: '#888882', label: 'CORP' },
  };
  const { color, label } = map[cat] || { color: '#888', label: cat.slice(0, 6).toUpperCase() };
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      fontWeight: 600,
      padding: '3px 7px',
      borderRadius: 3,
      background: `${color}18`,
      color: color,
      border: `1px solid ${color}40`,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
}

function MentorDot({ val }) {
  const c = val === 'High' ? '#00C853' : val === 'Medium' ? '#FFB300' : '#888';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: c, boxShadow: `0 0 5px ${c}88`,
      }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#888882' }}>
        {val}
      </span>
    </div>
  );
}

const PAGE_SIZE = 50;

export default function DirectoryView({ data, onSelectProfile }) {
  const [search, setSearch]         = useState('');
  const [category, setCategory]     = useState('All');
  const [tech, setTech]             = useState('All Tech');
  const [mentor, setMentor]         = useState('All');
  const [page, setPage]             = useState(1);

  const filtered = useMemo(() => {
    let d = data;
    if (search.trim()) {
      const q = search.toLowerCase();
      d = d.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.current_role.toLowerCase().includes(q) ||
        a.organization.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.tech_focus?.some(t => t.toLowerCase().includes(q)) ||
        a.education?.some(e => e.institution?.toLowerCase().includes(q))
      );
    }
    if (category !== 'All') d = d.filter(a => a.categories?.includes(category));
    if (tech !== 'All Tech') d = d.filter(a => a.tech_focus?.includes(tech));
    if (mentor !== 'All')    d = d.filter(a => a.mentorship_potential === mentor);
    return d;
  }, [data, search, category, tech, mentor]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const curPage    = Math.min(page, totalPages);
  const pageData   = filtered.slice((curPage - 1) * PAGE_SIZE, curPage * PAGE_SIZE);

  const reset = () => { setSearch(''); setCategory('All'); setTech('All Tech'); setMentor('All'); setPage(1); };

  const handleSearch = (e) => { setSearch(e.target.value); setPage(1); };

  const hasFilter = search || category !== 'All' || tech !== 'All Tech' || mentor !== 'All';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '24px 0 48px', animation: 'fadeUp 0.35s ease both' }}>

      {/* ═══ FILTER CONTROL MODULE ═══ */}
      <div style={{ ...S.panel({ padding: 20 }) }}>
        {/* Module header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <SlidersHorizontal size={14} style={{ color: '#FF5500' }} />
            <span style={{ ...S.label }}>Filter Deck // {filtered.length.toLocaleString()} Matching Modules</span>
          </div>
          {hasFilter && (
            <button onClick={reset} className="b-btn b-btn-ghost" style={{ fontSize: 9, padding: '4px 10px', display: 'flex', gap: 4 }}>
              <X size={10} /> Reset
            </button>
          )}
        </div>

        {/* LED light bar accent */}
        <div className="b-led-bar" style={{ marginBottom: 16 }} />

        {/* Search input */}
        <div style={{ position: 'relative', marginBottom: 14 }}>
          <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888882' }} />
          <input
            className="b-input"
            style={{ paddingLeft: 32 }}
            placeholder="Search by name, role, company, university, technology..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Category chips */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ ...S.label, marginBottom: 6 }}>Category</div>
          <ChipRow options={CATEGORIES} active={category} onSelect={(v) => { setCategory(v); setPage(1); }} accentColor="#FF5500" />
        </div>

        {/* Tech filter + Mentor filter */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 2, minWidth: 200 }}>
            <div style={{ ...S.label, marginBottom: 6 }}>Tech Focus</div>
            <ChipRow options={TECH_FILTERS} active={tech} onSelect={(v) => { setTech(v); setPage(1); }} accentColor="#00C853" />
          </div>
          <div>
            <div style={{ ...S.label, marginBottom: 6 }}>Mentor Value</div>
            <ChipRow options={MENTOR_FILTERS} active={mentor} onSelect={(v) => { setMentor(v); setPage(1); }} accentColor="#FFB300" />
          </div>
        </div>
      </div>

      {/* ═══ DATA TABLE MODULE ═══ */}
      <div style={{ ...S.panelDark({ overflow: 'hidden' }) }}>
        {/* Table header control strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 20px',
          borderBottom: '1px solid #3E4047',
          background: '#1E2024',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="b-led b-led-green" />
            <span style={{ ...S.label, color: '#666860' }}>
              {filtered.length.toLocaleString()} RECORDS // PAGE {curPage} OF {totalPages}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={curPage <= 1}
              className="b-btn b-btn-dark"
              style={{ padding: '5px 10px', opacity: curPage <= 1 ? 0.4 : 1 }}
            >
              <ChevronLeft size={13} />
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={curPage >= totalPages}
              className="b-btn b-btn-dark"
              style={{ padding: '5px 10px', opacity: curPage >= totalPages ? 0.4 : 1 }}
            >
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Scrollable table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="b-table" style={{ minWidth: 900 }}>
            <thead>
              <tr>
                <th>ALUMNUS</th>
                <th>ROLE & ORGANIZATION</th>
                <th>EDUCATION</th>
                <th>CATEGORY</th>
                <th>LOCATION</th>
                <th>MENTOR</th>
                <th>CONNECT</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map(alumnus => (
                <tr key={alumnus.id} onClick={() => onSelectProfile(alumnus)}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {/* avatar knob */}
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: 'radial-gradient(circle at 35% 30%, #4A4C50 0%, #28292D 100%)',
                        border: '1.5px solid #3E4047',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, color: '#BDBDB8',
                        flexShrink: 0,
                      }}>
                        {alumnus.name?.[0] || '?'}
                      </div>
                      <span style={{ fontWeight: 600, color: '#E8E8E2', fontSize: 13 }}>
                        {alumnus.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div style={{ color: '#BDBDB8', fontSize: 12 }}>{alumnus.current_role}</div>
                    <div style={{ color: '#666860', fontSize: 10, marginTop: 2 }}>{alumnus.organization}</div>
                  </td>
                  <td>
                    {alumnus.education?.[0] ? (
                      <>
                        <div style={{ color: '#A8A8A2', fontSize: 11 }}>{alumnus.education[0].institution}</div>
                        <div style={{ color: '#666860', fontSize: 10, marginTop: 1 }}>{alumnus.education[0].degree}</div>
                      </>
                    ) : <span style={{ color: '#444' }}>—</span>}
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {alumnus.categories?.slice(0, 1).map((c, i) => <CategoryBadge key={i} cat={c} />)}
                    </div>
                  </td>
                  <td style={{ color: '#888882', fontSize: 11 }}>{alumnus.location}</td>
                  <td><MentorDot val={alumnus.mentorship_potential} /></td>
                  <td onClick={e => e.stopPropagation()}>
                    <a
                      href={alumnus.linkedin_url}
                      target="_blank"
                      rel="noreferrer"
                      className="b-btn b-btn-orange"
                      style={{ fontSize: 9, padding: '5px 10px', textDecoration: 'none' }}
                    >
                      LinkedIn <ExternalLink size={10} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 20px', borderTop: '1px solid #3E4047', background: '#1E2024',
        }}>
          <span style={{ ...S.label, color: '#444840' }}>
            SHOWING {(curPage - 1) * PAGE_SIZE + 1}–{Math.min(curPage * PAGE_SIZE, filtered.length)} OF {filtered.length.toLocaleString()}
          </span>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={curPage <= 1}
              className="b-btn b-btn-dark"
              style={{ fontSize: 10, padding: '6px 14px', opacity: curPage <= 1 ? 0.4 : 1 }}
            >
              ← PREV
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={curPage >= totalPages}
              className="b-btn b-btn-orange"
              style={{ fontSize: 10, padding: '6px 14px', opacity: curPage >= totalPages ? 0.4 : 1 }}
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
