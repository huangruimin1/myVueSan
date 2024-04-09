import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useAddStore = defineStore('addStore',{
    state(){
        return {
            count: ref(0)
        }
    },
    getters:{
        doubleCunt(state){
            return state.count * 4
        }
    },
    actions:{
        changeCount(num:number){
          this.count += num;
        }
    }
})