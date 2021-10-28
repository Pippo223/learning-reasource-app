<template>
<div>
  <TheHeader/>

<div class="choice">
  <button @click="setSelectedComponent('stored-resource')">Stored Resource</button>
  <button @click="setSelectedComponent('resource-form')">Add Resource</button>
</div>


  <keep-alive>
    <component :is="selectedComponent"></component>  
  </keep-alive>
</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import StoredResource from './components/StoredResource.vue';
import ResourceForm from './components/ResourceForm.vue'

export default {
components: {
  TheHeader,
  StoredResource,
  ResourceForm
},

data() {
  return {
    selectedComponent: 'stored-resource'
  };
},

methods: {
  setSelectedComponent(cmp) {
    this.selectedComponent = cmp;
  }
}



}
</script>

<style>
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

.choice {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px #ccc;
}

button{
  background-color: lavenderblush;
  padding: 16px;
  border: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: rebeccapurple;
}

button:hover {
  cursor: pointer;
  background-color: aliceblue;
}

button:focus {
  color: white;
  background-color: rebeccapurple;
}

</style>
