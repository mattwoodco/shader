import { motion } from 'framer-motion'
import Link from 'next/link'
import { animatedList, animatedListItem } from 'utils/animations'

export default function SimpleLogin_A() {
  return (
    <div className="flex flex-col overflow-hidden py-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10 mx-10">
        <div className="bg-stone-200 w-16 h-16 mb-5" />
        <div className="bg-stone-200 w-16 h-16 rounded-full absolute top-0 right-0" />
      </div>

      <div className="relative z-10 px-10">
        <Link href="/transition/3/a">
          <motion.div
            className="bg-stone-600 w-full z-0 flex flex-col gap-10 py-10 relative origin-center"
            layoutId="list"
            variants={animatedList}
            initial="hidden"
            animate="show"
            exit="exit"
            layout
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-full z-10 origin-center text-center items-center justify-center flex flex-col gap-20 px-10"
                variants={animatedList}
                layout
              >
                <motion.div
                  className="h-16 mx-10 w-full bg-stone-200 text-center flex items-center justify-center font-semibold"
                  variants={animatedListItem}
                  layout
                >
                  Click Me
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
