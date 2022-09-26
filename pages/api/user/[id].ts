import { getUserById, updateUserById } from 'features/user/api'
import { NextConnectAuthMiddleware } from 'lib/next-connect/NextConnectAuthMiddleware'
import { NextConnectHandler } from 'lib/next-connect/NextConnectHandler'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

const router = createRouter<NextApiRequest, NextApiResponse>()

router
  .use(NextConnectAuthMiddleware)
  .get(async (req, res) => {
    const user = await getUserById(req.query.id as string)

    res.status(200).json(user)
  })
  .put(async (req, res) => {
    const user = await updateUserById(req.query.id as string, req.body)

    // TODO - Do something

    res.status(200).json(user)
  })

export default router.handler(NextConnectHandler)
