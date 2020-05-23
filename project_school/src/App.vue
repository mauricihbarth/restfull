<template>
  <div id="app">
    <Nav></Nav>
    <div class="marginPrincipal">
     <router-view :key="$route.fullpath"></router-view>
      <!--professor/-->      
      <!--alunos/-->
    </div>
  </div>
</template>

<script>
//import Alunos from './components/Aluno/Alunos.vue'
//import Professor from './components/Professor/Professor'
//import Sobre from './components/Sobre/Sobre.vue'
import Nav from './components/_nav/Nav.vue'

export default {
  name: "app",
  components: {
    //Alunos,
    //Sobre,
    //Professor,
    Nav
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

body {
  background-color: greenyellow;
  font-family: "Montserrat";
  display: grid;
  justify-items: center;
}

body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 100%;
}

.marginPrincipal {
  width: 50%;
  margin: auto;
}

table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
}

table thead th {
  background-color: hotpink;
  font-style: italic;
  padding: 10px 0px;
  font-size: 1.3em;
  text-align: center !important;
}

table tr td {
  padding: 20px;
  font-size: 1.3em;
  background-color: aquamarine;
  margin-bottom: 2px;
}

.colPequeno {
  width: 5%;
}

.btndanger {
  background-color: red;
}

.btn {
  padding: 10px 20px;
  cursor: pointer;
  border: 1 px solid black;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 3px solid black;
}

.btn:hover {
  text-shadow: 1px 1px 1px black;
  margin-top: 3px;
  border-bottom: 1px solid black;
}
</style>
