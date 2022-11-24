<template>
  <div class="home">
    <div class="count">
      {{count}}
    </div>
    <div class="buttons">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>

<script setup>
 import {ref} from 'vue'

 const count = ref(0)
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