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

h3 {
    margin-block-end: 0;
    margin-left: 15px;
}

</style>