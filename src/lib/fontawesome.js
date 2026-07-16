/**
 * Font Awesome global configuration.
 *
 * Imported once in main.jsx. We import the core CSS manually and disable
 * auto-insertion so styles are bundled by Vite (prevents icon flicker / FOUC).
 *
 * Usage in components:
 *   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 *   import { faBurger } from '@fortawesome/free-solid-svg-icons'
 *   <FontAwesomeIcon icon={faBurger} />
 */
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
