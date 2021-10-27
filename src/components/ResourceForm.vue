<template>
    <form>
       <div>        
            <h3>Title</h3>
            <input type="text">
        </div>

        <div>
            <h3>Description</h3>
            <textarea type="text"/>
        </div>

       <div>        
            <h3>Link</h3>
            <input type="text">
        </div>
    
    <button>Add Resource</button>



    </form>
</template>

<style scoped>
form {
    width: 80%;
    margin: auto;
    border: 1px solid #ccc;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px #ccc;
    padding: 10px;
}
input, textarea{
    width: 90%; 
    border:2px solid rgba(0, 0, 0, 0.15);
}

</style>