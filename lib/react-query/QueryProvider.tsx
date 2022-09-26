import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryState } from './types'

export const QueryProvider = ({
  children,
  state,
  client,
}: {
  children: React.ReactNode
  state: QueryState
  client: QueryClient
}) => {
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={state}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </Hydrate>
    </QueryClientProvider>
  )
}
