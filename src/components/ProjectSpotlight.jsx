import React from 'react'

export default function ProjectSpotlight({ project }) {
  return (
    <article className="spotlight-card">
      <div className="spotlight-glow" />
      <div className="spotlight-header">
        <span className="spotlight-period">{project.period}</span>
        <h3>{project.title}</h3>
        <span className="spotlight-path">{project.path}</span>
      </div>
      <p className="spotlight-summary">{project.summary}</p>
      <div className="spotlight-stats">
        {project.stats.map((stat) => (
          <div className="stat-chip" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p className="spotlight-outcome">{project.outcome}</p>
      <div className="spotlight-deliverables">
        {project.deliverables.map((item) => (
          <div className="deliverable-item" key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
