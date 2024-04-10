<template>
  <div>
    <Nav @abc="demo" :navItemArr=navItemArr></Nav>
    子组件传过来的值: {{ str }}
    <el-button @click="openMsg">我是 ElButton</el-button>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>

    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ElMessage } from 'element-plus';
import Nav from './components/Nav.vue'
import { ref } from 'vue';

const str = ref('');
const demo = (v:string) => {
  str.value = v;
}

const navItemArr = [{
  to: '/',
  txt: '首页'
}, {
  to: '/details',
  txt: '详情'
}, {
  to: '/about',
  txt: '关于'
}]

const openMsg = () => {
  ElMessage({
    message: 'This is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
<style scoped></style>
