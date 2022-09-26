import { MockNavigation } from 'features/navigation/MockNavigation'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { LinkMenuItem } from './LinkMenuItem'

export const Header = ({
  drawerToggle,
}: {
  drawerToggle?: React.ReactNode
}) => {
  const { data: session } = useSession()

  return (
    <header className="z-30 w-full border-b-2">
      <nav className="flex w-full">
        <div className="relative col-span-2 flex flex-1 flex-shrink-0 items-center gap-10">
          <div className="flex items-end border-l-2  pl-7 leading-none">
            starter
          </div>
          <MockNavigation />
          {drawerToggle && drawerToggle}
        </div>

        {!session && (
          <div className="ml-auto flex items-center px-7 leading-none">
            <Link href="/auth/login">Login</Link>
          </div>
        )}
        {session && (
          <button
            className="ml-auto flex items-center px-7 leading-none"
            onClick={() => signOut()}
          >
            <span>Logged In</span>
          </button>
        )}
        {session?.user && <LinkMenuItem href="/auth/logout" label="Logout" />}
      </nav>
    </header>
  )
}
