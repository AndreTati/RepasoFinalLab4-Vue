<template>
  <div id="app">
    <menu-de-opciones></menu-de-opciones>
    <router-view/>
  </div>
</template>
<script>
import MenuDeOpciones from './components/MenuDeOpciones.vue'
export default {
  components:{
    "menu-de-opciones":MenuDeOpciones
  }
}
</script>
<style>
#a
    MenuDeOpcionespp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
