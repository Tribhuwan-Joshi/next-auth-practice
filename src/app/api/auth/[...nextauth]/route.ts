import User from "@/models/User";
import NextAuth from "next-auth/next";
import connect from "@/utils/db";
import { User as AuthUser, Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        // credentials got email and password
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) return user;
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],

  // callbacks to handle sign in
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") return true;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
