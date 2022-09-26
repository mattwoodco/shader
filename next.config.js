// @ts-check
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/**
 * @type {import('next').NextConfig}
 **/
module.exports = (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   /* development only config options here */
  //   return {
  //     reactStrictMode: true,
  //   }
  // }

  return {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: true,
      scrollRestoration: true,
      images: {
        allowFutureImage: true,
      },
      // Load external modules from a CDN
      // https://nextjs.org/docs/api-reference/next.config.js/url-imports#examples
      // urlImports: ['https://cdn.skypack.dev/'],
    },
  }
}
