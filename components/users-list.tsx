import { UserListClient } from "@/components/user-list-client";
import { getUsers } from "@/lib/api";

export async function UsersList({ page }: { page: number }) {
	const apiUsers = await getUsers();

	return <UserListClient apiUsers={apiUsers} page={page} />;
}
