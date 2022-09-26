import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

export default function SimpleLogin_A() {
  return (
    <div className="relative z-0 flex h-full w-full flex-col gap-10 overflow-hidden py-12">
      <div className="relative z-10 mx-10">
        <div className="mb-5 h-16 w-16 bg-stone-200" />
        <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-stone-200" />
      </div>
      <div className="relative z-10 h-full px-10">
        <div className="z-0 m-7 h-full bg-stone-200" />
      </div>
      <div className="absolute bottom-10 top-[50%] z-10 w-full px-8">
        <Link href="/transition/6/b">
          <motion.div
            className="z-0 h-full w-full bg-stone-600 py-3 px-4"
            layoutId="player"
          >
            <motion.div
              className="flex flex-col gap-10 text-7xl text-stone-200"
              layout="position"
            >
              <IoMdArrowDroprightCircle />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
