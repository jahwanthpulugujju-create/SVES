import React from 'react';
import { Briefcase, MapPin, Building, ArrowUpRight, CheckCircle2, DollarSign } from 'lucide-react';

export default function OpportunitiesView() {
  const jobsList = [
    {
      id: 1,
      role: "Product Manager — Fintech Platform",
      company: "Stripe",
      loc: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      postedBy: "David L. ('14 Alumnus)",
      postedDate: "2 days ago",
      tags: ["Product", "Fintech", "API"]
    },
    {
      id: 2,
      role: "Research Scientist — Generative Models",
      company: "OpenAI",
      loc: "Remote (Global)",
      type: "Full-Time",
      postedBy: "Priya S. ('12 Alumna)",
      postedDate: "1 day ago",
      tags: ["AI/ML", "LLM", "Python"]
    },
    {
      id: 3,
      role: "Summer BioTech Research Intern",
      company: "BioNTech",
      loc: "New York, NY",
      type: "Internship",
      postedBy: "Dr. SandhyaRani Mandadi ('12 Alumna)",
      postedDate: "3 days ago",
      tags: ["Biotech", "Genetics", "Pharma"]
    },
    {
      id: 4,
      role: "Senior Embedded Firmware Lead",
      company: "NXP Semiconductors",
      loc: "Noida / Hyderabad, India",
      type: "Full-Time",
      postedBy: "Devisree Dayana ('25 Alumna)",
      postedDate: "Just now",
      tags: ["VLSI", "Embedded", "C++"]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="sves-card bg-[#1F2326] text-white border-[#33383d]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="sves-badge sves-badge-orange mb-2">CAREER & OPPORTUNITY BOARD</span>
            <h2 className="text-2xl font-black tracking-tight text-white">Alumni Referral & Career Hub</h2>
            <p className="text-xs text-gray-400 mt-1 font-mono">
              Exclusive jobs, research internships, and founder co-founder openings posted directly by SVES alumni.
            </p>
          </div>
          <button className="sves-orange-btn">
            Post an Opportunity <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobsList.map((job) => (
          <div key={job.id} className="sves-card flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#FF6B00]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="sves-badge sves-badge-green">{job.type}</span>
                <span className="text-xs font-mono text-[#777a7e]">Posted by {job.postedBy}</span>
              </div>
              <h3 className="font-bold text-[#1F2326] text-base">{job.role}</h3>
              <div className="flex items-center gap-4 text-xs text-[#555a60] mt-1">
                <span className="font-semibold text-[#1F2326]">{job.company}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#39C16E]" /> {job.loc}</span>
                <span>•</span>
                <span className="font-mono text-[#777a7e]">{job.postedDate}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {job.tags.map((t, idx) => (
                  <span key={idx} className="sves-badge sves-badge-gray">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <button className="sves-orange-btn text-xs py-2 px-5">
                Apply / Contact Alumnus <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
