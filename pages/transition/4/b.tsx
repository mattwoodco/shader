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
      <div className="relative z-10 mx-10 flex-1 flex">
        <Link href="/transition/4/a">
          <motion.div
            className="bg-stone-600 z-0 p-7 w-full flex flex-col gap-10 overflow-hidden"
            layoutId="list"
            layout
            variants={animatedList}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="flex flex-col gap-10 text-2xl flex-1"
              layout
              variants={animatedList}
            >
              <motion.div
                className="bg-stone-200 p-5 text-stone-600 text-center font-semibold text-2xl flex-1"
                layout
                variants={animatedListItem}
              >
                What&apos;s for dinner?
              </motion.div>
              <motion.div
                className="bg-stone-200 p-5 text-stone-600 text-center font-semibold text-2xl"
                layout
                variants={animatedListItem}
              >
                Submit
              </motion.div>
              <motion.div
                className="text-center text-4xl"
                layout="position"
                variants={animatedListItem}
              >
                🎉
              </motion.div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
