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
  { subject: 'Dados gov.', strength: 95 },
  { subject: 'IA aplicada', strength: 93 },
  { subject: 'Análise política', strength: 92 },
  { subject: 'Automação', strength: 90 },
  { subject: 'Web/API', strength: 89 },
  { subject: 'Operação', strength: 86 }
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
