<template>
<div>
  <TheHeader/>
  <TabOptions/>

 
</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TabOptions from './components/TabOptions.vue'

export default {
components: {
  TheHeader,
  TabOptions
},

data() {
  return {
    // selectedComponent: 'stored-resource'
     
  };
},

methods: {
  // setSelectedComponent(cmp) {
  //   this.selectedComponent = cmp;
  // },

  // deleteResource(id) {
  //              this.resources = this.resources.filter(res => res.id !== id);
  //          }
}



}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

body{
  margin: 0;
}

</style>
