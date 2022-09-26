import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { FC } from 'react'

export const LinkMenuItem: FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  return (
    <Menu.Item as="div">
      {({ active }) => {
        return (
          <Link href={href}>
            <a
              className={`block px-4 py-2 text-base ${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } `}
            >
              {label}
            </a>
          </Link>
        )
      }}
    </Menu.Item>
  )
}
