import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariants, transition } from '@/lib/motion'

/**
 * Wraps the routed page in an animated container so navigating between routes
 * fades/slides content in and out. Drop this in place of <Outlet /> inside the
 * layout's <main>.
 */
export default function AnimatedOutlet() {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}
