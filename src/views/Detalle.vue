<template>
  <div class="about">
    <b-container>
      <table style="width: 700px; margin-top:30px">
      <tr>
        <td class="td"><img :src="'/images/'+signo.imagen" alt=""></td>
        <td class="td" rowspan="2">
          <tr>
            <td><b>Elemento: </b></td>
            <td><span style="margin-left:50px">{{signo.elemento}}</span></td>
          </tr>
          <tr>
            <td><b>Símbolo: </b></td>
            <td><span style="margin-left:50px">{{signo.simbolo}}</span></td>
          </tr>
          <tr>
            <td><b>Meses:</b></td>
            <td>
              <span style="margin-left:50px">{{signo.meses[0]}} ({{getMeses(signo.meses[0])}})</span><br>
              <span style="margin-left:50px">{{signo.meses[1]}} ({{getMeses(signo.meses[1])}})</span>
            </td>
          </tr>
          <span><b>Descripción: </b></span><br>
          <span>{{signo.descripcion}}</span>
        </td>
      </tr>
      <tr>
        <td class="td">{{signo.signo}}</td>
      </tr>
    </table>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signo: []
    }
  },
  mounted () {
    this.getSignoXID();
  },
  methods: {
    async getSignoXID() {
      const idParametro=this.$route.params.id;
      const res=await fetch('/zodiaco.json');
      const resJson=await res.json();
      this.signo=resJson.find(sig=>sig.id===parseInt(idParametro));
      console.log(this.signo)
    },
    getMeses(mes){
      switch (mes){
        case 1:
          return "Enero";
        case 2:
          return "Febrero";
        case 3:
          return "Marzo";
        case 4:
          return "Abril";
        case 5:
          return "Mayo";
        case 6:
          return "Junio";
        case 7:
          return "Julio"
        case 8:
          return "Agosto";
        case 9:
          return "Septiembre";
        case 10:
          return "Octubre";
        case 11:
          return "Noviembre";
        case 12:
          return "Diciembre";
      }
    }
  },
}
</script>

<style lang="scss">
.td{
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
</style>