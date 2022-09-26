import MagicEmailProvider from 'next-auth/providers/email'

export const EmailProvider = () => {
  return MagicEmailProvider({
    from: process.env.EMAIL_FROM,
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    },

    async generateVerificationToken() {
      return `${Math.random() * 1000}`
    },
  })
}
