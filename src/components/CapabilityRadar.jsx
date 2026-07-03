import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'

const data = [
  { subject: 'Local AI runtime', strength: 94 },
  { subject: 'Retrieval systems', strength: 91 },
  { subject: 'Data products', strength: 86 },
  { subject: 'Automation', strength: 89 },
  { subject: 'Graph memory', strength: 84 },
  { subject: 'Frontend delivery', strength: 81 }
]

export default function CapabilityRadar() {
  return (
    <article className="chart-card">
      <div className="chart-copy">
        <p className="chart-kicker">Capability profile</p>
        <h3>Where I add the most technical leverage</h3>
      </div>
      <div className="chart-stage">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="rgba(255,255,255,0.18)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#d7e4ef', fontSize: 12 }} />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="strength"
              stroke="#ff7a59"
              fill="#ff7a59"
              fillOpacity={0.42}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
