// https://github.com/vercel/next.js/discussions/35534?sort=new#discussioncomment-2557920
import Airtable from 'airtable'

export const IS_AIRTABLE_ENABLED = [
  process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_BASE_ID,
  process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_TABLE,
  process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_KEY,
  process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
].every(Boolean)

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var airtable: Airtable | undefined
}

export const airtable = IS_AIRTABLE_ENABLED
  ? global.airtable ||
    new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    })
  : undefined

if (process.env.NODE_ENV !== 'production') global.airtable = airtable
