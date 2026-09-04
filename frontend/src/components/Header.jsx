import React from 'react'
import { Bell, User, LogOut } from 'lucide-react'
import './Header.css'

export const Header = ({ projectTitle, currentPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h2>{projectTitle || 'New Project'}</h2>
          <span className="page-label">{currentPage}</span>
        </div>

        <div className="header-right">
          <button className="header-btn" title="Notifications">
            <Bell size={20} />
            <span className="badge">2</span>
          </button>

          <button className="header-btn" title="User Profile">
            <User size={20} />
          </button>

          <button className="header-btn" title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}