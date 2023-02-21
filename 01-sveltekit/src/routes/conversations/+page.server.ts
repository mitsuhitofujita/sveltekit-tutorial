import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const client = new PrismaClient()
  const conversations = await client.conversation.findMany({
    orderBy: { id: 'desc' },
  })
  return { conversations }
}
