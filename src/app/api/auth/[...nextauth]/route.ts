import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import createUser from '../../../actions/createUser';

const providers = [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || ''
    })
]
const handler = NextAuth({
    providers: providers,
    callbacks: {
        async signIn({ user, account }: any) {
            console.log("SignIn+++++++++++++", user, account);
            const email = user?.email;
            const image = user?.image ?? null;
            const name = user?.name ?? null;
            const provider = account?.provider ?? null;
            const providerAccountId = account?.providerAccountId ?? null;

            if (email) {
                const userData = {
                    email: email,
                    image: image,
                    name: name,
                    provider: provider,
                    providerAccountId: providerAccountId,
                }
                await createUser(userData);
            }
            return true
        },
    }
})

export { handler as GET, handler as POST }