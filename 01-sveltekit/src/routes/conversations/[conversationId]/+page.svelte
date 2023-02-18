<script lang="ts">
	import type { PageData } from '../[conversationId]/$types';
	type comment = {
		user: {
			name: string;
		};
		subject: string;
		createdAt: Date;
	};

	export let data: PageData;

	console.log(data);
	const conversationAuthor: string = data.conversation.user.name;
	const conversationSubject: string = data.conversation.subject;
	const conversationCreatedAt: Date = data.conversation.createdAt;
	const comments: comment[] = data.conversation.comments;
</script>

<div>
	<a href="/"> ＜ 一覧に戻る</a>
</div>

<h1>会話</h1>
<h2>{conversationSubject}</h2>
<p>作成者：{conversationAuthor} 作成日時：{conversationCreatedAt}</p>
<h2>コメント</h2>
{#if comments.length}
	{#each comments as comment}
		<p>名前：{comment.user.name}</p>
		<p>日時：{comment.createdAt}</p>
		<p>コメント：{comment.subject}</p>
		<br />
	{/each}
{:else}
	<p>コメントはありません</p>
{/if}
