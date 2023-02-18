<script lang="ts">
    export let id : number;
    export let subject: string;
</script>

<div class="conversation">
    <div class="conversation-subject">
      <h2>{subject}</h2>
      <a href="conversations/{id}">話題の詳細を見る</a>
    </div>
</div>

<style> 
.conversation {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.conversation-subject {
  width: 100%;
  margin-left: 10px;
}

.conversation-subject a {
  display: inline-block;
  font-size: 14px;
  color: blue;
  text-decoration: none;
}
</style>
