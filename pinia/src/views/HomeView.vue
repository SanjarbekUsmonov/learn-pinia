<template>
  <div class="home">
    <div class="count">
      {{a.count}}
    </div>
    <div class="buttons">
      <button @click="a.decrement">-</button>
      <button @click="a.increment">+</button>
    </div>
    <hr>
    <div>
      This counteris: {{addOrEven}}
    </div>
  </div>
</template>

<script setup>
 import {computed, ref} from 'vue'
 import {useCounterStore} from '../stores/counter'

 const a = useCounterStore()
 const count = ref(0)

 const incerement = function (){
   count.value++
 }
 const dekrement = ()=>{
  count.value--
 }
 const addOrEven = computed(function(){
  if(count.value % 2 === 0)
  return "juft"
  return "qoldiqli"
 })


</script>

<style  scoped>
  .count{
    font-size: 60px;
    margin: 20px;
  }
  .buttons button{
    font-size: 40px;
    margin: 20px;
  }
</style>