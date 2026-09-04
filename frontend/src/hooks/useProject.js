import { useEffect, useState } from 'react'
import { projectService } from '../services/api'

export const useProject = (projectId) => {
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!projectId) return

    const fetchProject = async () => {
      setLoading(true)
      try {
        const response = await projectService.getById(projectId)
        setProject(response.data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectId])

  return { project, loading, error }
}