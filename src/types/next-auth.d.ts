import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string;
      age?: string;
      email?: string;
      gender?: string;
    } & DefaultSessionUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    age?: string;
    email?: string;
    gender?: string;
  }
}

declare module "next-auth/providers" {
  // Profile 인터페이스 확장
  interface Profile {
    response?: {
      id?: string;
      name?: string;
      age?: string;
      email?: string;
      gender?: string;
    };
  }
}
