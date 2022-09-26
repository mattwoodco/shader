import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { mockNavigationLinks } from './links'

export function MockNavigation() {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="flex items-center py-3">
            <span className="text-base">Tools</span>
            <div className="pl-1">
              {open ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <Popover.Panel
                className="absolute z-10 flex w-64 flex-col bg-white py-1"
                as={motion.div}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                static
              >
                {mockNavigationLinks.map(
                  ({ href, label }: { href: string; label: string }, i) => (
                    <Link key={label} href={href}>
                      <a className="py-2" onClick={() => close()}>
                        {label}
                      </a>
                    </Link>
                  )
                )}
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
