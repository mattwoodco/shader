import { createContext, useContext } from 'react'
import { GlobalState } from './types'

export const StoreContext = createContext(null)

export const StoreProvider = ({
  children,
  store,
}: {
  children: React.ReactNode
  store: any
}) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (selector: (s: GlobalState) => unknown, eqFn?: any) => {
  const store: any = useContext(StoreContext)
  const values = store(selector, eqFn)
  return values
}
