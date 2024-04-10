<template>
  <div >
    首页
    <MyInput v-model:i-value.number.trim="inputValue"></MyInput>
    inputValue 的值变了吗 : {{ inputValue  }}
  </div>
</template>
<script setup lang="ts" name="Home">
  import { ref } from 'vue';
  import MyInput from '../components/MyInput.vue'

  const inputValue = ref('123');
</script>
<style scoped>
  
</style>
