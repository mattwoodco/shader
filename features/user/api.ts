import { prisma } from 'lib/prisma/client'

export const getUserById = (id: string | undefined) =>
  prisma?.user.findUnique({
    where: { id },
  })

export const updateUserById = (id: string | undefined, data: any) =>
  prisma.user.update({
    where: { id },
    data,
  })
