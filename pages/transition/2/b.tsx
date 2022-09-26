import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SimpleLogin_B() {
  return (
    <div className="flex flex-col overflow-hidden p-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10">
        <div className="bg-stone-600 w-16 h-16 mb-5" />
        <div className="w-full aspect-w-2 aspect-h-2 absolute">
          <Link href="/transition/2/a">
            <motion.div
              className="bg-stone-600 w-full h-full"
              layoutId="tile"
            />
          </Link>
        </div>
      </div>
      <div className="bg-stone-200 h-96 w-full z-0" />
    </div>
  )
}
