"use client"
import { UserCard } from "@/components/user-card"
import { Pagination } from "@/components/pagination"
import type { User } from "@/lib/types"
import { useLocalUsers } from "@/hooks/use-local-users"

export function UserListClient({
  apiUsers,
  page,
}: {
  apiUsers: User[]
  page: number
}) {
  const { localUsers } = useLocalUsers()
  const pageSize = 5

  // Combine API users with local users
  const allUsers = [...localUsers, ...apiUsers]

  // Calculate pagination
  const totalUsers = allUsers.length
  const totalPages = Math.ceil(totalUsers / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedUsers = allUsers.slice(startIndex, endIndex)

  return (
    <>
      <div className="grid gap-4">
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No users found</p>
          </div>
        )}
      </div>

      <Pagination currentPage={page} totalPages={totalPages || 1} />
    </>
  )
}
