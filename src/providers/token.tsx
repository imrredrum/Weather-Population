'use client'

import {
  createTokenStore,
  initTokenStore,
  type TokenStore,
} from '@/stores/token'
import { createContext, useContext, useEffect, useRef } from 'react'
import { useStore } from 'zustand'

export type TokenStoreApi = ReturnType<typeof createTokenStore>

export const TokenStoreContext = createContext<TokenStoreApi | null>(null)

export const TokenStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<TokenStoreApi | null>(null)

  if (storeRef.current === null) {
    storeRef.current = createTokenStore()
  }

  useEffect(() => {
    storeRef.current?.setState(initTokenStore())
  }, [])

  return (
    <TokenStoreContext.Provider value={storeRef.current}>
      {children}
    </TokenStoreContext.Provider>
  )
}

export const useTokenStore = <T,>(selector: (store: TokenStore) => T): T => {
  const tokenStoreContext = useContext(TokenStoreContext)

  if (!tokenStoreContext) {
    throw new Error(`useTokenStore must be used within TokenStoreProvider`)
  }

  return useStore(tokenStoreContext, selector)
}
