import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Projects
export const projectService = {
  create: (data) => api.post('/projects', data),
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`)
}

// Story
export const storyService = {
  create: (data) => api.post('/story', data),
  getByProject: (projectId) => api.get(`/story/${projectId}`)
}

// Characters
export const characterService = {
  create: (data) => api.post('/characters', data),
  getByProject: (projectId) => api.get(`/characters/project/${projectId}`),
  lock: (characterId) => api.put(`/characters/${characterId}/lock`)
}

// Locations
export const locationService = {
  create: (data) => api.post('/locations', data),
  getByProject: (projectId) => api.get(`/locations/project/${projectId}`),
  lock: (locationId) => api.put(`/locations/${locationId}/lock`)
}

// Storyboard
export const storyboardService = {
  create: (data) => api.post('/storyboard', data),
  getByProject: (projectId) => api.get(`/storyboard/project/${projectId}`),
  updateStatus: (shotId, status) => api.put(`/storyboard/${shotId}/status`, { status })
}

// Video
export const videoService = {
  generate: (data) => api.post('/video/generate', data)
}

// Jobs
export const jobService = {
  getAll: () => api.get('/jobs'),
  getById: (jobId) => api.get(`/jobs/${jobId}`)
}

// Audio
export const audioService = {
  create: (data) => api.post('/audio', data),
  getByProject: (projectId) => api.get(`/audio/project/${projectId}`)
}

// Render
export const renderService = {
  queue: (data) => api.post('/render', data),
  getStatus: (jobId) => api.get(`/render/${jobId}`)
}

// Health
export const healthService = {
  check: () => api.get('/health')
}

export default api