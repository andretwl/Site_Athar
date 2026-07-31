import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const brl = (v) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v)

export default function CemeteryMap({ municipios }) {
  const maxTotal = Math.max(...municipios.map((m) => m.total))
  const centerLat = municipios.reduce((s, m) => s + m.lat, 0) / municipios.length
  const centerLng = municipios.reduce((s, m) => s + m.lng, 0) / municipios.length

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={4}
      scrollWheelZoom={false}
      className="cemetery-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
      />
      {municipios.map((m) => {
        const impedido = m.nImpedidos > 0
        const radius = 7 + 11 * Math.sqrt(m.total / maxTotal)
        const color = impedido ? '#ff7a59' : '#7ae582'
        return (
          <CircleMarker
            key={m.ibge}
            center={[m.lat, m.lng]}
            radius={radius}
            pathOptions={{ color, fillColor: color, fillOpacity: 0.6, weight: 1.5 }}
          >
            <Tooltip>
              {m.nome} ({m.uf})
            </Tooltip>
            <Popup>
              <div className="cemetery-popup">
                <strong>
                  {m.nome} — {m.uf}
                </strong>
                <span className="cemetery-popup-value">{brl(m.total)}</span>
                <span className="cemetery-popup-meta">
                  {m.nEmendas} {m.nEmendas === 1 ? 'emenda' : 'emendas'} ·{' '}
                  {impedido ? 'Impedido' : 'Ciente'}
                </span>
                {m.prefeito && (
                  <span className="cemetery-popup-prefeito">
                    {m.prefeito}
                    {m.partido ? ` (${m.partido})` : ''}
                  </span>
                )}
                {(m.email || m.telefone) && (
                  <span className="cemetery-popup-contact">
                    {m.email}
                    {m.email && m.telefone ? ' · ' : ''}
                    {m.telefone}
                  </span>
                )}
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
