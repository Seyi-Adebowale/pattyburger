/**
 * API service layer.
 *
 * Group endpoint calls into service modules (e.g. `menuService`, `orderService`)
 * and re-export them here so components can import from a single entry point:
 *
 *   import { apiClient } from '@/api'
 *
 * Example service module (create in this folder as the app grows):
 *
 *   // src/api/menuService.js
 *   import apiClient from './client'
 *   export const menuService = {
 *     getMenu: () => apiClient.get('/menu').then((r) => r.data),
 *     getProduct: (id) => apiClient.get(`/menu/${id}`).then((r) => r.data),
 *   }
 */
export { default as apiClient } from './client'
