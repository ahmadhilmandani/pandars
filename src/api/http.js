const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function http(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  if (!response.ok) {
    const message = `Request failed: ${response.status} ${response.statusText}`
    throw new Error(message)
  }

  if (response.status === 204) return null
  return response.json()
}
