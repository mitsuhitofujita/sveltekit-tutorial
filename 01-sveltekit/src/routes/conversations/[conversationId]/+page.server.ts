import { PrismaClient } from '@prisma/client'
import { error, fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type { Actions } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const client = new PrismaClient()
  const conversation = await client.conversation.findUnique({
    where: {
      id: Number(params.conversationId),
    },
    include: {
      comments: {
        orderBy: { id: 'desc' },
        select: {
          payload: true,
          createdAt: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      },
      user: {
        select: {
          name: true,
        },
      },
    },
  })

  if (!conversation) throw error(404, { message: '存在しないスレッドです。' })

  return { conversation }
}

export const actions: Actions = {
  comment: async ({ request, locals, params }) => {
    const client = new PrismaClient()
    const data = await request.formData()
    const payload = data.get('payload')

    if (typeof payload != 'string' || !payload) {
      return fail(400, { message: 'コメントは必須入力です。' })
    }

    await client.comment.create({
      data: {
        userId: locals.user.id,
        conversationId: Number(params.conversationId),
        payload: payload,
      },
    })
  },
}
