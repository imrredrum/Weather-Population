import { createStore } from 'zustand'

export type TToken = string | null

export type TokenState = {
  token: TToken
}

export type TokenActions = {
  update: (newValue: TToken) => void
  clear: () => void
}

export type TokenStore = TokenState & TokenActions

export const initTokenStore = (): TokenState => ({
  token: null,
})

export const defaultInitState: TokenState = {
  token: null,
}

export const createTokenStore = (initState: TokenState = defaultInitState) => {
  return createStore<TokenStore>()(set => ({
    ...initState,
    update: newValue => set({ token: newValue }),
    clear: () => set(initState),
  }))
}
