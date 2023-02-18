import { PrismaClient } from "@prisma/client";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    conversation : async ({request, locals}) => {
        const client = new PrismaClient();
        const data = await request.formData()
        const content = data.get("content");

        if (typeof content !== "string" || !content) {
            return fail(400, { message: "タイトルと内容は必須入力です。"})
        }

        if (!locals.user) return fail(400, {message: "登録されていないユーザーです。"})

        await client.conversation.create({
            data: {
                userId: locals.user.id,
                content
            }
        })

        throw redirect(303, '/')
    }
}
