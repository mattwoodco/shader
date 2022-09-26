import { airtable } from 'lib/airtable/client'
import { useContext } from 'react'
import { ContentContext } from './ContentProvider'

export const useContent = () => {
  const context = useContext(ContentContext)

  if (!context)
    throw new Error(
      'ContentContext must be called from within the ContentContextProvider'
    )

  if (airtable === undefined)
    throw new Error(
      'Content from Airtable is not enabled. Please check your environment variables.'
    )

  return context.content
}
