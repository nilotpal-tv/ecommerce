import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile, tokens) {
        console.log({ profile, tokens });
        return { ...profile, tokenData: tokens };
      },
    }),
  ],
  callbacks: {
    session({ user, session }) {
      console.log({ user, session });
      return { ...session, user: { ...session.user, ...user } };
    },
  },
  pages: { signIn: '/signin' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
