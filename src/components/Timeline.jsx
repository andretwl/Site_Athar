import React from 'react'

const phases = [
  {
    step: '01',
    title: 'Entender o objetivo e a operação',
    text: 'Mapeio campanha, produto, time, ferramentas atuais, gargalos e métricas antes de propor qualquer estrutura.'
  },
  {
    step: '02',
    title: 'Montar a base de execução',
    text: 'Estruturo páginas, tracking, campanhas, automações, conteúdo e integrações para a operação começar a rodar com clareza.'
  },
  {
    step: '03',
    title: 'Colocar IA e conteúdo para produzir',
    text: 'Acelero criação de texto, vídeo, criativos, mensagens e rotinas internas usando IA de forma prática e controlável.'
  },
  {
    step: '04',
    title: 'Organizar escala e equipe',
    text: 'Transformo a execução em processo repetível com gestão de tarefas, prioridades, acompanhamento e visibilidade para liderança.'
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
