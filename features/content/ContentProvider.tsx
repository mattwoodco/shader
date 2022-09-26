import React, { createContext } from 'react'
import { useFetchContent } from './useFetchContent'

type ContentProviderProps = {
  children: React.ReactNode
  lang: string
}

type ContentContextType = {
  content: Record<any, any>
}

export const ContentContext = createContext<ContentContextType | null>(null)

export const ContentProvider = ({ children, lang }: ContentProviderProps) => {
  const content = useFetchContent(lang)

  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  )
}
