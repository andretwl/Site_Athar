import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import CemeteryMap from './CemeteryMap'
import {
  cemeterySummary,
  cemeteryMunicipios,
  cemeteryUfs,
  cemeteryEmendas,
} from '../data/cemeteryData'

const brl0 = (v) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v)
const brl = (v) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)

const top10 = [...cemeteryMunicipios]
  .sort((a, b) => b.total - a.total)
  .slice(0, 10)
  .map((m) => ({ name: m.nome, uf: m.uf, total: m.total }))

const ufData = cemeteryUfs.map((u) => ({ name: u.uf, total: u.total }))

const sortedEmendas = [...cemeteryEmendas].sort((a, b) => b.total - a.total)

function contatoDe(emenda) {
  const partes = []
  if (emenda.email) partes.push(emenda.email)
  if (emenda.telefone) partes.push(emenda.telefone)
  return partes.join(' · ') || '—'
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      <span>{brl(payload[0].value)}</span>
    </div>
  )
}

function ChartCard({ title, data }) {
  return (
    <div className="chart-card cemetery-chart-card">
      <h3>{title}</h3>
      <div className="chart-stage">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 4, right: 18, bottom: 0, left: 4 }}>
            <CartesianGrid stroke="rgba(153,184,210,0.12)" horizontal={false} />
            <XAxis type="number" tick={{ fill: '#9bb4c9', fontSize: 11 }} tickFormatter={(v) => `${Math.round(v / 1000)}k`} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="name"
              width={130}
              tick={{ fill: '#d7e4ef', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
            <Bar dataKey="total" radius={[0, 8, 8, 0]} barSize={16}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.uf ? '#ff7a59' : '#ffd166'} fillOpacity={0.9} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function CemeteryUseCase({ standalone = false }) {
  const situacoes = cemeterySummary.situacoes
  const ciente = situacoes.find((s) => s.situacao === 'CIENTE')
  const impedido = situacoes.find((s) => s.situacao === 'IMPEDIDO')

  return (
    <section className="section-block" id="cemiterios">
      <div className="section-heading">
        <p className="section-kicker">Exemplo de uso · construção e revitalização de cemitérios</p>
        <h2>R$ 19,9 milhões em emendas para cemitérios espalhadas por 35 municípios</h2>
        <p>
          Uma construtora que atua com obras e revitalização de cemitérios quer se habilitar para
          atender todas as prefeituras que receberam emendas do objeto 301 (Cemitérios e Espaços
          Públicos Associados — Ministério das Cidades). O pipeline do TransfereGov extraiu,
          validou, enriqueceu e geolocalizou cada emenda PIX de 2026, gerando o mapa de
          oportunidades abaixo: quem recebeu, quanto recebeu e em que situação está.
        </p>
      </div>

      <div className="spotlight-card cemetery-hero">
        <div className="spotlight-glow" />
        <div className="spotlight-header">
          <span className="spotlight-period">Potencial total · emendas objeto 301 · 2026</span>
          <h3>Quase R$ 20 milhões em orçamento de cemitérios</h3>
          <span className="spotlight-path">
            {cemeterySummary.nMunicipios} prefeituras em {cemeterySummary.nUfs} estados — da conta
            para a primeira proposta
          </span>
        </div>
        <div className="spotlight-stats">
          <div className="stat-chip">
            <strong>{brl0(cemeterySummary.total)}</strong>
            <span>valor total em emendas</span>
          </div>
          <div className="stat-chip">
            <strong>{cemeterySummary.nMunicipios}</strong>
            <span>prefeituras beneficiadas</span>
          </div>
          <div className="stat-chip">
            <strong>{cemeterySummary.nUfs}</strong>
            <span>estados alcançados</span>
          </div>
          <div className="stat-chip">
            <strong>{brl0(cemeterySummary.mediaPorMunicipio)}</strong>
            <span>orçamento médio por município</span>
          </div>
        </div>
        <p className="spotlight-outcome">
          {cemeterySummary.nEmendas} emendas no total, sendo {brl0(ciente.total)} em{' '}
          {ciente.n} planos cientes (prefeituras cientes e aptas a contratar) e {brl0(impedido.total)}{' '}
          em {impedido.n} planos impedidos (restrição técnica a regularizar). Cada bolha no mapa
          representa o potencial individual de orçamento de uma prefeitura — e a lista completa
          abaixo traz as {cemeteryEmendas.length} emendas com o prefeito(a) responsável, o partido
          e o contato da prefeitura para a primeira abordagem comercial.
        </p>
        <div className="tag-row">
          <span className="tag">Objeto 301</span>
          <span className="tag">Ministério das Cidades</span>
          <span className="tag">Emendas PIX 2026</span>
          <span className="tag">35 municípios</span>
          <span className="tag">16 UFs</span>
        </div>
      </div>

      <div className="cemetery-map-wrap">
        <CemeteryMap municipios={cemeteryMunicipios} />
        <div className="cemetery-legend">
          <span>
            <i className="legend-dot legend-dot-ok" /> Ciente — apto a contratar
          </span>
          <span>
            <i className="legend-dot legend-dot-block" /> Impedido — restrição técnica
          </span>
          <span className="legend-size">Tamanho da bolha = valor da emenda</span>
        </div>
      </div>

      <div className="charts-grid cemetery-charts">
        <ChartCard title="Top 10 municípios por valor" data={top10} />
        <ChartCard title="Valor total por estado" data={ufData} />
      </div>

      <div className="cemetery-table-wrap">
        <h3 className="cemetery-table-title">
          As {cemeteryEmendas.length} emendas — prefeitura, prefeito(a) e contato
        </h3>
        <table className="cemetery-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Município</th>
              <th>Prefeito(a)</th>
              <th>Partido</th>
              <th>Contato da prefeitura</th>
              <th>Situação</th>
              <th className="cemetery-th-value">Valor</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmendas.map((e, i) => {
              const impedido = e.situacao === 'IMPEDIDO'
              return (
                <tr key={e.plano}>
                  <td>{i + 1}</td>
                  <td className="cemetery-td-name">{e.municipio}</td>
                  <td>{e.prefeito || '—'}</td>
                  <td>{e.partido || '—'}</td>
                  <td className="cemetery-td-contact">{contatoDe(e)}</td>
                  <td>
                    <span className={impedido ? 'situ-badge situ-badge-block' : 'situ-badge situ-badge-ok'}>
                      {impedido ? 'Impedido' : 'Ciente'}
                    </span>
                  </td>
                  <td className="cemetery-td-value">{brl(e.total)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="cta-block">
        <div>
          <h3>Quer transformar dados públicos em uma lista de clientes assim?</h3>
          <p>
            Esse é um exemplo real gerado pelo pipeline que construí: extração, validação,
            enriquecimento, geolocalização e apresentação de oportunidades por segmento, objeto ou
            região. O mesmo processo serve para obras de creches, pontes, iluminação, saúde,
            educação e qualquer outra frente de emendas parlamentares.
          </p>
        </div>
        <div className="cta-actions">
          {!standalone && (
            <a className="button-secondary" href="#/cemiterios">
              Abrir página do caso de uso
            </a>
          )}
          <a className="button-primary" href="#resume">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}
