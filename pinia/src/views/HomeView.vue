<template>
  <div class="home">
    <div class="count">
      {{count}}
    </div>
    <div class="buttons">
      <button @click="dekrement">-</button>
      <button @click="incerement">+</button>
    </div>
    <hr>
    <div>
      This counteris: {{addOrEven}}
    </div>
  </div>
</template>

<script setup>
 import {computed, ref} from 'vue'
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