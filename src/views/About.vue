<template>
  <div class="about">
    <b-container>
      <table style="margin-top:30px">
      <tr>
        <td><img :src="'/img/'+alumno.foto" alt=""></td>
        <td><span class="nombre" style="margin-left:0px">{{alumno.alumno}}</span></td>
      </tr>
      <tr>
        <td>Legajo:</td>
        <td>{{alumno.legajo}}</td>
      </tr>
      <tr>
        <td>Carrera:</td>
        <td>{{alumno.carrera}}</td>
      </tr>
      <tr>
        <td>Esta activo:</td>
        <td>
          <span v-if="alumno.estaActivo===true">Si</span>
          <span v-if="alumno.estaActivo===false">No</span>
        </td>
      </tr>
      <tr>
        <td>Fecha de Nacimiento</td>
        <td>{{alumno.fechaNacimiento}}</td>
      </tr>
      <tr>
        <td>Notas</td>
        <td>
          <li v-for="nota in alumno.notas" :key="nota">{{nota}}</li>
        </td>
      </tr>
      <tr>
        <td>Promedio</td>
        <td>{{getPromedio()}}</td>
      </tr>
    </table>
    </b-container>
  </div>
</template>
<script>
export default {
  mounted () {
    this.getAlumnoXID();
  },data() {
    return {
      alumno: []
    }
  },
  methods: {
    async getAlumnoXID() {
      const parametroID=this.$route.params.id;
      const res=await fetch('/alumnos.json');
      const resJson=await res.json();
      this.alumno=resJson.find(alumno=>alumno.foto.replace(".jpg", "")===parametroID);
    },
    getPromedio(){
      let suma=0;
      let promedio=0;
      for(let nota of this.alumno.notas){
        suma+=nota;
      }
      promedio=suma/this.alumno.notas.length;
      return promedio;
    }
  },

}
</script>
<style lang="scss">
.nombre{
  color:green;
  font-size: 40px;
}
</style>