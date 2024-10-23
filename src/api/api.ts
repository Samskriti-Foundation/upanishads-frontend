import axios from "axios"
import useAuthStore from "@/store/authStore"

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const { data } = await api.post("/management/auth/refresh")
        const newAccessToken = data.access_token

        useAuthStore.getState().setToken(newAccessToken) // Store new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return api(originalRequest) // Retry the request with new token
      } catch (refreshError) {
        useAuthStore.getState().resetToken() // Clear tokens
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default api
