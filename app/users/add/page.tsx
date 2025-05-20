import { UserAddForm } from "@/components/user-add-form"
import { UserAuthCheck } from "@/components/user-auth-check"

export default function AddUserPage() {
  return (
    <UserAuthCheck>
      <div className="container max-w-md py-8 space-y-6">
        <h1 className="text-3xl font-bold">Add New User</h1>
        <UserAddForm />
      </div>
    </UserAuthCheck>
  )
}
