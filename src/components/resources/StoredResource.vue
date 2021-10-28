<template>
    <ul>       
        <the-resource
            v-for="res in resources"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
       ></the-resource>
    </ul>

</template>

<script>
import TheResource from './TheResource.vue'

export default {
    inject: ['resources'],

    components: {
        TheResource
    },

}
</script>

<style scoped>
    ul {
        list-style: none;
        padding-inline-start: 0;
    }
</style>

