/**
 * Centralized, typed access to environment variables.
 * All Vite env vars must be prefixed with VITE_ to be exposed to the client.
 * Define values in `.env`, `.env.local`, etc. (see `.env.example`).
 */
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  appName: import.meta.env.VITE_APP_NAME ?? 'Pattyburger',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
