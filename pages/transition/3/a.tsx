import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SimpleLogin_A() {
  return (
    <div className="flex flex-col overflow-hidden py-12 relative z-0 h-full w-full gap-10">
      <div className="relative z-10 mx-10">
        <div className="bg-stone-200 w-16 h-16 mb-5" />
        <div className="bg-stone-200 w-16 h-16 rounded-full absolute top-0 right-0" />
      </div>
      <div className="relative z-10 px-10">
        <Link href="/transition/3/b">
          <motion.div layoutId="list" className="mx-8" layout>
            <div className="bg-stone-600 h-96 w-full z-0 p-7">
              <div className="text-center text-4xl">👋</div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti consequatur aspernatur inventore expedita assumenda
                debitis deserunt velit numquam veniam reiciendis doloremque
                minus maxime suscipit, totam saepe. Fugit nostrum error quidem!
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
