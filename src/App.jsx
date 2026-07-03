import React from 'react'
import Hero from './components/Hero'
import SkillsGraph from './components/SkillsGraph'
import SkillsTable from './components/SkillsTable'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Athar</div>
          <div className="space-x-4">
            <a href="#skills" className="text-sm hover:underline">Skills</a>
            <a href="#resume" className="text-sm hover:underline">Resume</a>
            <a href="#projects" className="text-sm hover:underline">Projects</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <Hero />
        <section id="skills" className="mt-12">
          <h2 className="text-xl font-semibold mb-4">AI Engineering — Core Strengths</h2>
          <SkillsGraph />
          <SkillsTable />
        </section>

        <section id="resume" className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Resume Highlights</h2>
          <p className="text-sm text-gray-700">Experienced AI engineer focused on models, MLOps, data pipelines, and productized analytics for political campaigns and strategic digital products.</p>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Selected Projects</h2>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Campaign analytics dashboards</li>
            <li>Team coordination and task prediction tools</li>
            <li>Data pipelines for voter modeling</li>
          </ul>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Athar — AI Engineer
      </footer>
    </div>
  )
}
