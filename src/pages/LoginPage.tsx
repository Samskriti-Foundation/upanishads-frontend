import { Button } from "@/components/ui/button"
import BeatLoader from "react-spinners/BeatLoader"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginMutation } from "@/api/login.api"
import { useState } from "react"
import useAuthStore from "@/store/authStore"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router"
import { toast } from "sonner"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const { setToken } = useAuthStore()

  const loginMutation = useLoginMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (email === "" || password === "") {
      setError("Email and password cannot be empty")
      return
    }

    loginMutation.mutate(
      {
        username: email,
        password,
      },
      {
        onSuccess: (data: { access_token: string }) => {
          setToken(data.access_token)
          navigate("/p/isha")
          toast.success("Login Successful!")
        },
        onError: (err: Error) => {
          if (isAxiosError(err)) {
            if (err.response) {
              switch (err.response.status) {
                case 400:
                  setError("Invalid request. Please check your input.")
                  break
                case 401:
                  setError("Unauthorized. Please check your credentials.")
                  break
                case 403:
                  setError(
                    "Forbidden. You don't have permission to access this.",
                  )
                  break
                case 404:
                  setError(
                    "Not found. The requested resource could not be found.",
                  )
                  break
                default:
                  setError("An unexpected error occurred. Please try again.")
              }
            } else {
              setError("Network error. Please try again.")
            }
          }
        },
      },
    )
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-br from-orange-500 to-amber-500">
      <Card className="w-[350px] drop-shadow-2xl">
        <CardHeader>
          <CardTitle>Upanishads</CardTitle>
          <CardDescription>Upanishads admin/management portal</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              className="mx-auto"
              type="submit"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <BeatLoader color="#ffffff" size={4} />
              ) : (
                "Login"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage
