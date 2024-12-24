<template>
  <router-view/>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<style>
body{
  background: linear-gradient(to right, #02030c, #030c15, #060f19, #030e15);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  height: 100%; 
  overflow-x: hidden;   
}

</style>