import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					// Validate credentials
					const { email, password } = loginSchema.parse(credentials);

					// Demo user - in a real app, i would check against some database
					if (
						email === "admin@example.com" &&
						password === "password"
					) {
						return {
							id: "1",
							name: "Admin User",
							email: "admin@example.com",
						};
					}

					return null;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	// Add a secret key for production
	secret:
		process.env.NEXTAUTH_SECRET ||
		"THIS_IS_AN_EXAMPLE_SECRET_THAT_SHOULD_BE_CHANGED",
	callbacks: {
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
});

export { handler as GET, handler as POST };
