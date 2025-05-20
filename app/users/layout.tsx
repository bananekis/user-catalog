import type React from "react"
import { UserAuthCheck } from "@/components/user-auth-check"
import { Header } from "@/components/header"

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserAuthCheck>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </UserAuthCheck>
  )
}
