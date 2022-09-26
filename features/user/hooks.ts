import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { fetchUserById } from './requests'

export function useUser() {
  const { data, status } = useSession()

  if (status !== 'authenticated') return null

  return data?.user as User
}

export const useFetchUserById = (id: string) =>
  useQuery([`user-${id}`, `/api/user/${id}`], fetchUserById)
