<template>
        <ul>
            <li v-for="res in resources" :key="res">
             <div> <h2>{{ res.title }} </h2><span>Delete</span></div>  
                <p>{{ res.description }}</p>
                <i>{{ res.link }}</i>
            </li>
        </ul>

</template>

<script>
export default {
    data() {
        return {
            resources: [
            {
                title: 'Official Guide',
                description: 'Official vue documentation',
                link: 'View Resource'
            },
            {
                title: 'Google',
                description: 'All about google',
                link: 'View Resource'
            }
            ] 
    };
    }
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

ul {
    list-style: none;
    padding-inline-start: 0;
}

div {
    display: flex;
    /* border: 1px solid green; */
}
span {
    /* text-align: center; */
    /* border: 1px solid red; */
    font-size: 0.8rem;
    margin-top: 15px;
    color: rebeccapurple;
    font-weight: bold;
}
</style>