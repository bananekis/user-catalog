import { Card, CardContent } from "@/components/ui/card"
import type { User } from "@/lib/types"
import { AtSign, UserIcon } from "lucide-react"

export function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <UserIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">{user.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <AtSign className="w-3.5 h-3.5 mr-1" />
              {user.email}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
