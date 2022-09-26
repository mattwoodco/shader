import { NextApiRequest, NextApiResponse } from 'next'

export const NextConnectHandler = {
  onError: (err: any, _: NextApiRequest, res: NextApiResponse) => {
    console.error(`${(err as any).stack}`)
    res.status(500).end('Something broke!')
  },
  onNoMatch: (_: NextApiRequest, res: NextApiResponse) => {
    res.status(405).end({ message: 'Method Not Allowed' })
  },
}
