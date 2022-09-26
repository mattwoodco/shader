import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      className="h-full overflow-hidden bg-[#516DF7] text-white antialiased"
      lang="en"
    >
      <Head>
        <link rel="icon" href="/images/spinner.svg" />
        {/* <link
          href="/fonts/font.woff"
          as="font"
          crossOrigin=""
          rel="preload"
        /> */}
      </Head>
      <body className="m-0 h-full overflow-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
