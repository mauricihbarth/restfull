<template>
    <div class="barraTop">
    <nav class="marginPrincipal">
       <router-link to="/professores">Professores</router-link>
       <router-link to="/todosalunos">Alunos</router-link>
       <router-link to="/sobre">Sobre</router-link>    
    </nav>    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.barraTop{
    background-color: rgba(230, 230, 230, 0.685);
}

nav {
    padding: 20px 20px 20px 0px 
}
nav a{
    padding: 10px;
    text-decoration: none;
    background-color: white;
    border-radius: 4px;
    color: rgb(66, 50, 205);
    font-weight: bold;
    margin-right: 15px;
}

nav .router-link-active {
background-color: rgba(1, 1, 1, 0.418);
color: white;
}
</style>