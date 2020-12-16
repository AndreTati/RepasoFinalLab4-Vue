<template>
  <div class="home">
    <b-container fluid style="width: 1000px; margin-top:30px">
      <table style="width: 1000px;">
      <tr>
        <td><span><b>Alumno</b></span></td>
        <td><span><b>Legajo</b></span></td>
        <td><span><b>Fecha Nacimiento</b></span></td>
        <td><span><b>Promedio Notas</b></span></td>
        <td></td>
      </tr>
      <tr v-for="alumno in alumnosJson" :key="alumno.foto">
        <td><span>{{alumno.alumno}}</span></td>
        <td><span>{{alumno.legajo}}</span></td>
        <td><span>{{alumno.fechaNacimiento}}</span></td>
        <td><span>{{getPromedio(alumno.notas)}}</span></td>
        <td><span><a :href="'/detalle/'+getId(alumno)">VER DETALLE</a></span></td>
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
  mounted () {
    this.getAlumnos();
  },
  data() {
    return {
      alumnosJson: [],
      alumnosFiltrados:[]
    }
  },
  methods: {
    async getAlumnos() {
      const res=await fetch('/alumnos.json');
      const resJson=await res.json();
      this.alumnosJson=resJson;
      const url=window.location.href;
      const parametro=this.$route.params.parametro;
      if(url.includes('/legajo/')){
        for(let alumno of this.alumnosJson){
          if(alumno.legajo===parseInt(parametro)){
            this.alumnosFiltrados.push(alumno)
          }
        }
        this.alumnosJson=this.alumnosFiltrados;
      }else if(url.includes('/nombre/')){
        for(let alumno of this.alumnosJson){
          if(alumno.alumno.toLowerCase().includes(parametro.toLowerCase())){
            this.alumnosFiltrados.push(alumno);
          }
        }
        this.alumnosJson=this.alumnosFiltrados
      }
    },
    getPromedio(notas){
      let suma=0;
      let promedio=0;
      for(let nota of notas){
        suma+=nota;
      }
      promedio=suma/notas.length;
      return promedio;
    },
    getId(alumno){
      return alumno.foto.replace(".jpg", "");
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
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
  span{
    margin-left: 20px;
  }
</style>