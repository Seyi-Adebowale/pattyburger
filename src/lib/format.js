import { BRAND } from './constants'

/**
 * Format a number as Nigerian Naira currency.
 * @param {number} amount
 * @returns {string} e.g. "₦3,500"
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: BRAND.currency,
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0)
}
