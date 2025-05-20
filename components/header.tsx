"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Header() {
	const handleLogout = async () => {
		await signOut({ callbackUrl: "/login" });
	};

	return (
		<header className="border-b">
			<div className="container flex items-center justify-between h-16">
				<h1 className="text-xl font-bold">User Catalog</h1>
				<Button variant="outline" size="sm" onClick={handleLogout}>
					<LogOut className="w-4 h-4 mr-2" />
					Logout
				</Button>
			</div>
		</header>
	);
}
