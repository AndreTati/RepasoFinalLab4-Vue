<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <label style="color: white; margin-right:20px">Legajo:</label>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="legajo"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" v-on:click="buscar('legajo')">Search</b-button>
        </b-nav-form>
        <b-nav-form>
            <label style="color: white; margin-right:20px; margin-left:30px">Nombre:</label>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="nombre"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" v-on:click="buscar('nombre')">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :href="'/detalle/'+idMejorAlumno" style="margin-left:50px">MEJOR ALUMNO</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            alumnosJson:[],
            legajo: "",
            nombre:"",
            idMejorAlumno:""
          }
        },
        mounted () {
          this.mejorAlumno();
        },
        methods: {
          buscar(tipo) {
            if(tipo==='legajo'){
              if(this.legajo===""){
                window.location.href="http://localhost:8080/"
              }else{
                window.location.href="/legajo/"+this.legajo
              }
              
            }else if(tipo==='nombre'){
              if(this.nombre===""){
                window.location.href="http://localhost:8080/"
              }else{
                window.location.href="/nombre/"+this.nombre
              }
              
            }
          },
          async mejorAlumno(){
            const res=await fetch('/alumnos.json');
            const resJson=await res.json();
            this.alumnosJson=resJson;
            let suma=0;
            let promedio=0;
            let promedioMayor=0;
            for(let alumno of this.alumnosJson){
              for(let nota of alumno.notas){
                suma+=nota;
              }
              promedio=suma/alumno.notas.length;
              if(promedio>promedioMayor){
                promedioMayor=promedio;
                this.idMejorAlumno=alumno.foto.replace(".jpg", "");
              }
              suma=0;
            }
            console.log(this.idMejorAlumno)
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>