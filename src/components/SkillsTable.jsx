import React from 'react'

const items = [
  {name: 'Python', desc: 'Data engineering, ML, scripts', color: '#3776AB'},
  {name: 'JavaScript/TypeScript', desc: 'Frontend, Next/Vite', color: '#F7DF1E'},
  {name: 'Go', desc: 'Systems, infra (LocalAI)', color: '#00ADD8'},
  {name: 'C# / Unity', desc: 'Interactive / game tooling', color: '#239120'},
  {name: 'Docker', desc: 'Containers & deployment', color: '#2496ED'},
  {name: 'Qdrant / Vector DBs', desc: 'Embeddings + vector search', color: '#7C3AED'},
  {name: 'Git', desc: 'Source control, CI', color: '#F05032'},
  {name: 'React / Next', desc: 'Web UI & SSR', color: '#61DAFB'},
]

export default function SkillsTable(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {items.map((it)=> (
        <div key={it.name} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: it.color}}>
            <svg className="w-8 h-8 animate-bounce-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.18)" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white">{it.name.split('/')[0]}</text>
            </svg>
          </div>
          <div>
            <div className="font-semibold">{it.name}</div>
            <div className="text-sm text-gray-600">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
