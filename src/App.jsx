import React, { Suspense, lazy } from 'react'
import portrait from '../images/photoathar-hero.jpg'
import ProjectGrid from './components/ProjectGrid'
import SystemMap from './components/SystemMap'
import Timeline from './components/Timeline'
import ProjectSpotlight from './components/ProjectSpotlight'
import PipelineMap from './components/PipelineMap'
import SkillGroups from './components/SkillGroups'
import {
  audiencePillars,
  flagshipProject,
  pipelineStages,
  politicalSkillGroups,
  presentationServices,
  projectCards,
  proofMetrics,
  resumeHighlights
} from './data/siteContent'

const CapabilityRadar = lazy(() => import('./components/CapabilityRadar'))
const DeliveryBars = lazy(() => import('./components/DeliveryBars'))

function MetricCard({ metric }) {
  return (
    <article className="metric-card">
      <span className="metric-value">{metric.value}</span>
      <h3>{metric.label}</h3>
      <p>{metric.detail}</p>
    </article>
  )
}

function AudiencePillar({ pillar }) {
  return (
    <article className="pillar-card">
      <div className="pillar-eyebrow">{pillar.eyebrow}</div>
      <h3>{pillar.title}</h3>
      <p>{pillar.description}</p>
    </article>
  )
}

function ResumeItem({ item }) {
  return (
    <article className="resume-item">
      <span>{item.period}</span>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
    </article>
  )
}

function ServiceCard({ item }) {
  return (
    <article className="pillar-card">
      <div className="pillar-eyebrow">{item.eyebrow}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-noise" />
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">A</div>
          <div>
            <p className="brand-name">Athar</p>
            <p className="brand-role">Engenheiro de IA</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#apresentacao">Apresentação</a>
          <a href="#abilities">Capacidades</a>
          <a href="#systems">Sistemas</a>
          <a href="#parlamentar">Inteligência</a>
          <a href="#resume">Resumo</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <div className="hero-kicker">IA, marketing, operação e velocidade de execução</div>
            <h1>
              Já atuei em campanhas políticas e hoje ajudo equipes a lançar, medir e escalar
              operações digitais com IA e automação.
            </h1>
            <p className="hero-summary">
              Consigo entrar desde a estratégia até a execução: campanhas de anúncios, sites e
              landing pages rápidas, rastreamento de visitantes, fluxos de e-mail, produção e
              edição de conteúdo com IA, além de ferramentas para coordenar equipes, tarefas e
              operação diária em plataformas como ClickUp, Monday e similares.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#apresentacao">
                Como posso ajudar
              </a>
              <a className="button-secondary" href="#resume">
                Resumo profissional
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img className="portrait-image" src={portrait} alt="Retrato profissional de Athar" />
              </div>
              <div className="portrait-caption">
                <strong>Athar</strong>
                <span>IA, campanhas digitais, automação e operação estratégica</span>
              </div>
            </div>
            <div className="signal-card">
              <p className="signal-label">Frentes que eu entrego</p>
              <ul>
                <li>Campanhas pagas, páginas e tracking</li>
                <li>Conteúdo com IA: texto, vídeo e criativos</li>
                <li>Operação de equipe, tarefas e automação</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="metrics-grid">
          {proofMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="section-block audience-grid" id="apresentacao">
          {presentationServices.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </section>

        <section className="section-block" id="abilities">
          <div className="section-heading">
            <p className="section-kicker">Capacidades</p>
            <h2>Profundidade técnica explicada de forma simples para decisão</h2>
            <p>
              Os gráficos abaixo mostram onde eu consigo liderar arquitetura, acelerar entrega e
              reduzir risco operacional em produtos digitais, marketing e automação com IA.
            </p>
          </div>

          <div className="charts-grid">
            <Suspense fallback={<div className="chart-card chart-loading">Carregando perfil de capacidades...</div>}>
              <CapabilityRadar />
            </Suspense>
            <Suspense fallback={<div className="chart-card chart-loading">Carregando mapa de valor...</div>}>
              <DeliveryBars />
            </Suspense>
          </div>
        </section>

        <section className="section-block audience-grid">
          {audiencePillars.map((pillar) => (
            <AudiencePillar key={pillar.title} pillar={pillar} />
          ))}
        </section>

        <section className="section-block" id="systems">
          <div className="section-heading">
            <p className="section-kicker">Visão de sistema</p>
            <h2>Da aquisição de atenção até a operação completa da campanha ou negócio</h2>
            <p>
              Meu melhor encaixe é quando a empresa precisa unir marketing, dados, automação,
              conteúdo e gestão interna em um fluxo coerente, rápido de executar e fácil de medir.
            </p>
          </div>
          <SystemMap />
        </section>

        <section className="section-block" id="parlamentar">
          <div className="section-heading">
            <p className="section-kicker">Inteligência parlamentar</p>
            <h2>O sistema que construí para quem trabalha com política</h2>
            <p>
              Construí um pipeline completo de dados do Transferegov (Emendas PIX e
              Transferências Especiais): extração, validação, enriquecimento com mais de 15
              fontes públicas, IA com RAG multi-analista e entrega em dashboard e API. É o tipo
              de ferramenta que transforma dados públicos em decisão política.
            </p>
          </div>
          <ProjectSpotlight project={flagshipProject} />
          <PipelineMap stages={pipelineStages} />
          <SkillGroups groups={politicalSkillGroups} />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Base técnica</p>
            <h2>Projetos e sistemas que sustentam minha capacidade de entrega</h2>
            <p>
              Estes cards vêm dos repositórios reais do meu workspace e mostram a profundidade da
              base técnica por trás da entrega comercial e operacional.
            </p>
          </div>
          <ProjectGrid projects={projectCards} />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Execução</p>
            <h2>Como eu transformo necessidade em operação funcional</h2>
          </div>
          <Timeline />
        </section>

        <section className="section-block resume-panel" id="resume">
          <div className="section-heading">
            <p className="section-kicker">Resumo profissional</p>
            <h2>Onde eu gero mais alavancagem</h2>
            <p>
              Melhor encaixe: campanhas políticas, operações digitais, equipes de marketing,
              produtos estratégicos e negócios que precisam combinar velocidade com inteligência.
            </p>
          </div>

          <div className="resume-grid">
            {resumeHighlights.map((item) => (
              <ResumeItem key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Athar, engenheiro de IA com foco em campanhas, automação, conteúdo, operações e produtos digitais.</p>
        <p>Site publicado com GitHub e Cloudflare Pages.</p>
      </footer>
    </div>
  )
}
