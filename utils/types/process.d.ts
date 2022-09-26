declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    PRIVATE_SUPABASE_SERVICE_KEY: string
    EMAIL_SERVER_USER: string
    EMAIL_SERVER_PASSWORD: string
    EMAIL_SERVER_HOST: string
    EMAIL_SERVER_PORT: number
    EMAIL_FROM: string
    NEXT_PUBLIC_AIRTABLE_API_KEY: string
    NEXT_PUBLIC_AIRTABLE_CONTENT_BASE_ID: string
    NEXT_PUBLIC_AIRTABLE_CONTENT_TABLE: string
    NEXT_PUBLIC_AIRTABLE_CONTENT_KEY: string
    NEXT_PUBLIC_AIRTABLE_CONTENT_VALUE: string
    DEFAULT_LANGUAGE: string
  }
}
