import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SimpleLogin_A() {
  return (
    <div className="flex flex-col overflow-hidden py-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10 mx-10 flex-1">
        <div className="bg-stone-200 w-16 h-16 mb-5" />
        <div className="bg-stone-200 w-16 h-16 rounded-full absolute top-0 right-0" />
      </div>
      <div className="relative z-10 mx-10">
        <Link href="/transition/4/b">
          <motion.div
            className="bg-stone-600 w-full z-0 p-7 h-full"
            layoutId="list"
            layout
          >
            <motion.div className="text-center text-4xl" layout="position">
              ✍️
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
