import React from 'react';
import { FileText, Download, CheckCircle2, AlertTriangle, Database } from 'lucide-react';

export default function DataAppendixView() {
  const handleDownloadJSON = () => {
    window.open('/alumni_data.json', '_blank');
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Export Banner */}
      <div className="glass-panel p-6 border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            Machine-Readable Export Center
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Download the complete 21,126 deduplicated alumni records dataset in standardized machine-readable formats.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleDownloadJSON} className="btn-primary text-xs">
            <Download className="w-4 h-4" /> Download JSON Dataset
          </button>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          1. Deduplication & Entity Resolution Methodology
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed">
          The raw dataset contained 21,224 records. Primary deduplication was executed using a hierarchical composite key structure:
          <br /><br />
          <strong className="text-blue-400">Step 1:</strong> Primary Key Matching on normalized <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300">email_id</code> (case-insensitive, trimmed).<br />
          <strong className="text-blue-400">Step 2:</strong> Secondary Key Matching on <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300">LinkedIn Link</code> URLs.<br />
          <strong className="text-blue-400">Step 3:</strong> Fallback Key Matching on <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300">Name</code> + <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300">Roll Number</code> / <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300">Graduation Year</code>.
          <br /><br />
          <strong>Merge Strategy:</strong> When duplicate entries were detected, non-empty attributes from duplicate rows were non-destructively merged into the primary profile to maximize field completeness. Total unique records retained: <strong>21,126</strong>. Total duplicates resolved: <strong>97</strong>.
        </p>
      </div>

      {/* Data Limitations */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          2. Data Limitations & Population Rates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
          <div className="glass-card p-4">
            <h4 className="font-bold text-white mb-1">Employment Field Population</h4>
            <p className="text-gray-400">
              2,312 profiles (10.9%) have explicit Company and Role fields populated in the database. Records without employment details are classified as <em>Alumni Community Members</em> with fields explicitly set to <code className="text-gray-300">"unknown"</code>.
            </p>
          </div>

          <div className="glass-card p-4">
            <h4 className="font-bold text-white mb-1">LinkedIn Profile URLs</h4>
            <p className="text-gray-400">
              790 profiles (3.7%) contained direct LinkedIn URL links. For all remaining profiles, a dynamic LinkedIn search URL query is generated (<code className="text-blue-400">https://www.linkedin.com/search/results/all/?keywords=Name+Shri+Vishnu</code>).
            </p>
          </div>
        </div>
      </div>

      {/* Key Assumptions */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-purple-400" />
          3. Key Assumptions
        </h3>
        <ul className="list-disc list-inside text-xs text-gray-300 space-y-2">
          <li><strong>Industry Inferencing:</strong> Unspecified industries were inferred based on enterprise names (e.g. Accenture $\rightarrow$ Software & IT Services, NXP $\rightarrow$ Semiconductors).</li>
          <li><strong>Mentorship Evaluation:</strong> Alumni holding C-suite titles, founder roles, PhDs, advanced degrees, or specialized technology focus areas were assumed to possess High Mentorship Potential.</li>
        </ul>
      </div>
    </div>
  );
}
