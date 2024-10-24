import { Navigate, Outlet } from "react-router-dom"
import useAuthStore from "@/store/authStore"

function PrivateRoutes() {
  const token = useAuthStore((state) => state.token)

  return token ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoutes
