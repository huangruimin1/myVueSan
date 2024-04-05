

<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="msg" />
      <button @click="abc">ddddd</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  let msg:string = '你太棒的！！！'

  const abc = ()=>{
    alert(0)
  }
</script>
<style scoped>
  
</style>
