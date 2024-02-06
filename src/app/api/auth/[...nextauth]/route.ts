import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth({} as AuthOptions);

export { handler as GET, handler as POST };
