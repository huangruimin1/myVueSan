<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    {{ msg }}
  </div>
</template>

<style scoped>
  .greetings{
    font-size: 120px;
    font-weight: bold;
    color: red;
  }
</style>
