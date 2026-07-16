import { motion } from 'framer-motion'
import { Section, Button } from '@/components/ui'
import { PATHS } from '@/routes/paths'

export default function NotFoundPage() {
  return (
    <Section spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-md flex-col items-center gap-4 text-center"
      >
        <span className="font-display text-7xl font-extrabold text-accent-400">404</span>
        <h1>Page Not Found</h1>
        <p className="text-neutral-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Button to={PATHS.home} variant="primary" size="lg" className="mt-2">
          Back to Home
        </Button>
      </motion.div>
    </Section>
  )
}
