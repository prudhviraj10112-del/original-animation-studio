import React, { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import './App.css'

// Placeholder Page Components
const Dashboard = () => (
  <div className="page-content">
    <h1>Dashboard</h1>
    <p>Welcome to Original Animation Studio</p>
  </div>
)

const StoryStudio = () => (
  <div className="page-content">
    <h1>Story Studio</h1>
    <p>Create and manage your story</p>
  </div>
)

const CharacterStudio = () => (
  <div className="page-content">
    <h1>Character Studio</h1>
    <p>Design and customize characters</p>
  </div>
)

const LocationStudio = () => (
  <div className="page-content">
    <h1>Location Studio</h1>
    <p>Create animation locations</p>
  </div>
)

const StoryboardStudio = () => (
  <div className="page-content">
    <h1>Storyboard Studio</h1>
    <p>Plan your shots and sequences</p>
  </div>
)

const AnimationStudio = () => (
  <div className="page-content">
    <h1>Animation Studio</h1>
    <p>Animate your scenes</p>
  </div>
)

const AudioStudio = () => (
  <div className="page-content">
    <h1>Audio Studio</h1>
    <p>Add voice and sound effects</p>
  </div>
)

const MasterTimeline = () => (
  <div className="page-content">
    <h1>Master Timeline</h1>
    <p>Synchronize all elements</p>
  </div>
)

const ExportStudio = () => (
  <div className="page-content">
    <h1>Export Studio</h1>
    <p>Export your final animation</p>
  </div>
)

const Settings = () => (
  <div className="page-content">
    <h1>Settings</h1>
    <p>Configure your preferences</p>
  </div>
)

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [projectTitle, setProjectTitle] = useState('My Animation Project')

  const pageComponents = {
    dashboard: <Dashboard />,
    story: <StoryStudio />,
    characters: <CharacterStudio />,
    locations: <LocationStudio />,
    storyboard: <StoryboardStudio />,
    animation: <AnimationStudio />,
    audio: <AudioStudio />,
    timeline: <MasterTimeline />,
    export: <ExportStudio />,
    settings: <Settings />
  }

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <Header projectTitle={projectTitle} currentPage={currentPage} />
      <main className="main-content">
        {pageComponents[currentPage]}
      </main>
    </div>
  )
}

export default App