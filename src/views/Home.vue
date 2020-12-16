<template>
  <div class="home">
    <b-container>
    <h1 class="titulo"><b>A TODO MOTOR AUTOS</b></h1>
    <p class="parrafo">
      Publicá sin registrarte y en un solo paso. ¿Apurado por vender?
      Recibí ofertas en efectivo de concesionarios registrados. ¡Súper!
    </p>
    <b-container>
    <p class="destacado"><span style="margin-left:10px">Destacados</span></p>
    <b-card-group>
        <div
          v-for="auto in autosJson"
          :key="auto.imagen"
          style="margin-top:15px"
        >
          <auto :autoParams="auto"></auto>
        </div>
      </b-card-group>
    </b-container>
    </b-container>
  </div>
</template>

<script>
import Auto from '@/components/Auto.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    "auto":Auto
  },
  mounted(){
    this.getAutos();
  },
  data() {
    return {
      autosJson: []
    }
  },
  methods: {
    async  getAutos() {
      const res=await fetch("/autos.json");
      const resJson=await res.json();
      
      for(let auto of resJson){
        if(auto.destacado==='Y'){
          this.autosJson.push(auto);
        }
      }
      console.log(this.autosJson)
    }
  },
}
</script>

<style lang="scss">
  .titulo{
    font-family: Verdana;
    font-size: 25px;
    color: red;
    margin-top: 15px;
  }
  .parrafo{
    font-family: Verdana;
    font-size: 15px;
  }
  .destacado{
    font-family: Verdana;
    font-size: 15px;
    background-color: orangered;
    color: white;
    width: 930px;
    border-radius: 5px;
  }
</style>