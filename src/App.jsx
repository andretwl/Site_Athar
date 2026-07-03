import React, { Suspense, lazy } from 'react'
import ProjectGrid from './components/ProjectGrid'
import SystemMap from './components/SystemMap'
import Timeline from './components/Timeline'
import { audiencePillars, projectCards, proofMetrics, resumeHighlights } from './data/siteContent'

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

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-noise" />
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">A</div>
          <div>
            <p className="brand-name">Athar</p>
            <p className="brand-role">AI Engineer</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#abilities">Abilities</a>
          <a href="#systems">Systems</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <div className="hero-kicker">AI systems for high-stakes digital operations</div>
            <h1>
              I build retrieval, memory, local inference, and product delivery systems that turn
              complex data into operational decisions.
            </h1>
            <p className="hero-summary">
              My current workspace spans Unity agent systems, LocalAI infrastructure, Qdrant-based
              retrieval, and Cognee knowledge graph memory. That mix is directly useful for
              campaign technology, team coordination platforms, and data products where reliability
              matters more than demos.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#systems">
                View selected systems
              </a>
              <a className="button-secondary" href="#resume">
                Resume highlights
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="signal-card">
              <p className="signal-label">Core operating model</p>
              <ul>
                <li>Local inference with OpenAI-compatible APIs</li>
                <li>Vector retrieval and graph memory</li>
                <li>Automation layers that expose runtime truth</li>
              </ul>
            </div>
            <div className="orbital-grid">
              <div>Inference</div>
              <div>Retrieval</div>
              <div>Memory</div>
              <div>Product</div>
            </div>
          </aside>
        </section>

        <section className="metrics-grid">
          {proofMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>

        <section className="section-block" id="abilities">
          <div className="section-heading">
            <p className="section-kicker">How I explain the stack</p>
            <h2>Technical depth, shown in decision-friendly shapes</h2>
            <p>
              The graphs below are tuned for buyers and hiring teams. They show where I can lead
              architecture, where I reduce operational risk, and how the technical lanes connect
              to strategic digital products.
            </p>
          </div>

          <div className="charts-grid">
            <Suspense fallback={<div className="chart-card chart-loading">Loading capability profile...</div>}>
              <CapabilityRadar />
            </Suspense>
            <Suspense fallback={<div className="chart-card chart-loading">Loading business translation graph...</div>}>
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
            <p className="section-kicker">System thinking</p>
            <h2>From raw signals to campaign-grade operating tools</h2>
            <p>
              This is the lane I fit best: ingest messy inputs, structure retrieval and memory,
              wrap it with usable interfaces, and keep the runtime observable enough that teams
              can trust it under pressure.
            </p>
          </div>
          <SystemMap />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Selected systems</p>
            <h2>Projects in the current workspace that prove the range</h2>
            <p>
              These cards are based on the real repositories present in
              `/mnt/data/Projects_SSD`, not a generic portfolio template.
            </p>
          </div>
          <ProjectGrid projects={projectCards} />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-kicker">Execution style</p>
            <h2>How I move from architecture to delivery</h2>
          </div>
          <Timeline />
        </section>

        <section className="section-block resume-panel" id="resume">
          <div className="section-heading">
            <p className="section-kicker">Resume highlights</p>
            <h2>Where I create leverage</h2>
            <p>
              Best fit: companies building strategic digital products for campaign operations,
              field teams, analytics, internal tooling, and decision support.
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
        <p>Athar, AI Engineer focused on local AI systems, retrieval, memory, and operational products.</p>
        <p>Built for GitHub + Cloudflare Pages deployment.</p>
      </footer>
    </div>
  )
}
