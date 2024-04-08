import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useAddStore = defineStore('addStore',{
    state(){
        return {
            count: ref(0)
        }
    }
})