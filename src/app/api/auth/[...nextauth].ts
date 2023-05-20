import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile, tokens) {
        console.log({ profile });
        return { ...profile, tokenData: tokens };
      },
    }),
  ],
  callbacks: {
    session({ user, session }) {
      return { ...session, user: { ...session.user, ...user } };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
