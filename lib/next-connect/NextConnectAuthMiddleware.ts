import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { getAuthOptions } from '../../pages/api/auth/[...nextauth]'

export const NextConnectAuthMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  const session = await unstable_getServerSession(
    req,
    res,
    getAuthOptions(req, res)
  )

  if (!session) {
    throw new Error('Unauthorized request')
  }

  return next()
}
