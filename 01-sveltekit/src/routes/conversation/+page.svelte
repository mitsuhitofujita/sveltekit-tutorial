<script lang="ts">
  import type { ActionData } from '../conversation/$types'
  export let form: ActionData
</script>

<h1>スレッド投稿</h1>
{#if form?.message}
  {form.message}
{/if}
<form method="POST" action="?/conversation">
  <label
    >お題：
    <input name="subject" type="text" />
  </label>
  <button>投稿する</button>
</form>
