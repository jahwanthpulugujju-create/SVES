import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function EventsView() {
  const eventsList = [
    {
      id: 1,
      title: "SVES Alumni Fireside Chat: The Future of AI in Enterprise",
      date: "AUG 24, 2026",
      time: "7:00 PM - 8:30 PM EST",
      location: "Virtual Zoom Webinar",
      speaker: "Priya S. (Head of AI, Google)",
      attendees: 342,
      category: "Tech & Innovation",
      status: "Registration Open"
    },
    {
      id: 2,
      title: "Healthcare & Biotech Alumni Innovation Symposium",
      date: "AUG 30, 2026",
      time: "6:00 PM - 9:00 PM EST",
      location: "Boston Marriott Copley Place, Boston, MA",
      speaker: "Dr. SandhyaRani Mandadi & BioTech Panel",
      attendees: 180,
      category: "Healthcare & Biotech",
      status: "Selling Fast"
    },
    {
      id: 3,
      title: "SVES Global Annual Alumni Summit 2026",
      date: "SEP 05, 2026",
      time: "9:00 AM - 6:00 PM EST",
      location: "Javits Center, New York, NY",
      speaker: "Keynote: Arianna K. (CTO, SpaceX)",
      attendees: 1250,
      category: "Global Conference",
      status: "Featured Summit"
    },
    {
      id: 4,
      title: "Venture Founders & Angel Investor Networking Mixer",
      date: "SEP 18, 2026",
      time: "6:30 PM - 8:30 PM PST",
      location: "Silicon Valley Innovation Hub, San Francisco, CA",
      speaker: "Sumedh Sonkamble & Venture Panel",
      attendees: 95,
      category: "Entrepreneurship",
      status: "Limited Seats"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="sves-card bg-[#1F2326] text-white border-[#33383d]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="sves-badge sves-badge-green mb-2">LIVE EVENTS & COMMUNITIES</span>
            <h2 className="text-2xl font-black tracking-tight text-white">SVES Alumni Global Events</h2>
            <p className="text-xs text-gray-400 mt-1 font-mono">
              Fireside chats, technical symposiums, global summits, and chapter meetups.
            </p>
          </div>
          <button className="sves-orange-btn">
            Host an Event <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventsList.map((ev) => (
          <div key={ev.id} className="sves-card flex flex-col justify-between hover:border-[#FF6B00]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="sves-badge sves-badge-orange">{ev.category}</span>
                <span className="text-xs font-mono font-bold text-[#39C16E] flex items-center gap-1">
                  <span className="status-dot status-dot-green"></span> {ev.status}
                </span>
              </div>

              <h3 className="font-bold text-[#1F2326] text-base leading-snug">{ev.title}</h3>
              
              <div className="mt-4 space-y-2 text-xs text-[#555a60]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <strong className="text-[#1F2326]">{ev.date}</strong> ({ev.time})
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#39C16E]" />
                  <span>{ev.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#9FA3A5]" />
                  <span>Keynote/Speaker: <strong>{ev.speaker}</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e3e3dc] flex items-center justify-between text-xs">
              <span className="font-mono text-[#777a7e]">{ev.attendees} Registered</span>
              <button className="sves-orange-btn text-xs py-1.5 px-4">
                RSVP Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
