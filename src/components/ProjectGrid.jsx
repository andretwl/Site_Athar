import React from 'react'

export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-header">
            <h3>{project.title}</h3>
            <span>{project.path}</span>
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className="project-outcome">{project.outcome}</p>
        </article>
      ))}
    </div>
  )
}
