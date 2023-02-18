import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
    const client = new PrismaClient();
    const conversation = await client.conversation.findUnique({
        where: {
            id: Number(params.conversationId)
        },
        include: {
            comments: {
                orderBy: { id: 'desc' },
                select: {
                    payload: true,
                    createdAt: true,
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            user: {
                select: {
                    name: true
                }
            }
        },
    });

    if (!conversation) throw error(404, { message: "存在しないスレッドです。" })

    return { conversation }
}
