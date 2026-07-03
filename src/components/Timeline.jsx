import React from 'react'

const phases = [
  {
    step: '01',
    title: 'Map the operating reality',
    text: 'Inspect the current runtime, repositories, services, and data paths before making claims or architecture promises.'
  },
  {
    step: '02',
    title: 'Stabilize the AI layer',
    text: 'Make inference, retrieval, and memory explicit enough that the team can diagnose failures and measure confidence.'
  },
  {
    step: '03',
    title: 'Wrap it in product form',
    text: 'Expose the useful part through interfaces, dashboards, or internal operator tools that reduce friction for non-engineers.'
  },
  {
    step: '04',
    title: 'Prepare for scale or handoff',
    text: 'Document contracts, deployment expectations, and the cloud path when the system outgrows a local-first stage.'
  }
]

export default function Timeline() {
  return (
    <div className="timeline-grid">
      {phases.map((phase) => (
        <article className="timeline-card" key={phase.step}>
          <span>{phase.step}</span>
          <h3>{phase.title}</h3>
          <p>{phase.text}</p>
        </article>
      ))}
    </div>
  )
}
