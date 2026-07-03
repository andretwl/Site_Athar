import React from 'react'

const columns = [
  {
    title: 'Inputs',
    items: ['Documents', 'Behavior logs', 'Field notes', 'Knowledge files']
  },
  {
    title: 'AI Core',
    items: ['LocalAI inference', 'Qdrant retrieval', 'Cognee memory', 'Validation scripts']
  },
  {
    title: 'Product Surfaces',
    items: ['Dashboards', 'Operator tools', 'Workflow assistants', 'Scenario interfaces']
  },
  {
    title: 'Campaign Outcomes',
    items: ['Faster decisions', 'Clearer team context', 'Better task routing', 'Higher data trust']
  }
]

export default function SystemMap() {
  return (
    <div className="system-map">
      {columns.map((column) => (
        <article className="system-column" key={column.title}>
          <p>{column.title}</p>
          <ul>
            {column.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
