import React, { useState } from 'react'
import { Menu, X, Home, BookOpen, Users, MapPin, Film, Sparkles, Music, Clock, Download, Settings } from 'lucide-react'
import './Sidebar.css'

export const Sidebar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'story', label: 'Story Studio', icon: BookOpen },
    { id: 'characters', label: 'Character Studio', icon: Users },
    { id: 'locations', label: 'Location Studio', icon: MapPin },
    { id: 'storyboard', label: 'Storyboard Studio', icon: Film },
    { id: 'animation', label: 'Animation Studio', icon: Sparkles },
    { id: 'audio', label: 'Audio Studio', icon: Music },
    { id: 'timeline', label: 'Master Timeline', icon: Clock },
    { id: 'export', label: 'Export Studio', icon: Download },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="sidebar-header">
        {isOpen && <h1>🎬 Studio</h1>}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              title={!isOpen ? item.label : ''}
            >
              <Icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>
    </div>
  )
}