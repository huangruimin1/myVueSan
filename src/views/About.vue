<template>
  <div class="content">
    <div class="left">
        <!-- <router-link class="nav-item" :to="{name:'about1'}">关于1</router-link>
        <router-link class="nav-item" :to="{name:'about2'}">关于2</router-link>
        <router-link class="nav-item" :to="{name:'about3'}">关于3</router-link> -->
        <Nav :navItemArr=navItemArr></Nav>
    </div>
    <div class="right">
      {{ addStore.count }}
      <button @click="addStore.changeCount(1)">加1</button>

      <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
    </router-view> 
    </div>
  </div>
</template>
<script setup lang="ts" name="details">
  import Nav from '@/components/Nav.vue'
  import { useAddStore } from '@/store/addStroe';
  const addStore = useAddStore();

  const navItemArr = [{
    to:{name:'about1'},
    txt:'首页'
  },{
    to:{name:'about2'},
    txt:'详情'
  },{
    to:{name:'about3'},
    txt:'关于'
  }]
</script>
<style scoped>
  .content{
    height: calc(100vh - 63px);
  }
  .nav-item{
    display: block;
    border-bottom: 1px solid #ccc;
    left: 20px;
  }
  .left{
    width: 100px;
    border-right: 1px solid #eee;
    float: left;
    height: 100%;
  }
  .right{
    margin-left: 101px;
    height: 100%;
  }
</style>
