import { NextConnectAuthMiddleware } from 'lib/next-connect/NextConnectAuthMiddleware'
import { NextConnectHandler } from 'lib/next-connect/NextConnectHandler'
import { sendEmail } from 'lib/nodemailer/sendEmail'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

// import { submitForm } from 'features/user/submitForm'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.use(NextConnectAuthMiddleware).put(async (req, res) => {
  // TODO - Do something
  // const response = await submitForm(req.body)

  sendEmail(req.body)
  res.json({ data: req.body })
})

export default router.handler(NextConnectHandler)
