import { createStore } from 'zustand/vanilla'

export type TToken = string | null

export type TokenState = {
  token: TToken
}

export type TokenActions = {
  update: (newValue: TToken) => void
  clear: () => void
}

export type TokenStore = TokenState & TokenActions

export const initTokenStore = (): TokenState => {
  return {
    token:
      typeof window !== 'undefined'
        ? localStorage.getItem('weatherApiKey')
        : null,
  }
}

export const defaultInitState: TokenState = {
  token: null,
}

export const createTokenStore = (initState: TokenState = defaultInitState) => {
  return createStore<TokenStore>()(set => ({
    ...initState,
    update: newValue => {
      if (newValue === null) {
        localStorage.removeItem('weatherApiKey')
      } else {
        localStorage.setItem('weatherApiKey', newValue)
      }
      return set({ token: newValue })
    },
    clear: () => {
      localStorage.removeItem('weatherApiKey')
      return set(initState)
    },
  }))
}
