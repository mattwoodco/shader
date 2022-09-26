import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { animatedList, animatedListItem } from 'utils/animations'

const errors: Record<string, string> = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  Verification: 'The token has expired or has already been used.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
}

export default function Verify() {
  const { query } = useRouter()
  const error = (query.error as string) || 'default'
  const errorMessage = errors[error] || errors.default

  return (
    <div className="flex h-full min-h-full bg-white">
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="bg-unsplash-login-lg h-full w-full bg-cover bg-bottom" />
      </div>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-8">
            <div className="mt-6">
              <motion.div
                className="space-y-6"
                variants={animatedList}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.div variants={animatedListItem}>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-red">
                    {errorMessage}
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
