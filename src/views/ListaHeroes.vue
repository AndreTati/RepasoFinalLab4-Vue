<template>
  <div class="home">
    <b-container>
      <b-row v-for="heroe in heroesJson" :key="heroe.id" style="margin-top:15px">
        <heroe :heroeParam="heroe"></heroe>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Heroe from '@/components/Heroe.vue';


export default {
  name: 'Home',
  components: {
    "heroe":Heroe
  },
  data(){
    return{
      heroesJson:[],
      heroesFiltrados:[]
    }
  },
  async mounted () {
    await this.getHeroes();
    this.mostrar();
  },
  methods: {
    async getHeroes() {
      const res=await fetch("/heroes.json");
      const resJson=await res.json();
      this.heroesJson=resJson
    },
    mostrar(){
      const url=window.location.href;
      if(url.includes("/dc")){
        for(let heroe of this.heroesJson){
          if(heroe.casa=="DC"){
            this.heroesFiltrados.push(heroe);
          }
        }
        this.heroesJson=this.heroesFiltrados;
      }else if(url.includes("/marvel")){
        for(let heroe of this.heroesJson){
          if(heroe.casa=="Marvel"){
            this.heroesFiltrados.push(heroe);
          }
        }
        this.heroesJson=this.heroesFiltrados;
      }else if(url.includes("/buscar/")){
        const parametro=this.$route.params.parametro;
        for(let heroe of this.heroesJson){
          if(heroe.nombre.toLowerCase().includes(parametro.toLowerCase())){
            this.heroesFiltrados.push(heroe);
          }
          if(heroe.bio.toLowerCase().includes(parametro)){
            this.heroesFiltrados.push(heroe);
          }
          for(let poder of heroe.poderes){
             if(poder.toLowerCase().includes(parametro)){
                this.heroesFiltrados.push(heroe);
              }
          }
        }
        this.heroesJson=this.heroesFiltrados
      }
    }
  },
}
</script>
