import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { loginValidationSchema } from '@/app/(auth)/signin/page';
import prisma from '@/lib/prisma';
import authService from '@/services/auth.service';
import hashService from '@/services/hash.service';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'text', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials, req) {
        try {
          const parsedValues = await loginValidationSchema.parseAsync(
            credentials,
          );

          const user = await authService.findUserByEmail(parsedValues.email);
          if (!user) return null;

          const isValidPassword = await hashService.compare(
            parsedValues.password,
            user.password,
          );

          if (!isValidPassword) return null;
          return {
            name: user.name,
            id: user.id + '',
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile, tokens) {
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
  pages: { error: '/signin', signIn: '/signin', signOut: '/signin' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
