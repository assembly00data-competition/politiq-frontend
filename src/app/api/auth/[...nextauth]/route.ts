import NextAuth from "next-auth/next";
import Naver from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    Naver({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // 사용자 정보들을 세션에 추가
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.age = token.age;
      session.user.email = token.email;
      session.user.gender = token.gender;

      return session;
    },
    async jwt({ token, account, profile }) {
      // 사용자 프로필에서 받은 정보를 토큰에 추가
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      if (profile) {
        token.id = profile.response.id;
        token.name = profile.response.name;
        token.age = profile.response.age;
        token.email = profile.response.email;
        token.gender = profile.response.gender;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
