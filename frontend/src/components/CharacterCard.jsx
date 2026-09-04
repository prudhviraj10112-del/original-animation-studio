import React from 'react'
import './CharacterCard.css'

export const CharacterCard = ({ character, onLock, onEdit }) => {
  return (
    <div className="character-card card">
      <div className="character-header">
        <div>
          <h3>{character.name}</h3>
          <p className="role">{character.role}</p>
        </div>
        {character.isLocked && <span className="lock-badge">🔒 LOCKED</span>}
      </div>

      <div className="character-info">
        <p><strong>Age:</strong> {character.age}</p>
        <p><strong>Personality:</strong> {character.personality}</p>
        <p><strong>Appearance:</strong> {character.appearance}</p>
      </div>

      {character.colorPalette && character.colorPalette.length > 0 && (
        <div className="color-palette">
          {character.colorPalette.map((color, idx) => (
            <div key={idx} className="color-swatch" style={{ backgroundColor: color }} />
          ))}
        </div>
      )}

      <div className="character-actions">
        {!character.isLocked && (
          <button className="btn-accent" onClick={() => onLock(character.id)}>Lock Identity</button>
        )}
        <button className="btn-secondary" onClick={() => onEdit(character)}>Edit</button>
      </div>
    </div>
  )
}