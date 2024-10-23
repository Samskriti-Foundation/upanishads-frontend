import { Route, Routes } from "react-router"
import LoginPage from "./pages/LoginPage"
import ProjectsPage from "./pages/ProjectsPage"
const App = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<ProjectsPage />} path="/p" />
    </Routes>
  )
}

export default App
