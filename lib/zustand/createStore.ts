import { useMemo } from 'react'
import create, { StoreApi, UseBoundStore } from 'zustand'
import { initialState } from './initialState'
import { GlobalState } from './types'

let store: UseBoundStore<StoreApi<GlobalState>> | undefined

function initStore(preloadedState = initialState) {
  return create<GlobalState>((set, get) => ({
    ...initialState,
    ...preloadedState,
  }))
}

export const createStore = (preloadedState: GlobalState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useHydrate(initialState: GlobalState) {
  const state =
    typeof initialState === 'string' ? JSON.parse(initialState) : initialState

  const store = useMemo(() => createStore(state), [state])
  return store
}
