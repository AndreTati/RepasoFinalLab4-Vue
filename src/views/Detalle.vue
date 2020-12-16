<template>
  <div class="about">
    <b-container>
      <table style="margin-top:30px">
      <tr>
        <td><img :src="'/img/'+articulo.foto" alt=""></td>
        <td><span class="nombre" style="margin-left:0px">{{articulo.articulo}}</span></td>
      </tr>
      <tr>
        <td>Código:</td>
        <td>{{articulo.codigo}}</td>
      </tr>
      <tr>
        <td>Rubro:</td>
        <td>{{articulo.rubro}}</td>
      </tr>
      <tr>
        <td>Es Promoción:</td>
        <td>
          <span v-if="articulo.esPromocion===true">Si</span>
          <span v-if="articulo.esPromocion===false">No</span>
        </td>
      </tr>
      <tr>
        <td>Fecha de Vencimiento</td>
        <td>{{articulo.fechaVencimiento}}</td>
      </tr>
      <tr>
        <td>Precios Relevados</td>
        <td>
          <li v-for="precio in articulo.preciosRelevados" :key="precio">{{precio}}</li>
        </td>
      </tr>
      <tr>
        <td>Promedio Precios Relevados</td>
        <td>{{getPromedio()}}</td>
      </tr>
    </table>
    </b-container><br><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articulo: []
    }
  },
  mounted () {
    this.getarticuloXID();
  },
  methods: {
    async getarticuloXID() {
      const res=await fetch('/articulos.json');
      const resJson= await res.json();
      const idParametro=this.$route.params.id;
      this.articulo=resJson.find((articulo)=>articulo.foto.replace(".jpg", "")===idParametro);
    },
    getPromedio(){
      let suma=0;
      let promedio=0;
      for(let precio of this.articulo.preciosRelevados){
        suma+=precio;
      }
      promedio=suma/this.articulo.preciosRelevados.length;
      return promedio;
    }
  },
}
</script>