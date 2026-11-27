import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return
    document.title = `${title} | ${import.meta.env.VITE_APP_NAME || 'App'}`
  }, [title])
}
