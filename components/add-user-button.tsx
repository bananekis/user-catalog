"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function AddUserButton() {
  return (
    <Button asChild>
      <Link href="/users/add">
        <Plus className="w-4 h-4 mr-2" />
        Add User
      </Link>
    </Button>
  )
}
