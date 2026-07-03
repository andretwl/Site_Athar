import React from 'react'

export default function Hero(){
  return (
    <section className="bg-white rounded-lg shadow p-8">
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Athar — AI Engineer</h1>
          <p className="mt-2 text-gray-700">I build data-driven systems, ML pipelines and analytics for high-stakes campaign and strategic products. I turn complex data into clear, actionable insights.</p>
          <p className="mt-4 text-sm text-gray-600">Available for roles in political campaign analytics, strategic AI products, and data science leadership.</p>
        </div>
        <div className="w-36 h-36 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
      </div>
    </section>
  )
}
