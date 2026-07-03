import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
  {subject: 'Modeling', A: 95},
  {subject: 'MLOps', A: 90},
  {subject: 'Data Engineering', A: 92},
  {subject: 'Product', A: 85},
  {subject: 'Privacy & Security', A: 78},
]

export default function SkillsGraph(){
  return (
    <div className="bg-white rounded-lg shadow p-6 h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0,100]} />
          <Radar name="Skill" dataKey="A" stroke="#4F46E5" fill="#6366F1" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
