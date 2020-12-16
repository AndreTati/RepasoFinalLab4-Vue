<template>
  <div id="app">
    <menu-superior-de-opciones></menu-superior-de-opciones>
    <router-view/>
  </div>
</template>
<script>
import MenuSuperiorDeOpciones from "./components/MenuSuperiorDeOpciones.vue"

export default {
  components: { MenuSuperiorDeOpciones },
  
}
</script>
<style>

</style>
