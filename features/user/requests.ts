import { User } from '@prisma/client'
import ky from 'ky'

export const updateUser = (user: any) =>
  ky.post(`/api/user/${user.id}`, { json: user }).json()

export const fetchUserById = async ({ queryKey }: any) => {
  const user = await ky.get(queryKey[0]).json()
  return user as Partial<User> & { id: string }
}
