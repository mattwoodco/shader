import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { IncomingMessage, ServerResponse } from 'http'
import { EmailProvider } from 'lib/next-auth/EmailProvider'
import { prisma } from 'lib/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions, SessionStrategy, User } from 'next-auth'
import NextAuth from 'next-auth'

export type NextAuthRequest = NextApiRequest &
  (IncomingMessage & { cookies: Partial<{ [key: string]: string }> })

export type NextAuthResponse = NextApiResponse | ServerResponse

export const getAuthOptions = (
  request: NextAuthRequest,
  response: NextAuthResponse
): NextAuthOptions => {
  return {
    // Database for user records
    adapter: PrismaAdapter(prisma),
    // Add additional providers here
    providers: [EmailProvider()],
    session: {
      strategy: 'jwt' as SessionStrategy,
    },
    callbacks: {
      async signIn({ user }: any) {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email as string,
          },
        })

        if (existingUser) {
          return true
        }

        const allowedDomains = String(process.env.PREVIEW_ACCESS_DOMAINS).split(
          ' '
        )
        const emailDomain = user.email.split('@')[1]

        if (allowedDomains.includes(emailDomain)) {
          // If no user exists, create a new user
          try {
            const newUser: User = await prisma.user.create({
              data: {
                email: user.email,

                createdAt: new Date(),
                updatedAt: new Date(),
              },
            })
            if (newUser) {
              return true
            }
          } catch (error) {
            console.log('Error creating new user', error)
          }
        }

        return false
      },
    },
    pages: {
      signIn: '/auth/login',
      verifyRequest: '/auth/verify',
      error: '/auth/error',
    },
  }
}

const nextAuthRoute = (
  request: NextApiRequest,
  response: NextApiResponse
): any => NextAuth(request, response, getAuthOptions(request, response))

export default nextAuthRoute
