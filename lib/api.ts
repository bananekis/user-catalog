import type { User } from "@/lib/types"

export async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }

  return response.json()
}
