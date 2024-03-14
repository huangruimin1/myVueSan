<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div >
    <b class="greetings">

      {{ msg }}
    </b>
    <p>123456789</p>
    <table class="table">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
    </table>
  </div>
</template>

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
