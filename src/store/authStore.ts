import { create } from "zustand"

interface AuthState {
  token: string | null
  setToken: (token: string) => void
  resetToken: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token: string) => set(() => ({ token: token })),
  resetToken: () => set(() => ({ token: null })),
}))

export default useAuthStore
