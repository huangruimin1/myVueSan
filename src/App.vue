

<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Nav from './components/Nav.vue'
  let msg:string = '你太棒的！！！'

  const abc = ()=>{
    alert(0)
  }
</script>
<style scoped>
  
</style>
