import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '12788108230-3dbouccboj8s7phvd7cqg9a9601bhvnk.apps.googleusercontent.com',
      clientSecret: process.env.REACTJS_GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})
