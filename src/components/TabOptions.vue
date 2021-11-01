<template>
    <div>
        <div class="choice">
            <button @click="setSelectedComponent('stored-resource')"
            >
                Stored Resource
            </button>
            <button @click="setSelectedComponent('add-resource')"
            :mode="buttonAdd">Add Resource</button>
        </div>

         <keep-alive>
            <component :is="selectedComponent"></component>  
         </keep-alive>
    </div>
</template>

<script>
    import StoredResource from './resources/StoredResource.vue';
    import AddResource from './resources/AddResource.vue'
export default {
     components: {
         StoredResource,
         AddResource
    },

   data() {
  return {
    selectedComponent: 'stored-resource',
     storedResources: [
            {
                id: new Date().toISOString(),
                title: 'Official Guide',
                description: 'Official vue documentation',
                link: 'https://www.vuejs.org'
            },
            {
                id: new Date().toISOString(),
                title: 'Google',
                description: 'All about google',
                link: 'https://www.google.com'
            }
            ] 
  };
},

provide() {
    return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.removeResource
    }
},

computed: {
     buttonStored() {
        return this.selectedComponent === 'stored-resources' ? 'selected' : null
    }, 

    buttonAdd() {
        return this.selectedComponent === 'add-resources' ? 'selected' : null
    }
},

methods: {
    setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
     },

    addResource(title, desc, url) {
        const newResource = {
            id: new Date().toISOString(),
            title: title,
            description: desc,
            link: url
        };
        this.storedResources.unshift(newResource);
        this.selectedComponent = 'stored-resource';
    },  

    removeResource(resId) {
        const resIndex = this.storedResources.findIndex(res => res.id === resId);
        this.storedResources.splice(resIndex, 1);
    }

}
}
</script>

<style scoped>
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
  background-color: transparent;
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

.selected {
  color: white;
  background-color: rebeccapurple;
}
</style>