import { motion } from 'framer-motion'
import { animatedList, animatedListItem } from 'utils/animations'

export default function Verify() {
  return (
    <div className="flex h-full min-h-full">
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="h-full w-full bg-cover bg-bottom bg-unsplash-login-lg" />
      </div>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-8">
            <div className="mt-6">
              <motion.div
                className="space-y-6"
                variants={animatedList}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.div variants={animatedListItem}>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 ">
                    An Email has been sent to your inbox
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
