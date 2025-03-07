import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../../prisma/db';
import { loginActions } from '@/actions/loginActions';

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 3000,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Credenciais não fornecidas.');
        }

        try {
          const { email, password } = credentials;
          const user = await loginActions.login(email, password);

          return user;
        } catch (error: any) {
          throw new Error(error.message || 'Erro ao autenticar.');
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.email = token.email!;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
