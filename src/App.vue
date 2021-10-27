<template>
<div>
  <TheHeader/>
  <ResourceForm/>
</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ResourceForm from './components/ResourceForm.vue'

export default {
components: {
  TheHeader,
  ResourceForm
},


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body{
  margin: 0;
}
</style>
