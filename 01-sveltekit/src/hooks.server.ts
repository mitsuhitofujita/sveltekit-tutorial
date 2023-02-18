import { PrismaClient } from "@prisma/client";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const client = new PrismaClient();
    const session = event.cookies.get('session');
    
    if (!session) {
        return await  resolve(event)
    }

    const user = await client.user.findUnique({
        where: { authToken: session},
        select: {id: true, name: true}
    })

    if (user) {
        event.locals.user = {
            id: user.id,
            name: user.name
        }
    }
    return await resolve(event)
}