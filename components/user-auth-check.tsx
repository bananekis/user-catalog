"use client";

import type React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

export function UserAuthCheck({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<Loader2 className="w-8 h-8 animate-spin" />
			</div>
		);
	}

	if (status === "unauthenticated") {
		redirect("/login");
	}

	return <>{children}</>;
}
