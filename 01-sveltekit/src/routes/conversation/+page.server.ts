import { PrismaClient } from '@prisma/client'
import { fail, redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
  conversation: async ({ request, locals }) => {
    const client = new PrismaClient()
    const data = await request.formData()
    const subject = data.get('subject')

    if (typeof subject !== 'string' || !subject) {
      return fail(400, { message: '会話のお題は必須入力です。' })
    }

    if (!locals.user) return fail(400, { message: '登録されていないユーザーです。' })

    await client.conversation.create({
      data: {
        userId: locals.user.id,
        subject,
      },
    })

    throw redirect(303, '/')
  },
}
