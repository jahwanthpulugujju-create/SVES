import React from 'react';
import { FileText, Download, CheckCircle2, AlertTriangle, Database, Cpu } from 'lucide-react';

export default function DataAppendixView() {
  const handleDownloadJSON = () => {
    window.open('/alumni_data.json', '_blank');
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Braun Specification Sheet Export Banner */}
      <div className="braun-panel-dark p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="font-mono text-base font-bold text-white flex items-center gap-2 tracking-wider">
            <Database className="w-5 h-5 text-[#ff4d00]" />
            MODUL 05: DATA SPECIFICATION & EXPORT CENTER
          </h2>
          <p className="font-mono text-xs text-gray-400 mt-1">
            Complete 21,126 deduplicated alumni modules dataset in standardized machine-readable formats.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleDownloadJSON} className="braun-btn braun-btn-orange text-xs font-mono">
            <Download className="w-4 h-4" /> DOWNLOAD JSON DATASET
          </button>
        </div>
      </div>

      {/* Deduplication Engine Specification */}
      <div className="braun-panel-dark p-6 space-y-4">
        <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2 tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
          1. DEDUPLICATION ENGINE & ENTITY RESOLUTION METHODOLOGY
        </h3>
        <p className="font-mono text-xs text-gray-300 leading-relaxed">
          The raw dataset contained 21,224 records. Primary deduplication was executed using a hierarchical composite key structure:
          <br /><br />
          <strong className="text-[#ff4d00]">STAGE 1:</strong> Primary Key Matching on normalized <code className="bg-[#141619] px-1.5 py-0.5 rounded text-[#ffaa00]">email_id</code> (case-insensitive, trimmed).<br />
          <strong className="text-[#ff4d00]">STAGE 2:</strong> Secondary Key Matching on <code className="bg-[#141619] px-1.5 py-0.5 rounded text-[#ffaa00]">LinkedIn Link</code> URLs.<br />
          <strong className="text-[#ff4d00]">STAGE 3:</strong> Fallback Key Matching on <code className="bg-[#141619] px-1.5 py-0.5 rounded text-[#ffaa00]">Name</code> + <code className="bg-[#141619] px-1.5 py-0.5 rounded text-[#ffaa00]">Roll Number</code> / <code className="bg-[#141619] px-1.5 py-0.5 rounded text-[#ffaa00]">Graduation Year</code>.
          <br /><br />
          <strong>Merge Strategy:</strong> When duplicate entries were detected, non-empty attributes from duplicate rows were non-destructively merged into the primary profile to maximize field completeness. Total unique records retained: <strong>21,126</strong>. Total duplicates resolved: <strong>97</strong>.
        </p>
      </div>

      {/* System Limitations Audit */}
      <div className="braun-panel-dark p-6 space-y-4">
        <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2 tracking-wider">
          <AlertTriangle className="w-4 h-4 text-[#ffaa00]" />
          2. DATA LIMITATIONS & FIELD POPULATION RATES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
          <div className="braun-panel p-4">
            <h4 className="font-bold text-[#1f2228] mb-1">Employment Field Population</h4>
            <p className="text-gray-700">
              2,312 profiles (10.9%) have explicit Company and Role fields populated in the system database. Records without employment details are classified as <em>Alumni Community Members</em> with fields explicitly set to <code className="text-[#ff4d00]">"unknown"</code>.
            </p>
          </div>

          <div className="braun-panel p-4">
            <h4 className="font-bold text-[#1f2228] mb-1">LinkedIn Profile URLs</h4>
            <p className="text-gray-700">
              790 profiles (3.7%) contained direct LinkedIn URL links. For all remaining profiles, a dynamic LinkedIn search URL query is generated (<code className="text-[#2563eb]">https://www.linkedin.com/search/results/all/?keywords=Name+Shri+Vishnu</code>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
