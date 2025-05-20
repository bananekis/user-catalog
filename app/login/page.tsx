import { LoginForm } from "@/components/login-form"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await getServerSession()

  if (session) {
    redirect("/users")
  }

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to access the user catalog</p>
        </div>
        <LoginForm />
        <div className="text-center text-sm text-muted-foreground">
          <p>Demo credentials:</p>
          <p>Email: admin@example.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  )
}
