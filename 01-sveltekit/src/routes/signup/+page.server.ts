import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

export const actions: Actions = {
  signup: async ({ request }) => {
    const client = new PrismaClient()
    const data = await request.formData()
    const name = data.get('name')
    const password = data.get('password')

    if (typeof name !== 'string' || typeof password !== 'string' || !name || !password) {
      return fail(400, { message: '名前・パスワードは必須です。' })
    }

    const user = await client.user.findUnique({
      where: { name },
    })

    if (user) {
      return fail(400, { message: '既に存在するユーザーです。' })
    }

    await client.user.create({
      data: {
        name,
        password: await bcrypt.hash(password, 10),
        authToken: crypto.randomUUID(),
      },
    })

    throw redirect(303, '/signin')
  },
}
