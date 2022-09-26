import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SimpleLogin_A() {
  return (
    <div className="flex flex-col overflow-hidden py-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10 mx-10">
        <div className="bg-stone-200 w-16 h-16 mb-5" />
        <div className="bg-stone-200 w-16 h-16 rounded-full absolute top-0 right-0" />
      </div>
      <div className="relative z-10 px-10 flex flex-col h-full">
        <Link href="/transition/5/a">
          <motion.div
            layoutId="list"
            layout
            className="flex flex-col flex-1 gap-10"
          >
            <motion.div
              layout
              layoutId="list1"
              className="bg-stone-600 flex-1"
            />
            <motion.div
              layout
              layoutId="list2"
              className="bg-stone-600 flex-1"
            />
            <motion.div
              layout
              layoutId="list3"
              className="bg-stone-600 flex-1"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
