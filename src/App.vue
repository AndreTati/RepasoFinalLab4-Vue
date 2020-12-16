<template>
  <div id="app">
    <div id="nav">
      <menu-de-opciones></menu-de-opciones>
    </div>
    <router-view/>
  </div>
</template>

<script>
import MenuDeOpciones from './components/MenuDeOpciones.vue';
export default {
  components: {
    "menu-de-opciones":MenuDeOpciones
  }
}
</script>

<style></style>
