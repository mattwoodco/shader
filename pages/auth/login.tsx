import { motion } from 'framer-motion'
import { NextApiResponse } from 'next'
import { unstable_getServerSession, User } from 'next-auth'
import { getCsrfToken, signIn } from 'next-auth/react'
import Image from 'next/image'
import { getAuthOptions, NextAuthRequest } from 'pages/api/auth/[...nextauth]'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { animatedList, animatedListItem } from 'utils/animations'
import loadingSpinner from '../../public/images/spinner.svg'

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextAuthRequest
  res: NextApiResponse
}) => {
  const session = await unstable_getServerSession(
    req,
    res,
    getAuthOptions(req, res)
  )

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default function Login() {
  const { handleSubmit, register } = useForm<User>({
    mode: 'onChange',
    defaultValues: { email: '' },
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async (data: Pick<User, 'email'>) => {
    const csrfToken = await getCsrfToken()
    setIsLoading(true)
    return await signIn('email', {
      ...data,
      csrfToken,
      callbackUrl: '/dashboard',
    })
  }, [])

  // const { LOGIN_WELCOME } = useContent()

  return (
    <div className="flex h-full min-h-full">
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="h-full w-full bg-cover bg-bottom bg-unsplash-login-lg" />
      </div>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {!isLoading && (
            <div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 ">
                Welcome
              </h2>
            </div>
          )}

          <div className="mt-8">
            {isLoading ? (
              <div className="relative mx-auto h-16 w-16">
                <Image src={loadingSpinner} layout="fill" alt="Loading" />
              </div>
            ) : (
              <div className="mt-6">
                <motion.form
                  className="space-y-6"
                  variants={animatedList}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <motion.div variants={animatedListItem}>
                    <label className="label px-4 font-bold">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      placeholder="hello@startup.com"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                    />
                  </motion.div>

                  <motion.div variants={animatedListItem}>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-brand-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </motion.div>
                </motion.form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
