import { create } from "zustand"

interface State {
  token: string | null
}

interface Actions {
  setToken: (token: string) => void
  resetToken: () => void
}

const useAuthStore = create<State & Actions>((set) => ({
  token: null,
  setToken: (token: string) => set(() => ({ token })),
  resetToken: () => set(() => ({ token: null })),
}))

export default useAuthStore
