import React, { useState, useEffect } from 'react'
import './ShotCard.css'

export const ShotCard = ({ shot, onStatusChange, onEdit }) => {
  const getStatusColor = (status) => {
    const colors = {
      draft: 'var(--border)',
      ready: 'var(--warning)',
      queued: 'var(--primary)',
      generating: 'var(--primary)',
      completed: 'var(--success)',
      failed: 'var(--error)'
    }
    return colors[status] || 'var(--border)'
  }

  return (
    <div className="shot-card card">
      <div className="shot-header">
        <div className="shot-number">SHOT {String(shot.shotNumber).padStart(2, '0')}</div>
        <div className="shot-duration">{shot.duration}s</div>
      </div>

      <div className="shot-content">
        <p className="shot-scene"><strong>Scene:</strong> {shot.scene}</p>
        <p><strong>Location:</strong> {shot.location}</p>
        <p><strong>Action:</strong> {shot.action}</p>
        {shot.dialogue && <p><strong>Dialogue:</strong> {shot.dialogue}</p>}
      </div>

      <div className="shot-status" style={{ borderColor: getStatusColor(shot.status) }}>
        <span className="status-dot" style={{ backgroundColor: getStatusColor(shot.status) }}></span>
        <span>{shot.status.toUpperCase()}</span>
      </div>

      <div className="shot-actions">
        <button className="btn-secondary" onClick={() => onEdit(shot)}>Edit</button>
        <select onChange={(e) => onStatusChange(shot.id, e.target.value)} value={shot.status}>
          <option value="draft">Draft</option>
          <option value="ready">Ready</option>
          <option value="queued">Queued</option>
          <option value="generating">Generating</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
      </div>
    </div>
  )
}