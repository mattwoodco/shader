import { airtable } from 'lib/airtable/client'

export const fetchContent = async (lang = 'en') => {
  if (airtable !== undefined) {
    const records = await airtable
      .base(process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_BASE_ID)(
        process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_TABLE
      )
      .select({
        fields: [process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_KEY, 'en', 'es'],
      })
      .all()
    const content: Record<any, any> = {}
    records.forEach((record: any) => {
      content[record.fields[process.env.NEXT_PUBLIC_AIRTABLE_CONTENT_KEY]] =
        record.fields[lang]
    })
    return content
  }
}
