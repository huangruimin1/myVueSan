<template>
  <div >
    <div class="nav">
      <!-- <router-link class="item" :to="{}">首页</router-link>
      <router-link class="item" to="/details">详情</router-link>
      <router-link class="item" to="/about">关于</router-link> -->

      <router-link v-for="(item,index) in navItemArr" :key="index" class="item" :to="item.to">{{ item.txt }}</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type RouteLocationPathRaw, type RouteLocationNamedRaw } from 'vue-router'
interface navObj{
  to: string | RouteLocationPathRaw | RouteLocationNamedRaw,
  txt: string  
}
  defineProps({
    navItemArr: {
      type: Array<navObj>
    }
  }) 
</script>

<style scoped lang="less">
@c-active: #ccc;
  .nav{
    border-bottom: 1px solid #eee;
    line-height: 0;
    vertical-align: middle;
    text-align: center;
    font-size: 0;
    padding: 10px 0;
  }
  .nav .item{
    width: 100px;
    display: inline-block;
    border: 1px solid #eee;
    margin-right: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
    border-radius: 3px;
  }
  .nav .item:hover{
    background-color: #7bb18b;
    color: @c-active;
  }
</style>
