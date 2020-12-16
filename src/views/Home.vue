<template>
  <div class="home">
    <div class="container" style="margin-top:30px">
      <div class="row">
        <div class="col-3" v-for="signo in signosJson" :key="signo.id">
          <elemento style="margin-top:15px" :signoParam="signo"></elemento>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Elemento from '../components/Elemento.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Elemento
  },
  mounted () {
    this.getSignos();
  },
  data() {
    return {
      signosJson: [],
      signosFiltrados:[]
    }
  },
  methods: {
    async getSignos() {
      
      const res=await fetch('/zodiaco.json');
      const resJson=await res.json();
      debugger
      this.signosJson=resJson
      const mesParametro=this.$route.params.mes;
      if(mesParametro!=='null'){
        for(let signo of this.signosJson){
          for(let mes of signo.meses){
            if(mes===parseInt(mesParametro)){
              this.signosFiltrados.push(signo);
            }
          }
        }
        this.signosJson=this.signosFiltrados
      }
    }
  },
}
</script>
