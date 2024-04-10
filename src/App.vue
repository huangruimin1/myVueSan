

<template>
  <div>
    <Nav :navItemArr=navItemArr></Nav>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component :is="Component" :key="$route.name"  v-if="!$route.meta.keepAlive"/>
    </router-view> 
  </div>
</template>
<script setup lang="ts">
  // import HelloWorld from './components/HelloWorld.vue'
  import Nav from './components/Nav.vue'
  
  const navItemArr = [{
    to:'/',
    txt:'首页'
  },{
    to:'/details',
    txt:'详情'
  },{
    to:'/about',
    txt:'关于'
  }]
</script>
<style scoped>
  
</style>
