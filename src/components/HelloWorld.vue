<template>
  <div >
    <b class="greetings">

      {{ num }}
    </b>

    <button @click="add">hooks:点我加1</button>
    pinia里面的count:{{ addStroe1.count }}
    <button @click="addd">pinia:点我加1</button>
  </div>
</template>
<script setup lang="ts">
  import useAdd from '@/hooks/useAdd';
  const { num, add} = useAdd();

  import { useAddStore } from '@/store/addStroe';
  const addStroe1 = useAddStore();
  const addd = () => {
    addStroe1.count++;
  }

</script>
<style scoped>
  .greetings{
    font-size: 120px;
    font-weight: bold;
    color: red;
  }
  table{
    font-size: 18px;
    border: 1px solid #eee;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
  }
  tr{
    border: 1px solid #eee;
  }
  td{
    border: 1px solid #eee;
  }
</style>
