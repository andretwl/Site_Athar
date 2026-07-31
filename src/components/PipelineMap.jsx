import React from 'react'

export default function PipelineMap({ stages }) {
  return (
    <div className="pipeline-track">
      {stages.map((stage) => (
        <article className="pipeline-stage" key={stage.step}>
          <span className="pipeline-step">{stage.step}</span>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
        </article>
      ))}
    </div>
  )
}
