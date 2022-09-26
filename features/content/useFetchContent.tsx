import { airtable } from 'lib/airtable/client'
import { useEffect, useState } from 'react'
import { fetchContent } from './api/fetchContent'

export const useFetchContent = (staticLang = 'en') => {
  const [language, setLanguage] = useState<string | null>(staticLang)
  const [content, setContent] = useState({})

  useEffect(() => {
    setLanguage(window.document.documentElement.lang)
  }, [])

  useEffect(() => {
    language &&
      airtable !== undefined &&
      fetchContent(language).then((content) => {
        if (content) {
          setContent(content)
        }
      })
  }, [language])

  return content
}
