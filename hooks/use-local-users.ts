"use client";

import { useState, useEffect } from "react";
import type { User } from "@/lib/types";

export function useLocalUsers() {
	const [localUsers, setLocalUsers] = useState<User[]>([]);

	useEffect(() => {
		const cookieValue = document.cookie
			.split("; ")
			.find((row) => row.startsWith("local-users="))
			?.split("=")[1];

		if (cookieValue) {
			try {
				const parsedUsers = JSON.parse(decodeURIComponent(cookieValue));
				setLocalUsers(parsedUsers);
			} catch (error) {
				console.error("Failed to parse local users:", error);
			}
		}
	}, []);

	return { localUsers };
}
