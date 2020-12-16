<template>
  <div class="home">
    <b-container style="margin-top:30px">
      <table style="width: 1000px;">
      <tr>
        <td><span><b>Artículo</b></span></td>
        <td><span><b>Código</b></span></td>
        <td><span><b>Fecha Vencimiento</b></span></td>
        <td><span><b>Promedio Precio</b></span></td>
        <td></td>
      </tr>
      <tr v-for="articulo in articulosJson" :key="articulo.foto">
        <td><span>{{articulo.articulo}}</span></td>
        <td><span>{{articulo.codigo}}</span></td>
        <td><span>{{articulo.fechaVencimiento}}</span></td>
        <td><span>{{getPromedio(articulo.preciosRelevados)}}</span></td>
        <td><span><a :href="'/detalle/'+getId(articulo)">VER DETALLE</a></span></td>
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
      articulosJson: [],
      articulosFiltrados:[]
    }
  },
  mounted () {
    this.getArticulos();
  },
  methods: {
    async getArticulos() {
      const res=await fetch('/articulos.json');
      const resJson=await res.json();
      this.articulosJson=resJson;
      const url=window.location.href;
      const parametro=this.$route.params.parametro;
      if(url.includes('/codigo/')){
        this.articulosFiltrados=this.articulosJson.filter(articulo=>{
          return articulo.codigo===parseInt(parametro);
        })
        this.articulosJson=this.articulosFiltrados
      }else if(url.includes('/denominacion/')){
        this.articulosFiltrados=this.articulosJson.filter(articulo=>{
          return articulo.articulo.toLowerCase().includes(parametro.toLowerCase());
        })
        this.articulosJson=this.articulosFiltrados
      }
    },
    getPromedio(precios){
      let suma=0;
      let promedio=0;
      for(let precio of precios){
        suma+=precio;
      }
      promedio=suma/precios.length;
      return promedio;
    },
    getId(articulo){
      return articulo.foto.replace(".jpg", "");
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