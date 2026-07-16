import axios from 'axios'
import { env } from '@/config/env'

/**
 * Shared Axios instance for all API requests.
 * Import this (or the service modules that wrap it) rather than calling
 * axios directly, so base URL, headers, and interceptors stay consistent.
 */
const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// --- Request interceptor -----------------------------------------------------
apiClient.interceptors.request.use(
  (config) => {
    // Attach auth token if present (customer session, etc.)
    const token = localStorage.getItem('pb_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// --- Response interceptor ----------------------------------------------------
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Normalize errors so callers get a consistent shape.
    const normalized = {
      status: error.response?.status ?? null,
      message:
        error.response?.data?.message ??
        error.message ??
        'Something went wrong. Please try again.',
      data: error.response?.data ?? null,
    }
    return Promise.reject(normalized)
  },
)

export default apiClient
