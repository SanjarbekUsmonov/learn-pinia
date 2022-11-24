import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore( {
  id: 'counter',
  state: ()=>({
    count: 0
  }),
  actions: {
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    },
  },
  getters:{
    addOrEven: function(state){
      if(state.count % 2 === 0)
        return 'juft'
        return 'toq'
    }
  }
})
