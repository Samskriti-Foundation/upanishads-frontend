import { AppSidebar } from "@/components/sidebar/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Navigate, useParams } from "react-router"

const ContentPage = () => {
  const { project } = useParams<{ project: string }>()
  const allowedProjects = ["isha", "kena", "katha"]

  if (!project || !allowedProjects.includes(project)) {
    return <Navigate to="/p/isha" />
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <SidebarTrigger />
        <h1>Hello Pranav</h1>
      </div>
    </SidebarProvider>
  )
}

export default ContentPage
