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
  { subject: 'IA aplicada', strength: 94 },
  { subject: 'Automação', strength: 91 },
  { subject: 'Sites e funis', strength: 87 },
  { subject: 'Tracking e dados', strength: 89 },
  { subject: 'Operação interna', strength: 84 },
  { subject: 'Entrega rápida', strength: 86 }
]

export default function CapabilityRadar() {
  return (
    <article className="chart-card">
      <div className="chart-copy">
        <p className="chart-kicker">Perfil de capacidade</p>
        <h3>Onde eu entrego mais alavancagem prática</h3>
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
