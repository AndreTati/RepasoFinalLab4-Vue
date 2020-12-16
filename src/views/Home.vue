<template>
  <div class="home">
    <h1 class="titulo">Provincias de la República Argentina</h1>
    <div class="container" style="border: solid 1px black">
        <div class="row">
            <div class="col-3" style="text-align: center;" v-for="provincia in provincias" :key="provincia.abreviatura">
                <provincia :provinciaParam="provincia" style="margin-left:40px; margin-bottom:20px"></provincia>
            </div>
        </div>
     </div>
     <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Provincia from '@/components/Provincia.vue'

export default {
  name: 'Home',
  components: {
    "provincia":Provincia
  },
  data() {
    return {
      provincias: [],
      provinciasFiltradas: []
    }
  },
  async mounted () {
    await this.getProvincias();
    this.mostrar();
  },
  methods: {
    async getProvincias() {
      const res=await fetch('/lista_provincias.json')
      const resJson= await res.json()
      this.provincias=resJson;
    },
    mostrar(){
      const url=window.location.href;
      if(url.includes('/puerto')){
        for(let provincia of this.provincias){
          if(provincia.tienePuerto==='Y'){
            this.provinciasFiltradas.push(provincia);
          }
        }
        this.provincias=this.provinciasFiltradas;
      }else if(url.includes('/buscar/')){
        const parametro=this.$route.params.parametro
        for(let provincia of this.provincias){
          if(parseInt(provincia.superficie)>=parseInt(parametro)){
            this.provinciasFiltradas.push(provincia);
          }
        }
        this.provincias=this.provinciasFiltradas
      }
    }
  },
}
</script>
<style lang="scss">
  .titulo{
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: green;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  div .col-3{
    border-right: solid 1px black;
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-bottom: solid 1px black;
  }
</style>