<template>
    <li>
        <div> 
            <h2>{{ title }} </h2>
            <span @click="$emit('delete', id)">Delete</span>
        </div>  
            <p>{{ description }}</p>
            <p><a :href="link">View Resource</a></p>
    </li>
        

</template>

<script>
export default {
    //emits: ['delete'],
    
    props: ['title', 'description', 'link'],

}
</script> 

<style scoped>
li {
        width: 50%;
        margin: auto;
        margin-top: 20px;
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 2px 8px #ccc;
    }

h2 { 
    /* border: 1px solid blue; */
    margin-top: 10px;
    width: 85%;
    margin-block-end: 0;
}

div {
    display: flex;
}
span {
    font-size: 0.8rem;
    margin-top: 15px;
    color: rebeccapurple;
    font-weight: bold;
}
span:hover {
    cursor: pointer;
    color: orange;
}
</style>