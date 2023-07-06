import NextAuth from 'next-auth'
import { User as DbUser } from '@prisma/client'

declare module 'next-auth' {
  interface User {
    id: number
    name: string
    email: string
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DbUser
  }
}
