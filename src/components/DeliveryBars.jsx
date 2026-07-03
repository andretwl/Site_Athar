import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Inference control', value: 90, color: '#ff7a59' },
  { name: 'Retrieval design', value: 88, color: '#ffd166' },
  { name: 'Workflow tooling', value: 84, color: '#7ae582' },
  { name: 'Product explainability', value: 82, color: '#7ad7ff' },
  { name: 'Team enablement', value: 79, color: '#c4b5fd' }
]

export default function DeliveryBars() {
  return (
    <article className="chart-card">
      <div className="chart-copy">
        <p className="chart-kicker">Business translation</p>
        <h3>How the technical stack maps to strategic product value</h3>
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
