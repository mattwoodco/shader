import seoConfig from 'features/seo/seoConfig'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import 'utils/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // React Query for browseer caching, refetching and loading states for API calls
  // const [queryClient] = useState(() => new QueryClient())

  // // Zustand for simplified global state management
  // const zustandStore = useHydrate(pageProps.initialZustandState)

  return (
    // <ContentProvider lang={process.env.DEFAULT_LANGUAGE}>
    // <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
    <>
      <DefaultSeo {...seoConfig} />

      <Component {...pageProps} />
      {/* <SessionProvider session={pageProps.session} refetchInterval={0}>
      </SessionProvider> */}
    </>
    // </QueryProvider>
    // </ContentProvider>
  )
}
