<template>
  <div class="input">
    <!-- <input type="text" v-model="ivalue"> -->
    <input type="text" 
      :value="iValue" 
      @input="$emit('update:iValue',(<HTMLInputElement>$event.target).value)"
      >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  iValue:{
    type: String,
    default: '0',
    required: true
  },
  iValueModifiers:{
    default: () => {{}}
    
  }
})
// defineEmits(['update:ivalue'])
console.log(props.iValueModifiers);

</script>
<style scoped>
  
</style>