import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { User } from 'next-auth';
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_SECRET_ID || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          required: true,
        },
        password: {
          label: 'Password',
          type: 'password',
          required: true,
        },
      },
      async authorize(credentials) {
        const users = [{ email: '', passwoer: '' }];
        if (!credentials?.email || !credentials?.password) return null;

        const currentUser = users.find(
          (user) =>
            user.email == credentials.email &&
            user.password == credentials.password
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;
          return userWithoutPassword as User;
        }
        //тут можем отправить запрос на подтвержлждения пользователя на API и проверить креды
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
