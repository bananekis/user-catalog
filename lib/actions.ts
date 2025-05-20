"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { cookies } from "next/headers";

const userSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
});

export async function addUser(formData: { name: string; email: string }) {
	const validatedData = userSchema.parse(formData);

	// Get existing users from cookies or initialize empty array
	const existingUsersJson = cookies().get("local-users")?.value;
	const existingUsers = existingUsersJson
		? JSON.parse(existingUsersJson)
		: [];

	// Create new user with generated ID
	const newUser = {
		id: `local-${Date.now()}`,
		name: validatedData.name,
		email: validatedData.email,
	};

	const updatedUsers = [newUser, ...existingUsers];

	cookies().set("local-users", JSON.stringify(updatedUsers.slice(0, 10)));

	// Revalidate users page
	revalidatePath("/users");

	return { success: true };
}
