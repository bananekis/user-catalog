import { Suspense } from "react"
import { UsersList } from "@/components/users-list"
import { UsersListSkeleton } from "@/components/users-list-skeleton"
import { AddUserButton } from "@/components/add-user-button"
import { UserAuthCheck } from "@/components/user-auth-check"

export default function UsersPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = Number(searchParams.page) || 1

  return (
    <UserAuthCheck>
      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">User List</h2>
          <AddUserButton />
        </div>
        <Suspense fallback={<UsersListSkeleton />}>
          <UsersList page={page} />
        </Suspense>
      </div>
    </UserAuthCheck>
  )
}
