import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables");
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                if (
                    credentials.email === process.env.ADMIN_EMAIL &&
                    credentials.password === process.env.ADMIN_PASSWORD
                ) {
                    return { id: "1", email: process.env.ADMIN_EMAIL, name: "Admin User", isAdmin: true };
                }


                return null;
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session?.user) {
                (session.user as any).isAdmin = token.isAdmin;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth",
    },
    session: {
        strategy: "jwt",
    },
};