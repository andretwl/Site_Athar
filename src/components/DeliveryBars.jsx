import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Campanhas e ads', value: 91, color: '#ff7a59' },
  { name: 'Sites e tracking', value: 89, color: '#ffd166' },
  { name: 'Conteúdo com IA', value: 87, color: '#7ae582' },
  { name: 'Automação operacional', value: 84, color: '#7ad7ff' },
  { name: 'Gestão de equipes', value: 81, color: '#c4b5fd' }
]

export default function DeliveryBars() {
  return (
    <article className="chart-card">
      <div className="chart-copy">
        <p className="chart-kicker">Tradução de negócio</p>
        <h3>Como a parte técnica vira valor operacional e comercial</h3>
      </div>
      <div className="chart-stage">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 6, right: 12, left: 12, bottom: 6 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#d7e4ef', fontSize: 11 }} />
            <YAxis
              type="category"
              dataKey="name"
              width={120}
              tick={{ fill: '#d7e4ef', fontSize: 11 }}
            />
            <Bar dataKey="value" radius={[0, 12, 12, 0]}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
