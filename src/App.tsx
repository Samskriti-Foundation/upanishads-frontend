import { Navigate, Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import ContentPage from "./pages/ContentPage"
import PrivateRoutes from "./utils/PrivateRoutes"

const App = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<PrivateRoutes />}>
        <Route element={<Navigate to="/p/isha" />} path="/p" />
        <Route element={<ContentPage />} path="/p/:project" />
      </Route>
    </Routes>
  )
}

export default App
