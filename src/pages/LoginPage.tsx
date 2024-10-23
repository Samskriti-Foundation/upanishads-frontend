import { Button } from "@/components/ui/button"
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

const LoginPage = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-br from-orange-500 to-amber-500">
      <Card className="w-[350px] drop-shadow-2xl">
        <CardHeader>
          <CardTitle>Upanishads</CardTitle>
          <CardDescription>Upanishads admin/management portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="mx-auto">Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
