'use client'

import { useState } from 'react'

export default function CV() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "VPN ESP32",
      status: "Current",
      desc: "Advanced networking and security implementation on embedded systems",
      tech: ["ESP32", "C++", "Network Security"],
      icon: "fa-wifi"
    },
    {
      id: 2,
      title: "79 AI Solutions",
      status: "Active",
      desc: "39 Gemini Gems | 17 Claude Skills | 8 Google Whisk | 15+ Agentic AI & N8N",
      tech: ["Gemini", "Claude", "N8N", "Agentic AI"],
      icon: "fa-robot"
    },
    {
      id: 3,
      title: "Club Digital Platforms",
      status: "Completed",
      desc: "Full-stack platforms for NEXUS, Robotics, Electronics with IDE integration",
      tech: ["React", "Database", "Backend"],
      icon: "fa-code"
    },
    {
      id: 4,
      title: "Parkinson's Phone Case",
      status: "2024",
      desc: "Hardware-software solution with Arduino/ESP32, AI text-to-speech, real-time transcription",
      tech: ["Arduino", "Python", "ML"],
      icon: "fa-microchip"
    },
    {
      id: 5,
      title: "Green Saudia App",
      status: "2025",
      desc: "Policy-driven platform incentivizing sustainable daily habits",
      tech: ["UI/UX", "Policy", "Web"],
      icon: "fa-leaf"
    },
    {
      id: 6,
      title: "Game Development",
      status: "2022-2023",
      desc: "3D game environments in Unity with reverse engineering of digital logic",
      tech: ["Unity", "C#", "3D"],
      icon: "fa-gamepad"
    }
  ]

  const skills = [
    { cat: "Programming", items: ["C++", "Python", "Machine Learning"], color: "cyan" },
    { cat: "Hardware", items: ["ESP32", "Arduino", "IoT"], color: "lime" },
    { cat: "AI/ML", items: ["Gemini", "Claude", "Agentic AI"], color: "yellow" },
    { cat: "Web", items: ["React", "Full-stack", "Automation"], color: "purple" }
  ]

  const timeline = [
    { year: 2026, event: "NEXUS Club Founded - 20 Members", icon: "fa-star" },
    { year: 2026, event: "Vibe Coding Camp - 7 Workshops", icon: "fa-code" },
    { year: 2025, event: "Green Saudia App Launch", icon: "fa-leaf" },
    { year: 2024, event: "Parkinson's Case Completed", icon: "fa-heart" }
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex gap-8 max-w-7xl mx-auto">
        
        {/* CENTER - PROJECTS */}
        <div className="flex-1">
          {/* HEADER */}
          <div className="mb-12">
            <div className="neon-text-cyan text-5xl font-black mb-2">YASSIN ABDALLA</div>
            <div className="text-lg text-gray-300 mb-4">High school innovator | AI & Hardware | STEM Leader</div>
            <div className="flex gap-4 text-2xl">
              <a href="mailto:devhackerg@gmail.com" className="icon-cyan hover:neon-text-cyan transition">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/Anonyoumss" target="_blank" rel="noopener noreferrer" className="icon-lime hover:neon-text-lime transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yassin-abdalla-yassin" target="_blank" rel="noopener noreferrer" className="icon-yellow hover:neon-text-yellow transition">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="glass-effect p-6 mb-8 border-l-4 border-neon-cyan">
            <p className="text-gray-200 leading-relaxed">Built 79+ AI-powered solutions and mentored 20+ students in coding and hardware development. Specializing in agentic AI, embedded systems, and STEM education.</p>
          </div>

          {/* PROJECTS GRID */}
          <div className="mb-8">
            <div className="neon-text-lime text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-rocket"></i> Featured Projects
            </div>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="project-card p-4 neon-glow"
                  onClick={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-lg font-bold neon-text-cyan">{p.title}</div>
                      <div className="text-xs text-gray-400">{p.status}</div>
                    </div>
                    <i className={`fas ${p.icon} text-xl icon-yellow`}></i>
                  </div>
                  {expandedProject === p.id && (
                    <div className="mt-3 pt-3 border-t border-neon-cyan/30">
                      <p className="text-sm text-gray-300 mb-2">{p.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {p.tech.map((t, i) => (
                          <span key={i} className="text-xs bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="glass-effect p-6 border-l-4 border-neon-lime">
            <div className="neon-text-yellow text-xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-users"></i> Leadership
            </div>
            <div className="space-y-3">
              <div>
                <div className="font-bold text-neon-cyan">NEXUS Club (2026)</div>
                <div className="text-sm text-gray-300">Founder, Tech Lead, Researcher, Designer, Co-Presenter | 20 Members</div>
                <div className="text-xs text-gray-400 mt-1">Vibe Coding Camp (7 workshops) | Python Workshop (Mar 6)</div>
              </div>
              <div className="border-t border-neon-cyan/20 pt-3">
                <div className="font-bold text-neon-lime">Robotics Leadership</div>
                <div className="text-sm text-gray-300">Mentored students in robot design & programming</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-80">
          {/* ACADEMIC */}
          <div className="glass-effect p-5 mb-6 border-t-4 border-neon-lime">
            <div className="neon-text-lime font-bold text-sm flex items-center gap-2 mb-3">
              <i className="fas fa-graduation-cap"></i> ACADEMIC
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-gray-300">Dewan Al-marref School</div>
                <div className="text-xs text-gray-400">Grade 11 | GPA 5.0/5.0</div>
              </div>
              <div className="pt-2 border-t border-neon-cyan/30">
                <div className="text-neon-cyan font-bold">Mawhiba Level 3</div>
                <div className="text-xs text-gray-400">1593/2000 Score</div>
              </div>
              <div className="pt-2 border-t border-neon-cyan/30">
                <div className="text-neon-yellow font-bold">STEP Certified</div>
                <div className="text-xs text-gray-400">Score: 82</div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="mb-6">
            <div className="neon-text-yellow font-bold text-sm flex items-center gap-2 mb-3">
              <i className="fas fa-fire"></i> SKILLS
            </div>
            <div className="space-y-2">
              {skills.map((s, i) => (
                <div key={i} className="glass-effect p-3">
                  <div className={`text-xs font-bold mb-2 ${
                    s.color === 'cyan' ? 'text-neon-cyan' : 
                    s.color === 'lime' ? 'text-neon-lime' : 
                    s.color === 'yellow' ? 'text-neon-yellow' : 
                    'text-neon-purple'
                  }`}>
                    {s.cat}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {s.items.map((item, j) => (
                      <span key={j} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div>
            <div className="neon-text-cyan font-bold text-sm flex items-center gap-2 mb-4">
              <i className="fas fa-history"></i> TIMELINE
            </div>
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="timeline-dot"></div>
                    {i !== timeline.length - 1 && <div className="w-0.5 h-12 bg-neon-cyan/30 my-2"></div>}
                  </div>
                  <div className="pt-1">
                    <div className="text-neon-lime text-xs font-bold">{t.year}</div>
                    <div className="text-xs text-gray-300">{t.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="glass-effect p-4 mt-6 border-l-4 border-neon-purple">
            <div className="text-neon-purple font-bold text-sm mb-3 flex items-center gap-2">
              <i className="fas fa-envelope"></i> CONTACT
            </div>
            <div className="text-xs space-y-2 text-gray-300">
              <div>devhackerg@gmail.com</div>
              <div>Al-Ahsaa, Saudi Arabia</div>
              <div className="pt-2 border-t border-neon-purple/30">
                <a href="https://linkedin.com/in/yassin-abdalla-yassin" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-lime transition">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
