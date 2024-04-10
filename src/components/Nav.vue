<template>
  <div>
    <div class="nav">
      <!-- <router-link class="item" :to="{}">首页</router-link>
      <router-link class="item" to="/details">详情</router-link>
      <router-link class="item" to="/about">关于</router-link> -->

      <router-link v-for="(item, index) in navItemArr" :key="index" class="item" :to="item.to">{{ item.txt
        }}</router-link>

        <el-button @click="ok">点我给父组件传值</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { type RouteLocationPathRaw, type RouteLocationNamedRaw } from 'vue-router'
interface navObj {
  to: string | RouteLocationPathRaw | RouteLocationNamedRaw,
  txt: string
}
defineProps({
  navItemArr: {
    type: Array<navObj>
  }
})

let car = ref('大众')
const emit = defineEmits(['abc']);
const ok = () => {
  emit('abc',car.value)
}


</script>

<style scoped lang="less">
@c-active: #ccc;

.nav {
  border-bottom: 1px solid #eee;
  line-height: 0;
  vertical-align: middle;
  text-align: center;
  font-size: 0;
  padding: 10px 0;
}

.nav .item {
  width: 100px;
  display: inline-block;
  border: 1px solid #eee;
  margin-right: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: @c-a !important;
  border-radius: 3px;
}

.nav .item:hover {
  background-color: #7bb18b;
  color: @c-active;
}
</style>
