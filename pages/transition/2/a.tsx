import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SimpleLogin_A() {
  return (
    <div className="flex flex-col overflow-hidden p-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10">
        <div className="bg-stone-600 w-16 h-16 mb-5" />
        <Link href="/transition/2/b">
          <motion.div
            className="bg-stone-600 w-16 h-16 rounded-full absolute top-0 right-0"
            layoutId="tile"
            initial={{ borderRadius: '0%' }}
            animate={{ borderRadius: '100%' }}
          />
        </Link>
      </div>
      <div className="bg-stone-200 h-96 w-full z-0" />
    </div>
  )
}
