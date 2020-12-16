<template>
  <div class="home">
    <h3 style="margin-top:50px; text-align:center" v-if="mostrarTitulo">Seleccione una región del combo de opciones disponibles en el menú</h3>
    <b-container fluid style="width: 900px; margin-top:30px">
      <table style="width: 900px;">
        <tr>
          <td><b>País</b></td>
          <td><b>Capital</b></td>
          <td><b>Subregión</b></td>
          <td><b>Población</b></td>
          <td><b>Superficie</b></td>
          <td></td>
        </tr>
        <tr v-for="pais in paisesJson" :key="pais.id">
          <td>{{pais.name}}</td>
          <td>{{pais.capital}}</td>
          <td>{{pais.subregion}}</td>
          <td>{{pais.population}}</td>
          <td>{{pais.area}}</td>
          <td><a :href="'/detalle/'+pais.alpha2Code">VER DETALLE</a></td>
        </tr>
    </table>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      paisesJson: [],
      mostrarTitulo: true,
      mostrarTabla: false
    }
  },
  mounted () {
    this.getPaises();
  },
  methods: {
    async getPaises() {
      const parametro=this.$route.params.parametro;
      if(parametro==='null'){
        this.mostrarTitulo=true;
        this.mostrarTabla=false;
      }else{
        this.mostrarTabla=true;
        this.mostrarTitulo=false;
        const res=await fetch('https://restcountries.eu/rest/v2/regionalbloc/'+parametro);
        const resJson=await res.json();
        this.paisesJson=resJson;
      }
    }
  },
}
</script>
<style lang="scss">
  table{
    border: 1px solid black;
  }
  td{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    text-align: center;
  }
</style>