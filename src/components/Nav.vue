<template>
  <div>
    <div class="nav">
      <!-- <router-link class="item" :to="{}">首页</router-link>
      <router-link class="item" to="/details">详情</router-link>
      <router-link class="item" to="/about">关于</router-link> -->

<<<<<<< HEAD
      <router-link v-for="(item, index) in navItemArr" :key="index" class="item" :to="item.to">{{ item.txt
        }}</router-link>

        <el-button @click="ok">点我给父组件传值</el-button>
=======
      <router-link v-for="(item,index) in navItemArr" :key="index" class="item" :to="item.to">{{ item.txt }}</router-link>
>>>>>>> 491e43be5e3aae3bcc439ccea6fe0451e6bba70e
    </div>
  </div>
</template>
<script setup lang="ts">
<<<<<<< HEAD
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


=======
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
>>>>>>> 491e43be5e3aae3bcc439ccea6fe0451e6bba70e
</script>

<style scoped lang="less">
@c-active: #ccc;
<<<<<<< HEAD

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
=======
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
>>>>>>> 491e43be5e3aae3bcc439ccea6fe0451e6bba70e
</style>
