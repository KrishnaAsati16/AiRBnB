'use server';

import prisma from '../lib/dbConnect';

async function createUser(userData: any) {
    try {
        const userInfo = await prisma.user.upsert({
            where: { email: userData.email },
            update: {
                name: userData.name,
                image: userData.image,
                provider: userData.provider,
                providerAccountId: userData.providerAccountId,
            },
            create: userData,
        });
        return {
            message: 'Successfully saved',
            userInfo,
        };
    } catch (err: any) {
       return {
        message: "Failed to create user",
        err,
       };
    }
}

export default createUser;