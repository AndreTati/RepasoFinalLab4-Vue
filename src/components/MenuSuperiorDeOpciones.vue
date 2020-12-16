<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-nav-form>
                <label for="" style="color:white; margin-right:15px">Código</label>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="codigo"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" v-on:click="buscar('codigo')">Search</b-button>
            </b-nav-form>
            <b-nav-form>
                <label for="" style="color:white; margin-right:15px; margin-left:15px">Denominación</label>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="denominacion"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" v-on:click="buscar('denominacion')">Search</b-button>
            </b-nav-form>
            <b-navbar-nav>
                <b-nav-item :href="'/detalle/'+idMasBarato" style=" margin-left:35px">MÁS BARATO</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                denominacion: "",
                codigo:"",
                articulosJson:[],
                idMasBarato:""
            }
        },
        mounted () {
            this.mejorPrecio();
        },
        methods: {
            buscar(tipo) {
            if(tipo==='codigo'){
              if(this.codigo===""){
                window.location.href="http://localhost:8080/"
              }else{
                window.location.href="/codigo/"+this.codigo
              }
              
            }else if(tipo==='denominacion'){
              if(this.denominacion===""){
                window.location.href="http://localhost:8080/"
              }else{
                window.location.href="/denominacion/"+this.denominacion
              }
              
            }
          },
          async mejorPrecio(){
            const res=await fetch('/articulos.json');
            const resJson=await res.json();
            this.articulosJson=resJson;
            let suma=0;
            let promedio=0;
            let promedioMenor=1000;
            for(let articulo of this.articulosJson){
              for(let precio of articulo.preciosRelevados){
                suma+=precio;
              }
              promedio=suma/articulo.preciosRelevados.length;
              if(promedio<promedioMenor){
                promedioMenor=promedio;
                this.idMasBarato=articulo.foto.replace(".jpg","");
              }
              suma=0;
            }
            
            console.log(this.idMasBarato)
          }
          
        },
    }
</script>

<style lang="scss" scoped>

</style>