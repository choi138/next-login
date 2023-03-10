import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "asdf" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "asdf",
          email: "asdf@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: 'http://localhost:3001/auth'
    // error: '/auth/error',
  },
//   callbacks: {
//     jwt(params) {
//       // update token
//       if (params.user?.role) {
//         params.token.role = params.user.role;
//       }
//       // return final_token
//       return params.token;
//     },
//   },
};

export default NextAuth(authOptions);