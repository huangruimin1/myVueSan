<template>
  <div >
    <b class="greetings">

      {{ num }}
    </b>

    <button @click="add">hooks:点我加1</button>
    pinia里面的count:{{ addStroe1.count }}
    <button @click="addd">pinia:点我加1</button>
    pinia getters doubleCount {{ addStroe1.doubleCunt }}

    <button @click="addStroe1.changeCount(selectNum)">pinia actions:点我加改变count</button>
    <select name="a" id="1" v-model.number="selectNum">
      <option value="0">0</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </select>
  </div>
</template>
<script setup lang="ts">
  import useAdd from '@/hooks/useAdd';
  import { ref } from 'vue';
  const { num, add} = useAdd();

  import { useAddStore } from '@/store/addStroe';
  const addStroe1 = useAddStore();
  const addd = () => {
    addStroe1.count++;
  }

  let selectNum = ref(0);
  // const changeCount = addStroe1
  addStroe1.$subscribe((mutations,state)=>{
    console.log(mutations)
    console.log(state)

  })
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
