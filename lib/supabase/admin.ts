import { createClient } from '@supabase/supabase-js'

// For Admin-authenticated requests, we need to use the secret key
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.PRIVATE_SUPABASE_SERVICE_KEY
)
