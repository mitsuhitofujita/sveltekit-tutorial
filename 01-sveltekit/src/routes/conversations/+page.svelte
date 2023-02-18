<script lang="ts">
    import {goto} from "$app/navigation";
    import type { PageData } from "./$types";
    import ConversationItem from "./components/ConversationItem.svelte";
    export let data: PageData
</script>
<main>
   <h1>スレッド一覧</h1>
    <button type="button"  on:click={() => goto("/conversations")}>投稿する</button>
    {#each data.conversations as conversation }
       <ConversationItem id={conversation.id} subject={conversation.subject} />
    {/each}
</main>
