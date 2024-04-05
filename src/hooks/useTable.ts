import { ref } from 'vue'



export default function(){
    let num = ref(0);

    const add = function(){
        num.value++;
    }
    
    return {num,add}
}