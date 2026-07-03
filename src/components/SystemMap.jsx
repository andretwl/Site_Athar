import React from 'react'

const columns = [
  {
    title: 'Aquisição',
    items: ['Anúncios pagos', 'Landing pages', 'Rastreamento de visitantes', 'Captação de leads']
  },
  {
    title: 'Inteligência',
    items: ['IA para texto e vídeo', 'Automação de conteúdo', 'Análise de dados', 'Memória e contexto']
  },
  {
    title: 'Operação',
    items: ['CRM e e-mail', 'Fluxos de atendimento', 'Dashboards', 'Ferramentas internas']
  },
  {
    title: 'Gestão',
    items: ['ClickUp e Monday', 'Coordenação de equipes', 'Tarefas e prioridades', 'Leitura clara de resultado']
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
