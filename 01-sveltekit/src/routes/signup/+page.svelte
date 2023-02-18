<script lang="ts">
    import type { ActionData } from "./$types"
    export let form: ActionData
</script>
<h1>サインアップ</h1>
{#if form?.message}
  <p class="error">{form?.message}</p>
{/if}
<form method="post" action="?/signup">
    <label>名前：
        <input name="name" type="text" />
    </label>
    <label>パスワード：
        <input name="password" type="password" />
    </label>
    <button>登録する</button>
</form>
