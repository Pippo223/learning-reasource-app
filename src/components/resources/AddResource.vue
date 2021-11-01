<template>   
    
    <base-card>
        <base-dialogue v-if="inputInvalid" title="Invalid Input" @close="confirmError">
            <template #default>
                <p>At least one input value is invalid</p>
                <p>Please check and fill all input fields</p>
            </template>
        
            <template #actions>
                <button @click="confirmError">Okay</button>
            </template>
        </base-dialogue>

        <form @submit.prevent="submitData">
       <div>        
            <h3>Title</h3>
            <input type="text" ref="titleInput">
        </div>

        <div>
            <h3>Description</h3>
            <textarea type="text" ref="descInput"/>
        </div>

        <div>        
            <h3>Link</h3>
            <input type="text" ref="linkInput">
        </div>
    
        <button type="submit">Add Resource</button>

    </form>
    
    </base-card>
    

</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputInvalid: false
    }
    },

    methods: {
        submitData() {
            const title = this.$refs.titleInput.value;
            const desc = this.$refs.descInput.value;
            const link = this.$refs.linkInput.value;

            if (title.trim() === '' || 
                desc.trim() === '' || 
                link.trim() == '') 
                {
                    this.inputInvalid = true;
                    return;
            }

            this.addResource(title, desc, link)
        },

        confirmError() {
            this.inputInvalid = false;
        }
        
    },
}
</script>

<style scoped>
form {
    width: 50%;
    margin: auto;
    border: 1px solid #ccc;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px #ccc;
    padding: 10px 20px;
}
input, textarea{
    width: 90%; 
    margin-left: 15px;
    border:2px solid rgba(0, 0, 0, 0.15);
    font-size: 1.2rem;
}

button {
    margin: 30px 0;
    border: 0;
    background-color: rebeccapurple;
    color: white;
    padding:10px;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    margin-left: 15px;
}

button:hover {
    cursor: pointer;
    color: orange
}

h3 {
    margin-block-end: 0;
    margin-left: 15px;
}

</style>